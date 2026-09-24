"use client";
import { useEffect, useRef, type RefObject } from "react";

/** A volumetric field of document-shaped ribbons, projected from 3D coordinates.
    Scroll progress tightens the ribbons, turns the field toward the viewer, and
    gathers part of it into a six-petalled outline around the mark. The drift
    that remains is ambient: it never advances the story on its own.

    The hot loop allocates nothing and does not sort. Painting order comes from
    bucketing by depth, which is linear and visually identical at this density. */
export default function ArthaField({ progress }: { progress?: RefObject<number> }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas=ref.current, ctx=canvas?.getContext("2d");
    if(!canvas || !ctx) return;
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)");
    let width=0,height=0,frame=0,phase=0,visible=true,last=0,pointerX=0,pointerY=0,drawn=-1;

    const small=window.matchMedia("(max-width: 800px)").matches;
    const segments=small?76:120, strands=small?13:18, bands=3;
    const count=bands*segments*strands;
    const sx=new Float32Array(count), sy=new Float32Array(count), sz=new Float32Array(count);
    const st=new Float32Array(count), sband=new Uint8Array(count);
    const gx=new Float32Array(count), gy=new Float32Array(count), lattice=new Uint8Array(count);
    let i=0;
    for(let band=0;band<bands;band++) for(let s=0;s<segments;s++) for(let j=0;j<strands;j++){
      const t=s/segments*Math.PI*2, v=(j/(strands-1)-.5)*.65;
      const r=1.45+v*Math.cos(t*1.5+band), a=t+band*Math.PI*2/3;
      sx[i]=r*Math.cos(a); sy[i]=r*Math.sin(a); sz[i]=.58*Math.sin(t*2+band)+v*Math.sin(t*1.5+band);
      st[i]=t; sband[i]=band; i+=1;
    }
    /* A fixed, evenly spread subset resolves into a single outline around the
       mark: a circle with six petal-like swells (r = R + a·cos 6θ). Picking by
       stride keeps it identical across reloads and reverses, and because the
       outline is symmetric it can keep turning once it has formed. */
    const outline=small?200:330, stride=Math.max(1,Math.floor(count/outline));
    const R=0.98, petal=0.17;
    for(let k=0;k<outline;k+=1){
      const index=k*stride;
      if(index>=count) break;
      const theta=k/outline*Math.PI*2, r=R+petal*Math.cos(6*theta);
      lattice[index]=1;
      gx[index]=r*Math.cos(theta);
      gy[index]=r*Math.sin(theta);
    }

    const projX=new Float32Array(count), projY=new Float32Array(count), projD=new Float32Array(count);
    /* Points are bucketed by depth slab, band and quantised alpha, so the whole
       field paints in ~126 fills instead of one per particle. */
    const SLABS=7, LEVELS=9, BUCKETS=SLABS*2*LEVELS;
    const counts=new Int32Array(BUCKETS+1), cursor=new Int32Array(BUCKETS);
    const order=new Int32Array(count), bucket=new Uint16Array(count);
    const slabShade=new Float32Array(SLABS);
    for(let s=0;s<SLABS;s+=1){
      const shade=((-2.2+(s+.5)*(4.4/SLABS))+2)/4;
      slabShade[s]=shade<.15?.15:shade>1?1:shade;
    }
    const fills=new Array<string>(BUCKETS);
    for(let s=0;s<SLABS;s+=1) for(let band=0;band<2;band+=1) for(let level=0;level<LEVELS;level+=1){
      const l=slabShade[s], alpha=(level+.5)/LEVELS*1.5;
      fills[(s*2+band)*LEVELS+level]=band===1
        ? `rgba(245,${(155+l*45)|0},145,${alpha.toFixed(3)})`
        : `rgba(${(155+l*70)|0},${(135+l*65)|0},255,${alpha.toFixed(3)})`;
    }

    const draw=(p:number)=>{
      ctx.clearRect(0,0,width,height);
      const size=Math.min(width/4.7,height/4.8);
      const converge=1-.24*p, flatten=1-.4*p;
      const form=p<.55?0:Math.min(1,(p-.55)/.42), formed=form*form*(3-2*form);
      const ax=.72+pointerY*.15-p*.36, ay=-.3+pointerX*.2+p*.2;
      const ca=Math.cos(ax),sa=Math.sin(ax),cb=Math.cos(ay),sb=Math.sin(ay),cp=Math.cos(phase),sp=Math.sin(phase);
      counts.fill(0);
      const latticeGain=1+formed*.5, fieldFade=1-formed*.35;
      for(let k=0;k<count;k+=1){
        let bx=sx[k]*converge, by=sy[k]*converge, bz=sz[k]*flatten;
        if(formed>0 && lattice[k]){ bx+=(gx[k]-bx)*formed; by+=(gy[k]-by)*formed; bz-=bz*formed; }
        const x=bx*cp-by*sp, y=bx*sp+by*cp, yy=y*ca-bz*sa, z=y*sa+bz*ca;
        const xx=x*cb+z*sb, zz=-x*sb+z*cb, d=5/(5-zz);
        projX[k]=width/2+xx*size*d; projY[k]=height/2+yy*size*d; projD[k]=d;
        let slab=((zz+2.2)*(SLABS/4.4))|0;
        if(slab<0) slab=0; else if(slab>=SLABS) slab=SLABS-1;
        const shade=(zz+2)/4, l=shade<.15?.15:shade>1?1:shade;
        const pulse=.7+.3*Math.cos(st[k]*2-phase*10);
        let level=(l*pulse*(lattice[k]?latticeGain:fieldFade)/1.5*LEVELS)|0;
        if(level<0) level=0; else if(level>=LEVELS) level=LEVELS-1;
        const slot=(slab*2+(sband[k]===2?1:0))*LEVELS+level;
        bucket[k]=slot; counts[slot+1]+=1;
      }
      for(let s=0;s<BUCKETS;s+=1){ counts[s+1]+=counts[s]; cursor[s]=counts[s]; }
      for(let k=0;k<count;k+=1) order[cursor[bucket[k]]++]=k;

      const radius=width<500?.65:1;
      for(let s=0;s<BUCKETS;s+=1){
        const from=counts[s], to=counts[s+1];
        if(from===to) continue;
        ctx.fillStyle=fills[s];
        ctx.beginPath();
        for(let n=from;n<to;n+=1){
          const k=order[n], r=Math.max(.45,projD[k]*radius)+(lattice[k]?formed*.7:0);
          ctx.moveTo(projX[k]+r,projY[k]);
          ctx.arc(projX[k],projY[k],r,0,Math.PI*2);
        }
        ctx.fill();
      }
      drawn=p;
    };

    const resize=()=>{const r=canvas.getBoundingClientRect();width=r.width;height=r.height;const d=Math.min(devicePixelRatio||1,1.75);canvas.width=width*d;canvas.height=height*d;ctx.setTransform(d,0,0,d,0,0);drawn=-1;draw(progress?.current??0);};
    // Only record the pointer offsets; the animation tick picks them up on its
    // next frame. Drawing here would re-project every point at the pointer's
    // event rate on top of the 30fps tick.
    const move=(e:PointerEvent)=>{if(reduce.matches)return;const r=canvas.getBoundingClientRect();pointerX=(e.clientX-r.left)/width-.5;pointerY=(e.clientY-r.top)/height-.5;};
    const tick=(time:number)=>{
      const p=progress?.current??0;
      if(visible&&!document.hidden){
        if(!reduce.matches&&time-last>33){phase+=.0025;draw(p);last=time;}
        else if(Math.abs(p-drawn)>0.002) draw(p);
      }
      frame=requestAnimationFrame(tick);
    };
    const ro=new ResizeObserver(resize);ro.observe(canvas);
    const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;});io.observe(canvas);
    canvas.addEventListener("pointermove",move);resize();frame=requestAnimationFrame(tick);
    return()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();canvas.removeEventListener("pointermove",move);};
  },[progress]);
  return <canvas ref={ref} className="artha-field" role="img" aria-label="Three interwoven ribbons of violet and copper particles representing ArthaLM classification, extraction and party mapping"/>;
}

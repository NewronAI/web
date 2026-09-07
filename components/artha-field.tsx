"use client";
import { useEffect, useRef } from "react";

/** A volumetric field of document-shaped ribbons, projected from 3D coordinates. */
export default function ArthaField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas=ref.current, ctx=canvas?.getContext("2d");
    if(!canvas || !ctx) return;
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)");
    let width=0,height=0,frame=0,phase=0,visible=true,last=0,px=0,py=0;
    const points: {x:number;y:number;z:number;t:number;band:number}[]=[];
    for(let band=0;band<3;band++) for(let i=0;i<150;i++) for(let j=0;j<22;j++) {
      const t=i/150*Math.PI*2, v=(j/21-.5)*.65;
      const r=1.45+v*Math.cos(t*1.5+band);
      const a=t+band*Math.PI*2/3;
      points.push({x:r*Math.cos(a),y:r*Math.sin(a),z:.58*Math.sin(t*2+band)+v*Math.sin(t*1.5+band),t,band});
    }
    const draw=()=>{
      ctx.clearRect(0,0,width,height);
      const size=Math.min(width/4.7,height/4.8), ax=.72+py*.15, ay=-.3+px*.2;
      const ca=Math.cos(ax),sa=Math.sin(ax),cb=Math.cos(ay),sb=Math.sin(ay),cp=Math.cos(phase),sp=Math.sin(phase);
      const sorted=points.map(p=>{
        const x=p.x*cp-p.y*sp, y=p.x*sp+p.y*cp, yy=y*ca-p.z*sa, z=y*sa+p.z*ca;
        const xx=x*cb+z*sb, zz=-x*sb+z*cb, d=5/(5-zz);
        return {x:width/2+xx*size*d,y:height/2+yy*size*d,z:zz,d,band:p.band,t:p.t};
      }).sort((a,b)=>a.z-b.z);
      for(const p of sorted){
        const light=Math.max(.15,Math.min(1,(p.z+2)/4));
        const pulse=.7+.3*Math.cos(p.t*2-phase*10);
        ctx.fillStyle=p.band===2?`rgba(245,${Math.round(155+light*45)},145,${light*pulse})`:`rgba(${Math.round(155+light*70)},${Math.round(135+light*65)},255,${light*pulse})`;
        ctx.beginPath();ctx.arc(p.x,p.y,Math.max(.45,p.d*(width<500?.65:1)),0,Math.PI*2);ctx.fill();
      }
    };
    const resize=()=>{const r=canvas.getBoundingClientRect();width=r.width;height=r.height;const d=Math.min(devicePixelRatio||1,1.75);canvas.width=width*d;canvas.height=height*d;ctx.setTransform(d,0,0,d,0,0);draw();};
    // Only record the pointer offsets; the animation tick picks them up on its
    // next frame. Drawing here would re-project and re-sort every point at the
    // pointer's event rate on top of the 30fps tick.
    const move=(e:PointerEvent)=>{if(reduce.matches)return;const r=canvas.getBoundingClientRect();px=(e.clientX-r.left)/width-.5;py=(e.clientY-r.top)/height-.5;};
    const tick=(time:number)=>{if(visible&&!document.hidden&&!reduce.matches&&time-last>33){phase+=.0025;draw();last=time;}frame=requestAnimationFrame(tick);};
    const ro=new ResizeObserver(resize);ro.observe(canvas);
    const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;});io.observe(canvas);
    canvas.addEventListener("pointermove",move);resize();frame=requestAnimationFrame(tick);
    return()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();canvas.removeEventListener("pointermove",move);};
  },[]);
  return <canvas ref={ref} className="artha-field" role="img" aria-label="Three interwoven ribbons of violet and copper particles representing ArthaLM classification, extraction and party mapping"/>;
}

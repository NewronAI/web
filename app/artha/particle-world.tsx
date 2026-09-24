"use client";

import { useEffect, useRef, type RefObject } from "react";

type Vec = [number, number, number];
export const WORLD_STAGES = 8;
const TAU = Math.PI * 2;
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * (3 - 2 * t);
function random(seed: number) { const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453123; return x - Math.floor(x); }

/** Original, procedural geometry. Every particle retains its identity from
 * intake through deployment; the vertex shader interpolates between scenes. */
export function makeCloud(stage: number, count: number) {
  const data = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const a = random(i + 1), b = random(i + 11001), c = random(i + 27001);
    const angle = a * TAU, group = i % 6;
    let x = 0, y = 0, z = 0;
    if (stage === 0 || stage === 7) {
      // A luminous toroidal field with a hollow centre and satellite traces.
      const tube = b * TAU, radius = 1.55 + Math.cos(tube) * .25;
      x = Math.cos(angle) * radius; z = Math.sin(angle) * radius; y = Math.sin(tube) * .25;
      if (i % 5 === 0) { x *= 1.42; z *= 1.42; y = (c - .5) * .06; }
      if (stage === 7) { const oldY = y; y = z * .72; z = oldY; }
    } else if (stage === 1 || stage === 2) {
      // Document-shaped clouds: borders and printed rows, not filled rectangles.
      const col = i % 32, row = Math.floor(i / 32) % 40;
      let px = (col / 31 - .5) * .73, py = (row / 39 - .5) * 1.03;
      if (i % 4 === 0) { px = (i % 8 < 4 ? -.365 : .365); py = (b - .5) * 1.03; }
      if (i % 7 === 0) { py = (i % 14 < 7 ? -.515 : .515); px = (a - .5) * .73; }
      if (stage === 1) {
        const rotation = (group - 2.5) * .31;
        x = Math.cos(rotation) * px - Math.sin(rotation) * py + Math.cos(group * 1.9) * 1.18;
        y = Math.sin(rotation) * px + Math.cos(rotation) * py + Math.sin(group * 2.2) * .85;
        z = (group - 2.5) * .35 + (c - .5) * .04;
      } else {
        x = px + ((group % 3) - 1) * 1.23;
        y = py + (group < 3 ? .48 : -.48) * .65;
        z = (group < 3 ? -.22 : .22);
      }
    } else if (stage === 3) {
      // The pages become aligned data rows; bright points cross the gap.
      if (i % 3 === 0) {
        x = -1.3 + (a - .5) * .85; y = (Math.floor(b * 24) / 23 - .5) * 1.65; z = -.1;
      } else if (i % 7 === 0) {
        x = -1 + a * 2.0; y = (group - 2.5) * .26; z = Math.sin(a * Math.PI) * .35;
      } else {
        x = .35 + a * 1.05; y = (group - 2.5) * .3 + (b - .5) * .12; z = (c - .5) * .13;
      }
    } else if (stage === 4) {
      if (i % 3) {
        const phi = Math.acos(2 * b - 1), r = .87 + .065 * Math.sin(angle * 12);
        x = r * Math.sin(phi) * Math.cos(angle); y = r * Math.cos(phi); z = r * Math.sin(phi) * Math.sin(angle);
      } else {
        const radius = 1.65 + (b - .5) * .24;
        x = Math.cos(angle) * radius; z = Math.sin(angle) * radius; y = (c - .5) * .08;
      }
    } else if (stage === 5) {
      if (i % 4 === 0) {
        const phi = Math.acos(2 * b - 1);
        x = .55 * Math.sin(phi) * Math.cos(angle); y = .55 * Math.cos(phi); z = .55 * Math.sin(phi) * Math.sin(angle);
      } else {
        const branch = i % 3, t = branch * TAU / 3 + .2;
        x = Math.cos(t) * 1.6 + (a - .5) * .65; z = Math.sin(t) * 1.6 + (c - .5) * .65; y = (b - .5) * .65;
        // Points collect on the six faces of each application cube.
        if (i % 3 === 0) x = Math.cos(t) * 1.6 + (a < .5 ? -.325 : .325);
        if (i % 3 === 1) y = b < .5 ? -.325 : .325;
        if (i % 3 === 2) z = Math.sin(t) * 1.6 + (c < .5 ? -.325 : .325);
      }
    } else {
      if (i % 3 === 0) {
        const face = i % 6, u = (a - .5) * 2.8, v = (b - .5) * 2.8;
        x = face < 2 ? (face ? 1.4 : -1.4) : u;
        y = face >= 2 && face < 4 ? (face === 3 ? 1.4 : -1.4) : v;
        z = face >= 4 ? (face === 5 ? 1.4 : -1.4) : (c - .5) * 2.8;
      } else {
        const phi = Math.acos(2 * b - 1), r = .72;
        x = r * Math.sin(phi) * Math.cos(angle); y = r * Math.cos(phi); z = r * Math.sin(phi) * Math.sin(angle);
      }
    }
    data.set([x, y, z], i * 3);
  }
  return data;
}

function makeLines(stage: number) {
  const values: number[] = [];
  const edge = (a: Vec, b: Vec) => values.push(...a, ...b);
  const circle = (r: number, y: number, segments = 96) => {
    for (let i = 0; i < segments; i++) {
      const a = i / segments * TAU, b = (i + 1) / segments * TAU;
      edge([Math.cos(a) * r, y, Math.sin(a) * r], [Math.cos(b) * r, y, Math.sin(b) * r]);
    }
  };
  const cube = (cx: number, cy: number, cz: number, size: number) => {
    const points: Vec[] = Array.from({ length: 8 }, (_, i) => [cx + (i & 1 ? size : -size), cy + (i & 2 ? size : -size), cz + (i & 4 ? size : -size)]);
    for (let i = 0; i < 8; i++) for (const bit of [1, 2, 4]) if (!(i & bit)) edge(points[i], points[i | bit]);
  };
  if ([0, 4, 7].includes(stage)) {
    for (let j = 0; j < 5; j++) circle(1.3 + j * .145, (j - 2) * .025);
    for (let j = 0; j < 24; j++) { const a = j * TAU / 24; edge([Math.cos(a) * .95, 0, Math.sin(a) * .95], [Math.cos(a) * 2.15, -.18, Math.sin(a) * 2.15]); }
  } else if (stage === 1 || stage === 2) {
    for (let j = 0; j < 6; j++) {
      const cx = stage === 1 ? Math.cos(j * 1.9) * 1.18 : ((j % 3) - 1) * 1.23;
      const cy = stage === 1 ? Math.sin(j * 2.2) * .85 : (j < 3 ? .48 : -.48) * .65;
      const z = stage === 1 ? (j - 2.5) * .35 : j < 3 ? -.22 : .22;
      edge([cx - .365, cy - .515, z], [cx + .365, cy - .515, z]);
      edge([cx + .365, cy - .515, z], [cx + .365, cy + .515, z]);
      edge([cx + .365, cy + .515, z], [cx - .365, cy + .515, z]);
      edge([cx - .365, cy + .515, z], [cx - .365, cy - .515, z]);
      if (stage === 2) edge([cx, cy, z], [cx, -.9, .6]);
    }
  } else if (stage === 3) {
    for (let j = 0; j < 6; j++) {
      const y = (j - 2.5) * .3;
      edge([-1, y, -.1], [.35, y, 0]); edge([.35, y - .1, 0], [1.4, y - .1, 0]);
    }
  } else if (stage === 5) {
    circle(.7, 0);
    for (let j = 0; j < 3; j++) {
      const a = j * TAU / 3 + .2, x = Math.cos(a) * 1.6, z = Math.sin(a) * 1.6;
      cube(x, 0, z, .34);
      for (let k = 0; k < 6; k++) edge([0, (k - 2.5) * .025, 0], [x, (k - 2.5) * .025, z]);
    }
  } else {
    cube(0, 0, 0, 1.4); cube(0, 0, 0, 1.46); circle(.9, -.9);
    for (let j = 0; j < 8; j++) edge([0, 0, 0], [j & 1 ? 1.4 : -1.4, j & 2 ? 1.4 : -1.4, j & 4 ? 1.4 : -1.4]);
  }
  return new Float32Array(values);
}

const vertexSource = `
attribute vec3 aFrom;
attribute vec3 aTo;
attribute float aSeed;
uniform float uMorph;
uniform vec2 uAngle;
uniform vec2 uCentre;
uniform float uAspect;
uniform float uScale;
uniform float uPixel;
uniform float uTime;
uniform float uMotion;
varying float vDepth;
varying float vSeed;
void main(){
  vec3 p=mix(aFrom,aTo,uMorph);
  float drift=sin(uTime*.34+aSeed*27.)*.009*uMotion;
  p.y+=drift;
  float ca=cos(uAngle.x),sa=sin(uAngle.x),cb=cos(uAngle.y),sb=sin(uAngle.y);
  p=vec3(p.x*ca+p.z*sa,p.y,-p.x*sa+p.z*ca);
  p=vec3(p.x,p.y*cb-p.z*sb,p.y*sb+p.z*cb);
  float perspective=4.8/(4.8-p.z);
  gl_Position=vec4(p.x*perspective*uScale/uAspect+uCentre.x,p.y*perspective*uScale+uCentre.y,0.,1.);
  gl_PointSize=clamp((1.1+aSeed*.8)*perspective*uPixel,1.,4.*uPixel);
  vDepth=clamp((p.z+2.7)/5.4,.12,1.);vSeed=aSeed;
}`;
const fragmentSource = `
precision mediump float;
uniform float uPoints;
uniform float uAlpha;
uniform float uTime;
uniform float uMotion;
varying float vDepth;
varying float vSeed;
void main(){
  float edge=1.;
  if(uPoints>.5){float r=length(gl_PointCoord-.5);if(r>.5)discard;edge=1.-smoothstep(.15,.5,r);}
  vec3 violet=vec3(.62,.49,.97),warm=vec3(.96,.72,.48),white=vec3(.84,.87,1.);
  vec3 color=mix(violet,white,step(.35,vSeed));color=mix(color,warm,step(.82,vSeed));
  float pulse=.8+.2*sin(vSeed*120.-uTime*1.8*uMotion);
  gl_FragColor=vec4(color,edge*(.16+vDepth*.73)*uAlpha*pulse);
}`;

export default function ParticleWorld({ progress, reduced, onUnavailable }: { progress: RefObject<number>; reduced: boolean; onUnavailable: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedRef = useRef(reduced);
  reducedRef.current = reduced;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: false, antialias: false, powerPreference: "low-power" });
    if (!gl) { onUnavailable(); return; }
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!; gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); throw new Error("Particle shader failed"); }
      return shader;
    };
    let program: WebGLProgram, vertex: WebGLShader, fragment: WebGLShader;
    try {
      vertex = compile(gl.VERTEX_SHADER, vertexSource); fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
      program = gl.createProgram()!; gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("Particle program failed");
    } catch { onUnavailable(); return; }
    gl.useProgram(program); gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE); gl.clearColor(.014, .015, .024, 1);
    const count = window.innerWidth < 700 ? 4200 : 9000;
    const clouds = Array.from({ length: WORLD_STAGES }, (_, stage) => makeCloud(stage, count));
    const lines = Array.from({ length: WORLD_STAGES }, (_, stage) => makeLines(stage));
    const seeds = Float32Array.from({ length: count }, (_, i) => random(i + 7301));
    const fromBuffer = gl.createBuffer(), toBuffer = gl.createBuffer(), seedBuffer = gl.createBuffer();
    const fromAttribute = gl.getAttribLocation(program, "aFrom"), toAttribute = gl.getAttribLocation(program, "aTo"), seedAttribute = gl.getAttribLocation(program, "aSeed");
    const uniforms = Object.fromEntries(["uMorph", "uAngle", "uCentre", "uAspect", "uScale", "uPixel", "uTime", "uMotion", "uPoints", "uAlpha"].map(name => [name, gl.getUniformLocation(program, name)]));
    for (const attribute of [fromAttribute, toAttribute, seedAttribute]) gl.enableVertexAttribArray(attribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, seedBuffer); gl.bufferData(gl.ARRAY_BUFFER, seeds, gl.STATIC_DRAW); gl.vertexAttribPointer(seedAttribute, 1, gl.FLOAT, false, 0, 0);
    const upload = (buffer: WebGLBuffer | null, attribute: number, data: Float32Array) => { gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW); gl.vertexAttribPointer(attribute, 3, gl.FLOAT, false, 0, 0); };
    let frame = 0, last = 0, visible = true, dirty = true, lastProgress = -1, width = 0, height = 0, pixel = 1;
    const resize = () => {
      width = canvas.clientWidth; height = canvas.clientHeight; pixel = Math.min(devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(width * pixel); canvas.height = Math.round(height * pixel); gl.viewport(0, 0, canvas.width, canvas.height); dirty = true;
    };
    const ro = new ResizeObserver(resize); ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; dirty = true; }); io.observe(canvas);
    const cameras = [[.05,.84],[.3,.16],[-.2,.16],[.08,.05],[.6,.62],[1.25,.67],[.7,.4],[.05,.14]];
    const draw = (now: number) => {
      frame = requestAnimationFrame(draw);
      const p = Math.max(0, Math.min(WORLD_STAGES - 1, progress.current));
      if (!visible || document.hidden || !width || !height || (now - last < 32 && !dirty)) return;
      if (reducedRef.current && !dirty && Math.abs(p - lastProgress) < .0001) return;
      last = now; lastProgress = p; dirty = false;
      const stage = Math.min(WORLD_STAGES - 1, Math.floor(p)), next = Math.min(WORLD_STAGES - 1, stage + 1);
      const fraction = p - stage;
      // Hold the finished object for the first half of a chapter, then transform.
      const morph = smooth(Math.max(0, Math.min(1, (fraction - .45) / .55)));
      const mobile = width < 700;
      const centres = mobile ? [[0,-.3],[0,-.3],[0,-.3],[0,-.3],[0,-.3],[0,-.3],[0,-.3],[0,-.15]] : [[0,-.3],[.42,-.03],[.42,-.03],[.42,-.03],[0,-.3],[.42,-.03],[.42,-.03],[0,-.14]];
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uniforms.uMorph, morph); gl.uniform2f(uniforms.uAngle, mix(cameras[stage][0], cameras[next][0], morph), mix(cameras[stage][1], cameras[next][1], morph));
      gl.uniform2f(uniforms.uCentre, mix(centres[stage][0], centres[next][0], morph), mix(centres[stage][1], centres[next][1], morph));
      gl.uniform1f(uniforms.uAspect, width / height); gl.uniform1f(uniforms.uScale, mobile ? .26 : .39); gl.uniform1f(uniforms.uPixel, pixel);
      gl.uniform1f(uniforms.uTime, now / 1000); gl.uniform1f(uniforms.uMotion, reducedRef.current ? 0 : 1);
      upload(fromBuffer, fromAttribute, clouds[stage]); upload(toBuffer, toAttribute, clouds[next]);
      gl.uniform1f(uniforms.uPoints, 1); gl.uniform1f(uniforms.uAlpha, 1); gl.drawArrays(gl.POINTS, 0, count);
      // Cross-dissolve wires while the particles themselves move continuously.
      gl.uniform1f(uniforms.uPoints, 0); gl.uniform1f(uniforms.uMorph, 0);
      for (const [index, alpha] of [[stage, 1 - morph], [next, morph]]) {
        if (alpha <= .001) continue;
        upload(fromBuffer, fromAttribute, lines[index]); upload(toBuffer, toAttribute, lines[index]);
        gl.uniform1f(uniforms.uAlpha, alpha * .24); gl.drawArrays(gl.LINES, 0, lines[index].length / 3);
      }
    };
    const lost = (event: Event) => { event.preventDefault(); cancelAnimationFrame(frame); onUnavailable(); };
    canvas.addEventListener("webglcontextlost", lost);
    resize(); frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); ro.disconnect(); io.disconnect(); canvas.removeEventListener("webglcontextlost", lost); gl.deleteBuffer(fromBuffer); gl.deleteBuffer(toBuffer); gl.deleteBuffer(seedBuffer); gl.deleteProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment); };
  }, [progress, onUnavailable]);
  return <canvas ref={canvasRef} aria-hidden="true" style={{ width: "100%", height: "100%", display: "block" }} />;
}

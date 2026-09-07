"use client";
import { type CSSProperties } from "react";
export type SceneKind = "documents" | "shield" | "network" | "layers" | "signal";
/** CSS perspective scenes: crisp at every resolution, with no model downloads. */
export default function SpatialScene({ kind, label, caption }: { kind: SceneKind; label: string; caption: string }) {
  return <div className={`spatial-scene scene-${kind}`}>
    <div className="spatial-grid" aria-hidden="true" /><div className="spatial-glow" aria-hidden="true" />
    <div className="spatial-label"><i />{label}</div>
    <div className="spatial-object" aria-hidden="true">
      {kind === "documents" && <div className="spatial-docs">{[0,1,2].map(i => <div className="spatial-doc" key={i} style={{ "--i": i } as CSSProperties}><span className="spatial-doc-mark">{["▤", "⌘", "✳"][i]}</span><div className="spatial-doc-lines"><i /><i /><i /><i /></div><div className="spatial-chart">{[30,50,40,75,95].map((v,j) => <b key={j} style={{height:v + "%"}} />)}</div><span className="spatial-doc-index">0{i+1} / NEWRON</span></div>)}</div>}
      {kind === "shield" && <div className="spatial-security"><div className="spatial-ring" /><div className="spatial-ring ring-two" /><div className="spatial-shield"><svg viewBox="0 0 180 210" fill="none"><path d="M90 12 162 40v64c0 47-43 78-72 94-29-16-72-47-72-94V40L90 12Z" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeWidth="2"/><path d="m59 103 22 22 43-49" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div>}
      {kind === "network" && <div className="spatial-network"><div className="spatial-network-orbit" /><div className="spatial-network-orbit second" /><div className="spatial-sphere">✳</div>{Array.from({length:8},(_,i) => <div className="spatial-node" key={i} style={{"--i":i} as CSSProperties}><i /></div>)}</div>}
      {kind === "layers" && <div className="spatial-layers">{[0,1,2,3,4].map(i => <div className="spatial-layer" key={i} style={{"--i":i} as CSSProperties}>{i===4 && <span>n<span>↗</span></span>}</div>)}</div>}
      {kind === "signal" && <div className="spatial-signal">{Array.from({length:17},(_,i) => <div key={i} style={{"--i":i,"--size":Math.max(14,40+Math.sin(i*.75)*30+Math.sin(i*.3)*70)} as CSSProperties} />)}<span className="spatial-signal-base" /></div>}
    </div>
    <div className="spatial-caption">{caption}</div>
  </div>;
}

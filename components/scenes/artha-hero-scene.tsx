"use client";
import { useRef, type CSSProperties } from "react";
import ScrollScene from "../motion/scroll-scene";
import ArthaField from "../artha-field";
import SceneLayer from "../motion/scene-layer";
import type { CueMap } from "../motion/scene-types";
import { BOOKING_URL } from "@/lib/route";

/* Fragmented information becoming ArthaLM. Loose pages sit on three depth
   planes; scrolling sends them down the three processing paths, tightens the
   ribbons behind them, and resolves part of the field into structured rows. */

const cues: CueMap = {
  gather: [0, 0.44],
  classify: [0.16, 0.34],
  extract: [0.38, 0.56],
  map: [0.58, 0.76],
  fields: [0.56, 0.9],
  settle: [0.82, 1],
};

/** Each fragment starts on a depth plane and travels one of the three paths. */
const fragments = [
  { label: "combined_scan.pdf", x: 6, y: 14, depth: 0.9, tx: 26, ty: 30, rot: -8, path: 0 },
  { label: "camera_capture.jpg", x: 68, y: 8, depth: 0.5, tx: -16, ty: 34, rot: 6, path: 0 },
  { label: "itr_2026.pdf", x: 0, y: 58, depth: 0.65, tx: 32, ty: -12, rot: 5, path: 1 },
  { label: "gst_returns.xlsx", x: 74, y: 62, depth: 1, tx: -24, ty: -14, rot: -7, path: 1 },
  { label: "sale_deed_scan", x: 34, y: 84, depth: 0.35, tx: 4, ty: -34, rot: 3, path: 2 },
  { label: "aadhaar_front.jpg", x: 50, y: 0, depth: 0.75, tx: -6, ty: 38, rot: -4, path: 2 },
];

const rows = [
  ["Average balance", "₹ 8,41,905"],
  ["Entity", "Iyer Traders"],
  ["Collateral", "Sale deed · verified"],
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function ArthaHeroScene() {
  const progress = useRef(0);
  return <ScrollScene className="scene-hero" travel="155svh" cues={cues} labelledBy="hero-heading"
    onProgress={value => { progress.current = value; }}>
    {() => <div className="artha-hero">
      <div className="artha-hero-grid" aria-hidden="true" />
      <div className="artha-hero-copy">
        <div className="n-eyebrow"><i />APPLIED AI FOR REGULATED INDUSTRIES</div>
        <h1 id="hero-heading">ArthaLM<span>The model of choice for<br />BFSI &amp; regulated industries.</span></h1>
        <p>From fragmented data to actionable frontier intelligence which you can self host.</p>
        <div className="n-actions">
          <a className="n-button" href="#demo">See intelligence in action <Arrow /></a>
          <a className="n-text-link" href={BOOKING_URL}>Evaluate ArthaLM <Arrow /></a>
        </div>
        <div className="artha-hero-domains">BANKS &amp; NBFCS <span>/</span> INSURANCE <span>/</span> PUBLIC SECTOR</div>
      </div>

      <div className="artha-hero-art">
        <ArthaField progress={progress} />
        <SceneLayer className="hero-fragments" depth={0.6} hidden>
          {fragments.map(fragment => <span key={fragment.label} className="hero-fragment" data-path={fragment.path}
            style={{ "--x": `${fragment.x}%`, "--y": `${fragment.y}%`, "--tx": `${fragment.tx}%`, "--ty": `${fragment.ty}%`, "--rot": fragment.rot, "--d": fragment.depth } as CSSProperties}>
            <i /><i /><i />{fragment.label}
          </span>)}
        </SceneLayer>
        <div className="artha-art-name"><span>अर्थ</span><small>FINANCE / MEANING / PURPOSE</small></div>
        <div className="hero-fields" aria-hidden="true">
          {rows.map(([key, value], i) => <span key={key} style={{ "--i": i } as CSSProperties}><small>{key}</small><b>{value}</b></span>)}
        </div>
        <span className="artha-signal signal-classify">01 / CLASSIFY</span>
        <span className="artha-signal signal-extract">02 / EXTRACT</span>
        <span className="artha-signal signal-map">03 / MAP</span>
      </div>

      <div className="artha-hero-footer">
        <span>BUILT BY NEWRON. BUILT FOR YOUR WORLD.</span>
        <a href="#artha">ENTER THE INTELLIGENCE <span aria-hidden="true">↓</span></a>
      </div>
    </div>}
  </ScrollScene>;
}

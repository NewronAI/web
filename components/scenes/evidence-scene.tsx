"use client";
import ScrollScene from "../motion/scroll-scene";
import type { CueMap } from "../motion/scene-types";

/* A short section, deliberately. The only motion is the review window closing
   from three weeks to forty minutes; the quotation never moves. */

const cues: CueMap = {
  contract: [0.1, 0.62],
  land: [0.5, 0.82],
};

export default function EvidenceScene() {
  return <ScrollScene id="customers" className="scene-evidence" travel="auto" mode="cross" span={0.55} cues={cues} labelledBy="evidence-title">
    {() => <div className="scene-inner customer-evidence-inner">
      <div className="n-eyebrow" id="evidence-title">07 / REAL WORK. REAL IMPACT.</div>
      <div className="customer-story">
        <div className="customer-story-number">
          <span>ADITYA BIRLA CAPITAL</span>
          <div className="evidence-window" aria-hidden="true"><i /></div>
          <strong>3 weeks</strong>
          <i aria-hidden="true">↓</i>
          <strong>40 minutes</strong>
          <small>From manual review to CAM quality control</small>
        </div>
        <figure>
          <blockquote>“Newron’s CAM engine replaced three weeks of human review with a 40-minute QC step. Our credit officers stopped reformatting Excel and went back to actually underwriting.”</blockquote>
          <figcaption><strong>Arun Velayutham</strong><span>Head of SME, Aditya Birla Capital · Q3 2025</span></figcaption>
        </figure>
      </div>
    </div>}
  </ScrollScene>;
}

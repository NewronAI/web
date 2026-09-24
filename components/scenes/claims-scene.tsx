"use client";
import type { CSSProperties } from "react";
import ScrollScene from "../motion/scroll-scene";
import SceneNavigation from "../motion/scene-navigation";
import type { CueMap, SceneBeat } from "../motion/scene-types";

/* A claim assembling itself: the policy, the form and the evidence arrive
   separately, the eligibility checks join them, the one missing artefact is
   named out loud, and only then does the packet close. */

const beats: SceneBeat[] = [
  { at: 0, show: 0.37, title: "Check eligibility", summary: "Policy limits. Missing documents. Evidence.", copy: "The policy, the claim form and the supporting evidence arrive separately and are read against each other before anything is submitted." },
  { at: 0.38, show: 0.69, title: "Resolve the gaps", summary: "Denial reasons surfaced for remediation.", copy: "A missing discharge summary or a discrepancy in the dates is named while there is still time to fix it." },
  { at: 0.7, show: 0.97, title: "Assemble the claim", summary: "Forms and supporting artefacts, together.", copy: "The complete packet is put together in the shape the TPA expects, with the evidence attached for the claims team’s review." },
];

const cues: CueMap = {
  arrive: [0, 0.2],
  check: [0.2, 0.42],
  gap: [0.42, 0.56],
  fill: [0.58, 0.74],
  packet: [0.72, 0.92],
  seal: [0.9, 1],
};

const inputs = [
  ["POLICY", "GRP-88214 · Cardiac", 84],
  ["CLAIM FORM", "CL-2026-9881", 196],
  ["EVIDENCE", "9 of 11 artefacts", 308],
] as const;

const checks = [
  ["Policy eligibility", "Within limit", 0],
  ["Waiting period", "Served", 1],
  ["Sub-limit · room rent", "Within cap", 2],
  ["Discharge summary", "Missing", 3],
] as const;

export default function ClaimsScene() {
  return <ScrollScene id="insurance" className="scene-claims" travel="168svh" cues={cues} beats={beats} labelledBy="claims-title">
    {({ step, goToBeat, reduced }) => <div className="scene-inner scene-inner-flip">
      <div className="scene-art scene-art-panel">
        <div className="scene-art-top"><span>Claims</span><small>CL-2026-9881 · CARDIAC · INPATIENT</small></div>
        <div className="scene-art-body">
          <svg viewBox="0 0 880 460" className="scene-figure cl-figure" role="img" aria-label="A policy, a claim form and supporting evidence arrive separately, eligibility checks connect them, a missing discharge summary is identified and then supplied, and the claim packet is assembled for review.">
            <g className="cl-links" aria-hidden="true">
              {[0, 1, 2].map(i => <path key={i} className="cl-link" style={{ "--i": i } as CSSProperties}
                d={`M228 ${128 + i * 112} C286 ${128 + i * 112}, 286 ${118 + i * 74}, 330 ${118 + i * 74}`} />)}
            </g>

            <g className="cl-inputs" aria-hidden="true">
              {inputs.map(([label, note, y], i) => <g key={label} className="cl-input" style={{ "--i": i } as CSSProperties}>
                <rect x="34" y={y} width="194" height="84" rx="6" />
                <text x="54" y={y + 32}>{label}</text>
                <text className="cl-input-note" x="54" y={y + 56}>{note}</text>
              </g>)}
            </g>

            <g className="cl-checks" aria-hidden="true">
              <text className="cl-heading" x="330" y="62">ELIGIBILITY</text>
              {checks.map(([label, verdict, i]) => <g key={label} className={i === 3 ? "cl-check cl-check-gap" : "cl-check"} style={{ "--i": i } as CSSProperties}>
                <rect x="330" y={82 + i * 74} width="238" height="58" rx="5" />
                <text x="348" y={106 + i * 74}>{label.toUpperCase()}</text>
                <text className="cl-check-verdict" x="348" y={126 + i * 74}>{verdict}</text>
                <text className="cl-check-mark" x="550" y={116 + i * 74} textAnchor="end">✓</text>
                <text className="cl-check-alert" x="550" y={116 + i * 74} textAnchor="end">!</text>
              </g>)}
              <g className="cl-supply">
                <rect x="330" y="304" width="238" height="58" rx="5" />
                <text x="348" y="330">DISCHARGE SUMMARY</text>
                <text className="cl-check-verdict" x="348" y="350">Supplied · 11 / 11</text>
              </g>
            </g>

            <g className="cl-packet" aria-hidden="true">
              <rect className="cl-packet-sheet" x="616" y="64" width="236" height="332" rx="8" />
              <text x="638" y="98">TPA PACKET</text>
              <path className="cl-gauge-track" d="M654 216a80 80 0 0 1 160 0" />
              <path className="cl-gauge-fill" d="M654 216a80 80 0 0 1 160 0" />
              <text className="cl-gauge-value" x="734" y="204" textAnchor="middle">11 / 11</text>
              <text className="cl-gauge-note" x="734" y="240" textAnchor="middle">DOCUMENTS COMPLETE</text>
              {["Eligibility checked", "Denial risk reviewable", "Evidence attached"].map((line, i) => <g key={line} className="cl-packet-line" style={{ "--i": i } as CSSProperties}>
                <text x="638" y={286 + i * 32}>{line.toUpperCase()}</text>
                <text className="cl-packet-tick" x="830" y={286 + i * 32} textAnchor="end">✓</text>
              </g>)}
              <g className="cl-seal">
                <rect x="632" y="348" width="204" height="32" rx="16" />
                <text x="734" y="369" textAnchor="middle">READY FOR CLAIMS REVIEW</text>
              </g>
            </g>
          </svg>
        </div>
        <div className="scene-art-foot"><span>A CLAIM, WITH THE EVIDENCE CONNECTED.</span><span>ILLUSTRATIVE</span></div>
      </div>

      <div className="scene-copy">
        <div className="scene-copy-head">
          <div className="n-eyebrow">04 / INSURANCE AI</div>
          <h2 id="claims-title">Less back-and-forth.<br /><em>More moving forward.</em></h2>
          <p>Check eligibility, assemble TPA-ready packets and identify denial risk before submission. Built for health and motor claims.</p>
        </div>
        <SceneNavigation beats={beats} step={step} goToBeat={goToBeat} reduced={reduced} label="How a claim is resolved" />
        <a className="n-text-link" href="/insurance-ai">Explore insurance AI <span aria-hidden="true">↗</span></a>
      </div>
    </div>}
  </ScrollScene>;
}

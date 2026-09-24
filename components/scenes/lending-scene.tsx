"use client";
import type { CSSProperties } from "react";
import ScrollScene from "../motion/scroll-scene";
import SceneNavigation from "../motion/scene-navigation";
import { CountUp } from "../motion/count-up";
import type { CueMap, SceneBeat } from "../motion/scene-types";

/* An application walking from the intake tray to the officer's desk. The memo
   on the right is written out of the fields in the middle, and every section
   keeps the line back to the document it came from. */

const beats: SceneBeat[] = [
  { at: 0, show: 0.18, title: "The application arrives", summary: "Documents, bureau and KYC, from your LOS.", copy: "The file lands the moment it is created. Nothing is re-keyed and nothing waits for a queue." },
  { at: 0.2, show: 0.41, title: "Signals are read", summary: "Statements and obligations become fields.", copy: "Cash flow, average balance, recurring obligations and borrower identity are structured and checked against each other." },
  { at: 0.42, show: 0.6, title: "Evidence reaches the memo", summary: "Every section written from a source.", copy: "Each part of the credit memo is composed in your format, with the citation back to the document it was drawn from." },
  { at: 0.62, show: 0.8, title: "Deviations surface", summary: "Flagged, classified and routed.", copy: "A policy breach is detected against your own tier matrix, given a reason code, and sent to the reviewer who owns it." },
  { at: 0.82, show: 0.98, title: "The officer decides", summary: "A complete, sourced package.", copy: "The recommendation arrives with its evidence attached and its audit trail intact. The judgement stays with your team." },
];

const cues: CueMap = {
  intake: [0, 0.18],
  signals: [0.18, 0.42],
  wires: [0.24, 0.46],
  memo: [0.42, 0.62],
  cite: [0.48, 0.68],
  flag: [0.62, 0.8],
  review: [0.82, 1],
};

const intake = [
  ["BANK STATEMENTS", "12 months", 110],
  ["ITR + GST", "AY 2025–26", 218],
  ["KYC + BUREAU", "Pulled from LOS", 326],
] as const;

const signals = [
  ["Average balance", "₹ 1,84,300"],
  ["Total inflow", "₹ 47.4L"],
  ["Obligations", "₹ 62,400 / mo"],
  ["Bounce events", "0"],
  ["DTI", "0.47"],
] as const;

const sections = [
  ["01 / BORROWER PROFILE", 104],
  ["04 / CASH-FLOW ASSESSMENT", 186],
  ["06 / COLLATERAL", 268],
  ["08 / RECOMMENDATION", 350],
] as const;

export default function LendingScene() {
  return <>
    <ScrollScene id="lending" className="scene-lending" travel="185svh" cues={cues} beats={beats} labelledBy="lending-title">
      {({ step, goToBeat, reduced }) => <div className="scene-inner">
        <div className="scene-copy">
          <div className="scene-copy-head">
            <div className="n-eyebrow">03 / LENDING INTELLIGENCE</div>
            <h2 id="lending-title">The credit officer’s<br /><em>second brain.</em></h2>
            <p>Six connected modules for origination, verification and decision support. Configured to your policy, your formats and your tier structure.</p>
          </div>
          <SceneNavigation beats={beats} step={step} goToBeat={goToBeat} reduced={reduced} label="From application to decision" className="scene-steps-tight" />
          <a className="n-text-link" href="/lending-intelligence">Explore the lending suite <span aria-hidden="true">↗</span></a>
        </div>

        <div className="scene-art scene-art-panel">
          <div className="scene-art-top"><span>Credit workspace</span><small>APPLICATION / LP-2884109</small></div>
          <div className="scene-art-body">
            <svg viewBox="0 0 880 470" className="scene-figure ln-figure" role="img" aria-label="An application’s documents are read into borrower signals, those signals are written into the sections of a credit memo with citations, a policy deviation is flagged, and the package reaches officer review.">
              <g className="ln-wires" aria-hidden="true">
                {[0, 1, 2].map(i => <path key={i} className="ln-wire" style={{ "--i": i } as CSSProperties}
                  d={`M212 ${i * 108 + 148} C268 ${i * 108 + 148}, 268 ${90 + i * 60}, 312 ${90 + i * 60}`} />)}
              </g>

              <g className="ln-intake" aria-hidden="true">
                {intake.map(([label, note, y], i) => <g key={label} className="ln-doc" style={{ "--i": i } as CSSProperties}>
                  <rect x="30" y={y} width="182" height="76" rx="6" />
                  <text x="48" y={y + 30}>{label}</text>
                  <text className="ln-doc-note" x="48" y={y + 52}>{note}</text>
                </g>)}
              </g>

              <g className="ln-signals" aria-hidden="true">
                <text className="ln-heading" x="312" y="50">BORROWER SIGNALS</text>
                {signals.map(([key, value], i) => <g key={key} className="ln-signal" style={{ "--i": i } as CSSProperties}>
                  <rect x="312" y={68 + i * 62} width="212" height="50" rx="5" />
                  <text x="328" y={88 + i * 62}>{key.toUpperCase()}</text>
                  <text className="ln-signal-value" x="328" y={108 + i * 62}>{value}</text>
                </g>)}
              </g>

              <g className="ln-cites" aria-hidden="true">
                {sections.map(([, y], i) => <path key={i} className="ln-cite" style={{ "--i": i } as CSSProperties}
                  d={`M524 ${104 + i * 62} C578 ${104 + i * 62}, 578 ${y + 22}, 606 ${y + 22}`} />)}
              </g>

              <g className="ln-memo" aria-hidden="true">
                <rect className="ln-memo-sheet" x="602" y="42" width="248" height="390" rx="8" />
                <text x="622" y="74">CREDIT MEMO · YOUR FORMAT</text>
                {sections.map(([label, y], i) => <g key={label} className="ln-section" style={{ "--i": i } as CSSProperties}>
                  <text x="622" y={y}>{label}</text>
                  <path d={`M622 ${y + 14}h208M622 ${y + 26}h168M622 ${y + 38}h190`} />
                </g>)}
                <g className="ln-flag">
                  <rect x="614" y="292" width="224" height="34" rx="5" />
                  <text x="630" y="314">! DTI 0.47 · TIER-2 REVIEW</text>
                </g>
                <g className="ln-review">
                  <rect x="614" y="386" width="224" height="34" rx="17" />
                  <text x="726" y="408" textAnchor="middle">SENT FOR OFFICER REVIEW</text>
                </g>
              </g>
            </svg>
          </div>
          <div className="scene-art-foot"><span>ILLUSTRATIVE FILE</span><span>SOURCED · REVIEWABLE · AUDITED</span></div>
        </div>
      </div>}
    </ScrollScene>

    <section className="lending-outcomes-band chapter-shell">
      <div className="lending-impact">
        <div><strong><CountUp value={66} /><span>%</span></strong><p>reduction in turnaround time</p></div>
        <div><strong><CountUp value={200} /><span>%</span></strong><p>productivity uplift</p></div>
        <div><strong><CountUp value={230} suffix="k" /><span>+</span></strong><p>hours saved</p></div>
        <small>Reported across Newron lending deployments.</small>
      </div>
      <div className="lending-coverage">
        <details><summary><span>Commercial lending</span><span>6 products +</span></summary><p>Loan against property · Overdraft · Gold loan · Equipment finance · Revenue-based finance · Line of credit</p></details>
        <details><summary><span>Consumer lending</span><span>6 products +</span></summary><p>Home loan · Auto loan · Loan against securities · Personal loan · Education loan · Credit card</p></details>
      </div>
    </section>
  </>;
}

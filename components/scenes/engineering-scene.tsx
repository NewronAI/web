"use client";
import type { CSSProperties } from "react";
import ScrollScene from "../motion/scroll-scene";
import SceneNavigation from "../motion/scene-navigation";
import type { CueMap, SceneBeat } from "../motion/scene-types";
import { BOOKING_URL } from "@/lib/route";

/* The blueprint drawn in the order it is actually built: what you have, what
   we train, how it is measured, and where it ends up running. */

const beats: SceneBeat[] = [
  { at: 0, show: 0.26, title: "Your data and requirements", summary: "Where the engagement starts.", copy: "Your documents, your systems and the task you need done. We scope against what exists, not against a reference architecture." },
  { at: 0.28, show: 0.55, title: "Model and evaluation", summary: "Domain pretraining, measured.", copy: "Custom foundational models and fine-tuning, with an evaluation harness built on your tasks so improvement is a number, not an opinion." },
  { at: 0.56, show: 0.78, title: "Integration", summary: "Into the stack you already run.", copy: "Data pipelines, REST and webhook surfaces, and the operations tooling your team works in every day." },
  { at: 0.8, show: 0.98, title: "Deployment", summary: "Production, in your environment.", copy: "Inference, monitoring and rollback inside your VPC, your data centre or an air-gapped network." },
];

const cues: CueMap = {
  sources: [0, 0.26],
  model: [0.28, 0.52],
  evaluate: [0.4, 0.6],
  integrate: [0.56, 0.78],
  deploy: [0.8, 0.98],
};

const sources = [["DOCUMENTS", 76], ["CORE SYSTEMS", 158], ["DOMAIN EXPERTS", 240], ["POLICY BOOK", 322]] as const;
const stack = [["CUSTOM FOUNDATIONAL MODEL", "pretrain · fine-tune", 96], ["EVALUATION HARNESS", "your tasks · your metrics", 196]] as const;
const surfaces = [["REST API", 92], ["WEBHOOKS", 152], ["OPS TOOLING", 212], ["COPILOTS", 272]] as const;

export default function EngineeringScene() {
  return <>
    <ScrollScene id="services" className="scene-engineering" travel="148svh" cues={cues} beats={beats} labelledBy="engineering-title">
    {({ step, goToBeat, reduced }) => <div className="scene-inner">
      <div className="scene-copy">
        <div className="scene-copy-head">
          <div className="n-eyebrow">06 / CUSTOM AI ENGINEERING</div>
          <h2 id="engineering-title">Beyond the product.<br /><em>Built around you.</em></h2>
          <p>Embedded engineers. Custom models. A working system in your environment.</p>
        </div>
        <SceneNavigation beats={beats} step={step} goToBeat={goToBeat} reduced={reduced} label="How an engagement is built" className="scene-steps-tight" />
      </div>

      <div className="scene-art scene-art-panel scene-art-blueprint">
        <div className="scene-art-top"><span>Engineering</span><small>YOUR REQUIREMENTS → PRODUCTION</small></div>
        <div className="scene-art-body">
          <svg viewBox="0 0 880 440" className="scene-figure en-figure" role="img" aria-label="Data sources and requirements feed a custom model and its evaluation harness, integration surfaces extend into the customer environment, and deployment infrastructure forms around the finished system.">
            <g className="en-deploy" aria-hidden="true">
              <rect className="en-perimeter" x="16" y="18" width="848" height="404" rx="14" />
              <text className="en-perimeter-label" x="40" y="44">YOUR ENVIRONMENT · VPC / ON-PREM / AIR-GAPPED</text>
              <text className="en-perimeter-label" x="840" y="406" textAnchor="end">MONITORING · ROLLBACK · AUDIT</text>
            </g>

            <g className="en-sources" aria-hidden="true">
              {sources.map(([label, y], i) => <g key={label} className="en-node" style={{ "--i": i } as CSSProperties}>
                <rect x="40" y={y} width="164" height="58" rx="5" />
                <text x="58" y={y + 34}>{label}</text>
              </g>)}
            </g>

            <g className="en-links" aria-hidden="true">
              {sources.map(([, y], i) => <path key={i} className="en-link" style={{ "--i": i } as CSSProperties}
                d={`M204 ${y + 29} C256 ${y + 29}, 256 ${160 + (i > 1 ? 100 : 0)}, 300 ${160 + (i > 1 ? 100 : 0)}`} />)}
            </g>

            <g className="en-stack" aria-hidden="true">
              {stack.map(([label, note, y], i) => <g key={label} className={i ? "en-block en-block-eval" : "en-block"} style={{ "--i": i } as CSSProperties}>
                <rect x="300" y={y} width="252" height="88" rx="6" />
                <text x="322" y={y + 36}>{label}</text>
                <text className="en-block-note" x="322" y={y + 60}>{note}</text>
              </g>)}
              <path className="en-loop" d="M372 184v12M426 184v12M480 184v12" />
            </g>

            <g className="en-integrate" aria-hidden="true">
              {surfaces.map(([label, y], i) => <g key={label} className="en-surface" style={{ "--i": i } as CSSProperties}>
                <path className="en-link" d={`M552 ${180 + i * 6} C610 ${180 + i * 6}, 620 ${y + 22}, 664 ${y + 22}`} />
                <rect x="664" y={y} width="176" height="44" rx="22" />
                <text x="752" y={y + 27} textAnchor="middle">{label}</text>
              </g>)}
            </g>
          </svg>
        </div>
        <div className="scene-art-foot"><span>DATA → MODEL → EVALUATION → DEPLOYMENT</span><span>ILLUSTRATIVE</span></div>
      </div>
    </div>}
  </ScrollScene>

    <section className="engineering-delivery-band chapter-shell">
      <div className="engineering-delivery">
        <small>FROM SCOPE TO PRODUCTION</small>
        <strong>8–12<span>weeks</span></strong>
        <p>A typical engagement timeline, scoped to your data and integration needs.</p>
        <a className="n-button" href={BOOKING_URL}>Build with Newron <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </>;
}

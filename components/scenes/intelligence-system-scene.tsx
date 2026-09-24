"use client";
import { useState, type CSSProperties } from "react";
import ScrollScene from "../motion/scroll-scene";
import SceneNavigation from "../motion/scene-navigation";
import { LendingPreview } from "../product-previews";
import type { CueMap, SceneBeat } from "../motion/scene-types";

/* The same three planes as before, but the composition now opens under the
   scroll rather than on a timer: the model recedes as the tool layer comes
   forward, and the officer workspace arrives with its evidence already routed. */

const lendingTools = ["CAM generation", "Statement analyser", "Applicant 360°", "Video PD", "Policy chat", "Deviation engine"];
const toolMarks = ["▤", "▥", "◎", "◉", "⌕", "!"];

const beats: SceneBeat[] = [
  { at: 0, show: 0.34, title: "AI", summary: "The model understands.", copy: "ArthaLM classifies the batch, extracts the fields and maps each document to the right party. Five files become six documents, with their context intact." },
  { at: 0.36, show: 0.66, title: "Tools", summary: "The tools do the work.", copy: "Statement analysis, policy retrieval and verification turn structured information into evidence. Select a tool to see the application it supports." },
  { at: 0.68, show: 0.96, title: "Application", summary: "Your team makes the decision.", copy: "A sourced credit memo, a connected borrower view, or a flagged deviation. The officer gets the evidence and keeps control of the decision." },
];

const cues: CueMap = {
  batch: [0, 0.16],
  model: [0.10, 0.30],
  entities: [0.22, 0.36],
  tools: [0.36, 0.58],
  routes: [0.48, 0.68],
  app: [0.68, 0.88],
  evidence: [0.76, 0.96],
};

const status = ["BATCH UNDERSTOOD", "EVIDENCE ASSEMBLED", "READY FOR REVIEW"];

export default function IntelligenceSystemScene() {
  const [tool, setTool] = useState(0);
  return <ScrollScene id="demo" className="scene-intelligence" travel="205svh" cues={cues} beats={beats} labelledBy="intelligence-title">
    {({ step, goToBeat, reduced }) => <div className="scene-inner scene-inner-stack">
      <div className="lab-intro">
        <div>
          <div className="n-eyebrow">02 / INSIDE THE INTELLIGENCE</div>
          <h2 id="intelligence-title">Not just an answer.<br /><span>A whole working system.</span></h2>
        </div>
        <p>Open up a lending workflow.<br />See the AI, tools and application connect.</p>
      </div>

      <div className="lab-console">
        <div className="lab-toolbar">
          <span><i />NEWRON / INTERACTIVE WALKTHROUGH</span>
          <SceneNavigation className="scene-steps-row" beats={beats} step={step} goToBeat={goToBeat} reduced={reduced} label="System layers" />
        </div>

        <div className="lab-world">
          <div className="lab-floor" aria-hidden="true" />
          <div className="lab-space">
          <div className="lab-ai-plane">
            <div className="lab-plane-label">01 / AI · ARTHALM</div>
            <div className="lab-document-batch">
              <span>combined_scan.pdf <b>10 pp</b></span>
              <span>camera_capture.jpg <b>1 pp</b></span>
              <span>+ 3 incoming files <b>19 pp</b></span>
            </div>
            <div className="lab-model-chip"><span>अर्थ</span><strong>ArthaLM</strong><small>CLASSIFY · EXTRACT · MAP</small></div>
            <div className="lab-entities"><span>Applicant</span><span>Co-applicant</span><span>Entity</span><span>Collateral</span></div>
          </div>

          <div className="lab-tools-plane">
            <div className="lab-plane-label">02 / TOOLS · CONNECTED WORKFLOW</div>
            <div className="lab-tool-nodes">
              {lendingTools.map((label, i) => <button key={label} style={{ "--i": i } as CSSProperties} aria-pressed={tool === i}
                onClick={() => { setTool(i); goToBeat(2); }}>
                <span aria-hidden="true">{toolMarks[i]}</span>{label}<i />
              </button>)}
            </div>
            <div className="lab-api">REST API <span>↔</span> WEBHOOKS <span>↔</span> YOUR LOS</div>
          </div>

          <div className="lab-app-plane">
            <div className="lab-plane-label">03 / APPLICATION · OFFICER WORKSPACE</div>
            <LendingPreview tool={lendingTools[tool]} />
          </div>
          </div>
        </div>

        <div className="lab-detail">
          <div><h3>{beats[step].summary}</h3><p>{beats[step].copy}</p></div>
          <div className="lab-result-status" role="status"><i />{status[step]}</div>
        </div>
      </div>
    </div>}
  </ScrollScene>;
}

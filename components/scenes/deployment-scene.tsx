"use client";
import { useState, type CSSProperties } from "react";
import ScrollScene from "../motion/scroll-scene";
import SceneNavigation from "../motion/scene-navigation";
import type { CueMap, SceneBeat } from "../motion/scene-types";

/* The perimeter is drawn first and everything else is built inside it. Choosing
   air-gapped removes the outbound connectors from the drawing rather than
   greying them out: the illustration should never imply a link that isn't there. */

const beats: SceneBeat[] = [
  { at: 0, show: 0.24, title: "Your perimeter", summary: "The boundary comes first.", copy: "Whatever you choose, the line around your infrastructure is drawn before anything is installed inside it." },
  { at: 0.26, show: 0.5, title: "The system moves in", summary: "Model and application, in place.", copy: "ArthaLM, the tool layer and the officer workspace are deployed into your account. Newron keeps no copy of your data outside it." },
  { at: 0.52, show: 0.73, title: "Connected on your terms", summary: "REST and webhooks, where you allow them.", copy: "Integration surfaces exist only where your configuration permits them. An air-gapped deployment has none." },
  { at: 0.76, show: 0.95, title: "Everything recorded", summary: "A trail your reviewers can read.", copy: "Every model output and user action is timestamped, sourced and exportable for audit and regulator review." },
];

const cues: CueMap = {
  boundary: [0, 0.24],
  components: [0.26, 0.5],
  api: [0.52, 0.72],
  audit: [0.76, 0.94],
  settle: [0.9, 1],
};

const modes = [
  { id: "vpc", label: "VPC", perimeter: "YOUR PRIVATE CLOUD", note: "Customer-owned account · private networking · your KMS keys", external: true },
  { id: "on-prem", label: "On-premise", perimeter: "YOUR DATA CENTRE", note: "Hardware you control · local key management · no external egress", external: true },
  { id: "air-gapped", label: "Air-gapped", perimeter: "ISOLATED NETWORK", note: "Zero outbound · offline model updates · sovereign by default", external: false },
];

const components = [
  ["ArthaLM", "MODEL SERVING", 92],
  ["Tool layer", "ANALYSIS · POLICY · VERIFICATION", 172],
  ["Officer workspace", "APPLICATION", 252],
] as const;

const surfaces = [["REST API", 104], ["WEBHOOKS", 172]] as const;
const trail = [["09:14", "Batch classified · 30 pp"], ["09:16", "Memo drafted · 8 citations"], ["09:21", "Deviation routed · Tier-2"], ["09:40", "Approved · R. Menon"]] as const;

export default function DeploymentScene() {
  const [mode, setMode] = useState(0);
  const active = modes[mode];
  return <>
    <ScrollScene id="company" className="scene-deployment" travel="160svh" cues={cues} beats={beats} labelledBy="deployment-title"
    >
      {({ step, goToBeat, reduced }) => <div className="scene-inner">
        <div className="scene-copy">
          <div className="scene-copy-head">
            <div className="n-eyebrow">08 / YOUR INFRASTRUCTURE. YOUR CONTROL.</div>
            <h2 id="deployment-title">Intelligence moves in.<br /><em>Your data stays put.</em></h2>
            <p>Run in your VPC, on-premise or air-gapped. Connect through REST APIs and webhooks. Your team keeps the keys; your reviewers get the audit trail.</p>
          </div>
          <div className="trust-deployment-options" role="group" aria-label="Deployment model">
            {modes.map((option, i) => <button key={option.id} type="button" aria-pressed={mode === i} onClick={() => setMode(i)}>{option.label}</button>)}
          </div>
          <SceneNavigation beats={beats} step={step} goToBeat={goToBeat} reduced={reduced} label="How a deployment is built" className="scene-steps-tight" />
        </div>

        <div className="scene-art scene-art-panel" data-external={active.external ? "" : undefined}>
          <div className="scene-art-top"><span>{active.label}</span><small>{active.perimeter}</small></div>
          <div className="scene-art-body">
            <svg viewBox="0 0 880 440" className="scene-figure dp-figure" role="img"
              aria-label={`A ${active.label} deployment: the customer perimeter is established, model and application components are placed inside it, ${active.external ? "REST and webhook surfaces connect outward" : "no outbound connection is drawn"}, and an audit trail is recorded.`}>
              <g className="dp-boundary" aria-hidden="true">
                <rect className="dp-perimeter" x="24" y="24" width="500" height="392" rx="14" />
                <text className="dp-perimeter-label" x="48" y="54">{active.perimeter}</text>
                <text className="dp-perimeter-note" x="48" y="396">{active.note}</text>
              </g>

              <g className="dp-components" aria-hidden="true">
                {components.map(([name, kind, y], i) => <g key={name} className="dp-component" style={{ "--i": i } as CSSProperties}>
                  <rect x="56" y={y} width="336" height="64" rx="6" />
                  <text className="dp-component-name" x="80" y={y + 28}>{name}</text>
                  <text x="80" y={y + 48}>{kind}</text>
                </g>)}
                <path className="dp-spine" d="M224 156v16M224 236v16" />
              </g>

              {active.external && <g className="dp-api" aria-hidden="true">
                {surfaces.map(([label, y], i) => <g key={label} className="dp-surface" style={{ "--i": i } as CSSProperties}>
                  <path className="dp-wire" d={`M392 ${y + 18} C462 ${y + 18}, 500 ${y + 22}, 560 ${y + 22}`} />
                  <rect x="560" y={y} width="160" height="44" rx="22" />
                  <text x="640" y={y + 27} textAnchor="middle">{label}</text>
                </g>)}
                <text className="dp-api-note" x="560" y="238">TO YOUR LOS · OUTBOUND ONLY WHERE YOU ALLOW IT</text>
              </g>}

              {!active.external && <g className="dp-sealed" aria-hidden="true">
                <path className="dp-sealed-mark" d="M560 130h160M560 130l22-20M560 130l22 20" />
                <text x="560" y="166">NO OUTBOUND CONNECTION</text>
                <text className="dp-api-note" x="560" y="188">MODEL UPDATES DELIVERED OFFLINE</text>
              </g>}

              <g className="dp-audit" aria-hidden="true">
                <text x="560" y="276">AUDIT TRAIL</text>
                {trail.map(([time, event], i) => <g key={time} className="dp-event" style={{ "--i": i } as CSSProperties}>
                  <text className="dp-event-time" x="560" y={304 + i * 28}>{time}</text>
                  <text x="612" y={304 + i * 28}>{event}</text>
                </g>)}
              </g>
            </svg>
          </div>
          <div className="scene-art-foot"><span>YOUR KEYS. YOUR AUDIT TRAIL.</span><span>ILLUSTRATIVE</span></div>
        </div>
      </div>}
    </ScrollScene>

    <section className="trust-links-band chapter-shell">
      <div className="trust-links">
        <a href="/security">Security <span aria-hidden="true">↗</span></a>
        <a href="/responsible-ai">Responsible AI <span aria-hidden="true">↗</span></a>
      </div>
      <div className="nvidia-partner">
        <span aria-hidden="true">▣</span>
        <div><strong>NVIDIA</strong><small>INCEPTION PARTNER · SINCE 2023</small></div>
      </div>
    </section>
  </>;
}

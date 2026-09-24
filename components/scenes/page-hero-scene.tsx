"use client";
import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import ScrollScene from "../motion/scroll-scene";
import type { CueMap, SceneBeat } from "../motion/scene-types";

/* Interior heroes get choreography from the subject of the page, not from the
   art they happen to share. The sequence below is the page's own story; it runs
   over the hero's first short stretch of scroll — short enough that the flow
   figure at the top of the art column is still on screen when its results land
   — so no page grows a pinned section. */

const sequences: Record<string, string[]> = {
  "/lending-intelligence": ["Application batch", "Analysis", "Sourced credit memo", "Officer review"],
  "/banks": ["Multiple inputs", "Policy checks", "Approval tiers", "Review workspace"],
  "/nbfcs": ["Incoming applications", "Verification", "Exception routing", "Underwriting queue"],
  "/insurance-ai": ["Claim evidence", "Eligibility checks", "Gap identification", "Assembled packet"],
  "/industry-insurance": ["Intake channels", "Connected operations", "Reviewer workspace"],
  "/governance-ai": ["Kannada input", "Understanding", "Policy evidence", "Officer response"],
  "/public-sector": ["Citizen request", "Department routing", "Service queue", "Review"],
  "/custom-ai-engineering": ["Requirements", "Model", "Evaluation", "Deployment"],
  "/security": ["Infrastructure boundary", "Deployed components", "Controlled access", "Audit trail"],
  "/responsible-ai": ["Model output", "Sources and limitations", "Human review"],
  "/about": ["Expertise", "Product", "Connected network"],
  "/careers": ["Work areas", "Contribution paths", "Production impact"],
  "/open-source": ["Repository modules", "Dependencies", "Developer integration"],
  "/press": ["Editorial panels", "Ordered stories", "Featured content"],
  "/privacy": ["Document layers", "A clear reading surface"],
  "/terms": ["Document layers", "A restrained final composition"],
};

const fallback = ["Your documents", "Understood", "In production"];

/* What actually moves on a product page: the inputs that arrive, the step that
   works on them, the results it produces, and where those land. The existing
   preview below the figure is the destination; it fills in as the last beat. */
export type HeroFlow = { inputs: string[]; process: string; outputs: string[]; result: string };
const flows: Record<string, HeroFlow> = {
  "/lending-intelligence": { inputs: ["Bank statement · 12 mo", "ITR + GST returns", "KYC + bureau"], process: "Statement analysis", outputs: ["Avg. balance ₹ 1.84L", "DTI 0.47 · flagged", "Obligations ₹ 62,400"], result: "Sourced credit memo → officer review" },
  "/banks": { inputs: ["Application file", "Policy book", "Bureau pull"], process: "Policy checks", outputs: ["Tier 1 · within policy", "Tier 2 · override", "Deviation · reason code"], result: "Review workspace" },
  "/nbfcs": { inputs: ["Field application", "Photo KYC", "Bank statement"], process: "Verification", outputs: ["Identity · matched", "Address · matched", "Exception → routed"], result: "Underwriting queue" },
  "/insurance-ai": { inputs: ["Policy GRP-88214", "Claim form", "9 / 11 artefacts"], process: "Eligibility checks", outputs: ["Within limit", "Missing: discharge", "Supplied · 11 / 11"], result: "TPA-ready packet" },
  "/industry-insurance": { inputs: ["Email intake", "Portal upload", "TPA feed"], process: "Connected operations", outputs: ["Claim opened", "Evidence linked", "Denial risk · low"], result: "Reviewer workspace" },
  "/governance-ai": { inputs: ["Kannada form", "Voice note · 0:14", "PDS rules"], process: "Understanding", outputs: ["Transcribed · 0.96", "Ration card correction", "Clause 7.2 cited"], result: "Officer response" },
  "/public-sector": { inputs: ["Citizen request", "Supporting documents", "Voice note"], process: "Department routing", outputs: ["Food & civil supplies", "Mysuru taluk office", "Queue position 14"], result: "Officer review" },
  "/custom-ai-engineering": { inputs: ["Requirements", "Your documents", "Core systems"], process: "Model + evaluation", outputs: ["Task accuracy 0.94", "p95 latency 140 ms", "Rollback ready"], result: "Deployment in your environment" },
  "/security": { inputs: ["Documents", "Users + roles", "Your KMS keys"], process: "Deployed components", outputs: ["RBAC · least privilege", "Encrypted at rest", "Batch classified 09:14"], result: "Audit trail" },
  "/responsible-ai": { inputs: ["Model output", "Source documents"], process: "Sources and limitations", outputs: ["Source · p. 12", "Confidence 0.91", "Limitation stated"], result: "Human review" },
};

export function usePageFlow() {
  return flows[usePathname()] ?? null;
}

/** Inputs travel into the process, results leave it, and the whole line lands in
    the preview below — driven by the same four cues as the rail. */
export function HeroFlowFigure() {
  const flow = usePageFlow();
  if (!flow) return null;
  const inputY = (i: number) => 22 + i * 46 + (3 - flow.inputs.length) * 23;
  const outputY = (i: number) => 26 + i * 42 + (3 - flow.outputs.length) * 21;
  return <svg className="scene-figure hero-flow" viewBox="0 0 520 180" role="img"
    aria-label={`${flow.inputs.join(", ")} pass through ${flow.process.toLowerCase()}, producing ${flow.outputs.join(", ")}, assembled into ${flow.result.toLowerCase()}.`}>
    <g aria-hidden="true">
      {flow.inputs.map((label, i) => <g key={label} className="hf-input" style={{ "--i": i } as CSSProperties}>
        <path className="hf-link hf-link-in" d={`M134 ${inputY(i) + 17} C162 ${inputY(i) + 17}, 170 88, 196 88`} />
        <rect x="6" y={inputY(i)} width="128" height="34" rx="5" />
        <path d={`M17 ${inputY(i) + 27}h60`} />
        <text x="17" y={inputY(i) + 17}>{label}</text>
      </g>)}

      <g className="hf-process">
        <rect x="196" y="50" width="136" height="76" rx="8" />
        <text className="hf-process-kind" x="264" y="74" textAnchor="middle">PROCESS</text>
        <text className="hf-process-label" x="264" y="96" textAnchor="middle">{flow.process}</text>
        <path className="hf-scan" d="M204 58h120" />
      </g>

      {flow.outputs.map((label, i) => <g key={label} className="hf-output" style={{ "--i": i } as CSSProperties}>
        <path className="hf-link hf-link-out" d={`M332 88 C352 88, 356 ${outputY(i) + 15}, 370 ${outputY(i) + 15}`} />
        <rect x="370" y={outputY(i)} width="146" height="30" rx="15" />
        <text x="384" y={outputY(i) + 19}>{label}</text>
      </g>)}

      <g className="hf-result">
        <path className="hf-drop" d="M443 154v14M437 162l6 6 6-6" />
        <text className="hf-result-label" x="516" y="176" textAnchor="end">{flow.result.toUpperCase()}</text>
      </g>
    </g>
  </svg>;
}

const cues: CueMap = {
  s1: [0, 0.22],
  s2: [0.2, 0.46],
  s3: [0.44, 0.7],
  s4: [0.68, 0.9],
  settle: [0.1, 0.9],
};

export function usePageSequence() {
  const path = usePathname();
  return sequences[path] ?? fallback;
}

/* Pages with a flow to demonstrate hold the hero while it plays, exactly like a
   homepage chapter. Pages that only settle their art (company, legal) stay in
   normal flow: there is no action there worth stopping the page for. */
export default function PageHeroScene({ children }: { children: ReactNode }) {
  const stages = usePageSequence();
  const pinned = usePageFlow() !== null;
  const beats: SceneBeat[] = stages.map((title, i) => ({ at: i / stages.length * 0.82, title, summary: "" }));
  return pinned
    ? <ScrollScene as="div" className="scene-page-hero scene-page-hero-pinned" travel="170svh" mode="pin" cues={cues} beats={beats}>
        {() => children}
      </ScrollScene>
    : <ScrollScene as="div" className="scene-page-hero" travel="auto" mode="enter" span={0.3} cues={cues} beats={beats}>
        {() => children}
      </ScrollScene>;
}

/** The rail is a read-out of where the hero's sequence has got to, not a control. */
export function HeroSequenceRail() {
  const stages = usePageSequence();
  return <ol className="hero-rail" aria-label="What this page covers">
    {stages.map((stage, i) => <li key={stage} className="hero-rail-step" style={{ "--i": i, "--n": stages.length } as CSSProperties}>
      <span className="hero-rail-index">{String(i + 1).padStart(2, "0")}</span>
      <span className="hero-rail-label">{stage}</span>
    </li>)}
    <i className="hero-rail-line" aria-hidden="true"><b /></i>
  </ol>;
}

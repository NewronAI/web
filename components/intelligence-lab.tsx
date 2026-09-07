"use client";
import { useEffect, useRef, useState } from "react";
import { LendingPreview } from "./product-previews";

const lendingTools = ["CAM generation", "Statement analyser", "Applicant 360°", "Video PD", "Policy chat", "Deviation engine"];
const stages=[
  {name:"AI",title:"The model understands.",copy:"ArthaLM classifies the batch, extracts the fields and maps each document to the right party. Five files become six documents, with their context intact."},
  {name:"Tools",title:"The tools do the work.",copy:"Statement analysis, policy retrieval and verification turn structured information into evidence. Select a tool to see the application it supports."},
  {name:"Application",title:"Your team makes the decision.",copy:"A sourced credit memo, a connected borrower view, or a flagged deviation. The officer gets the evidence and keeps control of the decision."},
];
export default function IntelligenceLab() {
  const [stage,setStage]=useState(0),[tool,setTool]=useState(0),[running,setRunning]=useState(false),[complete,setComplete]=useState(false);
  const timer=useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
  const select=(next:number)=>{if(timer.current)clearTimeout(timer.current);setRunning(false);setStage(next);};
  const run=()=>{
    if(timer.current)clearTimeout(timer.current);
    setStage(0);setComplete(false);setRunning(true);
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(reduced){setStage(2);setRunning(false);setComplete(true);return;}
    timer.current=setTimeout(()=>{setStage(1);timer.current=setTimeout(()=>{setStage(2);setRunning(false);setComplete(true);},1800);},1800);
  };
  return <section id="demo" className="intelligence-lab">
    <div className="lab-intro"><div><div className="n-eyebrow">02 / INSIDE THE INTELLIGENCE</div><h2>Not just an answer.<br /><span>A whole working system.</span></h2></div><p>Open up a lending workflow.<br />See the AI, tools and application connect.</p></div>
    <div className="lab-console"><div className="lab-toolbar"><span><i/>NEWRON / INTERACTIVE WALKTHROUGH</span><button onClick={run} disabled={running}>{running?"Running sample…":complete?"Replay sample ↻":"Run sample workflow ↗"}</button></div>
      <div className="lab-stage-tabs" role="tablist" aria-label="System layers">{stages.map((s,i)=><button id={`lab-tab-${i}`} key={s.name} role="tab" aria-selected={stage===i} aria-controls="lab-detail" tabIndex={stage===i?0:-1} onClick={()=>select(i)} onKeyDown={e=>{let n=i;if(e.key==="ArrowRight")n=(i+1)%stages.length;else if(e.key==="ArrowLeft")n=(i+stages.length-1)%stages.length;else if(e.key==="Home")n=0;else if(e.key==="End")n=stages.length-1;else return;e.preventDefault();select(n);document.getElementById(`lab-tab-${n}`)?.focus();}}><span>0{i+1}</span>{s.name}<small>{["Understand","Act","Review"][i]}</small></button>)}</div>
      <div className={`lab-world lab-stage-${stage}`}>
        <div className="lab-floor" aria-hidden="true"/>
        <div className="lab-ai-plane"><div className="lab-plane-label">01 / AI · ARTHALM</div><div className="lab-document-batch"><span>combined_scan.pdf <b>10 pp</b></span><span>camera_capture.jpg <b>1 pp</b></span><span>+ 3 incoming files <b>19 pp</b></span></div><div className="lab-model-chip"><span>अर्थ</span><strong>ArthaLM</strong><small>CLASSIFY · EXTRACT · MAP</small></div><div className="lab-entities"><span>Applicant</span><span>Co-applicant</span><span>Entity</span><span>Collateral</span></div></div>
        <div className="lab-tools-plane"><div className="lab-plane-label">02 / TOOLS · CONNECTED WORKFLOW</div><div className="lab-tool-nodes">{lendingTools.map((label,i)=><button key={label} aria-pressed={tool===i} onClick={()=>{setTool(i);select(2);document.getElementById("lab-tab-2")?.focus();}}><span>{["▤","▥","◎","◉","⌕","!"][i]}</span>{label}<i/></button>)}</div><div className="lab-api">REST API <span>↔</span> WEBHOOKS <span>↔</span> YOUR LOS</div></div>
        <div className="lab-app-plane"><div className="lab-plane-label">03 / APPLICATION · OFFICER WORKSPACE</div><LendingPreview tool={lendingTools[tool]}/></div>
      </div>
      <div className="lab-detail" id="lab-detail" role="tabpanel" aria-labelledby={`lab-tab-${stage}`}><div><h3>{stages[stage].title}</h3><p>{stages[stage].copy}</p></div><div className="lab-result-status" role="status">{complete&&<><i/>Sample complete · ready for review</>}</div></div>
    </div>
  </section>;
}

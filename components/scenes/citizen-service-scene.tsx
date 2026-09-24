"use client";
import type { CSSProperties } from "react";
import ScrollScene from "../motion/scroll-scene";
import SceneNavigation from "../motion/scene-navigation";
import type { CueMap, SceneBeat } from "../motion/scene-types";

/* A citizen's request travelling to an officer's desk. It can start as
   handwriting or as speech; both reach the same understood text, the same
   routing, and the same sourced reply that a person signs off. */

const beats: SceneBeat[] = [
  { at: 0, show: 0.28, title: "The request arrives", summary: "Handwritten, or spoken aloud.", copy: "A form filled in by hand and a voice note in Kannada are the same kind of input: something a citizen already knows how to produce." },
  { at: 0.3, show: 0.52, title: "It is understood", summary: "Recognised beside its source.", copy: "Kannada handwriting recognition and regional speech turn the request into text that stays next to the thing it came from." },
  { at: 0.54, show: 0.74, title: "It is routed", summary: "Classified to the right desk.", copy: "Grievance triage sends the request to the department that owns it, with its category and its urgency already attached." },
  { at: 0.78, show: 0.96, title: "An officer replies", summary: "Cited policy. Human approval.", copy: "The draft answer arrives with the clause it rests on. No response reaches the citizen until an officer has approved it." },
];

const cues: CueMap = {
  ink: [0, 0.24],
  voice: [0.06, 0.28],
  read: [0.3, 0.5],
  route: [0.54, 0.72],
  policy: [0.64, 0.82],
  reply: [0.78, 0.96],
};

/* Rounded so the server and the client render the identical attribute. */
const wave = Array.from({ length: 34 }, (_, i) => Math.round((10 + Math.abs(Math.sin(i * 1.27)) * 36) * 100) / 100);

export default function CitizenServiceScene() {
  return <ScrollScene id="governance" className="scene-citizen" travel="168svh" cues={cues} beats={beats} labelledBy="citizen-title">
    {({ step, goToBeat, reduced }) => <div className="scene-inner">
      <div className="scene-copy">
        <div className="scene-copy-head">
          <div className="n-eyebrow">05 / GOVERNANCE AI</div>
          <h2 id="citizen-title">Technology should<br /><em>speak your language.</em></h2>
          <p>Built with the Government of Karnataka. Kannada handwriting recognition, regional voice and policy discovery bring citizen services closer to the people who need them.</p>
        </div>
        <SceneNavigation beats={beats} step={step} goToBeat={goToBeat} reduced={reduced} label="From citizen request to officer reply" className="scene-steps-tight" />
        <div className="governance-capabilities"><span>Kannada OCR</span><span>Regional TTS &amp; ASR</span><span>Grievance triage</span><span>Cited policy answers</span></div>
        <small className="governance-note">Kannada is in production. Additional languages require dedicated data and evaluation.</small>
      </div>

      <div className="scene-art scene-art-panel">
        <span className="governance-script" aria-hidden="true" lang="kn">ಅರ್ಥ</span>
        <div className="scene-art-top"><span>Citizen services</span><small>KANNADA / IN PRODUCTION</small></div>
        <div className="scene-art-body">
          <svg viewBox="0 0 880 470" className="scene-figure cz-figure" role="img" aria-label="A handwritten Kannada form and a spoken request are both recognised into text, classified and routed to a department, matched to the policy clause that applies, and drafted into a reply that an officer approves.">
            <g className="cz-input" aria-hidden="true">
              <rect x="30" y="52" width="216" height="150" rx="7" />
              <text x="50" y="82">HANDWRITTEN FORM</text>
              <path className="cz-ink" d="M52 150c22-34 38 18 58-6s26-40 46-18 30 26 52 4" />
              <path className="cz-ink cz-ink-two" d="M52 182c34-14 56 10 84-4s52-16 84 2" style={{ "--i": 1 } as CSSProperties} />

              <rect x="30" y="248" width="216" height="150" rx="7" />
              <text x="50" y="278">VOICE INTAKE</text>
              <g className="cz-wave">
                {wave.map((h, i) => <rect key={i} x={52 + i * 5.4} y={340 - h / 2} width="2.6" height={h} rx="1.3" style={{ "--i": i } as CSSProperties} />)}
              </g>
              <text className="cz-input-note" x="50" y="378">0:14 · KANNADA</text>
            </g>

            <g className="cz-read" aria-hidden="true">
              <path className="cz-flow" d="M246 128C286 128 286 170 322 170" />
              <path className="cz-flow" style={{ "--i": 1 } as CSSProperties} d="M246 324C286 324 286 246 322 246" />
              <rect x="322" y="126" width="238" height="164" rx="7" />
              <text x="342" y="156">UNDERSTOOD REQUEST</text>
              <text className="cz-script" lang="kn" x="342" y="198">ನಮಸ್ಕಾರ</text>
              <text className="cz-read-line" x="342" y="228">Ration card correction —</text>
              <text className="cz-read-line" x="342" y="250">name spelling, Mysuru taluk.</text>
              <text className="cz-input-note" x="342" y="274">CONFIDENCE 0.96 · SOURCED</text>
            </g>

            <g className="cz-route" aria-hidden="true">
              <path className="cz-flow" d="M560 208C592 208 592 122 624 122" />
              {[["FOOD & CIVIL SUPPLIES", "DEPARTMENT", 84], ["CORRECTION REQUEST", "CATEGORY", 156], ["MYSURU TALUK OFFICE", "DESK", 228]].map(([label, kind, y], i) => <g key={label as string} className="cz-chip" style={{ "--i": i } as CSSProperties}>
                <rect x="624" y={y as number} width="226" height="56" rx="28" />
                <text x="648" y={(y as number) + 24}>{label}</text>
                <text className="cz-chip-kind" x="648" y={(y as number) + 42}>{kind}</text>
              </g>)}
            </g>

            <g className="cz-policy" aria-hidden="true">
              <rect x="322" y="322" width="238" height="100" rx="7" />
              <text x="342" y="350">POLICY SOURCE</text>
              <text className="cz-read-line" x="342" y="378">Karnataka PDS rules,</text>
              <text className="cz-read-line" x="342" y="400">clause 7.2 — corrections.</text>
              <path className="cz-flow" style={{ "--i": 2 } as CSSProperties} d="M560 372C592 372 592 336 624 336" />
            </g>

            <g className="cz-reply" aria-hidden="true">
              <rect x="624" y="308" width="226" height="114" rx="7" />
              <text x="648" y="336">DRAFT REPLY</text>
              <path d="M648 356h178M648 372h150M648 388h166" />
              <text className="cz-approval" x="648" y="412">▣ OFFICER APPROVAL REQUIRED</text>
            </g>
          </svg>
        </div>
        <div className="scene-art-foot"><span>A CITIZEN SPEAKS. THE SERVICE LISTENS.</span><span>ILLUSTRATIVE</span></div>
      </div>
    </div>}
  </ScrollScene>;
}

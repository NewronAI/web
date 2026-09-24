"use client";
import type { CSSProperties } from "react";
import ScrollScene from "../motion/scroll-scene";
import SceneNavigation from "../motion/scene-navigation";
import type { CueMap, SceneBeat } from "../motion/scene-types";

/* One batch of documents, followed all the way through. The same six cards are
   classified, then one of them is opened and read, then every card is joined to
   the party it belongs to — nothing is swapped out between the three beats. */

const beats: SceneBeat[] = [
  { at: 0, show: 0.34, title: "Classification", summary: "Merged or scanned documents aren’t a barrier.", copy: "Split merged PDFs and identify the documents inside scans, phone photos and mixed batches." },
  { at: 0.37, show: 0.66, title: "Extraction", summary: "Structuring the messy bits.", copy: "Read balances, identifiers, periods and property details from real documents, without a template for every format." },
  { at: 0.69, show: 0.96, title: "Party mapping", summary: "Every document. The right owner.", copy: "Connect the applicant, co-applicant, entity and collateral. Keep identities distinct while building one connected file." },
];

const cues: CueMap = {
  split: [0.05, 0.30],
  label: [0.22, 0.37],
  focus: [0.37, 0.50],
  fields: [0.44, 0.58],
  transfer: [0.50, 0.67],
  map: [0.69, 0.85],
  file: [0.86, 1],
};

const meta = ["5 FILES → 6 DOCUMENTS", "STRUCTURED FIELDS · SOURCE CONTEXT", "4 PARTIES RESOLVED"];

const CARD_W = 132, CARD_H = 86, STACK_X = 115, STACK_Y = 270;

/** Where each card sits once the batch has been classified. */
const documents = [
  { label: "STATEMENT", note: "p. 01–06", x: 285, y: 120, rot: -7 },
  { label: "TAX RETURN", note: "p. 07–10", x: 437, y: 120, rot: 5 },
  { label: "PAN CARD", note: "p. 11", x: 285, y: 240, rot: -3 },
  { label: "AADHAAR", note: "p. 12–13", x: 437, y: 240, rot: 8 },
  { label: "SALE DEED", note: "p. 14–22", x: 285, y: 360, rot: -5 },
  { label: "GST RETURNS", note: "p. 23–30", x: 437, y: 360, rot: 4 },
];

const fields = [
  ["Document", "Bank statement", 150],
  ["Period", "Apr–Jun 2026", 235],
  ["Average balance", "₹ 8,41,905", 320],
  ["Net inflow", "₹ 31,20,448", 405],
] as const;

const parties = [
  ["R. Iyer", "APPLICANT", 115],
  ["S. Iyer", "CO-APPLICANT", 210],
  ["Iyer Traders", "ENTITY", 305],
  ["Property", "COLLATERAL", 400],
] as const;

/** Each link keeps one document joined to the party it was mapped to. */
const links: [number, number, number, number][] = [
  [417, 163, 606, 146], [417, 283, 606, 146], [569, 283, 606, 241],
  [569, 163, 606, 336], [569, 403, 606, 336], [417, 403, 606, 431],
];

export default function DocumentUnderstandingScene() {
  return <>
    <ScrollScene id="artha" className="scene-documents" travel="205svh" cues={cues} beats={beats} labelledBy="document-understanding-title">
      {({ step, goToBeat, reduced }) => <div className="scene-inner">
        <div className="scene-copy">
          <div className="scene-copy-head">
            <div className="n-eyebrow">01 / MEET ARTHALM</div>
            <h2 id="document-understanding-title">Superfast form filling.<br /><em>Without the hassle.</em></h2>
            <p>ArthaLM’s vision-language models, built for the documents Indian banks and NBFCs actually process.</p>
          </div>
          <SceneNavigation beats={beats} step={step} goToBeat={goToBeat} reduced={reduced} label="ArthaLM capabilities" />
        </div>

        <div className="scene-art scene-art-panel">
          <div className="scene-art-top"><span>ArthaLM</span><small>DOCUMENT INTELLIGENCE</small></div>
          <div className="scene-art-body">
            <svg viewBox="0 0 880 540" className="scene-figure du-figure" role="img" aria-label="A merged batch separates into six identified documents, one of them is read into structured fields, and every document is joined to the party it belongs to.">
              <g className="du-intake" aria-hidden="true">
                <rect x="40" y="190" width="150" height="160" rx="8" />
                <text x="115" y="378" textAnchor="middle">combined_scan.pdf</text>
                <text x="115" y="396" textAnchor="middle">5 FILES · 30 PAGES</text>
              </g>

              <g className="du-links" aria-hidden="true">
                {links.map(([x1, y1, x2, y2], i) => <path key={i} className="du-link" style={{ "--i": i } as CSSProperties}
                  d={`M${x1} ${y1} C${x1 + 76} ${y1}, ${x2 - 76} ${y2}, ${x2} ${y2}`} />)}
              </g>

              {documents.map((doc, i) => {
                const lead = i === 0;
                return <g key={doc.label} className="du-doc" style={{
                  "--dx": STACK_X + (i - 2.5) * 5 - (doc.x + CARD_W / 2), "--dy": STACK_Y + (i - 2.5) * 4 - (doc.y + CARD_H / 2), "--rot": doc.rot,
                } as CSSProperties}>
                  <g className={lead ? "du-doc-pull du-doc-lead" : "du-doc-pull"} style={{
                    "--fx": lead ? -211 : 26, "--fy": lead ? 87 : 0, "--fs": lead ? 1.7 : 0.94, "--fo": lead ? 1 : 0.16,
                  } as CSSProperties}>
                    <rect x={doc.x} y={doc.y} width={CARD_W} height={CARD_H} rx="6" />
                    <path d={`M${doc.x + 14} ${doc.y + 46}h80M${doc.x + 14} ${doc.y + 59}h104M${doc.x + 14} ${doc.y + 72}h62`} />
                    <g className="du-doc-type">
                      <path d={`M${doc.x + 14} ${doc.y + 30}h${CARD_W - 28}`} />
                      <text x={doc.x + 14} y={doc.y + 23}>{doc.label}</text>
                      <text x={doc.x + CARD_W - 14} y={doc.y + 23} textAnchor="end">{doc.note}</text>
                    </g>
                  </g>
                </g>;
              })}

              <g className="du-read" aria-hidden="true">
                {[0, 1, 2].map(i => <rect key={i} className="du-read-band" x="46" y={244 + i * 22} width="190" height="19" rx="3" style={{ "--i": i } as CSSProperties} />)}
                <path className="du-scan" d="M28 180h224" />
              </g>

              <g className="du-structured" aria-hidden="true">
                <rect x="586" y="100" width="274" height="380" rx="10" />
                <text x="608" y="132">STRUCTURED FIELDS</text>
                {fields.map(([key, value, y], i) => <g key={key} style={{ "--i": i } as CSSProperties}>
                  <path className="du-wire" d={`M255 ${212 + i * 20} C400 ${212 + i * 20}, 470 ${y + 16}, 586 ${y + 16}`} />
                  <g className="du-field">
                    <path d={`M608 ${y + 56}h230`} />
                    <text x="608" y={y + 14}>{key.toUpperCase()}</text>
                    <text className="du-field-value" x="608" y={y + 40}>{value}</text>
                    <text className="du-field-tick" x="838" y={y + 38} textAnchor="end">✓</text>
                  </g>
                </g>)}
              </g>

              <g className="du-parties" aria-hidden="true">
                {parties.map(([name, role, y], i) => <g key={role} className="du-party" style={{ "--i": i } as CSSProperties}>
                  <rect x="606" y={y} width="254" height="62" rx="31" />
                  <text x="638" y={y + 28}>{name}</text>
                  <text className="du-party-role" x="638" y={y + 45}>{role}</text>
                </g>)}
                <rect className="du-file-frame" x="264" y="96" width="322" height="372" rx="12" />
                <text className="du-file-mark" x="270" y="492">ONE CONNECTED CASE FILE</text>
              </g>

              <g className="du-summary" aria-hidden="true">
                <rect x="34" y="150" width="198" height="242" rx="10" />
                <text x="56" y="184">CASE FILE</text>
                <text className="du-summary-id" x="56" y="214">LP-2884109</text>
                {[["Documents", "6"], ["Parties", "4"], ["Pages read", "30"], ["Re-keyed by hand", "0"]].map(([label, value], i) => <g key={label}>
                  <path d={`M56 ${256 + i * 32}h154`} />
                  <text x="56" y={280 + i * 32}>{label.toUpperCase()}</text>
                  <text className="du-summary-value" x="210" y={280 + i * 32} textAnchor="end">{value}</text>
                </g>)}
              </g>
            </svg>
          </div>
          <div className="scene-art-foot"><span>{meta[step]}</span><span>अर्थ · MEANING, PURPOSE</span></div>
        </div>
      </div>}
    </ScrollScene>

    <section className="model-benchmarks-band chapter-shell">
      <div className="model-benchmarks">
        <div><strong>Up to 3×</strong><span>faster processing</span></div>
        <div><strong>≈ 1/8</strong><span>the inference cost</span></div>
        <div><strong>Frontier-comparable</strong><span>on our document tasks</span></div>
        <div><strong>Yours to run</strong><span>licensable &amp; self-hostable</span></div>
        <p>Performance figures from Newron’s own document evaluations against frontier models on the same document set. Results vary by task, workload and deployment.</p>
      </div>
    </section>
  </>;
}

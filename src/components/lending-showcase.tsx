"use client";

import { useEffect, useState } from "react";
import { PhotoStage } from "@/components/photo-stage";
import { Check, Dot, Frame } from "@/components/ui";
import lendingPhoto from "@/assets/photos/lending.jpg";
import { lendingModules, type LendingModuleId } from "@/lib/site";

const CYCLE_MS = 6000;

// Illustrative sample data only.
export function LendingShowcase() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setI((n) => (n + 1) % lendingModules.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [i, auto]);

  const active = lendingModules[i];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
      <div
        role="tablist"
        aria-label="Lending Intelligence modules"
        className="-mx-5 flex gap-1 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
      >
        {lendingModules.map((m, n) => {
          const on = n === i;
          return (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="lending-panel"
              onClick={() => {
                setI(n);
                setAuto(false);
              }}
              className={`relative shrink-0 overflow-hidden rounded-2xl px-4 py-3 text-left whitespace-nowrap transition-colors lg:px-5 lg:py-4 lg:whitespace-normal ${
                on ? "bg-s2" : "hover:bg-s1"
              }`}
            >
              <span className="flex items-baseline gap-3">
                <span className="hidden font-mono text-xs text-muted lg:inline">0{n + 1}</span>
                <span className={`font-medium lg:text-lg ${on ? "text-fg" : "text-fg-2"}`}>{m.t}</span>
              </span>
              <span
                className={`hidden pl-8 text-sm text-fg-2 transition-all duration-300 lg:grid ${
                  on ? "mt-1 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <span className="overflow-hidden">{m.s}</span>
              </span>
              {on && auto && (
                <span
                  key={i}
                  aria-hidden
                  className="progress absolute bottom-0 left-0 h-[2px] bg-accent"
                  style={{ animationDuration: `${CYCLE_MS}ms` }}
                />
              )}
            </button>
          );
        })}
      </div>

      <PhotoStage src={lendingPhoto} position="50% 60%">
        <div id="lending-panel" role="tabpanel" aria-label={active.t} key={active.id} className="fade-in">
          <Visual id={active.id} />
        </div>
      </PhotoStage>
    </div>
  );
}

function Visual({ id }: { id: LendingModuleId }) {
  switch (id) {
    case "cam":
      return <CamViz />;
    case "statements":
      return <StatementViz />;
    case "applicant":
      return <ApplicantViz />;
    case "video":
      return <VideoViz />;
    case "policy":
      return <PolicyViz />;
  }
}

function CamViz() {
  const rows = [
    ["Applicant & group", "4 parties"],
    ["Banking behaviour", "ABB ₹18.4 L"],
    ["Obligations & FOIR", "58%"],
    ["Collateral", "LAP · valued"],
  ];
  return (
    <Frame title="Credit Approval Memo · LN-20417" meta="your format">
      <ul>
        {rows.map(([k, v], n) => (
          <li key={k} className={`flex items-center justify-between gap-4 px-5 py-3.5 ${n ? "border-t border-line" : ""}`}>
            <span className="flex items-center gap-3 text-sm text-fg">
              <Check /> {k}
            </span>
            <span className="font-mono text-xs text-muted">{v}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-4 border-t border-line bg-warn/5 px-5 py-4">
        <span className="flex items-center gap-2 text-sm text-warn">
          <Dot tone="warn" /> FOIR above 55% cap
        </span>
        <span className="font-mono text-[11px] text-muted">Policy §4.2.1</span>
      </div>
    </Frame>
  );
}

function StatementViz() {
  const bars = [52, 61, 48, 70, 66, 58, 74, 69, 81, 63, 77, 86];
  const months = ["A", "M", "J", "J", "A", "S", "O", "N", "D", "J", "F", "M"];
  return (
    <Frame title="stmt_fy26.pdf · 41 pages" meta="parsed in 52s">
      <div className="flex h-44 items-end gap-2 px-5 pt-6" aria-hidden>
        {bars.map((b, n) => (
          <div key={n} className="flex h-full flex-1 flex-col items-center gap-2">
            <span className="relative w-full flex-1">
              <span
                className={`absolute inset-x-0 bottom-0 rounded-md ${n === 6 ? "bg-warn/70" : "bg-accent/70"}`}
                style={{ height: `${b}%` }}
              />
            </span>
            <span className="font-mono text-[10px] text-muted">{months[n]}</span>
          </div>
        ))}
      </div>
      <dl className="mt-4 grid grid-cols-3 border-t border-line">
        {[
          ["Avg. balance", "₹18.4 L"],
          ["EMIs", "₹1.85 L / mo"],
          ["Bounces", "1 flagged"],
        ].map(([k, v], n) => (
          <div key={k} className={`px-5 py-4 ${n ? "border-l border-line" : ""}`}>
            <dt className="text-xs text-muted">{k}</dt>
            <dd className={`mt-1 font-medium ${n === 2 ? "text-warn" : "text-fg"}`}>{v}</dd>
          </div>
        ))}
      </dl>
    </Frame>
  );
}

function ApplicantViz() {
  const parties = [
    ["R. Kulkarni", "Promoter"],
    ["S. Kulkarni", "Co-applicant"],
    ["Kulkarni Metals", "Group entity"],
  ];
  return (
    <Frame title="Applicant 360° · Shree Steels Pvt. Ltd." meta="4 parties">
      <div className="px-5 pt-6 pb-5">
        <div className="mx-auto w-fit rounded-xl border border-line-2 bg-s2 px-5 py-3 text-center">
          <p className="font-medium text-fg">Shree Steels Pvt. Ltd.</p>
          <p className="text-xs text-muted">Borrower · MSME</p>
        </div>
        <span aria-hidden className="mx-auto block h-5 w-px bg-line-2" />
        <div className="relative grid grid-cols-3 gap-3">
          <span aria-hidden className="absolute left-[16.66%] right-[16.66%] top-0 h-px bg-line-2" />
          {parties.map(([n, r]) => (
            <div key={n} className="flex flex-col items-center">
              <span aria-hidden className="h-6 w-px bg-line-2" />
              <div className="w-full rounded-xl border border-line px-2 py-2.5 text-center">
                <p className="truncate text-sm text-fg">{n}</p>
                <p className="text-[11px] text-muted">{r}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className="grid grid-cols-3 border-t border-line text-sm">
        {[
          ["Bureau", "781"],
          ["GST filings", "12 / 12"],
          ["Covenants", "0 breaches"],
        ].map(([k, v], n) => (
          <li key={k} className={`px-5 py-4 ${n ? "border-l border-line" : ""}`}>
            <p className="text-xs text-muted">{k}</p>
            <p className="mt-1 font-medium text-fg">{v}</p>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function VideoViz() {
  return (
    <Frame title="Video PD · LN-20417" meta="12:40">
      <div className="p-4">
        <div className="sheet-dark relative grid aspect-[16/9] place-items-center overflow-hidden rounded-xl bg-bg">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-s3 text-2xl font-medium text-fg">RK</span>
          <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-s2 px-2.5 py-1 text-[11px] text-fg">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-[#ff6c4c] text-[#ff6c4c]" /> Recording
          </span>
          <span className="absolute bottom-3 right-3 h-16 w-24 rounded-lg border border-line-2 bg-s2" aria-hidden />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Face verified", "Address verified · Pune", "Transcript saved"].map((b) => (
            <span key={b} className="flex items-center gap-1.5 rounded-full border border-line-2 px-3 py-1.5 text-xs text-fg">
              <Check /> {b}
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function PolicyViz() {
  return (
    <Frame title="Policy Chat" meta="credit policy v3.2">
      <div className="space-y-4 p-5">
        <p className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md bg-s3 px-4 py-3 text-sm text-fg">
          Max LTV for LAP on a commercial property?
        </p>
        <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-line-2 px-4 py-3">
          <p className="text-sm text-fg">60% of market value, reduced to 50% if the title is under mutation.</p>
          <p className="mt-3 flex flex-wrap gap-1.5">
            {["§7.3.2 Collateral", "§7.4 Title checks"].map((c) => (
              <span key={c} className="rounded-md bg-s2 px-2 py-1 font-mono text-[11px] text-fg-2">
                {c}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Frame>
  );
}

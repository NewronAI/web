"use client";

import { useEffect, useState } from "react";

// Illustrative sample file only — names, IDs and figures are demo data.
const steps = [
  { t: "Classify the loan file", src: "Artha · 5 files", out: "6 documents", ms: 900 },
  { t: "Parse 12 months of statements", src: "Statement Analyser", out: "52s", ms: 1300 },
  { t: "Resolve parties", src: "Artha · party mapping", out: "4 parties", ms: 1000 },
  { t: "Check against credit policy", src: "Policy book v3.2", out: "1 deviation", warn: true, ms: 1000 },
  { t: "Compose CAM in your format", src: "CAM Generation", out: "18 sections", ms: 1200 },
  { t: "Credit officer QC", src: "Human review", out: "Approved · R. Iyer", ms: 2600, human: true },
  { t: "Push to LOS", src: "REST + webhook", out: "Synced", ms: 900 },
];

const HOLD_MS = 3200;

export function CamRun() {
  // Number of completed steps; steps[done] is the one running.
  const [done, setDone] = useState(0);

  useEffect(() => {
    // Reduced motion: jump straight to the completed file and stay there.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = setTimeout(() => setDone(steps.length), 0);
      return () => clearTimeout(id);
    }
    const wait = done < steps.length ? steps[done].ms : HOLD_MS;
    const id = setTimeout(() => setDone((d) => (d >= steps.length ? 0 : d + 1)), wait);
    return () => clearTimeout(id);
  }, [done]);

  const finished = done >= steps.length;
  const awaiting = !finished && steps[done].human;
  const status = finished
    ? { label: "CAM ready", cls: "text-ok" }
    : awaiting
      ? { label: "Awaiting QC", cls: "text-warn" }
      : { label: "Processing", cls: "text-accent" };

  return (
    <div className="overflow-hidden rounded-3xl border border-line-2 bg-s1">
      {/* Window bar */}
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
        <div className="flex min-w-0 items-center gap-2 font-mono text-xs text-muted">
          <span className="text-fg-2">Lending Intelligence</span>
          <span>/</span>
          <span className="hidden sm:inline">CAM Generation</span>
          <span className="hidden sm:inline">/</span>
          <span className="truncate text-fg">LN-20417 · Loan against property</span>
        </div>
        <span className={`flex shrink-0 items-center gap-2 font-mono text-xs ${status.cls}`}>
          <span className={`h-1.5 w-1.5 rounded-full bg-current ${finished ? "" : "live-dot"}`} />
          {status.label}
        </span>
      </div>

      <div className="grid md:grid-cols-[13.5rem_minmax(0,1fr)]">
        {/* File summary */}
        <aside className="hidden border-r border-line p-4 md:block">
          <p className="label text-muted">Applicant</p>
          <p className="mt-1.5 text-sm font-medium text-fg">Shree Steels Pvt. Ltd.</p>
          <p className="text-xs text-muted">MSME · Pune</p>
          <dl className="mt-5 space-y-4 text-xs">
            <div>
              <dt className="label text-muted">Ask</dt>
              <dd className="mt-1.5 text-fg-2">₹2.4 Cr · 84 months</dd>
            </div>
            <div>
              <dt className="label text-muted">Avg. monthly balance</dt>
              <dd className="mt-1.5 text-fg-2">₹18.4 L</dd>
            </div>
            <div>
              <dt className="label text-muted">Deployed in</dt>
              <dd className="mt-1.5 text-fg-2">Your VPC · ap-south-1</dd>
            </div>
            <div>
              <dt className="label text-muted">Model</dt>
              <dd className="mt-1.5 text-fg-2">Artha · self-hosted</dd>
            </div>
          </dl>
        </aside>

        {/* Trace */}
        <ol className="p-2 sm:p-3">
          {steps.map((s, i) => {
            const state = i < done ? "done" : i === done ? "run" : "todo";
            const isWaiting = state === "run" && s.human;
            return (
              <li
                key={s.t}
                className={`grid grid-cols-[1.25rem_minmax(0,1fr)_auto] items-center gap-3 rounded-lg px-2.5 py-2.5 transition-colors duration-300 ${
                  isWaiting ? "bg-warn/10" : state === "run" ? "bg-s3" : ""
                }`}
              >
                <StepIcon state={state} human={s.human} />
                <div className="min-w-0">
                  <p className={`truncate text-sm ${state === "todo" ? "text-muted" : "text-fg"}`}>{s.t}</p>
                  <p className="truncate font-mono text-[11px] text-muted">{s.src}</p>
                </div>
                <div className="text-right font-mono text-[11px]">
                  {state === "done" && <span className={s.warn ? "text-warn" : "text-fg-2"}>{s.out}</span>}
                  {state === "run" && !s.human && (
                    <span className="text-accent">
                      working<span className="caret">_</span>
                    </span>
                  )}
                  {isWaiting && (
                    <span className="inline-flex items-center gap-2">
                      <span className="hidden text-warn sm:inline">R. Iyer</span>
                      <span className="rounded-md bg-fg px-2 py-1 font-sans text-[11px] font-medium text-bg">Approve</span>
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-4 py-2.5 font-mono text-[11px] text-muted">
        <span>
          {Math.min(done, steps.length)}/{steps.length} steps · deviation flags + policy citations
        </span>
        <span>3 weeks of review → 40-min QC</span>
      </div>
    </div>
  );
}

function StepIcon({ state, human }: { state: "done" | "run" | "todo"; human?: boolean }) {
  if (state === "done") {
    return (
      <svg viewBox="0 0 20 20" className="h-5 w-5 text-ok" aria-hidden>
        <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.14" />
        <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (state === "run") {
    return (
      <span className={`mx-auto block h-2 w-2 rounded-full live-dot ${human ? "bg-warn text-warn" : "bg-accent text-accent"}`} />
    );
  }
  return <span className="mx-auto block h-2 w-2 rounded-full border border-line-2" />;
}

"use client";

import { useEffect, useState } from "react";

// Illustrative sample data only.
const rows = [
  ["02 APR", "NEFT/ACME TRADERS/INV-2231", "", "4,82,000.00"],
  ["04 APR", "GST PAYMENT CBIC", "1,12,400.00", ""],
  ["07 APR", "SALARY BATCH APR", "6,40,000.00", ""],
  ["11 APR", "RTGS/SHREE STEELS/PO-88", "", "9,15,500.00"],
  ["15 APR", "EMI HDFC TL 0042", "1,85,300.00", ""],
  ["19 APR", "UPI/COLLECT/RETAIL", "", "72,940.00"],
  ["23 APR", "CHQ RETURN 004211", "25,000.00", ""],
];

const fields = [
  { k: "Avg. monthly balance", v: "₹ 18.4 L" },
  { k: "Credit / debit ratio", v: "1.27" },
  { k: "EMI obligations", v: "₹ 1.85 L / mo" },
  { k: "Bounced instruments", v: "1 flagged", warn: true },
  { k: "Top counterparties", v: "4 resolved" },
  { k: "Circular transactions", v: "None found" },
];

export function StatementParser() {
  const [step, setStep] = useState(0);
  const total = fields.length + 3;

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % total), 900);
    return () => clearInterval(id);
  }, [total]);

  const shown = Math.min(step, fields.length);
  const seconds = Math.min(step, fields.length) * 8 + (step > 0 ? 3 : 0);

  return (
    <div className="relative grid gap-3 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      {/* Source document */}
      <div className="relative overflow-hidden rounded-sm border border-ink/15 bg-[#fbf9f4] p-4 shadow-[0_30px_60px_-30px_rgba(20,19,15,0.35)]">
        <div className="mb-3 flex items-center justify-between">
          <span className="eyebrow text-muted">stmt_apr_fy26.pdf</span>
          <span className="eyebrow text-muted">p. 3 / 41</span>
        </div>
        <div className="space-y-[7px] font-mono text-[10.5px] leading-tight text-ink-2">
          <div className="grid grid-cols-[2.9rem_minmax(0,1fr)_4.3rem_4.3rem] gap-2 border-b border-ink/20 pb-1.5 text-muted">
            <span>DATE</span>
            <span>NARRATION</span>
            <span className="text-right">DEBIT</span>
            <span className="text-right">CREDIT</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-[2.9rem_minmax(0,1fr)_4.3rem_4.3rem] gap-2 transition-colors ${
                i === 6 && step >= 4 ? "bg-saffron/15 text-ink" : ""
              }`}
            >
              <span>{r[0]}</span>
              <span className="truncate">{r[1]}</span>
              <span className="text-right">{r[2]}</span>
              <span className="text-right">{r[3]}</span>
            </div>
          ))}
        </div>
        <div className="scanline pointer-events-none absolute inset-x-0 h-10 -translate-y-1/2 bg-gradient-to-b from-transparent via-saffron/20 to-transparent">
          <div className="absolute inset-x-0 top-1/2 h-px bg-saffron" />
        </div>
      </div>

      {/* Extracted output */}
      <div className="rounded-sm bg-night p-4 text-paper shadow-[0_30px_60px_-30px_rgba(20,19,15,0.6)]">
        <div className="mb-4 flex items-center justify-between">
          <span className="eyebrow text-paper/60">artha · extract</span>
          <span className="font-mono text-xs tabular-nums text-saffron">
            00:{String(seconds).padStart(2, "0")}s
          </span>
        </div>
        <ul className="space-y-2.5">
          {fields.map((f, i) => (
            <li
              key={f.k}
              className={`flex items-baseline justify-between gap-3 border-b border-paper/10 pb-2 transition-all duration-500 ${
                i < shown ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
              }`}
            >
              <span className="text-[12px] text-paper/60">{f.k}</span>
              <span className={`font-mono text-[12px] ${f.warn ? "text-saffron" : "text-paper"}`}>{f.v}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 font-mono text-[11px] text-paper/50">
          {shown === fields.length ? (
            <span className="text-[#9ad0a8]">✓ CAM draft ready for review</span>
          ) : (
            <span>
              parsing 12 months<span className="caret">_</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

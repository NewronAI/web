/* =========================================================
   Newron — schematic SVG illustration for the lending hero.
   On-brand: crisp geometry, indigo→orange gradient accents,
   node terminals echoing the logo. Theme-aware via
   stroke="currentColor" (svg color = var(--ink)). No text.
   Ported from the design bundle's illustrations.jsx.
   ========================================================= */
import React, { type ReactNode } from "react";

function Frame({ id, children }: { id: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 440 320" width="100%" role="img" aria-hidden="true"
      style={{ display: "block", color: "var(--ink)", maxWidth: 540, margin: "0 auto" }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3730a3" /><stop offset="0.55" stopColor="#4f46e5" /><stop offset="1" stopColor="#fb923c" />
        </linearGradient>
        <linearGradient id={id + "b"} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#60a5fa" /><stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="424" height="304" rx="16" fill="rgba(99,102,241,0.045)" stroke="currentColor" strokeOpacity="0.12" />
      {children}
    </svg>);
}

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
// faint / mid structural strokes
const f = (o: number) => ({ ...S, strokeOpacity: o });

// node terminal (logo echo)
function Node({ x, y, r = 5, grad }: { x: number; y: number; r?: number; grad?: string }) {
  return <circle cx={x} cy={y} r={r} fill={grad ? grad : "currentColor"} stroke="var(--bg)" strokeWidth="2" />;
}

// ── 01 Lending — credit memo + bar chart + check ─────────
export function IlloLending() {
  const id = "il-lend";
  return (
    <Frame id={id}>
      <g {...f(0.5)}>
        <rect x="42" y="54" width="190" height="212" rx="10" />
        <line x1="64" y1="86" x2="180" y2="86" /><line x1="64" y1="108" x2="210" y2="108" strokeOpacity="0.28" />
        <line x1="64" y1="128" x2="200" y2="128" strokeOpacity="0.28" /><line x1="64" y1="148" x2="160" y2="148" strokeOpacity="0.28" />
      </g>
      <rect x="64" y="74" width="74" height="6" rx="3" fill={`url(#${id})`} />
      {/* bar chart card */}
      <g {...f(0.5)}><rect x="258" y="120" width="138" height="146" rx="10" /></g>
      {[["188", "70"], ["218", "104"], ["248", "58"], ["278", "118"]].map(([x, h], i) =>
        <rect key={i} x={Number(x) + 76} y={246 - Number(h)} width="16" height={h} rx="3" fill={i === 3 ? `url(#${id})` : "currentColor"} fillOpacity={i === 3 ? 1 : 0.22} />)}
      {/* check badge */}
      <circle cx="300" cy="74" r="26" fill={`url(#${id})`} />
      <path d="M289 74 l8 8 l15 -16" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <g {...f(0.22)}><line x1="42" y1="206" x2="232" y2="206" /></g>
      <Node x={42} y={54} grad={`url(#${id})`} /><Node x={396} y={266} r={4} />
    </Frame>);
}

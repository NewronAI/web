"use client";
/* =========================================================
   Announcement ribbon — a single slim band above the nav.
   Currently: Nasscom AI Gamechangers 2026 — Challenger award, i.e. first
   place in the Startup category for the BFSI sector (24 Sep 2026).
   Shows for one month, then hides itself; delete the component
   usage in home.tsx / site-chrome.tsx once the window has passed.
   Height is exposed to CSS as --ribbon-h (see globals.css) so the
   hero, anchor offsets and the mobile menu account for it.
   ========================================================= */
import React, { useEffect, useState } from "react";
import { route } from "@/lib/route";

/* Presented 24 Sep 2026 → runs through end of day 24 Oct 2026 (IST). */
const RIBBON_UNTIL = Date.parse("2026-10-24T23:59:59+05:30");

/* [left, top, size, animation-delay] */
const SPARKLES: [string, string, number, string][] = [
  ["6%", "22%", 7, "0s"], ["14%", "62%", 5, "1.1s"], ["23%", "18%", 6, "2.3s"],
  ["34%", "66%", 5, "0.6s"], ["49%", "14%", 6, "1.8s"], ["63%", "64%", 5, "2.9s"],
  ["74%", "20%", 7, "0.3s"], ["85%", "60%", 5, "1.5s"], ["94%", "26%", 6, "2.6s"]];

export function AnnouncementRibbon() {
  /* Render on the server so there is no layout shift for the common
     case; the effect only ever removes it once the window has passed. */
  const [show, setShow] = useState(true);
  useEffect(() => { if (Date.now() > RIBBON_UNTIL) setShow(false); }, []);
  if (!show) return null;
  return (
    <a className="ribbon" href={route("press.html#releases")} aria-label="Newron wins the Challenger award, first place in the Startup category for the BFSI sector, at Nasscom AI Gamechangers 2026. Read the announcement.">
      {/* twinkling sparkles scattered across the band */}
      {SPARKLES.map(([left, top, size, delay], i) =>
        <span key={i} className="ribbon-sparkle" aria-hidden="true"
          style={{ left, top, width: size, height: size, animationDelay: delay }}>
          <svg viewBox="0 0 10 10"><path d="M5 0 6 4 10 5 6 6 5 10 4 6 0 5 4 4Z" fill="currentColor" /></svg>
        </span>)}
      <span className="ribbon-mark" aria-hidden="true">
        {/* trophy */}
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <path d="M4.5 2h7v3.5a3.5 3.5 0 0 1-7 0V2Z" fill="currentColor" />
          <path d="M4.5 3.2H2.2v1.2A2.4 2.4 0 0 0 4.7 6.8M11.5 3.2h2.3v1.2a2.4 2.4 0 0 1-2.5 2.4" stroke="currentColor" strokeWidth="1.2" />
          <path d="M8 9v2.6M5.2 14h5.6M6 14l.6-2.4h2.8L10 14" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="ribbon-badge">Winner</span>
      <span className="ribbon-line">
        <span className="ribbon-tag">Nasscom AI Gamechangers 2026</span>
        <span className="ribbon-text ribbon-text-full">Newron wins <strong>Challenger</strong>, first place in the Startup category for BFSI</span>
        <span className="ribbon-text ribbon-text-short">Newron wins <strong>first place</strong>, Startup · BFSI</span>
      </span>
      <span className="ribbon-cta">Read more <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg></span>
    </a>);
}

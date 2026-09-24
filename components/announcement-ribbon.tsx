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

export function AnnouncementRibbon() {
  /* Render on the server so there is no layout shift for the common
     case; the effect only ever removes it once the window has passed. */
  const [show, setShow] = useState(true);
  useEffect(() => { if (Date.now() > RIBBON_UNTIL) setShow(false); }, []);
  if (!show) return null;
  return (
    <a className="ribbon" href={route("press.html#releases")} aria-label="Newron wins the Challenger award, first place in the Startup category for the BFSI sector, at Nasscom AI Gamechangers 2026. Read the announcement.">
      <span className="ribbon-mark" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="5.2" r="3.6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M4.6 8.2 3.4 12.4 7 10.6l3.6 1.8-1.2-4.2" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="ribbon-tag">Nasscom AI Gamechangers 2026</span>
      <span className="ribbon-text ribbon-text-full">Newron wins <strong>Challenger</strong>, first place in the Startup category for BFSI</span>
      <span className="ribbon-text ribbon-text-short">Newron wins <strong>first place</strong>, Startup · BFSI</span>
      <span className="ribbon-cta">Read more <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg></span>
    </a>);
}

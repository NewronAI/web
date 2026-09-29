"use client";

import { useEffect, useRef, useState } from "react";
import { brand, nav, navCta } from "@/content/site";
import { ArrowIcon, LogoMark, SmartLink } from "./ui";

// Home sits inside the dark hero card; inner pages use the light bar.
const tones = {
  dark: {
    link: "text-white/50 hover:text-cream",
    open: "text-cream",
    bar: "border-white/10",
    panel: "border-white/10 bg-ink-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
    item: "text-cream/70 hover:bg-white/5 hover:text-cream",
    cta: "border-white/15 text-cream hover:bg-cream hover:text-ink",
    sheet: "border-white/10 bg-ink",
    sheetLabel: "text-white/40",
    sheetLink: "text-cream/80 hover:text-cream",
    sheetCta: "bg-cream text-ink",
  },
  light: {
    link: "text-ink/55 hover:text-ink",
    open: "text-ink",
    bar: "border-line",
    panel: "border-line bg-cream shadow-[0_20px_50px_rgba(17,17,15,0.12)]",
    item: "text-ink/70 hover:bg-black/[0.04] hover:text-ink",
    cta: "border-ink bg-ink text-cream hover:bg-ink/85",
    sheet: "border-line bg-paper",
    sheetLabel: "text-muted",
    sheetLink: "text-ink/80 hover:text-ink",
    sheetCta: "bg-ink text-cream",
  },
};
const linkBase = "text-[11px] leading-[14px] font-semibold tracking-[0.06em] transition-colors";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      aria-hidden
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M1.5 3L4 5.5L6.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function Nav({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const t = tones[tone];
  const linkCls = `${linkBase} ${t.link}`;
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Close menus on outside click or Escape.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <nav
      ref={ref}
      className={`relative z-20 flex items-center justify-between gap-4 border-b ${t.bar} px-5 py-4 md:px-12 md:py-5`}
    >
      <SmartLink href="/" className="inline-flex items-center gap-2.5 text-[16px] font-semibold tracking-[-0.035em]">
        <LogoMark className="h-[22px]" />
        {brand}
      </SmartLink>

      {/* Desktop */}
      <div className="hidden items-center gap-8 lg:flex">
        <ul className="flex items-center gap-7">
          {nav.map((item) =>
            item.children ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  type="button"
                  aria-expanded={open === item.label}
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                  className={`flex items-center gap-1.5 ${linkCls} ${open === item.label ? t.open : ""}`}
                >
                  {item.label}
                  <Chevron open={open === item.label} />
                </button>
                {/* pt bridges the hover gap between trigger and panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                    open === item.label ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <ul className={`w-[240px] rounded-2xl border p-2 ${t.panel}`}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <SmartLink
                          href={child.href}
                          className={`group flex items-center justify-between rounded-xl px-4 py-3 text-[13px] tracking-[-0.02em] transition-colors ${t.item}`}
                        >
                          {child.label}
                          <ArrowIcon className="opacity-50 transition-transform duration-300 group-hover:rotate-45 group-hover:opacity-100" />
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.label} className="flex">
                <SmartLink href={item.href ?? "/"} className={`block ${linkCls}`}>
                  {item.label}
                </SmartLink>
              </li>
            ),
          )}
        </ul>
        <SmartLink
          href={navCta.href}
          className={`group inline-flex h-9 items-center gap-2.5 rounded-full border px-4 text-[12px] tracking-[-0.02em] transition-colors ${t.cta}`}
        >
          {navCta.label}
          <ArrowIcon className="transition-transform duration-300 group-hover:rotate-45" />
        </SmartLink>
      </div>

      {/* Mobile / tablet */}
      <button
        type="button"
        className={`lg:hidden ${linkCls}`}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        {mobileOpen ? "Close" : "Menu"}
      </button>
      <div
        className={`absolute inset-x-0 top-full border-b ${t.sheet} px-5 pb-6 transition-all duration-300 md:px-12 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {nav.map((item) => (
          <div key={item.label} className={`border-t ${t.bar} py-4 first:border-t-0`}>
            {item.children ? (
              <>
                <p className={`eyebrow ${t.sheetLabel}`}>{item.label}</p>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <SmartLink href={child.href} className={`text-[14px] tracking-[-0.02em] ${t.sheetLink}`}>
                        {child.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <SmartLink href={item.href ?? "/"} onClick={() => setMobileOpen(false)} className={`text-[14px] tracking-[-0.02em] ${t.sheetLink}`}>
                {item.label}
              </SmartLink>
            )}
          </div>
        ))}
        <SmartLink
          href={navCta.href}
          className={`mt-2 inline-flex h-10 items-center gap-2.5 rounded-full px-5 text-[13px] tracking-[-0.02em] ${t.sheetCta}`}
        >
          {navCta.label}
          <ArrowIcon />
        </SmartLink>
      </div>
    </nav>
  );
}

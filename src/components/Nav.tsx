"use client";

import { useEffect, useRef, useState } from "react";
import { brand, nav, navCta } from "@/content/site";
import { ArrowIcon, SmartLink } from "./ui";

const linkCls =
  "text-[10px] leading-[13px] font-semibold tracking-[0.12em] text-white/50 transition-colors hover:text-cream";

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

export function Nav() {
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
      className="relative z-20 flex items-center justify-between gap-4 border-b border-white/10 px-5 py-6 md:px-12 md:py-[34px]"
    >
      <SmartLink href="/" className="text-[16px] font-semibold tracking-[-0.035em]">
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
                  className={`flex items-center gap-1.5 ${linkCls} ${open === item.label ? "text-cream" : ""}`}
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
                  <ul className="w-[240px] rounded-2xl border border-white/10 bg-ink-2 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <SmartLink
                          href={child.href}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 text-[12px] tracking-[-0.01em] text-cream/70 transition-colors hover:bg-white/5 hover:text-cream"
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
          className="group inline-flex h-9 items-center gap-2.5 rounded-full border border-white/15 px-4 text-[11px] tracking-[-0.01em] text-cream transition-colors hover:bg-cream hover:text-ink"
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
        className={`absolute inset-x-0 top-full border-b border-white/10 bg-ink px-5 pb-6 transition-all duration-300 md:px-12 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {nav.map((item) => (
          <div key={item.label} className="border-t border-white/10 py-4 first:border-t-0">
            {item.children ? (
              <>
                <p className="eyebrow text-white/40">{item.label}</p>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <SmartLink href={child.href} className="text-[13px] text-cream/80 hover:text-cream">
                        {child.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <SmartLink href={item.href ?? "/"} onClick={() => setMobileOpen(false)} className="text-[13px] text-cream/80">
                {item.label}
              </SmartLink>
            )}
          </div>
        ))}
        <SmartLink
          href={navCta.href}
          className="mt-2 inline-flex h-10 items-center gap-2.5 rounded-full bg-cream px-5 text-[12px] text-ink"
        >
          {navCta.label}
          <ArrowIcon />
        </SmartLink>
      </div>
    </nav>
  );
}

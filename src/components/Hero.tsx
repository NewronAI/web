"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Link as LinkT } from "@/content/pages/types";
import { Nav } from "./Nav";
import { PillButton, SmartLink } from "./ui";

export type HeroProps = {
  title: string[];
  body: string;
  primary: LinkT;
  secondary?: LinkT;
  steps?: { tag: string; word: string }[];
  /** Breadcrumb trail shown above the title on inner pages. */
  crumbs?: string[];
};

export function Hero({ title, body, primary, secondary, steps, crumbs }: HeroProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const stepCount = steps?.length ?? 0;
  // Long headlines step down a size on small screens so they never overflow.
  const longest = Math.max(...title.map((l) => l.length));
  const mobileSize = longest > 13 ? "text-[34px]" : "text-[44px]";

  // Card grows from an inset panel to full-bleed as the page scrolls.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = cardRef.current;
      if (!el) return;
      const vw = window.innerWidth;
      const mobile = vw < 768;
      const p = Math.min(1, window.scrollY / 700);
      // Laptop-width screens start wider so the headline has room.
      const start = mobile ? 96 : vw < 1680 ? 78 : 64;
      el.style.width = `${start + (100 - start) * p}%`;
      el.style.borderRadius = `${24 * (1 - p)}px`;
      el.style.marginTop = `${(mobile ? 8 : 16) * (1 - p)}px`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!stepCount) return;
    const id = setInterval(() => setActive((a) => (a + 1) % stepCount), 2200);
    return () => clearInterval(id);
  }, [stepCount]);

  const cols = { 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5" }[stepCount] ?? "md:grid-cols-4";

  return (
    <header id="top" className="relative">
      <div
        ref={cardRef}
        className="relative mx-auto mt-4 max-w-[2200px] overflow-hidden rounded-3xl bg-ink text-cream"
        style={{ width: "64%" }}
      >
        <Nav />

        <div
          className={`flex flex-col px-5 pt-20 pb-6 md:px-10 md:pt-[120px] ${
            steps ? "min-h-[737px]" : "min-h-[600px] pb-16 md:pb-20"
          }`}
        >
          {crumbs && (
            <p className="flex flex-wrap items-center gap-2 text-[10px] leading-[13px] font-semibold tracking-[0.12em] text-white/45 uppercase">
              <Link href="/" className="transition-colors hover:text-cream">
                Home
              </Link>
              {crumbs.map((c) => (
                <span key={c} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  <span className="last:text-cream/70">{c}</span>
                </span>
              ))}
            </p>
          )}

          <h1
            className={`${crumbs ? "mt-10" : "mt-6"} font-mono ${mobileSize} leading-none tracking-[-0.08em] sm:text-[64px] lg:text-[100px]`}
          >
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-16 flex flex-col gap-10 md:mt-[72px] md:flex-row md:items-end md:justify-between">
            <p className="max-w-[340px] font-mono text-[15px] leading-[1.55] text-cream/55 md:text-[16px]">{body}</p>
            <div className="flex flex-wrap items-center gap-5">
              <PillButton href={primary.href}>{primary.label}</PillButton>
              {secondary && (
                <SmartLink
                  href={secondary.href}
                  className="text-[12px] font-medium tracking-[-0.01em] underline-offset-4 hover:underline"
                >
                  {secondary.label}
                </SmartLink>
              )}
            </div>
          </div>

          {steps && (
            <>
              {/* Step rail */}
              <div className="relative mt-16 h-px bg-white/15">
                <div
                  className="absolute top-0 left-0 h-px bg-accent/80 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ width: `${((active + 0.15) / stepCount) * 100}%` }}
                />
                <div
                  className="absolute -top-[4px] size-[9px] -translate-x-1/2 rounded-full bg-accent transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ left: `${((active + 0.15) / stepCount) * 100}%` }}
                />
              </div>
              <ol className={`mt-6 grid grid-cols-1 ${cols}`}>
                {steps.map((step, i) => (
                  <li
                    key={step.word}
                    className={`border-white/10 py-3 transition-opacity duration-500 md:border-l md:px-6 md:py-0 md:first:border-l-0 md:first:pl-0 ${
                      i > 0 ? "border-t md:border-t-0" : ""
                    } ${active === i ? "opacity-100" : "opacity-40"}`}
                  >
                    <div className="flex justify-between gap-3 text-[10px] leading-[13px] font-semibold tracking-[0.12em] uppercase">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-right">{step.tag}</span>
                    </div>
                    <p className="mt-6 text-[28px] leading-[0.95] tracking-[-0.055em] md:mt-10 md:text-[34px] xl:text-[43px]">
                      {step.word}
                    </p>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Roll } from "@/components/kit";
import { CONTACT_HREF, nav } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src="/newron-logo.svg" alt="" width={32} height={32} priority className="h-8 w-8" />
      <span className="text-[1.3rem] font-semibold tracking-tight">Newron</span>
    </span>
  );
}

function Trophy({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" />
    </svg>
  );
}

// Same copy and destination as the award ribbon on newron.ai.
const AWARD = {
  href: "/press",
  label:
    "Newron wins the Challenger award, first place in the Startup category for the BFSI sector, at Nasscom AI Gamechangers 2026. Read the announcement.",
};

/** Award pill at the top of the homepage hero — the site's single award announcement. */
export function AwardPill() {
  return (
    <Link
      href={AWARD.href}
      aria-label={AWARD.label}
      className="group inline-flex max-w-full items-center gap-2 rounded-full border border-line-2 bg-s1 py-1 pl-1 pr-3 text-sm shadow-[0_6px_20px_-12px_rgb(0_0_0/0.35)] transition hover:border-fg/40"
    >
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-pop px-2.5 py-1 text-xs font-semibold text-pop-fg">
        <Trophy className="h-3.5 w-3.5" />
        Winner
      </span>
      <span className="truncate text-fg-2">
        <span className="text-fg">Nasscom AI Gamechangers 2026</span>
        <span className="hidden sm:inline"> · First place, Startup · BFSI</span>
      </span>
      <span className="inline-flex shrink-0 items-center gap-1 text-fg">
        <span className="hidden font-medium sm:inline">Read more</span>
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // After the Mannas navbar: full width at rest, narrower with a shadow while scrolling down, back on scroll up.
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 24) setCompact(false);
      else if (Math.abs(y - last) > 4) setCompact(y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header className="sticky top-0 z-50 px-2 pt-2">
      <nav
        aria-label="Main"
        className={`mx-auto rounded-md border bg-bg transition-[max-width,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          compact && !open
            ? "max-w-[84rem] border-transparent shadow-[0_10px_40px_-20px_rgb(18_18_17/0.35)]"
            : "max-w-full border-line"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" aria-label="Newron home" onClick={() => setOpen(false)} className="justify-self-start">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((l) => {
              const on = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={on ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 text-[15px] text-fg transition-colors hover:bg-s2 ${on ? "bg-s2" : ""}`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center justify-end gap-3">
            <a
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden overflow-hidden rounded-full bg-cta px-5 py-2.5 text-sm font-medium text-cta-fg sm:inline-flex"
            >
              <Roll>Talk to Us</Roll>
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-fg/20 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 h-[1.5px] w-4 bg-fg transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-[1.5px] w-4 bg-fg transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu: large links, each numbered */}
        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="overflow-hidden px-4 sm:px-6" inert={!open}>
            {nav.map((l, i) => (
              <li key={l.href} className="border-t border-line first:mt-2">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="flex items-baseline justify-between py-4 font-serif text-4xl tracking-[-0.04em]"
                >
                  {l.label}
                  <span className="font-mono text-[11px] tracking-[0.1em] text-accent">0{i + 1}</span>
                </Link>
              </li>
            ))}
            <li className="border-t border-line pt-5 pb-6">
              <a
                href={CONTACT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-full bg-cta px-5 py-3 text-sm font-medium text-cta-fg"
              >
                Talk to Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

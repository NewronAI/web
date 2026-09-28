"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  href: "/press#releases",
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
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cta px-2.5 py-1 text-xs font-semibold text-cta-fg">
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <nav
        aria-label="Main"
        className={`mx-auto max-w-6xl rounded-2xl border border-line-2 bg-bg/85 backdrop-blur-xl backdrop-saturate-150 transition-[box-shadow] duration-300 ${
          scrolled || open ? "shadow-[0_12px_32px_-16px_rgb(0_0_0/0.28)]" : "shadow-none"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-6 pl-5 pr-2.5">
          <Link href="/" aria-label="Newron home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {nav.map((l) => {
              const on = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={on ? "page" : undefined}
                    className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-s2 hover:text-fg ${
                      on ? "bg-s2 text-fg" : "text-fg-2"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl border border-fg bg-cta px-4 py-2.5 text-sm font-medium text-cta-fg transition hover:brightness-95 sm:inline-block"
            >
              Talk to Us
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 h-[1.5px] w-5 bg-fg transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-[1.5px] w-5 bg-fg transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <ul className="border-t border-line px-5 pb-4 pt-1 lg:hidden">
            {nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="flex items-center justify-between border-b border-line py-3.5 font-serif text-2xl"
                >
                  {l.label}
                  <span className="text-muted">→</span>
                </Link>
              </li>
            ))}
            <li>
              <a
                href={CONTACT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3.5 font-serif text-2xl"
              >
                Talk to Us
                <span className="text-muted">↗</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

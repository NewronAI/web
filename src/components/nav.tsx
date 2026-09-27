"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#lending", label: "Lending" },
  { href: "#artha", label: "Artha" },
  { href: "#insurance", label: "Insurance" },
  { href: "#governance", label: "Governance" },
  { href: "#services", label: "Services" },
  { href: "#customers", label: "Customers" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden>
        <path d="M7 21V7l14 14V7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="7" r="2.6" fill="#ff6c4c" />
      </svg>
      <span className="text-[1.3rem] font-semibold tracking-tight">Newron</span>
    </span>
  );
}

export function Announcement() {
  return (
    <div className="sheet-teal bg-bg text-fg">
      <p className="mx-auto max-w-7xl px-5 py-3 text-center text-sm font-medium md:px-8">
        Newron wins first place at Nasscom AI Gamechangers 2026 · Startup, BFSI
      </p>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto max-w-5xl rounded-2xl border border-line-2 bg-bg/90 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between gap-6 pl-5 pr-2.5">
          <Link href="/" aria-label="Newron home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-lg px-3 py-2 text-sm text-fg-2 transition-colors hover:bg-s2 hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-xl border border-fg bg-cta px-4 py-2.5 text-sm font-medium text-cta-fg transition hover:brightness-95 sm:inline-block"
            >
              Talk to us
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
            {[...links, { href: "#contact", label: "Talk to us" }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-3.5 font-serif text-2xl last:border-0"
                >
                  {l.label}
                  <span className="text-muted">→</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

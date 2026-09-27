"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
        <rect x="1" y="1" width="26" height="26" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 20V8l12 12V8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="8" r="2.2" fill="var(--saffron)" />
      </svg>
      <span className="font-serif text-[1.65rem] leading-none tracking-tight">Newron</span>
    </span>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-rule bg-paper/90 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Newron home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-2 underline-offset-[6px] transition hover:text-ink hover:underline decoration-saffron"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-saffron sm:inline-block"
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
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-rule px-5 pb-6 pt-2 lg:hidden">
          {[...links, { href: "#contact", label: "Talk to us" }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-rule py-4 font-serif text-2xl"
              >
                {l.label}
                <span className="text-saffron">→</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

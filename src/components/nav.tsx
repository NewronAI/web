"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT_HREF } from "@/lib/site";

const links = [
  { href: "#agents", label: "Agents" },
  { href: "#how", label: "How it works" },
  { href: "#integrations", label: "Integrations" },
  { href: "#governance", label: "Governance" },
  { href: "#customers", label: "Customers" },
  { href: "#builders", label: "Builders" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden>
        <rect x="1" y="1" width="26" height="26" rx="7" fill="var(--s3)" stroke="var(--line-2)" />
        <path d="M9 19V9l10 10V9" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="19" cy="9" r="2" fill="var(--accent)" />
      </svg>
      <span className="text-[1.05rem] font-semibold tracking-tight">
        Newron <span className="font-normal text-fg-2">AgentHub</span>
      </span>
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" aria-label="Newron AgentHub home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-md px-3 py-2 text-sm text-fg-2 transition-colors hover:bg-s2 hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT_HREF}
            className="hidden rounded-lg px-3.5 py-2 text-sm text-fg-2 transition-colors hover:text-fg sm:inline-block"
          >
            Book a demo
          </a>
          <a
            href="#agents"
            className="hidden rounded-lg bg-accent px-3.5 py-2 text-sm font-medium text-bg transition hover:brightness-110 sm:inline-block"
          >
            Browse agents
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-5 bg-fg transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-5 bg-fg transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-5 pb-6 pt-2 lg:hidden">
          {[...links, { href: CONTACT_HREF, label: "Book a demo" }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-4 text-lg"
              >
                {l.label}
                <span className="text-accent">→</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

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

export function Announcement() {
  return (
    <div className="sheet-teal bg-bg text-fg">
      <Link
        href="/press#releases"
        className="mx-auto block max-w-7xl px-5 py-3 text-center text-sm font-medium underline-offset-4 hover:underline md:px-8"
      >
        Newron wins first place at Nasscom AI Gamechangers 2026 · Startup, BFSI
      </Link>
    </div>
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

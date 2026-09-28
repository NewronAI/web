import Link from "next/link";
import { Logo } from "@/components/nav";
import { CONTACT_HREF, footer, legal } from "@/lib/site";

export function Footer() {
  return (
    <footer className="sheet sheet-dark">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
        <div>
          <Link href="/" aria-label="Newron home">
            <Logo />
          </Link>
          <p className="mt-5 max-w-xs text-sm text-fg-2">
            Newron is an applied-AI company building production systems for regulated industries. Bengaluru, India.
          </p>
          <a
            href={CONTACT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-line-2 px-4 py-2.5 text-sm text-fg transition-colors hover:bg-s2"
          >
            Book a call ↗
          </a>
          <a
            href="https://github.com/NewronAI"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-sm text-fg-2 transition-colors hover:text-fg"
          >
            GitHub ↗
          </a>
        </div>
        {footer.map((c) => (
          <div key={c.h}>
            <p className="label text-muted">{c.h}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.l.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-fg-2 transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl border-t border-line px-5 py-6 md:px-8">
        <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {legal.map((l) => (
            <Link key={l.href} href={l.href} className="text-fg-2 underline-offset-4 transition-colors hover:text-fg hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mt-5 flex flex-wrap justify-between gap-4 font-mono text-[11px] text-muted">
          <span>© {new Date().getFullYear()} Newron AI Technologies Pvt. Ltd.</span>
          <span>NVIDIA Inception Partner · ISO 27001 aligned · SOC 2 in progress · Bengaluru, India</span>
        </div>
      </div>
    </footer>
  );
}

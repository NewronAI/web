import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PrimaryCTA, SecondaryCTA } from "@/components/kit";
import { CONTACT_HREF } from "@/lib/site";

/** Hero for inner pages: breadcrumb, kicker, headline, one line, CTAs and an optional visual. */
export function PageHero({
  crumb,
  kicker,
  title,
  line,
  primary = { href: CONTACT_HREF, label: "Talk to Us" },
  secondary,
  children,
}: {
  /** Middle breadcrumb; without an href it renders as plain text. */
  crumb?: { href?: string; label: string };
  kicker: React.ReactNode;
  title: React.ReactNode;
  line?: React.ReactNode;
  primary?: { href: string; label: string } | null;
  secondary?: { href: string; label: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative pt-14 pb-36 md:pt-20 md:pb-48">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <nav aria-label="Breadcrumb" className="rise label flex justify-center gap-2 text-muted">
            <Link href="/" className="hover:text-fg">
              Home
            </Link>
            {crumb && (
              <>
                <span aria-hidden>/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-fg">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </>
            )}
            <span aria-hidden>/</span>
            <span className="text-fg-2">{kicker}</span>
          </nav>
          <h1 className="mt-6 text-balance font-serif text-[2.9rem] leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[5rem]">
            {title}
          </h1>
          {line && (
            <p className="rise mx-auto mt-6 max-w-2xl text-balance text-lg text-fg-2" style={{ animationDelay: "120ms" }}>
              {line}
            </p>
          )}
          {(primary || secondary) && (
            <div className="rise mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: "220ms" }}>
              {primary && <PrimaryCTA href={primary.href}>{primary.label}</PrimaryCTA>}
              {secondary && <SecondaryCTA href={secondary.href}>{secondary.label}</SecondaryCTA>}
            </div>
          )}
        </div>
        {children && (
          <div className="rise mx-auto mt-16 max-w-6xl" style={{ animationDelay: "320ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

/** Grid of short cards: title + one line, optional tag and link. */
export function CardGrid({
  items,
  cols = 3,
}: {
  items: { t: React.ReactNode; d?: React.ReactNode; tag?: string; href?: string }[];
  cols?: 2 | 3 | 4;
}) {
  const grid = cols === 2 ? "md:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";
  return (
    <div className={`grid gap-4 ${grid}`}>
      {items.map((it, i) => {
        const body = (
          <div className="group flex h-full flex-col gap-10 rounded-3xl border border-line bg-s1 p-7 transition-colors duration-300 hover:border-line-2 hover:bg-s2">
            <span className="flex items-center justify-between font-mono text-xs text-muted">
              <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
              {it.tag && <span>{it.tag}</span>}
            </span>
            <div className="mt-auto">
              <h3 className="font-serif text-2xl leading-tight tracking-[-0.03em] md:text-[1.7rem]">{it.t}</h3>
              {it.d && <p className="mt-2 text-sm text-fg-2">{it.d}</p>}
              {it.href && <p className="mt-4 text-sm text-fg underline decoration-line-2 underline-offset-4">Learn more</p>}
            </div>
          </div>
        );
        return (
          <Reveal key={i} delay={(i % 3) * 80}>
            {it.href ? (
              <Link href={it.href} className="block h-full">
                {body}
              </Link>
            ) : (
              body
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

/** Big figures in a ruled band. */
export function StatRow({ items }: { items: { n: React.ReactNode; l: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-y-10 border-y border-line py-12 lg:grid-flow-col lg:auto-cols-fr lg:divide-x lg:divide-line">
      {items.map((o, i) => (
        <Reveal key={o.l} delay={i * 80} className="px-4 text-center">
          <p className="flex justify-center font-serif text-5xl tabular-nums tracking-[-0.04em] md:text-6xl">{o.n}</p>
          <p className="mt-2 text-sm text-muted">{o.l}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** "Keep exploring" cross-links shown near the end of every inner page. */
export function RelatedLinks({ items }: { items: { href: string; kicker: string; t: string }[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {items.map((it) => (
        <Link
          key={it.href}
          href={it.href}
          className="group flex items-center justify-between gap-6 rounded-2xl border border-line px-6 py-5 transition-colors hover:border-line-2 hover:bg-s1"
        >
          <span>
            <span className="label block text-muted">{it.kicker}</span>
            <span className="mt-1 block text-lg font-medium">{it.t}</span>
          </span>
          <span aria-hidden className="text-muted transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}

/** Long-form layout for legal and policy pages, with a sticky table of contents on desktop. */
export function LongForm({
  toc,
  date,
  children,
}: {
  toc: { id: string; label: string }[];
  date?: { label: string; value: string };
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-36 md:px-8 md:pb-48 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
      <aside className="hidden lg:block">
        <nav aria-label="On this page" className="sticky top-28">
          <p className="label text-muted">On this page</p>
          <ul className="mt-4 space-y-2 border-l border-line text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="-ml-px block border-l border-transparent pl-4 text-fg-2 hover:border-fg hover:text-fg">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <article className="longform max-w-[44rem]">
        {date && (
          <p className="label mb-10 text-muted">
            {date.label} · {date.value}
          </p>
        )}
        {children}
      </article>
    </div>
  );
}

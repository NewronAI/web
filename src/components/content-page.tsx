import { Head, PrimaryCTA, SecondaryCTA } from "@/components/kit";
import { LongForm, PageHero, RelatedLinks, StatRow } from "@/components/page-kit";
import { Reveal } from "@/components/reveal";
import { Blocks, Rich } from "@/components/rich";
import { Check } from "@/components/ui";
import { Dated, Kit, Repos, Roles, Status } from "@/components/content-blocks";
import type { ContentPage, Cta, Section } from "@/content/types";

const TONES = ["sheet-dark", "", "sheet-dawn", ""] as const;

const groupHref: Record<string, string> = {
  Solutions: "/lending-intelligence",
  Industries: "/banks",
  Company: "/about",
  Legal: "/privacy",
};

/** Renders any content page (solutions, industries, company, trust and legal) from its content file. */
export function ContentPageView({
  page,
  visual,
  related,
}: {
  page: ContentPage;
  visual?: React.ReactNode;
  related: { href: string; kicker: string; t: string }[];
}) {
  const [primary, secondary] = page.hero.ctas;
  return (
    <>
      <PageHero
        crumb={{ href: groupHref[page.hero.group] ?? "/", label: page.hero.group }}
        kicker={page.hero.kicker}
        title={<Rich text={page.hero.title} accent />}
        line={page.hero.line}
        primary={primary ? { href: primary.href, label: primary.label } : null}
        secondary={secondary && { href: secondary.href, label: secondary.label }}
      >
        {visual}
      </PageHero>

      {page.sections.map((s, i) =>
        s.longform ? (
          // Long-form prose always sits on cream for readability.
          <section key={s.id ?? i} id={s.id ?? undefined} className="sheet scroll-mt-24 pt-20 md:pt-28">
            <LongForm
              toc={s.longform.items.map((it) => ({ id: it.id, label: it.toc }))}
              date={s.longform.date}
            >
              {s.longform.intro && (
                <p className="text-lg">
                  <Rich text={s.longform.intro} />
                </p>
              )}
              {s.longform.items.map((it) => (
                <div key={it.id}>
                  <h2 id={it.id}>{it.h}</h2>
                  <Blocks lines={it.body} />
                </div>
              ))}
            </LongForm>
          </section>
        ) : (
          <section key={s.id ?? i} id={s.id ?? undefined} className={`sheet ${TONES[i % TONES.length]} scroll-mt-24`}>
            <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
              <SectionBody s={s} />
            </div>
          </section>
        ),
      )}

      <section className="sheet sheet-teal">
        <div className="mx-auto max-w-7xl px-5 pt-24 pb-36 text-center md:px-8 md:pt-32 md:pb-44">
          {page.cta && (
            <Reveal className="mb-24">
              {page.cta.kicker && <p className="label text-accent">{page.cta.kicker}</p>}
              {page.cta.title && (
                <h2 className="mx-auto mt-5 max-w-4xl text-balance font-serif text-5xl leading-[0.98] tracking-[-0.045em] md:text-7xl">
                  <Rich text={page.cta.title} accent />
                </h2>
              )}
              {page.cta.line && <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-fg-2">{page.cta.line}</p>}
              <CtaRow ctas={page.cta.ctas} className="mt-9 justify-center" />
            </Reveal>
          )}
          <div className="mx-auto max-w-5xl text-left">
            <p className="label mb-4 text-muted">Keep exploring</p>
            <RelatedLinks items={related} />
          </div>
        </div>
      </section>
    </>
  );
}

function CtaRow({ ctas, className = "" }: { ctas: Cta[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {ctas.map((c) =>
        c.variant === "primary" ? (
          <PrimaryCTA key={c.label} href={c.href}>
            {c.label}
          </PrimaryCTA>
        ) : (
          <SecondaryCTA key={c.label} href={c.href}>
            {c.label}
          </SecondaryCTA>
        ),
      )}
    </div>
  );
}

function SectionBody({ s }: { s: Section }) {
  const kicker = s.n ? (
    <>
      <span className="text-accent">{s.n}</span> · {s.kicker}
    </>
  ) : (
    s.kicker
  );

  // FAQ: heading on the left, collapsible answers on the right.
  if (s.faq) {
    return (
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="label text-muted">{kicker}</p>
          <h2 className="mt-5 font-serif text-5xl leading-[1] tracking-[-0.045em] md:text-6xl">
            <Rich text={s.title ?? ""} accent />
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="divide-y divide-line border-y border-line">
            {s.faq.map((f) => (
              <li key={f.q}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden
                      className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line-2 text-sm transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-fg-2">
                    <Rich text={f.a} />
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    );
  }

  // Pull quote.
  if (s.quote) {
    return (
      <Reveal className="mx-auto max-w-5xl text-center text-balance">
        <blockquote className="font-serif text-3xl leading-[1.15] tracking-[-0.03em] md:text-5xl">“{s.quote.text}”</blockquote>
        <p className="mt-8 text-sm text-fg-2">
          <span className="text-fg">{s.quote.name}</span> · {s.quote.role}
        </p>
      </Reveal>
    );
  }

  return (
    <>
      <Head kicker={kicker} title={<Rich text={s.title ?? ""} accent />} line={s.line} />
      <div className="mt-14">
        {s.prose && (
          <Reveal className="mx-auto max-w-4xl text-center text-balance">
            {s.prose.map((t) => (
              <p key={t} className="font-serif text-3xl leading-[1.2] tracking-[-0.03em] md:text-[2.6rem]">
                <Rich text={t} accent />
              </p>
            ))}
          </Reveal>
        )}
        {s.roles && <Roles roles={s.roles} />}
        {s.dated && <Dated items={s.dated} />}
        {s.repos && <Repos repos={s.repos} />}
        {s.status && <Status items={s.status} />}
        {s.kit && <Kit kit={s.kit} />}
        {s.list && (
          <Reveal className="mx-auto max-w-3xl">
            <ul className="divide-y divide-line border-y border-line">
              {s.list.map((t) => (
                <li key={t} className="flex gap-4 py-5 text-fg-2">
                  <Check className="mt-1" />
                  <span>
                    <Rich text={t} />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
        {s.cards && <Cards cards={s.cards} />}
        {s.groups && <Groups groups={s.groups} />}
        {s.steps && <Steps steps={s.steps} />}
        {s.stats && (
          <div className={s.groups ? "mt-16" : ""}>
            {s.stats.caption && <p className="label mb-6 text-center text-muted">{s.stats.caption}</p>}
            <StatRow items={s.stats.items} />
          </div>
        )}
      </div>
    </>
  );
}

function Cards({ cards }: { cards: NonNullable<Section["cards"]> }) {
  const cols = cards.length === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-4 ${cols}`}>
      {cards.map((c, i) => (
        <Reveal key={c.t} delay={(i % 3) * 80}>
          <article className="flex h-full flex-col gap-10 rounded-3xl border border-line bg-s1 p-7 transition-colors duration-300 hover:border-line-2 hover:bg-s2">
            <span className="flex items-center justify-between">
              <span className="label text-muted">{c.tag}</span>
              <span className="font-mono text-xs text-accent">{c.n}</span>
            </span>
            <div className="mt-auto">
              <h3 className="font-serif text-2xl leading-tight tracking-[-0.03em] md:text-[1.7rem]">{c.t}</h3>
              {c.d && <p className="mt-2 text-sm text-fg-2">{c.d}</p>}
              {c.bullets.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {c.bullets.map((b) => (
                    <li key={b} className="rounded-full border border-line-2 px-2.5 py-1 text-xs text-fg-2">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function Groups({ groups }: { groups: NonNullable<Section["groups"]> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((g) => (
        <Reveal key={g.h}>
          <div className="h-full rounded-3xl border border-line bg-s1 p-7">
            <p className="flex items-baseline justify-between">
              <span className="font-serif text-3xl tracking-[-0.03em]">{g.h}</span>
              <span className="label text-muted">{g.sub}</span>
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li key={it} className="rounded-full border border-line-2 bg-bg px-3.5 py-1.5 text-sm">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Steps({ steps }: { steps: NonNullable<Section["steps"]> }) {
  // "01"–"06" are point numbers; years and step labels read as a sequence.
  const numbered = steps.every((s) => /^\d{1,2}$/.test(s.label));

  // Principles / trust points: a quiet 2×2 grid.
  if (numbered) {
    return (
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {steps.map((s, i) => (
          <Reveal key={s.t} delay={(i % 2) * 80} className="flex gap-5 border-t border-line pt-6">
            <span className="font-mono text-xs text-accent">{s.label}</span>
            <div>
              <h3 className="text-xl font-medium tracking-[-0.02em]">{s.t}</h3>
              {s.d && <p className="mt-2 text-fg-2">{s.d}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    );
  }

  // Sequences (steps, timestamps, weeks, stages): a timeline.
  const cols = steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5";
  return (
    <div className={`relative grid gap-8 ${cols} lg:gap-6`}>
      <span aria-hidden className="absolute left-0 right-0 top-[0.95rem] hidden h-px bg-line-2 lg:block" />
      {steps.map((s, i) => (
        <Reveal key={s.t} delay={i * 70} className="relative">
          <span className="relative inline-flex items-center gap-2 rounded-full border border-line-2 bg-bg px-3 py-1 font-mono text-[11px] text-accent">
            {s.label}
          </span>
          <h3 className="mt-5 text-lg font-medium tracking-[-0.02em]">{s.t}</h3>
          {s.d && <p className="mt-2 text-sm text-fg-2">{s.d}</p>}
        </Reveal>
      ))}
    </div>
  );
}

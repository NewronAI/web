"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { Block } from "@/content/pages/types";
import { ArrowIcon, Reveal, SmartLink } from "../ui";

// Inner pages read like a reference document: a sticky index on the left and
// compact, bordered sections on the right. None of these reuse the home designs.

const pad = (i: number) => String(i + 1).padStart(2, "0");

type Entry = { id: string; label: string };

/** Index entries: one per block, or one per section for long-form prose. */
function entriesFor(blocks: Block[]): Entry[] {
  return blocks.flatMap((block, i): Entry[] => {
    if (block.type === "prose") return block.sections.map((s, j) => ({ id: `s-${i}-${j}`, label: s.heading }));
    const label =
      "eyebrow" in block && block.eyebrow ? block.eyebrow : block.type === "quote" ? "In their words" : "By the numbers";
    return [{ id: `s-${i}`, label }];
  });
}

function Head({ n, eyebrow, title, body }: { n: string; eyebrow: string; title?: string[]; body?: string }) {
  return (
    <Reveal>
      <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
        <span className="text-ink">{n}</span>
        <span className="h-px w-6 bg-line" aria-hidden />
        {eyebrow}
      </p>
      {title && (
        <h2 className="mt-5 max-w-[760px] font-display text-[30px] leading-[1.08] font-medium tracking-[-0.04em] md:text-[40px]">
          {title.join(" ")}
        </h2>
      )}
      {body && <p className="mt-5 max-w-[600px] text-[15px] leading-[1.65] text-ink/65">{body}</p>}
    </Reveal>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[10.5px] tracking-[0.02em] text-ink/70">
      {children}
    </span>
  );
}

function Plus({ open }: { open: boolean }) {
  return (
    <span
      className={`grid size-7 shrink-0 place-items-center rounded-full border border-line text-[15px] leading-none transition-transform duration-500 ${
        open ? "rotate-45 bg-ink text-cream" : ""
      }`}
      aria-hidden
    >
      +
    </span>
  );
}

function Statement({ block, n }: { block: Extract<Block, { type: "statement" }>; n: string }) {
  return (
    <>
      <Head n={n} eyebrow={block.eyebrow} />
      <Reveal>
        <p className="mt-8 max-w-[820px] border-l-2 border-accent pl-6 font-display text-[24px] leading-[1.25] tracking-[-0.03em] md:text-[32px]">
          {block.text}
        </p>
      </Reveal>
      {block.rail && (
        <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {block.rail.map((r) => (
            <div key={r.label} className="bg-cream px-5 py-5">
              <dt className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">{r.label}</dt>
              <dd className="mt-3 text-[15px] leading-[1.35] tracking-[-0.015em]">{r.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );
}

function Features({ block, n }: { block: Extract<Block, { type: "features" }>; n: string }) {
  return (
    <>
      <Head n={n} eyebrow={block.eyebrow} title={block.title} body={block.body} />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {block.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 80}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-cream p-6 transition-colors hover:border-ink/30 md:p-7">
              <div className="flex items-start justify-between gap-4 font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
                <span className="grid size-8 place-items-center rounded-lg bg-ink text-[11px] tracking-normal text-cream">
                  {pad(i)}
                </span>
                {item.tags && <span className="pt-2 text-right">{item.tags}</span>}
              </div>
              <h3 className="mt-8 text-[24px] leading-[1.1] font-medium tracking-[-0.035em]">{item.title}</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-ink/65">{item.body}</p>
              {item.points && (
                <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {item.points.map((pt) => (
                    <Chip key={pt}>{pt}</Chip>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function Groups({ block, n }: { block: Extract<Block, { type: "groups" }>; n: string }) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 xl:grid-cols-4" }[block.groups.length] ?? "md:grid-cols-3";
  return (
    <>
      <Head n={n} eyebrow={block.eyebrow} title={block.title} body={block.body} />
      <div className={`mt-10 grid gap-4 ${cols}`}>
        {block.groups.map((g) => (
          <Reveal key={g.label}>
            <div className="h-full rounded-2xl border border-line bg-cream">
              <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
                <span className="text-[16px] font-medium tracking-[-0.02em]">{g.label}</span>
                {g.meta && <span className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">{g.meta}</span>}
              </div>
              <ul className="px-5 py-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 border-b border-line/60 py-3 text-[14px] tracking-[-0.01em] last:border-b-0">
                    <span className="size-[5px] shrink-0 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function Stats({ block, n }: { block: Extract<Block, { type: "stats" }>; n: string }) {
  const cols = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" }[block.stats.length] ?? "lg:grid-cols-4";
  return (
    <>
      <Head n={n} eyebrow={block.eyebrow ?? "By the numbers"} title={block.title} />
      <div className={`mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 ${cols}`}>
        {block.stats.map((s) => (
          <Reveal key={s.label}>
            <div className="border-t-2 border-ink pt-5">
              <p className="font-display text-[44px] leading-none font-medium tracking-[-0.05em] md:text-[56px]">{s.value}</p>
              <p className="mt-3 max-w-[220px] text-[13.5px] leading-[1.45] text-ink/65">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      {block.note && <p className="mt-8 max-w-[640px] font-mono text-[10.5px] leading-[1.6] text-muted">{block.note}</p>}
    </>
  );
}

function Steps({ block, n }: { block: Extract<Block, { type: "steps" }>; n: string }) {
  return (
    <>
      <Head n={n} eyebrow={block.eyebrow} title={block.title} body={block.body} />
      <ol className="mt-10">
        {block.steps.map((step, i) => {
          const last = i === block.steps.length - 1;
          return (
            <li key={step.label} className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-x-4">
              {!last && <span className="absolute top-10 bottom-0 left-[19px] w-px bg-line" aria-hidden />}
              <span className="relative grid size-10 place-items-center rounded-full border border-line bg-cream font-mono text-[11px]">
                {pad(i)}
              </span>
              <Reveal className={last ? "" : "pb-10"}>
                <p className="pt-1 font-mono text-[10px] tracking-[0.08em] text-muted uppercase">{step.label}</p>
                <h3 className="mt-2 text-[24px] leading-[1.1] font-medium tracking-[-0.035em]">{step.word}</h3>
                <p className="mt-3 max-w-[600px] text-[14.5px] leading-[1.6] text-ink/65">{step.body}</p>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </>
  );
}

function Quote({ block, n }: { block: Extract<Block, { type: "quote" }>; n: string }) {
  return (
    <>
      <Head n={n} eyebrow="In their words" />
      <Reveal>
        <figure className="mt-8 rounded-2xl bg-fog px-6 py-9 md:px-12 md:py-12">
          <span className="block font-display text-[56px] leading-[0.6] text-accent" aria-hidden>
            “
          </span>
          <blockquote className="mt-4 max-w-[860px] font-display text-[22px] leading-[1.3] tracking-[-0.03em] md:text-[28px]">
            {block.quote}
          </blockquote>
          <figcaption className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-ink/10 pt-5">
            <span className="text-[14px] font-medium tracking-[-0.01em]">{block.name}</span>
            <span className="font-mono text-[10.5px] tracking-[0.06em] text-muted uppercase">{block.role}</span>
          </figcaption>
        </figure>
      </Reveal>
    </>
  );
}

function Faq({ block, n }: { block: Extract<Block, { type: "faq" }>; n: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <Head n={n} eyebrow={block.eyebrow} title={block.title} body={block.body} />
      <ul className="mt-10 space-y-2.5">
        {block.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q} className={`rounded-xl border transition-colors ${isOpen ? "border-ink/25 bg-cream" : "border-line"}`}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left"
              >
                <span className="text-[16px] leading-[1.3] font-medium tracking-[-0.02em] md:text-[17px]">{item.q}</span>
                <Plus open={isOpen} />
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[720px] px-5 pb-5 text-[14.5px] leading-[1.65] text-ink/65">{item.a}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/** Shows a single-colour SVG on light and dark tiles, painted via a mask so it takes each tile's colour. */
function Preview({ src, title }: { src: string; title: string }) {
  const mask = `url(${src}) center / contain no-repeat`;
  return (
    <div className="flex flex-wrap gap-3 px-5 pb-3 pl-[76px] md:pl-[84px]" role="img" aria-label={`${title} preview`}>
      {["bg-paper text-ink border border-line", "bg-ink text-cream"].map((tile) => (
        <div key={tile} className={`grid h-[112px] w-[180px] place-items-center rounded-xl ${tile}`}>
          <span className="block h-[52px] w-[80px] bg-current" style={{ mask, WebkitMask: mask }} />
        </div>
      ))}
    </div>
  );
}

/** Text printed in full with a button that copies it to the clipboard. */
function CopyText({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="px-5 pb-5 pl-[76px] md:pl-[84px]">
      <p className="max-w-[720px] border-l-2 border-accent pl-4 text-[14.5px] leading-[1.65] text-ink/80">{text}</p>
      <button
        type="button"
        onClick={copy}
        className="mt-4 inline-flex h-8 items-center gap-2 rounded-full border border-line px-3.5 font-mono text-[10.5px] tracking-[0.04em] uppercase transition-colors hover:bg-ink hover:text-cream"
      >
        {copied ? "Copied ✓" : "Copy text"}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  );
}

function Rows({ block, n }: { block: Extract<Block, { type: "rows" }>; n: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const grid = "grid w-full grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-x-4 px-5 py-4 text-left md:grid-cols-[48px_minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_28px]";
  return (
    <>
      <Head n={n} eyebrow={block.eyebrow} title={block.title} body={block.body} />
      <ul className="mt-10 overflow-hidden rounded-2xl border border-line bg-cream">
        {block.items.map((item, i) => {
          const isOpen = open === i;
          const cells = (
            <>
              <span className="font-mono text-[11px] text-muted">{pad(i)}</span>
              <span className="text-[16px] leading-[1.25] font-medium tracking-[-0.02em] md:text-[17px]">{item.title}</span>
              <span className="hidden font-mono text-[11px] tracking-[0.02em] text-muted md:block">{item.meta}</span>
              <span className="hidden text-[13px] text-ink/70 md:block">{item.detail}</span>
            </>
          );
          return (
            <li key={item.title} className="border-t border-line first:border-t-0">
              {item.href ? (
                <SmartLink href={item.href} className={`group ${grid} transition-colors hover:bg-black/[0.03]`}>
                  {cells}
                  <span className="grid size-7 place-items-center rounded-full border border-line transition-colors group-hover:bg-ink group-hover:text-cream">
                    <ArrowIcon />
                  </span>
                </SmartLink>
              ) : (
                <button
                  type="button"
                  aria-expanded={isOpen}
                  disabled={!item.body}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`${grid} ${item.body ? "transition-colors hover:bg-black/[0.03]" : "cursor-default"}`}
                >
                  {cells}
                  {item.body ? <Plus open={isOpen} /> : <span />}
                </button>
              )}
              {item.preview && <Preview src={item.preview} title={item.title} />}
              {item.copy && <CopyText text={item.copy} />}
              {item.body &&
                (item.href ? (
                  <p className="-mt-1 max-w-[720px] px-5 pb-5 pl-[76px] text-[14px] leading-[1.6] text-ink/65 md:pl-[84px]">{item.body}</p>
                ) : (
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[720px] px-5 pb-5 pl-[76px] text-[14px] leading-[1.6] text-ink/65 md:pl-[84px]">{item.body}</p>
                    </div>
                  </div>
                ))}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Prose({ block, index }: { block: Extract<Block, { type: "prose" }>; index: number }) {
  return (
    <div className="max-w-[720px]">
      {block.updated && (
        <p className="mb-10 inline-flex rounded-full border border-line px-3 py-1.5 font-mono text-[10.5px] tracking-[0.06em] text-muted uppercase">
          {block.updated}
        </p>
      )}
      <div className="space-y-14">
        {block.sections.map((s, j) => (
          <section key={s.heading} id={`s-${index}-${j}`} className="scroll-mt-32">
            <h2 className="flex items-baseline gap-4 font-display text-[24px] leading-[1.15] font-medium tracking-[-0.03em] md:text-[28px]">
              <span className="font-mono text-[12px] tracking-normal text-muted">{pad(j)}</span>
              {s.heading}
            </h2>
            <div className="mt-5 space-y-4 text-[15.5px] leading-[1.75] text-ink/75">
              {s.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
              {s.bullets && (
                <ul className="space-y-2.5 pt-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[10px] size-[5px] shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function PageIndex({ entries }: { entries: Entry[] }) {
  const [active, setActive] = useState(entries[0]?.id);
  useEffect(() => {
    const io = new IntersectionObserver(
      (items) => {
        const hit = items.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    entries.forEach((e) => {
      const el = document.getElementById(e.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [entries]);

  return (
    <nav aria-label="On this page" className="sticky top-[104px] hidden self-start md:block">
      <p className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">On this page</p>
      <ol className="mt-5 border-l border-line">
        {entries.map((e, i) => (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              aria-current={active === e.id ? "true" : undefined}
              className={`-ml-px flex gap-3 border-l py-2 pl-4 text-[13px] leading-[1.35] tracking-[-0.01em] transition-colors ${
                active === e.id ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink"
              }`}
            >
              <span className="font-mono text-[10.5px] leading-[18px]">{pad(i)}</span>
              <span>{e.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function InnerBlocks({ blocks }: { blocks: Block[] }) {
  const entries = entriesFor(blocks);
  // Index-entry number each block starts at (prose adds one entry per section).
  const starts = blocks.map((_, i) => entries.findIndex((e) => e.id === `s-${i}` || e.id.startsWith(`s-${i}-`)));
  return (
    <div id="blocks" className="grid scroll-mt-24 gap-12 px-5 pt-16 pb-28 md:grid-cols-[200px_minmax(0,1fr)] md:px-12 md:pt-20 lg:gap-20">
      <PageIndex entries={entries} />
      <div className="min-w-0 space-y-24 md:space-y-28">
        {blocks.map((block, i) => {
          if (block.type === "prose") return <Prose key={i} block={block} index={i} />;
          const n = pad(starts[i]);
          const body = (() => {
            switch (block.type) {
              case "statement":
                return <Statement block={block} n={n} />;
              case "features":
                return <Features block={block} n={n} />;
              case "groups":
                return <Groups block={block} n={n} />;
              case "stats":
                return <Stats block={block} n={n} />;
              case "steps":
                return <Steps block={block} n={n} />;
              case "quote":
                return <Quote block={block} n={n} />;
              case "faq":
                return <Faq block={block} n={n} />;
              case "rows":
                return <Rows block={block} n={n} />;
            }
          })();
          return (
            <section key={i} id={`s-${i}`} className="scroll-mt-32">
              {body}
            </section>
          );
        })}
      </div>
    </div>
  );
}

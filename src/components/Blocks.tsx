"use client";

import { useState } from "react";
import type { Block } from "@/content/pages/types";
import { art } from "./Capabilities";
import { Manifesto } from "./Manifesto";
import { ArrowIcon, Reveal, SectionHeader, SmartLink } from "./ui";

const palettes = ["sun", "blush", "tide", "mint"];
const pad = (i: number) => String(i + 1).padStart(2, "0");

function Features({ block }: { block: Extract<Block, { type: "features" }> }) {
  return (
    <section className="px-4 pt-[140px] md:px-14">
      <SectionHeader eyebrow={block.eyebrow} title={block.title} body={block.body} />
      <div className="mt-[100px] pb-[40px]">
        {block.items.map((item, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={item.title}
              className="mb-6 border border-line bg-paper px-5 py-8 md:sticky md:mb-12 md:px-8"
              style={{ top: 24 + i * 16 }}
            >
              <div className="flex justify-between gap-4 text-[10px] leading-3 tracking-[0.1em] text-muted uppercase">
                <span>{pad(i)}</span>
                {item.tags && <span className="text-right">{item.tags}</span>}
              </div>
              <div className="mt-8 grid gap-8 md:mt-[54px] md:grid-cols-2 md:gap-20">
                <div className={`flex min-h-[200px] flex-col justify-between md:min-h-[360px] ${flip ? "md:order-2" : ""}`}>
                  <h3 className="font-display text-[44px] leading-[1.06] tracking-[-0.072em] md:text-[64px] xl:text-[76px]">
                    {item.title}
                  </h3>
                  <div className="mt-6">
                    <p className="max-w-[380px] text-[15px] leading-[1.55] text-muted">{item.body}</p>
                    {item.points && (
                      <ul className="mt-6 space-y-2">
                        {item.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-2.5 text-[13px] tracking-[-0.01em]">
                            <span className="size-[5px] rounded-full bg-accent" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className={`flex ${flip ? "md:order-1 md:justify-start" : "md:justify-end"}`}>
                  <div
                    className="grain relative h-[240px] w-full overflow-hidden rounded-2xl md:h-[360px] md:max-w-[420px]"
                    style={{ background: art[palettes[i % palettes.length]] }}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Groups({ block }: { block: Extract<Block, { type: "groups" }> }) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" }[block.groups.length] ?? "md:grid-cols-3";
  return (
    <section className="px-4 pt-[140px] md:px-16">
      <SectionHeader eyebrow={block.eyebrow} title={block.title} body={block.body} />
      <Reveal className="mt-[80px]">
        <div className={`grid border-y border-line ${cols}`}>
          {block.groups.map((g, i) => (
            <div
              key={g.label}
              className={`px-4 pt-[22px] pb-8 ${
                i < block.groups.length - 1 ? "border-b border-line md:border-r md:border-b-0" : ""
              }`}
            >
              <div className="flex justify-between text-[10px] leading-3 tracking-[0.1em] text-muted uppercase">
                <span>{g.label}</span>
                {g.meta && <span>{g.meta}</span>}
              </div>
              <ul className="mt-10 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="text-[15px] leading-[1.35] tracking-[-0.02em]">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Stats({ block }: { block: Extract<Block, { type: "stats" }> }) {
  const cols = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" }[block.stats.length] ?? "lg:grid-cols-4";
  return (
    <section className="px-4 pt-[140px] md:px-16">
      {block.eyebrow && block.title && <SectionHeader eyebrow={block.eyebrow} title={block.title} />}
      <Reveal className={block.title ? "mt-[72px]" : ""}>
        <div className={`grid grid-cols-1 border-y border-line sm:grid-cols-2 ${cols}`}>
          {block.stats.map((s, i) => (
            <div
              key={s.label}
              className="border-b border-line px-4 pt-[38px] pb-10 last:border-b-0 sm:border-r md:px-8 lg:border-b-0 lg:last:border-r-0"
            >
              <p className="text-[10px] leading-3 tracking-[0.1em] text-muted">{pad(i)}</p>
              <p
                className={`mt-9 font-mono leading-[0.9] tracking-[-0.075em] ${
                  s.value.length > 7 ? "text-[32px] md:text-[40px]" : "text-[44px] md:text-[72px]"
                }`}
              >
                {s.value}
              </p>
              <p className="mt-3 text-[11px] leading-[1.4] text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
      {block.note && (
        <p className="mt-6 max-w-[640px] text-[10px] leading-[1.5] tracking-[0.08em] text-muted">{block.note}</p>
      )}
    </section>
  );
}

function Steps({ block }: { block: Extract<Block, { type: "steps" }> }) {
  return (
    <section className="mt-[140px] bg-ink px-4 pt-[160px] pb-[160px] text-cream md:px-16">
      <SectionHeader eyebrow={block.eyebrow} title={block.title} body={block.body} dark />
      <div className="mt-[100px] border-b border-white/10">
        {block.steps.map((step, i) => (
          <div key={step.label} className="relative overflow-hidden border-t border-white/10">
            <span
              className="rail-dot absolute -top-[3px] size-[6px] -translate-x-1/2 rounded-full bg-accent"
              style={{ animationDelay: `${-i * 3.7}s` }}
            />
            <Reveal className="grid min-h-[280px] grid-cols-[48px_1fr] gap-y-6 pt-[38px] md:grid-cols-[112px_1fr_1fr]">
              <span className="text-[12px] leading-3 text-accent">{pad(i)}</span>
              <h3
                className={`leading-[0.9] tracking-[-0.065em] ${
                  step.word.length > 10 ? "text-[40px] md:text-[56px]" : "text-[48px] md:text-[72px]"
                }`}
              >
                {step.word}
              </h3>
              <div className="relative z-10 col-start-2 md:col-start-3">
                <p className="text-[10px] leading-3 font-semibold tracking-[0.11em] text-cream/60 uppercase">
                  {step.label}
                </p>
                <p className="mt-6 max-w-[480px] text-[15px] leading-[1.55] font-medium text-cream/55">{step.body}</p>
              </div>
            </Reveal>
            <span
              className="pointer-events-none absolute right-0 -bottom-[0.18em] font-display text-[clamp(150px,21vw,302px)] leading-[0.8] font-medium tracking-[-0.08em] text-white/[0.035] select-none"
              aria-hidden
            >
              {pad(i)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Quote({ block }: { block: Extract<Block, { type: "quote" }> }) {
  return (
    <section className="px-4 pt-[140px] md:px-16">
      <Reveal>
        <figure className="grid gap-8 border-t border-line pt-10 md:grid-cols-[396px_1fr]">
          <figcaption className="order-2 md:order-1">
            <p className="eyebrow text-muted">In their words</p>
            <p className="mt-8 text-[15px] tracking-[-0.02em]">{block.name}</p>
            <p className="mt-1 text-[12px] text-muted">{block.role}</p>
          </figcaption>
          <blockquote className="order-1 max-w-[860px] text-[28px] leading-[1.08] tracking-[-0.05em] md:order-2 md:text-[40px]">
            “{block.quote}”
          </blockquote>
        </figure>
      </Reveal>
    </section>
  );
}

function Faq({ block }: { block: Extract<Block, { type: "faq" }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-4 pt-[140px] md:px-16">
      <SectionHeader eyebrow={block.eyebrow} title={block.title} body={block.body} />
      <ul className="mt-[72px] border-b border-line">
        {block.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q} className="border-t border-line">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="grid w-full grid-cols-[44px_1fr_auto] items-center gap-4 px-4 py-5 text-left md:grid-cols-[84px_1fr_auto]"
              >
                <span className="text-[12px] text-muted">{pad(i)}</span>
                <span className="text-[20px] leading-[1.15] tracking-[-0.035em] md:text-[26px]">{item.q}</span>
                <span
                  className={`text-[20px] leading-none font-light transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[720px] px-4 pb-8 pl-[60px] text-[15px] leading-[1.6] text-muted md:pl-[100px]">
                    {item.a}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Rows({ block }: { block: Extract<Block, { type: "rows" }> }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="px-4 pt-[140px] md:px-16">
      <SectionHeader eyebrow={block.eyebrow} title={block.title} body={block.body} />
      <ul className="mt-[72px] border-b border-line">
        {block.items.map((item, i) => {
          const isOpen = open === i;
          const cells = (
            <>
              <span className="text-[12px] text-muted">{pad(i)}</span>
              <span className="text-[22px] leading-[1.1] tracking-[-0.035em] md:text-[28px]">{item.title}</span>
              <span className="hidden text-[12px] text-muted md:block">{item.meta}</span>
              <span className="hidden text-[12px] md:block">{item.detail}</span>
            </>
          );
          const grid =
            "grid w-full grid-cols-[44px_1fr_auto] items-center gap-x-4 px-4 py-5 text-left md:grid-cols-[84px_minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)_auto]";

          if (item.href) {
            return (
              <li key={item.title} className="border-t border-line">
                <SmartLink href={item.href} className={`group ${grid} transition-colors hover:bg-black/[0.025]`}>
                  {cells}
                  <ArrowIcon className="transition-transform duration-300 group-hover:rotate-45" />
                </SmartLink>
                {item.body && (
                  <p className="-mt-2 max-w-[720px] px-4 pb-6 pl-[60px] text-[14px] leading-[1.6] text-muted md:pl-[100px]">
                    {item.body}
                  </p>
                )}
              </li>
            );
          }

          return (
            <li key={item.title} className="border-t border-line">
              <button
                type="button"
                aria-expanded={isOpen}
                disabled={!item.body}
                onClick={() => setOpen(isOpen ? null : i)}
                className={grid}
              >
                {cells}
                <span
                  className={`text-[20px] leading-none font-light transition-transform duration-500 ${
                    item.body ? "" : "invisible"
                  } ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {item.body && (
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[720px] px-4 pb-8 pl-[60px] text-[15px] leading-[1.6] text-muted md:pl-[100px]">
                      {item.body}
                    </p>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Prose({ block }: { block: Extract<Block, { type: "prose" }> }) {
  return (
    <section className="px-4 pt-[140px] md:px-16">
      {block.updated && <p className="eyebrow mb-12 text-muted">{block.updated}</p>}
      <div className="border-b border-line">
        {block.sections.map((s, i) => (
          <Reveal key={s.heading}>
            <div className="grid gap-6 border-t border-line py-12 md:grid-cols-[396px_1fr]">
              <h2 className="flex gap-4 text-[22px] leading-[1.1] tracking-[-0.04em] md:text-[28px]">
                <span className="pt-2 text-[12px] tracking-normal text-muted">{pad(i)}</span>
                {s.heading}
              </h2>
              <div className="max-w-[720px] space-y-4 text-[15px] leading-[1.65] text-muted">
                {s.paragraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
                {s.bullets && (
                  <ul className="space-y-2 pt-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-ink">
                        <span className="mt-[9px] size-[5px] shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div id="blocks" className="scroll-mt-6 pb-[180px]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "statement":
            return <Manifesto key={i} data={{ eyebrow: block.eyebrow, statement: block.text, rail: block.rail }} />;
          case "features":
            return <Features key={i} block={block} />;
          case "groups":
            return <Groups key={i} block={block} />;
          case "stats":
            return <Stats key={i} block={block} />;
          case "steps":
            return <Steps key={i} block={block} />;
          case "quote":
            return <Quote key={i} block={block} />;
          case "faq":
            return <Faq key={i} block={block} />;
          case "rows":
            return <Rows key={i} block={block} />;
          case "prose":
            return <Prose key={i} block={block} />;
        }
      })}
    </div>
  );
}

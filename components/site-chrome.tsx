"use client";
import React, { useId, useMemo, useState, type ReactNode, type CSSProperties } from "react";
import { route, BOOKING_URL } from "@/lib/route";
import { SiteNav, SiteFooter } from "./site-navigation";
import TailoredHero, { type HeroArt } from "./tailored-hero";
import PageHeroScene, { HeroSequenceRail, HeroFlowFigure, usePageFlow } from "./scenes/page-hero-scene";
import ScrollScene from "./motion/scroll-scene";

export const Nav = SiteNav;
export const Footer = SiteFooter;
export const Arrow = ({ size = 14 }: { size?: number }) => <svg aria-hidden="true" width={size} height={size} viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.4" /></svg>;

type CTA = { label: string; href: string; primary?: boolean };
export function PageHero({ crumb, eyebrow, title, lead, ctas, art = "layers", caption = "PURPOSE-BUILT INTELLIGENCE", tool }: {
  crumb?: string; eyebrow?: string; title?: ReactNode; lead?: ReactNode; ctas?: CTA[]; art?: HeroArt; caption?: string; tool?: string;
}) {
  const flow = usePageFlow();
  return <PageHeroScene>
    <section className="inner-hero">
      <div className="inner-hero-grid" aria-hidden="true" />
      <div className="shell"><div className="inner-crumb"><a href="/">HOME</a><span>/</span>{crumb}</div>
        <div className="inner-hero-layout"><div className="inner-hero-copy"><div className="n-eyebrow"><i />{eyebrow}</div><h1>{title}</h1>{lead && <p>{lead}</p>}{ctas && <div className="inner-actions">{ctas.map((c,i) => <a key={i} href={route(c.href)} className={c.primary ? "n-button" : "n-text-link"}>{c.label}<Arrow /></a>)}</div>}</div>
          <div className={flow ? "inner-hero-art inner-hero-art-flow" : "inner-hero-art"}><HeroFlowFigure /><TailoredHero art={art} label={eyebrow?.toUpperCase() || "NEWRON"} caption={caption} tool={tool} /><HeroSequenceRail /></div>
        </div>
        <div className="inner-hero-bottom"><span>INTELLIGENCE. WITH PURPOSE.</span><a href="#page-content">EXPLORE THIS CHAPTER <span aria-hidden="true">↓</span></a></div>
      </div>
    </section>
  </PageHeroScene>;
}
export function Band({ id, inverse, tight, bg, children, style }: { id?: string; inverse?: boolean; tight?: boolean; bg?: string; children?: ReactNode; style?: CSSProperties }) {
  return <section id={id} className={`inner-band ${tight ? "inner-band-tight" : ""} ${inverse || bg ? "inner-band-alt" : ""}`} style={style}><div className="shell">{children}</div></section>;
}
export function Head({ tag, eyebrow, title, kicker }: { tag?: ReactNode; eyebrow?: ReactNode; title?: ReactNode; kicker?: ReactNode }) {
  return <div className="inner-section-head"><div><div className="n-eyebrow">{tag && <span>{tag} / </span>}{eyebrow}</div><h2>{title}</h2></div>{kicker && <p>{kicker}</p>}</div>;
}
type Feature = { tag?: string; title: string; desc: string; points?: string[] };
export function FeatureGrid({ items, top = 48 }: { items: Feature[]; top?: number }) {
  const [active, setActive] = useState(0);
  const id = useId();
  if (!items.length) return null;
  const selected = items[active] || items[0];
  return <div className="capability-explorer" style={{ marginTop: top }}>
    <div className="capability-options" role="tablist" aria-label="Capabilities" aria-orientation="vertical">{items.map((item,i) => <button key={item.title} id={`${id}-tab-${i}`} role="tab" aria-selected={active===i} aria-controls={`${id}-panel`} tabIndex={active===i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={e => {
      let next = i;
      if(e.key === "ArrowDown" || e.key === "ArrowRight") next=(i+1)%items.length;
      else if(e.key === "ArrowUp" || e.key === "ArrowLeft") next=(i+items.length-1)%items.length;
      else if(e.key === "Home") next=0;
      else if(e.key === "End") next=items.length-1;
      else return;
      e.preventDefault();setActive(next);document.getElementById(`${id}-tab-${next}`)?.focus();
    }}><span className="capability-number">{String(i+1).padStart(2,"0")}</span><span>{item.title}</span><span aria-hidden="true">↗</span></button>)}</div>
    <div className="capability-panel" id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} tabIndex={0}>
      <div className="capability-evidence"><span>{selected.tag || "WORKFLOW"}</span><strong>{String(active+1).padStart(2,"0")}</strong><div>{(selected.points || [selected.title]).map((point,i) => <span key={point}><small>0{i+1}</small>{point}</span>)}</div></div>
      <div className="capability-detail" key={active}><span className="n-eyebrow">{selected.tag || "CAPABILITY"} / {String(active+1).padStart(2,"0")}</span><h3>{selected.title}</h3><p>{selected.desc}</p>{selected.points && <ul>{selected.points.map(p => <li key={p}><span aria-hidden="true">✓</span>{p}</li>)}</ul>}</div>
    </div>
  </div>;
}
type Stat = { v: string; suffix?: string; k: string };
export function StatBand({ lead, stats }: { lead?: ReactNode; stats: Stat[] }) {
  return <div className="inner-stats"><div className="inner-stats-lead"><span className="n-eyebrow">IN PRACTICE</span><h3>{lead}</h3></div><div className="inner-stat-values">{stats.map(m => <div key={m.k}><div className="inner-stat-value">{m.v}<span>{m.suffix}</span></div><p>{m.k}</p></div>)}</div></div>;
}
export function SplitRows({ items, top=48 }: { items: [string,string][]; top?: number }) {
  return <div className="principle-grid" style={{marginTop:top}}>{items.map(([title,desc],i) => <details key={title} className="principle-card"><summary><span className="principle-index">0{i+1}</span><span>{title}</span><span className="principle-plus" aria-hidden="true">+</span></summary><p>{desc}</p></details>)}</div>;
}
export function Quote({ text, who, sub }: { text: ReactNode; who: ReactNode; sub?: string }) {
  return <figure className="inner-quote"><span aria-hidden="true">“</span><blockquote>{text}</blockquote><figcaption><strong>{who}</strong>{sub && <span>{sub}</span>}</figcaption></figure>;
}
/* The process is walked rather than clicked: scrolling advances the step and a
   step press moves the page to it. Nothing is switched, so these are not tabs. */
export function Timeline({ items }: { items: [string,string,string][] }) {
  const beats = useMemo(() => items.map(([tag, label, desc], i) => ({
    at: items.length > 1 ? (i / (items.length - 1)) * 0.86 : 0, title: tag, summary: label, copy: desc,
  })), [items]);
  if (!items.length) return null;
  return <ScrollScene className="scene-journey" travel={`${104 + items.length * 16}svh`} beats={beats}>
    {({ step, goToBeat, reduced }) => <div className="journey">
      <div className="journey-rail" aria-label="Steps in this process">
        <i className="journey-progress" aria-hidden="true"><b /></i>
        {items.map(([tag, label], i) => <button key={i} type="button" onClick={() => goToBeat(i)} aria-current={step === i ? "step" : undefined}>
          <span>{String(i+1).padStart(2,"0")}</span><small>{tag}</small><span className="sr-only">{label}</span>
        </button>)}
      </div>
      {reduced
        ? <ol className="journey-list">{items.map(([tag, label, desc], i) => <li key={i}><span className="n-eyebrow">{tag}</span><h3>{label}</h3><p>{desc}</p></li>)}</ol>
        : <div className="journey-detail"><span aria-hidden="true">{String(step+1).padStart(2,"0")}</span><div><span className="n-eyebrow">{items[step][0]}</span><h3>{items[step][1]}</h3><p>{items[step][2]}</p></div></div>}
    </div>}
  </ScrollScene>;
}
export function FAQ({ items }: { items: [string,string][] }) {
  return <div className="inner-faq">{items.map(([q,a],i) => <details key={i}><summary><span className="faq-index">{String(i+1).padStart(2,"0")}</span><span>{q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>;
}
export function CTABand({ eyebrow="LET’S BUILD WHAT’S NEXT", headline, sub, primary={label:"Let’s talk",href:BOOKING_URL}, secondary }: { eyebrow?: string; headline?: ReactNode; sub?: ReactNode; primary?: {label:string;href:string}; secondary?: {label:string;href:string} }) {
  return <section className="n-final-cta inner-cta"><div className="n-eyebrow">{eyebrow}</div><h2>{headline}</h2>{sub && <p>{sub}</p>}<div className="inner-actions"><a className="n-button" href={route(primary.href)}>{primary.label}<Arrow /></a>{secondary && <a className="n-text-link" href={route(secondary.href)}>{secondary.label}<Arrow /></a>}</div><div className="n-cta-orbit" aria-hidden="true" /></section>;
}
export function Prose({ children, aside }: {children?: ReactNode;aside?: ReactNode}) {
  return <div className={`shell inner-editorial ${aside ? "has-index" : ""}`}><div className="prose">{children}</div>{aside && <aside className="inner-page-index" aria-label="Page index">{aside}</aside>}</div>;
}

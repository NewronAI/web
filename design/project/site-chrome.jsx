/* global React, ReactDOM */
/* =========================================================
   Newron — shared site chrome + editorial toolkit
   Used by every footer-link page. Reuses the v4 design system
   (styles-v4.css). Components are exported to window so each
   page script can compose them.
   ========================================================= */
const { useState, useEffect } = React;

// ── footer link map (single source of truth) ─────────────
const FOOTER_COLS = [
  { h: "Solutions", links: [
    ["Lending intelligence", "lending-intelligence.html"],
    ["Insurance AI", "insurance-ai.html"],
    ["Governance AI", "governance-ai.html"],
    ["Custom AI engineering", "custom-ai-engineering.html"]] },
  { h: "Industries", links: [
    ["Banks", "banks.html"],
    ["NBFCs", "nbfcs.html"],
    ["Insurance", "industry-insurance.html"],
    ["Public sector", "public-sector.html"]] },
  { h: "Company", links: [
    ["About", "about.html"],
    ["Careers", "careers.html"],
    ["Press", "press.html"],
    ["Open source", "open-source.html"]] },
  { h: "Legal", links: [
    ["Privacy", "privacy.html"],
    ["Terms", "terms.html"],
    ["Security", "security.html"],
    ["Responsible AI", "responsible-ai.html"]] }];

const NAV_LINKS = [
  ["Lending", "lending-intelligence.html"],
  ["Insurance", "insurance-ai.html"],
  ["Governance", "governance-ai.html"],
  ["Services", "custom-ai-engineering.html"],
  ["Customers", "v4.html#customers"],
  ["Company", "about.html"]];

// ── atoms ────────────────────────────────────────────────
function Mark({ size = 26 }) {
  return <img src="newron-logo.png" alt="" width={size} height={size} style={{ display: "block" }} />;
}
function Wordmark() {
  return (
    <a href="v4.html" style={{ display: "inline-flex", gap: 10, alignItems: "center", textDecoration: "none", color: "var(--ink)" }}>
      <Mark size={26} />
      <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1 }}>Newron</span>
    </a>);
}
const Arrow = ({ size = 14 }) =>
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
  </svg>;

// ── nav ──────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "color-mix(in oklab, var(--bg) 92%, transparent)" : "var(--bg)",
      backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      borderBottom: "1px solid " + (scrolled ? "var(--line)" : "transparent"),
      transition: "background 0.2s, border-color 0.2s"
    }}>
      <div className="shell" style={{ height: 68, display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: "clamp(16px, 3vw, 48px)" }}>
        <Wordmark />
        <nav className="nav-center" style={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {NAV_LINKS.map(([l, h]) =>
            <a key={l} href={h} style={{ textDecoration: "none", color: "var(--ink)", padding: "8px 10px", fontSize: 13.5, fontWeight: 500, borderRadius: 4, whiteSpace: "nowrap" }}>{l}</a>)}
        </nav>
        <div className="nav-cta" style={{ display: "flex", gap: 8 }}>
          <a className="btn btn-ghost nav-cta-secondary" href="v4.html#contact">Talk to sales</a>
          <a className="btn btn-primary" href="v4.html#contact" style={{ whiteSpace: "nowrap" }}>Book a demo <Arrow /></a>
        </div>
      </div>
    </header>);
}

// ── footer ───────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--line)", paddingBlock: 80 }}>
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) repeat(4, minmax(0, 1fr))", gap: 32 }}>
          <div>
            <Wordmark />
            <p style={{ fontSize: 13, color: "var(--ink-soft)", maxWidth: 280, marginTop: 18, lineHeight: 1.55 }}>
              Newron is an applied-AI company building production systems for regulated industries. Bengaluru, India.
            </p>
            <div style={{ marginTop: 18 }}><span className="tag">NVIDIA INCEPTION</span></div>
          </div>
          {FOOTER_COLS.map((c) =>
            <div key={c.h}>
              <div className="eyebrow" style={{ marginBottom: 18 }}>{c.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.links.map(([l, h]) =>
                  <li key={l}><a href={h} style={{ color: "var(--ink)", textDecoration: "none", fontSize: 13.5 }}>{l}</a></li>)}
              </ul>
            </div>)}
        </div>
        <div style={{ borderTop: "1px solid var(--line)", marginTop: 64, paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap", fontSize: 12, color: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>
          <span>© 2026 NEWRON AI TECHNOLOGIES PVT. LTD.</span>
          <span style={{ display: "flex", gap: 14, flexWrap: "wrap", letterSpacing: "0.06em" }}>
            <span>NVIDIA INCEPTION PARTNER</span><span style={{ opacity: 0.5 }}>·</span>
            <span>SOC 2 (APPLIED)</span><span style={{ opacity: 0.5 }}>·</span>
            <span>ISO 27001</span><span style={{ opacity: 0.5 }}>·</span>
            <span>BENGALURU, INDIA</span>
          </span>
          <span>v4.0 · MAY 2026</span>
        </div>
      </div>
    </footer>);
}

// ── page hero ────────────────────────────────────────────
function PageHero({ crumb, eyebrow, title, lead, ctas, aside }) {
  return (
    <section className="dotgrid-soft" style={{ paddingBlock: "calc(72px * var(--density)) calc(80px * var(--density))", position: "relative", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        {crumb &&
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--ink-muted)", marginBottom: 28, display: "flex", gap: 8, alignItems: "center" }}>
            <a href="v4.html" style={{ color: "var(--ink-muted)", textDecoration: "none" }}>HOME</a>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>{crumb}</span>
          </div>}
        <div className={aside ? "pg-hero-grid" : ""} style={{ display: "grid", gridTemplateColumns: aside ? "minmax(0, 1.5fr) minmax(0, 1fr)" : "1fr", gap: 64, alignItems: aside ? "center" : "end" }}>
          <div>
            {eyebrow && <div className="eyebrow eyebrow-grad" style={{ marginBottom: 22 }}>{eyebrow}</div>}
            <h1 className="display" style={{ margin: 0, fontSize: "clamp(44px, 6.4vw, 92px)", lineHeight: 0.98, letterSpacing: "-0.028em" }}>{title}</h1>
            {lead && <p className="page-lead" style={{ marginTop: 30, maxWidth: 620 }}>{lead}</p>}
            {ctas && ctas.length > 0 &&
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 34 }}>
                {ctas.map((c, i) =>
                  <a key={i} className={"btn " + (c.primary ? "btn-primary" : "btn-ghost")} href={c.href}>{c.label}{c.primary && <Arrow />}</a>)}
              </div>}
          </div>
          {aside && <div>{aside}</div>}
        </div>
      </div>
    </section>);
}

// ── section wrapper ──────────────────────────────────────
function Band({ id, inverse, tight, bg, children, style }) {
  const cls = "section" + (tight ? "-tight" : "");
  return (
    <section id={id} className={cls} {...(inverse ? { "data-on-dark": "1" } : {})}
      style={{ background: inverse ? "var(--inverse-bg)" : (bg || "transparent"), color: inverse ? "var(--inverse-ink)" : "var(--ink)", borderTop: "1px solid " + (inverse ? "var(--inverse-bg)" : "var(--line)"), ...style }}>
      <div className="shell">{children}</div>
    </section>);
}

// ── section head ─────────────────────────────────────────
function Head({ tag, eyebrow, title, kicker, inverse }) {
  return (
    <header style={{ display: "grid", gridTemplateColumns: "80px minmax(0, 1.4fr) minmax(0, 1fr)", gap: 48, alignItems: "start", borderTop: "1px solid " + (inverse ? "var(--inverse-line)" : "var(--line)"), paddingTop: 28 }}>
      <div className="mono" style={{ fontSize: 12, color: inverse ? "var(--inverse-ink-soft)" : "var(--ink-muted)", letterSpacing: "0.1em", paddingTop: 6 }}>{tag}</div>
      <div>
        <div className="eyebrow eyebrow-grad" style={{ marginBottom: 18 }}>{eyebrow}</div>
        <h2 className="display" style={{ margin: 0, fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: 1.0, color: inverse ? "var(--inverse-ink)" : "var(--ink)" }}>{title}</h2>
      </div>
      <div>{kicker && <p style={{ margin: "38px 0 0", fontSize: 16, lineHeight: 1.55, color: inverse ? "var(--inverse-ink-soft)" : "var(--ink-soft)", maxWidth: 380 }}>{kicker}</p>}</div>
    </header>);
}

// ── feature grid ─────────────────────────────────────────
function FeatureGrid({ items, cols = 3, top = 56 }) {
  return (
    <div style={{ marginTop: top, display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 16 }}>
      {items.map((it, i) =>
        <article key={i} className="card" style={{ padding: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            {it.tag && <div className="eyebrow">{it.tag}</div>}
            <div className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.1em" }}>{String(i + 1).padStart(2, "0")}</div>
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, lineHeight: 1.08, margin: "22px 0 12px", letterSpacing: "-0.01em" }}>{it.title}</h3>
          <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }}>{it.desc}</p>
          {it.points &&
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 8, borderTop: "1px solid var(--line)", paddingTop: 16 }}>
              {it.points.map((p) =>
                <li key={p} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13 }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", flex: "none" }} />{p}
                </li>)}
            </ul>}
        </article>)}
    </div>);
}

// ── stat band ────────────────────────────────────────────
function StatBand({ lead, stats }) {
  return (
    <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: `minmax(0, 2fr) repeat(${stats.length}, 1fr)`, borderTop: "1px solid var(--line)" }}>
      <div style={{ padding: "32px 24px 0 0" }}>
        <div className="eyebrow">Measured in production</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, marginTop: 8, lineHeight: 1.2 }}>{lead}</div>
      </div>
      {stats.map((m) =>
        <div key={m.k} style={{ padding: 24, borderLeft: "1px solid var(--line)" }}>
          <div className="display" style={{ fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: 0.95 }}>{m.v}<span style={{ color: "var(--accent)" }}>{m.suffix}</span></div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.08em", marginTop: 14 }}>{m.k.toUpperCase()}</div>
        </div>)}
    </div>);
}

// ── definition rows (two-column) ─────────────────────────
function SplitRows({ items, top = 56 }) {
  return (
    <div style={{ marginTop: top, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0 }}>
      {items.map(([k, v], i) =>
        <div key={k} style={{
          padding: "32px 32px 32px 0",
          paddingLeft: i % 2 === 1 ? 32 : 0,
          borderTop: i < 2 ? "1px solid var(--line)" : "none",
          borderBottom: "1px solid var(--line)",
          borderLeft: i % 2 === 1 ? "1px solid var(--line)" : "none",
          display: "grid", gridTemplateColumns: "60px 1fr", gap: 16
        }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.1em", marginTop: 6 }}>{String(i + 1).padStart(2, "0")}</div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, lineHeight: 1.12 }}>{k}</div>
            <div style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 10, lineHeight: 1.6, maxWidth: 440 }}>{v}</div>
          </div>
        </div>)}
    </div>);
}

// ── quote ────────────────────────────────────────────────
function Quote({ text, who, sub, inverse }) {
  return (
    <figure style={{ margin: 0 }}>
      <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(24px, 2.6vw, 38px)", lineHeight: 1.22, letterSpacing: "-0.012em", color: inverse ? "var(--inverse-ink)" : "var(--ink)" }}>{text}</blockquote>
      <figcaption style={{ marginTop: 24, fontSize: 13, color: inverse ? "var(--inverse-ink-soft)" : "var(--ink-soft)" }}>
        <strong style={{ fontWeight: 600, color: inverse ? "var(--inverse-ink)" : "var(--ink)" }}>{who}</strong>{sub ? " · " + sub : ""}
      </figcaption>
    </figure>);
}

// ── timeline ─────────────────────────────────────────────
function Timeline({ items }) {
  return (
    <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: 22, marginTop: 8 }}>
      {items.map(([t, label, desc], i) =>
        <div key={i} style={{ position: "relative", paddingBottom: 26 }}>
          <span style={{ position: "absolute", left: -27, top: 4, width: 10, height: 10, borderRadius: "50%", background: "var(--accent)", border: "2px solid var(--bg)" }} />
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--ink-muted)" }}>{t}</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, marginTop: 4 }}>{label}</div>
          {desc && <div style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 4, lineHeight: 1.6, maxWidth: 560 }}>{desc}</div>}
        </div>)}
    </div>);
}

// ── FAQ ──────────────────────────────────────────────────
function FAQ({ items }) {
  return (
    <div style={{ marginTop: 48, borderTop: "1px solid var(--line)" }}>
      {items.map(([q, a], i) =>
        <details key={i} style={{ borderBottom: "1px solid var(--line)", padding: "22px 0" }}>
          <summary style={{ cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", gap: 24, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19, color: "var(--ink)" }}>
            {q}<span className="faq-plus" style={{ color: "var(--accent)", flex: "none" }}>+</span>
          </summary>
          <p style={{ margin: "14px 0 0", fontSize: 15, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 760 }}>{a}</p>
        </details>)}
    </div>);
}

// ── CTA band (dark) ──────────────────────────────────────
function CTABand({ eyebrow = "Get started", headline, sub, primary = { label: "Book a demo", href: "v4.html#contact" }, secondary }) {
  return (
    <section className="section" data-on-dark="1" style={{ background: "var(--inverse-bg)", color: "var(--inverse-ink)" }}>
      <div className="shell" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)", gap: 64, alignItems: "end" }}>
        <div>
          <div className="eyebrow eyebrow-grad" style={{ marginBottom: 22 }}>{eyebrow}</div>
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.0, color: "var(--inverse-ink)" }}>{headline}</h2>
          {sub && <p style={{ fontSize: 16, color: "var(--inverse-ink-soft)", maxWidth: 520, marginTop: 24, lineHeight: 1.55 }}>{sub}</p>}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-start" }}>
          <a className="btn btn-primary" href={primary.href}>{primary.label} <Arrow /></a>
          {secondary && <a className="btn btn-ghost" href={secondary.href}>{secondary.label}</a>}
        </div>
      </div>
    </section>);
}

// ── prose wrapper (legal/editorial) ──────────────────────
function Prose({ children, aside }) {
  return (
    <div className="shell" style={{ paddingBlock: "calc(72px * var(--density))", display: "grid", gridTemplateColumns: aside ? "minmax(0, 3fr) minmax(0, 1fr)" : "1fr", gap: 64, alignItems: "start" }}>
      <div className="prose">{children}</div>
      {aside && <aside style={{ position: "sticky", top: 96, fontSize: 13, color: "var(--ink-muted)" }}>{aside}</aside>}
    </div>);
}

// ── page renderer ────────────────────────────────────────
function renderPage(content) {
  function Page() {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (<>{<Nav />}{content}{<Footer />}</>);
  }
  ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
}

Object.assign(window, {
  Mark, Wordmark, Arrow, Nav, Footer,
  PageHero, Band, Head, FeatureGrid, StatBand, SplitRows,
  Quote, Timeline, FAQ, CTABand, Prose, renderPage
});

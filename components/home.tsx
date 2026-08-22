"use client";
/* =========================================================
   Newron homepage — ported from the design bundle's v4.html /
   v4-app.jsx onto the Newron v4 design system (globals.css).
   The design-only TweaksPanel is omitted; the page renders at
   the design's default theme (light · regular · indigo accent).
   ========================================================= */
import React, { useState, useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { route } from "@/lib/route";

// ───────────────────────────────────────────────── helpers
function AnimatedNumber({ value, prefix = "", suffix = "", duration = 1600, locale = "en-IN" }: {
  value: number; prefix?: string; suffix?: string; duration?: number; locale?: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  return <span ref={ref} className="tabular">{prefix}{Math.round(n).toLocaleString(locale)}{suffix}</span>;
}

// ───────────────────────────────────────────────── logo
function Mark({ size = 24 }: { size?: number }) {
  return <img src="/newron-logo.png" alt="" width={size} height={size} style={{ display: "block" }} />;
}
function Wordmark() {
  return (
    <a href="#top" style={{ display: "inline-flex", gap: 10, alignItems: "center", textDecoration: "none", color: "var(--ink)" }}>
      <Mark size={26} />
      <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1 }}>Newron</span>
    </a>);
}
const Arrow = ({ size = 14 }: { size?: number }) =>
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
  </svg>;

// ───────────────────────────────────────────────── nav
const HOME_NAV: [string, string][] = [
  ["Lending", "#lending"], ["Artha", "#artha"], ["Insurance", "#insurance"],
  ["Governance", "#governance"], ["Services", "#services"],
  ["Customers", "#customers"], ["Company", "#company"]];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "color-mix(in oklab, var(--bg) 92%, transparent)" : "transparent",
      backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "background 0.2s, border-color 0.2s"
    }}>
      <div className="shell" style={{ height: "var(--nav-h)", display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: "clamp(16px, 3vw, 48px)" }}>
        <Wordmark />
        <nav className="nav-center" style={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {HOME_NAV.map(([l, h]) =>
            <a key={l} className="nav-link" href={h}>{l}</a>)}
        </nav>
        <div className="nav-cta" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <a className="btn btn-ghost nav-cta-secondary" href="#contact">Talk to sales</a>
          <a className="btn btn-primary" href="#contact" style={{ whiteSpace: "nowrap" }}>Book a demo <Arrow /></a>
          <button className="nav-toggle" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}>
            <span className={open ? "is-x" : ""} /><span className={open ? "is-x" : ""} />
          </button>
        </div>
      </div>
      {open &&
        <div className="nav-panel">
          <div className="shell">
            {HOME_NAV.map(([l, h]) =>
              <a key={l} href={h} onClick={() => setOpen(false)}>{l}</a>)}
            <a href="#contact" onClick={() => setOpen(false)}>Talk to sales</a>
          </div>
        </div>}
    </header>);
}

// ───────────────────────────────────────────────── hero
/* The headline / copy / CTA form one viewport-height "stage" (.hero-stage);
   the contents index follows *after* that stage. Layout, type scale and
   breakpoints live in globals.css under "Homepage hero" so the hero can
   respond to width AND height — a 1366×768 or 1512×854 laptop is height-
   constrained, not width-constrained. Line breaks are left to the browser
   (text-wrap: balance) rather than hard <br>.

   The headline runs the full width of the shell and the supporting block
   sits underneath it as a rule-topped band (label · statement · action),
   which echoes SectionHead's rail/content/kicker rhythm. Splitting them
   side-by-side capped the headline at ~800px and left dead space between
   the two columns. */
function Hero({ sub }: { sub: string }) {
  return (
    <section id="top" className="dotgrid-soft hero">
      <div className="shell" style={{ position: "relative" }}>
        <div className="hero-stage">
          <div className="hero-grid">
            <h1 className="display hero-title">
              Intelligence, built for the institutions that{" "}
              <em className="italic" style={{ color: "var(--accent)" }}>can&apos;t get it&nbsp;wrong.</em>
            </h1>
            <div className="hero-band">
              <div className="hero-eyebrow">FOR REGULATED INDUSTRIES</div>
              <p className="hero-sub">{sub}</p>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Book a demo <Arrow /></a>
              <a className="btn btn-ghost" href="#lending">See the lending suite</a>
            </div>
          </div>
        </div>
        <ContentsIndex />
      </div>
    </section>);
}

function ContentsIndex() {
  const rows = [
    { n: "01", l: "Lending intelligence", d: "CAM, statement & policy analysis · Video PD", href: "#lending" },
    { n: "02", l: "Artha models", d: "Document VLMs · licensable & self-hostable", href: "#artha" },
    { n: "03", l: "Insurance AI", d: "Claim eligibility, filing & denial remediation", href: "#insurance" },
    { n: "04", l: "Governance AI", d: "Citizen services in regional languages", href: "#governance" },
    { n: "05", l: "Custom AI engineering", d: "Foundational models · automation · platform", href: "#services" }];
  return (
    <div className="contents-index">
      {rows.map((r) =>
        <a key={r.n} className="ci-row" href={r.href}
          onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = "12px"; }}
          onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = "0"; }}>
          <div className="mono ci-n">{r.n}</div>
          <div className="ci-l">{r.l}</div>
          <div className="ci-d">{r.d}</div>
          <Arrow size={16} />
        </a>)}
    </div>);
}

// ───────────────────────────────────────────────── logo marquee
function LogoMarquee() {
  const logos = ["Walmart", "IISc", "Karnataka Govt.", "Google", "ABCL", "HDFC Credila", "Sattva", "Fusion", "Artpark"];
  const row = [...logos, ...logos];
  return (
    <section className="section-tight hr-top hr-bot" style={{ overflow: "hidden", paddingBlock: 36 }}>
      <div className="shell" style={{ marginBottom: 18 }}>
        <div className="eyebrow">POSTING SUCCESS STORIES AT</div>
      </div>
      <div style={{ display: "flex", gap: 64, whiteSpace: "nowrap", animation: "drift 60s linear infinite", fontFamily: "var(--font-display)", fontSize: 28, color: "var(--ink-muted)", letterSpacing: "-0.01em" }}>
        {row.map((l, i) =>
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 24 }}>
            {l}
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
          </span>)}
      </div>
    </section>);
}

// ───────────────────────────────────────────────── Lending
function Lending() {
  const screens = [
    { id: "cam", label: "CAM Generation", tag: "01", desc: "Compose Credit Approval Memos in your bank's format, with deviation flags and policy citations." },
    { id: "statement", label: "Statement Analyser", tag: "02", desc: "12 months of bank statements parsed in under 60 seconds — cash-flow, recurring obligations, anomalies." },
    { id: "view360", label: "Applicant 360°", tag: "03", desc: "Every signal, every covenant, every prior decision — on one screen." },
    { id: "videopd", label: "Video PD", tag: "04", desc: "Verify property without a site visit. Geotagged, annotated, attached to the CAM automatically." },
    { id: "chat", label: "Policy Chat", tag: "05", desc: "Underwriters ask, Newron answers — sourced from your policy book." }];
  const [active, setActive] = useState("cam");
  return (
    <section id="lending" className="section">
      <div className="shell">
        <SectionHead tag="01" eyebrow="Lending intelligence"
          title={<>The credit officer&apos;s<br /><em className="italic" style={{ color: "var(--accent)" }}>second brain.</em></>}
          kicker="A modular suite for the loan origination lifecycle — from intake and statement parsing to CAM generation, deviation handling, and verification. Configured to your policy, your format, your tier structure." />
        <div className="r-cards" style={{ marginTop: 56, marginBottom: 64 }}>
          <CoverageCard label="Commercial" items={["Loan against property", "Overdraft", "Gold loan", "Equipment finance", "Revenue-based finance", "Line of credit"]} />
          <CoverageCard label="Consumer" items={["Home loan", "Auto loan", "Loan against securities", "Personal loan", "Education loan", "Credit card"]} />
        </div>
        <div className="card r-suite">
          <aside style={{ borderRight: "1px solid var(--line)", padding: 24, background: "var(--bg)" }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>In the suite</div>
            {screens.map((s) =>
              <button key={s.id} onClick={() => setActive(s.id)} style={{
                display: "block", width: "100%", textAlign: "left", padding: "16px 14px", marginBottom: 4,
                background: active === s.id ? "var(--bg-2)" : "transparent", border: 0,
                borderLeft: active === s.id ? "2px solid var(--accent)" : "2px solid transparent",
                cursor: "pointer", fontFamily: "var(--font-sans)", color: "var(--ink)"
              }}>
                <div className="mono" style={{ fontSize: "var(--fs-micro)", letterSpacing: "0.1em", color: active === s.id ? "var(--accent)" : "var(--ink-muted)", marginBottom: 6 }}>{s.tag}</div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{s.label}</div>
                <div style={{ fontSize: "var(--fs-meta)", color: "var(--ink-muted)", marginTop: 4, lineHeight: 1.45 }}>{s.desc}</div>
              </button>)}
          </aside>
          <div className="r-mock">
            <ProductChrome title={`Newron · ${screens.find((s) => s.id === active)!.label}`}>
              {active === "cam" && <CAMScreen />}
              {active === "statement" && <StatementScreen />}
              {active === "view360" && <View360Screen />}
              {active === "videopd" && <VideoPDScreen />}
              {active === "chat" && <ChatScreen />}
            </ProductChrome>
          </div>
        </div>
        <Outcomes />
      </div>
    </section>);
}

function CoverageCard({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="card" style={{ padding: 24 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 24 }}>{label}</div>
        <div className="eyebrow">{items.length} products</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {items.map((it) =>
          <span key={it} style={{ padding: "6px 10px", border: "1px solid var(--line)", borderRadius: 999, fontSize: "var(--fs-meta)", color: "var(--ink-soft)", background: "var(--bg)" }}>{it}</span>)}
      </div>
    </div>);
}

function ProductChrome({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 6, overflow: "hidden", boxShadow: "0 30px 80px -40px rgba(0,0,0,0.18)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 16px", borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
          <span className="mono" style={{ fontSize: "var(--fs-micro)", letterSpacing: "0.1em", color: "var(--ink)" }}>NEWRON</span>
        </div>
        <span style={{ width: 1, height: 12, background: "var(--line)" }} />
        <span className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-soft)" }}>{title}</span>
        <div style={{ flex: 1 }} />
        <span className="mono" style={{ fontSize: "var(--fs-micro)", color: "var(--green)", letterSpacing: "0.08em" }}>● LIVE</span>
      </div>
      {children}
    </div>);
}

function CAMScreen() {
  const sections: [string, string, string][] = [
    ["01", "Borrower profile", "done"], ["02", "Business overview", "done"], ["03", "Financial summary", "done"],
    ["04", "Cash-flow analysis", "done"], ["05", "Bureau analysis", "done"], ["06", "Collateral", "active"],
    ["07", "Deviations", "queued"], ["08", "Recommendation", "queued"]];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr 280px", minHeight: 460 }}>
      <div style={{ borderRight: "1px solid var(--line)", padding: 20 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>CAM · LP-2884109</div>
        {sections.map(([n, l, s]) =>
          <div key={n} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 10, alignItems: "center", padding: "9px 10px", background: s === "active" ? "var(--bg-2)" : "transparent", borderLeft: s === "active" ? "2px solid var(--accent)" : "2px solid transparent", borderRadius: 3, fontSize: 13, color: s === "queued" ? "var(--ink-muted)" : "var(--ink)" }}>
            <span className="mono" style={{ fontSize: 10, color: "var(--ink-muted)" }}>{n}</span>
            <span>{l}</span>
            <span className="mono" style={{ fontSize: 9, letterSpacing: "0.1em", color: s === "done" ? "var(--green)" : s === "active" ? "var(--accent)" : "var(--ink-muted)" }}>{s === "done" ? "DONE" : s === "active" ? "WRITING" : "—"}</span>
          </div>)}
      </div>
      <div style={{ padding: 32 }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>Section 06 · Collateral</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1.05, marginBottom: 22 }}>Collateral assessment</div>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "var(--ink)" }}>
          The proposed loan of <strong>₹ 38,00,000</strong> is to be secured against a residential property at{" "}
          <mark style={{ background: "var(--accent-soft)", color: "var(--ink)", padding: "0 2px" }}>Plot 14, HSR Layout, Sector 7, Bengaluru</mark>,
          extent 1,840 sq ft. Title is held singly in the name of the applicant since 2019; the
          encumbrance certificate confirms no charge as of <strong>14 May 2026</strong>.
        </p>
        <div style={{ marginTop: 20, padding: 16, borderLeft: "2px solid var(--accent)", background: "var(--bg-2)", borderRadius: "0 4px 4px 0" }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--accent)", marginBottom: 8 }}>NEWRON · DRAFTING</div>
          <div style={{ fontSize: 14, lineHeight: 1.6 }}>
            Based on the Video PD conducted on 12 May 2026, the property
            <span style={{ display: "inline-block", width: 8, height: 14, background: "var(--accent)", marginLeft: 2, verticalAlign: "middle", animation: "blink 1s steps(1) infinite" }} />
          </div>
        </div>
      </div>
      <div style={{ borderLeft: "1px solid var(--line)", padding: 20, background: "var(--bg)" }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Policy flags</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[["Deviation", "DTI > 0.45 by 2pp", "amber", "Tier-2 override permitted"], ["Confirmed", "Property age within limit", "green", "EC clean, title singular"], ["Verify", "Q1→Q2 income variance", "slate", "Re-check queued"]].map(([k, v, c, s]) =>
            <div key={v} style={{ border: "1px solid var(--line)", borderRadius: 4, padding: 12, background: "var(--bg)" }}>
              <div className="mono" style={{ fontSize: 9, letterSpacing: "0.12em", color: `var(--${c})` }}>● {k.toUpperCase()}</div>
              <div style={{ fontSize: 13, fontWeight: 500, marginTop: 6 }}>{v}</div>
              <div style={{ fontSize: 11.5, color: "var(--ink-muted)", marginTop: 3, lineHeight: 1.4 }}>{s}</div>
            </div>)}
        </div>
      </div>
    </div>);
}

function StatementScreen() {
  const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
  const inflow = [3.2, 3.4, 2.8, 3.6, 4.1, 3.9, 3.7, 4.4, 4.1, 4.8, 5.1, 5.3];
  const outflow = [2.7, 2.9, 2.6, 3.1, 3.4, 3.2, 3.0, 3.6, 3.5, 4.0, 4.2, 4.4];
  const max = Math.max(...inflow, ...outflow);
  return (
    <div style={{ padding: 28, minHeight: 460 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
        {[["Total inflow", "₹ 47.4L", "green"], ["Avg balance", "₹ 1.84L", "ink"], ["Bounce events", "0", "green"], ["Salary regularity", "11/12", "amber"]].map(([k, v, c]) =>
          <div key={k} className="card" style={{ padding: 14 }}>
            <div className="eyebrow">{k}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: c === "ink" ? "var(--ink)" : `var(--${c})`, marginTop: 6 }}>{v}</div>
          </div>)}
      </div>
      <div className="card" style={{ padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>Monthly cash-flow · last 12 months</div>
          <div style={{ display: "flex", gap: 14, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-soft)" }}>
            <span><span style={{ display: "inline-block", width: 8, height: 8, background: "var(--ink)", marginRight: 4 }} />INFLOW</span>
            <span><span style={{ display: "inline-block", width: 8, height: 8, background: "var(--accent)", marginRight: 4 }} />OUTFLOW</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "flex-end", height: 180 }}>
          {months.map((m, i) =>
            <div key={m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{ width: "100%", height: 160, display: "flex", gap: 3, alignItems: "flex-end" }}>
                <div style={{ flex: 1, height: `${inflow[i] / max * 100}%`, background: "var(--ink)", borderRadius: "1px 1px 0 0" }} />
                <div style={{ flex: 1, height: `${outflow[i] / max * 100}%`, background: "var(--accent)", borderRadius: "1px 1px 0 0" }} />
              </div>
              <div className="mono" style={{ fontSize: 10, color: "var(--ink-muted)" }}>{m}</div>
            </div>)}
        </div>
      </div>
      <div style={{ marginTop: 14, padding: 14, borderLeft: "2px solid var(--accent)", background: "var(--bg)", borderRadius: "0 4px 4px 0", border: "1px solid var(--line)" }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--accent)", marginBottom: 6 }}>NEWRON · INSIGHT</div>
        <div style={{ fontSize: 13.5, lineHeight: 1.55 }}>
          Stable salary credit on the 2nd of every month except Dec 2025 (4-day delay). Inflow trend <strong>+18% YoY</strong>.
          No round-tripping or circular transactions detected.
        </div>
      </div>
    </div>);
}

function View360Screen() {
  return (
    <div style={{ padding: 28, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24, minHeight: 460 }}>
      <div>
        <div className="eyebrow">Applicant</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 1.05, marginTop: 4 }}>Suresh Iyer</div>
        <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 6 }}>LAP · ₹ 38,00,000 · 180 months · Bengaluru</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 22 }}>
          {[["Income score", "0.86", "AAA"], ["Bureau", "742", "B+"], ["Policy fit", "0.91", "Tier-2"], ["LTV", "62%", "OK"], ["FOIR", "47%", "Watch"], ["Vintage", "8.4y", "Strong"]].map(([k, v, b]) =>
            <div key={k} className="card" style={{ padding: 12 }}>
              <div className="eyebrow" style={{ fontSize: 10 }}>{k}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 6 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>{v}</span>
                <span className="mono" style={{ fontSize: 10, color: "var(--ink-muted)" }}>{b}</span>
              </div>
            </div>)}
        </div>
        <div style={{ marginTop: 20, padding: 14, border: "1px solid var(--line)", borderLeft: "2px solid var(--green)", borderRadius: "0 4px 4px 0", background: "var(--bg)" }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--green)" }}>● RECOMMENDED</div>
          <div style={{ fontSize: 15, marginTop: 8, lineHeight: 1.55 }}>
            <strong>Approve · ₹ 38,00,000</strong> at 11.4% p.a. for 180 mo, with FOIR review at 12 months.
          </div>
        </div>
      </div>
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Decision trail</div>
        <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: 16 }}>
          {[["09:14", "Application received via LOS", "muted"], ["09:14", "KYC + bureau pulled", "muted"], ["09:17", "Statement analyser · 11 mo", "green"], ["09:19", "Video PD scheduled", "slate"], ["09:42", "Video PD complete", "green"], ["09:43", "CAM v1 generated", "accent"], ["09:44", "Deviation flagged · DTI", "amber"], ["—", "Awaiting officer review", "muted"]].map(([t, s, c], i) =>
            <div key={i} style={{ position: "relative", paddingBottom: 14 }}>
              <span style={{ position: "absolute", left: -22, top: 5, width: 9, height: 9, borderRadius: "50%", background: c === "muted" ? "var(--ink-muted)" : `var(--${c})`, border: "2px solid var(--bg)" }} />
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.08em", color: "var(--ink-muted)" }}>{t}</div>
              <div style={{ fontSize: 13, marginTop: 2 }}>{s}</div>
            </div>)}
        </div>
      </div>
    </div>);
}

function VideoPDScreen() {
  return (
    <div style={{ padding: 28, minHeight: 460 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }}>
        <div style={{ aspectRatio: "16/10", background: "linear-gradient(135deg, #2c2a24, #16140f)", borderRadius: 6, position: "relative", overflow: "hidden", border: "1px solid var(--line)" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.5))" }} />
          <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 8 }}>
            <span style={{ background: "var(--accent)", color: "#fff", padding: "3px 8px", borderRadius: 3, fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}>● REC</span>
            <span style={{ background: "rgba(0,0,0,0.5)", color: "#fff", padding: "3px 8px", borderRadius: 3, fontSize: 10, fontFamily: "var(--font-mono)" }}>02:14</span>
          </div>
          <div style={{ position: "absolute", inset: "30% 24%", border: "1px solid #c98064", borderRadius: 3 }}>
            <div style={{ position: "absolute", top: -22, left: 0, color: "#c98064", fontSize: 10, fontFamily: "var(--font-mono)" }}>BOUNDARY · 0.94</div>
          </div>
          <div style={{ position: "absolute", bottom: 14, left: 14, color: "#f4f1e7", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", opacity: 0.85 }}>
            12.9159°N · 77.6428°E · HSR LAYOUT
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Auto-generated report</div>
          <div className="card" style={{ padding: 14 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>Property verified</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 12, fontSize: 12.5 }}>
              {[["Boundary match", "0.94", "green"], ["Door no. visibility", "Confirmed", "green"], ["Plot extent (est.)", "1,840 sq ft", "ink"], ["Construction stage", "Completed", "green"], ["Encroachment risk", "None", "green"], ["Surroundings", "Residential", "ink-soft"]].map(([k, v, c]) =>
                <div key={k} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--ink-soft)" }}>{k}</span>
                  <span className="mono" style={{ fontSize: 11.5, color: `var(--${c})` }}>{v}</span>
                </div>)}
            </div>
          </div>
          <button className="btn btn-ghost" style={{ width: "100%", justifyContent: "center", marginTop: 10 }}>Download PDF <Arrow /></button>
        </div>
      </div>
    </div>);
}

function ChatScreen() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", minHeight: 460 }}>
      <div style={{ borderRight: "1px solid var(--line)", padding: 18 }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Indexed policies</div>
        {[["LAP policy v3.2", true], ["NPA classification SOP", false], ["FCU triggers · 2025", false], ["Co-applicant guidelines", false], ["RBI MD on KYC", false]].map(([p, activeFlag]) =>
          <div key={p as string} style={{ padding: "10px 12px", fontSize: 13, borderRadius: 4, background: activeFlag ? "var(--bg-2)" : "transparent", borderLeft: activeFlag ? "2px solid var(--accent)" : "2px solid transparent", color: activeFlag ? "var(--ink)" : "var(--ink-soft)" }}>{p}</div>)}
      </div>
      <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 14 }}>
        <Msg from="Pratiksha · Credit Officer" right>
          For a self-employed applicant with two co-applicants, is 5-year ITR mandatory or can we work with 3 years + GST returns?
        </Msg>
        <Msg from="Newron" accent>
          Per LAP policy v3.2 §4.3(b), <mark style={{ background: "var(--accent-soft)", padding: "0 2px" }}>3 years of ITRs are permitted</mark> when paired with 24 months of GST returns and 12 months of business banking statements. The 5-year requirement applies only to Tier-3 markets or ticket sizes above ₹ 75L.
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--line)" }} className="mono">
            <span style={{ fontSize: 10, letterSpacing: "0.08em", color: "var(--ink-muted)" }}>SOURCE · LAP-POLICY-V3.2 · PAGE 14 · §4.3(b)</span>
          </div>
        </Msg>
        <Msg from="Pratiksha · Credit Officer" right>Ticket is ₹ 38L, Bengaluru — Tier-1?</Msg>
        <Msg from="Newron" accent>
          Bengaluru is Tier-1 per the policy&apos;s geographic schedule. For ₹ 38L in Tier-1, proceed with the 3+24+12 combination. I&apos;ve pre-populated the deviations section accordingly.
        </Msg>
        <div style={{ marginTop: "auto", display: "flex", gap: 10, border: "1px solid var(--line)", borderRadius: 4, padding: "8px 12px", background: "var(--bg)" }}>
          <input placeholder="Ask anything from the policy book…" style={{ border: 0, outline: 0, flex: 1, background: "transparent", fontFamily: "var(--font-sans)", fontSize: 13.5, color: "var(--ink)" }} />
          <button className="btn btn-primary" style={{ padding: "6px 12px" }}>Ask <Arrow /></button>
        </div>
      </div>
    </div>);
}

function Msg({ from, right, accent, children }: { from: string; right?: boolean; accent?: boolean; children: ReactNode }) {
  return (
    <div style={{ alignSelf: right ? "flex-end" : "flex-start", maxWidth: "82%" }}>
      <div className="mono" style={{ fontSize: 10, letterSpacing: "0.08em", color: "var(--ink-muted)", marginBottom: 5, textAlign: right ? "right" : "left" }}>{from.toUpperCase()}</div>
      <div style={{ padding: "12px 14px", background: right ? "var(--bg-2)" : "var(--bg)", border: "1px solid var(--line)", borderLeft: accent ? "2px solid var(--accent)" : "1px solid var(--line)", borderRadius: 4, fontSize: 13.5, lineHeight: 1.55 }}>{children}</div>
    </div>);
}

function Outcomes() {
  const o = [{ k: "Reduction in TAT", v: 66, suffix: "%" }, { k: "Productivity uplift", v: 200, suffix: "%" }, { k: "Hours saved", v: 65000, suffix: "+" }];
  return (
    <div className="r-stats" style={{ marginTop: 56 }}>
      <div style={{ padding: "32px 24px 0 0" }}>
        <div className="eyebrow">Measured across deployments</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 8, lineHeight: 1.2 }}>
          What credit teams see <em className="italic" style={{ color: "var(--accent)" }}>in production</em>
        </div>
      </div>
      {o.map((m) =>
        <div key={m.k} style={{ padding: 24, borderLeft: "1px solid var(--line)" }}>
          <div className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 0.95 }}>
            <AnimatedNumber value={m.v} suffix={m.suffix} />
          </div>
          <div className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)", letterSpacing: "0.08em", marginTop: 14 }}>{m.k.toUpperCase()}</div>
        </div>)}
    </div>);
}

// ───────────────────────────────────────────── Artha pipeline animation
/* Four phases — ingest → classify → extract → map — advanced on a timer while
   on screen. The stage is keyed on `${phase}-${step}` so React remounts it on
   every change and the CSS keyframes replay from zero; no animation state is
   tracked in JS. The rail is clickable (same affordance as the Lending suite
   aside) which also pauses autoplay, so every phase is reachable by hand —
   that is the accessible path when the viewer prefers reduced motion. */
/* What actually lands in an intake: files, not documents. No classes, no cover
   sheet, filenames that say nothing, and one merged PDF holding several
   documents — so the file count is lower than the document count and the
   split has to be discovered. Pages are numbered across the assembled batch. */
const AF_FILES = [
  { kind: "MERGED PDF", name: "combined_scan.pdf", pp: "10 pp" },
  { kind: "CAMERA", name: "IMG_20260412_094317.jpg", pp: "1 pp" },
  { kind: "IMAGE", name: "WhatsApp Image 2026-04-12 at 09.51.jpeg", pp: "1 pp" },
  { kind: "SCAN", name: "CamScanner 12-04-2026 09.45.pdf", pp: "12 pp" },
  { kind: "PDF", name: "Scan_0007.pdf", pp: "6 pp" }];
const AF_PAGES = 30;

const AF_DOCS = [
  { id: "bank", type: "Bank statement", pages: "p. 01–06", src: "combined_scan.pdf", conf: "0.99", party: "R. Iyer", role: "Applicant",
    fields: [["Bank", "HDFC Bank · 50100•••2291"], ["Period", "Apr–Jun 2026"], ["Avg. balance", "₹ 8,41,905"], ["Net inflow", "₹ 31,20,448"]] },
  { id: "itr", type: "ITR + computation", pages: "p. 07–10", src: "combined_scan.pdf", conf: "0.98", party: "Iyer Traders", role: "Entity",
    fields: [["Assessment year", "AY 2025–26"], ["Gross total income", "₹ 62,40,180"], ["Tax paid", "₹ 14,88,204"]] },
  { id: "pan", type: "PAN card", pages: "p. 11", src: "IMG_20260412_094317.jpg", conf: "0.99", party: "R. Iyer", role: "Applicant",
    fields: [["Name", "Rohit Iyer"], ["Father's name", "Krishnan Iyer"], ["PAN", "ABZPI•••7K"], ["DOB", "22-04-1971"]] },
  { id: "aadhaar", type: "Aadhaar", pages: "p. 12", src: "WhatsApp Image 2026-04-12 at 09.51.jpeg", conf: "0.99", party: "S. Iyer", role: "Co-applicant",
    fields: [["Name", "Sunita Iyer"], ["Address", "14, 3rd Cross, Whitefield, Bengaluru 560066"], ["Aadhaar no.", "XXXX XXXX 4417"]] },
  { id: "deed", type: "Sale deed", pages: "p. 13–24", src: "CamScanner 12-04-2026 09.45.pdf", conf: "0.97", party: "Collateral", role: "Property",
    fields: [["Property", "Whitefield, Bengaluru"], ["Extent", "2,150 sq ft"], ["Consideration", "₹ 2,45,00,000"]] },
  { id: "gst", type: "GST returns", pages: "p. 25–30", src: "Scan_0007.pdf", conf: "0.98", party: "Iyer Traders", role: "Entity",
    fields: [["GSTIN", "29AAFCI•••Q1Z5"], ["Period", "FY 2025–26"], ["Turnover", "₹ 4,18,60,900"]] }];

type AfDoc = (typeof AF_DOCS)[number];

/* one column per resolved party, in the order the parties first appear */
const AF_PARTIES = AF_DOCS.reduce((acc, d) => {
  const hit = acc.find((p) => p.party === d.party);
  if (hit) hit.docs.push(d); else acc.push({ party: d.party, role: d.role, docs: [d] });
  return acc;
}, [] as { party: string; role: string; docs: AfDoc[] }[]);

const AF_PHASES = ["Ingest", "Classify", "Extract", "Map"];
/* scatter origins for the converging documents, in px at full spread */
const AF_SCATTER = [[-158, -88, -7], [152, -94, 6], [-172, 6, 4], [166, 16, -5], [-6, 100, 3]];
const vars = (o: Record<string, string>) => o as CSSProperties;

function ArthaFlow() {
  const [phase, setPhase] = useState(0);
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);
  const [live, setLive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // don't animate off-screen, and don't autoplay for reduced-motion viewers
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setLive(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!live || !auto) return;
    const HOLD = [2600, 3800, 1600, 4400];
    // the extract phase steps through one document at a time before moving on
    if (phase === 2 && step < AF_DOCS.length - 1) {
      const t = setTimeout(() => setStep((v) => v + 1), HOLD[2]);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setPhase((v) => (v + 1) % AF_PHASES.length); setStep(0); }, HOLD[phase]);
    return () => clearTimeout(t);
  }, [phase, step, live, auto]);

  const go = (i: number) => { setAuto(false); setPhase(i); setStep(0); };

  return (
    <div ref={ref} className="af">
      <div className="af-head">
        <span className="mono af-dim">ARTHA · INTAKE BATCH-2026-04417</span>
        <button className="mono af-run" onClick={() => setAuto((v) => !v)} aria-label={auto ? "Pause" : "Play"}>
          {auto ? "● RUNNING" : "❙❙ PAUSED"}
        </button>
      </div>
      <div className="af-rail">
        {AF_PHASES.map((p, i) =>
          <button key={p} className={"af-rail-btn" + (i === phase ? " is-on" : "")} onClick={() => go(i)}>
            <span className="mono af-rail-n">0{i + 1}</span>
            <span className="af-rail-l">{p}</span>
          </button>)}
      </div>
      <div className="af-stage" key={`${phase}-${step}`}>
        {phase === 0 && <AfIngest />}
        {phase === 1 && <AfClassify />}
        {phase === 2 && <AfExtract i={step} />}
        {phase === 3 && <AfMap />}
      </div>
    </div>);
}

/* 01 — files arrive knowing nothing about themselves: a format and a filename.
   No type is shown here on purpose; that is what phase 02 is for. */
function AfIngest() {
  return (
    <div className="af-ingest">
      {AF_SCATTER.map(([x, y, r], i) =>
        <div key={i} className="af-fly"
          style={{ ...vars({ "--x": `${x}px`, "--y": `${y}px`, "--r": `${r}deg` }), animationDelay: `${i * 95}ms` }}>
          <span className="mono af-fly-kind">{AF_FILES[i].kind}</span>
          <span className="af-fly-name">{AF_FILES[i].name}</span>
          <span className="mono af-fly-pp">{AF_FILES[i].pp} · UNCLASSIFIED</span>
        </div>)}
      <div className="af-pile">
        <span className="mono af-dim">{AF_FILES.length} FILES RECEIVED</span>
        <span className="af-pile-n">{AF_PAGES} pages</span>
        <span className="mono af-dim">NO CLASSES · NO COVER SHEET · FILENAMES ONLY</span>
      </div>
      <div className="af-sent mono">↓ SENT TO ARTHA</div>
    </div>);
}

/* 02 — every document named, and traced back to the file it came out of:
   two of these were buried in the same merged PDF */
function AfClassify() {
  return (
    <div className="af-list">
      {AF_DOCS.map((d, i) =>
        <div key={d.id} className="af-row" style={{ animationDelay: `${i * 105}ms` }}>
          <span className="mono af-dim">{d.pages}</span>
          <span className="af-row-mid">
            <span className="af-badge">{d.type}</span>
            <span className="mono af-row-src">← {d.src}</span>
          </span>
          <span className="mono af-conf">{d.conf}</span>
        </div>)}
    </div>);
}

/* 03 — one classified document at a time, with what was read out of it */
function AfExtract({ i }: { i: number }) {
  const d = AF_DOCS[i];
  return (
    <div className="af-extract">
      <div className="af-ex-doc">
        <span className="mono af-dim">{d.pages}</span>
        <div className="af-ex-type">{d.type}</div>
        <div className="mono af-ex-count">{i + 1} / {AF_DOCS.length} CLASSIFIED</div>
      </div>
      <div className="af-ex-fields">
        {d.fields.map(([k, v], j) =>
          <div key={k} className="af-field" style={{ animationDelay: `${130 + j * 130}ms` }}>
            <span className="mono af-dim">{k.toUpperCase()}</span>
            <span className="af-field-v">{v}</span>
          </div>)}
      </div>
    </div>);
}

/* 04 — documents land under the party each one actually belongs to */
function AfMap() {
  return (
    <div className="af-map">
      {AF_PARTIES.map((p, i) =>
        <div key={p.party} className="af-party" style={{ animationDelay: `${i * 110}ms` }}>
          <div className="mono af-dim">{p.role.toUpperCase()}</div>
          <div className="af-party-name">{p.party}</div>
          <div className="af-chips">
            {p.docs.map((d, j) =>
              <span key={d.id} className="af-chip" style={{ animationDelay: `${320 + i * 110 + j * 120}ms` }}>{d.type}</span>)}
          </div>
        </div>)}
    </div>);
}

// ───────────────────────────────────────────────── Artha models
/* Dark slab, so it reads as the model layer under the product sections
   rather than another vertical. Sits between two light sections to keep
   the page's light/dark/light rhythm. */
function Artha() {
  const caps = [
    { n: "01", k: "Classification", d: "Nothing arrives labelled — filenames are noise, and one PDF can hold four documents. Artha names each one and splits the batch before any extraction runs.", meta: "5 FILES → 6 DOCS" },
    { n: "02", k: "Extraction", d: "Reads the fields credit actually underwrites on — issuer, period, balances, identifiers — from scans, phone photographs and regional-language forms.", meta: "0-SHOT · NO TEMPLATES" },
    { n: "03", k: "Party mapping", d: "Resolves every party in the file and attaches each document to the right one, so applicant, co-applicant, guarantor and entity never blur together.", meta: "4 PARTIES RESOLVED" }];
  const pillars = [
    ["Zero-shot", "No per-client fine-tune and no template library. Point Artha at a file it has never seen."],
    ["Frontier-grade", "Matches or beats frontier LLMs on classification, extraction and party mapping."],
    ["≈1/8 the cost", "Small, task-tuned models — a fraction of the frontier inference bill, per document."],
    ["Yours to run", "Licensable and self-hostable. Your VPC, on-prem, or fully air-gapped."]];
  return (
    <section id="artha" className="section" data-on-dark="1" style={{ background: "var(--inverse-bg)", color: "var(--inverse-ink)" }}>
      <div className="shell">
        <SectionHead inverse tag="02" eyebrow="Artha models"
          title={<>The models <em className="italic" style={{ color: "var(--accent)" }}>underneath</em> Indian credit.</>}
          kicker="Artha is Newron's suite of vision-language models, built for the paperwork Indian banks and NBFCs actually process. Zero-shot, on documents no template was written for." />
        <div className="artha-grid" style={{ marginTop: 56 }}>
          <div>
            <div className="mono" style={{ fontSize: "var(--fs-micro)", letterSpacing: "0.1em", color: "var(--inverse-ink-soft)", marginBottom: 24 }}>
              ARTHA · अर्थ — WEALTH, MEANING, PURPOSE
            </div>
            {caps.map((c, i) =>
              <div key={c.n} className="artha-cap" style={{ borderBottom: i === caps.length - 1 ? "1px solid var(--inverse-line)" : "none" }}>
                <div className="mono" style={{ fontSize: "var(--fs-label)", letterSpacing: "0.1em", color: "var(--accent)", paddingTop: 5 }}>{c.n}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.15, color: "var(--inverse-ink)" }}>{c.k}</div>
                  <div style={{ fontSize: 13.5, color: "var(--inverse-ink-soft)", marginTop: 8, lineHeight: 1.55 }}>{c.d}</div>
                  <div className="mono" style={{ fontSize: "var(--fs-micro)", letterSpacing: "0.1em", color: "var(--inverse-ink-soft)", marginTop: 12 }}>{c.meta}</div>
                </div>
              </div>)}
          </div>
          <ArthaFlow />
        </div>
        <div className="artha-pillars" style={{ marginTop: 56 }}>
          {pillars.map(([k, v], i) =>
            <div key={k} style={{ padding: "28px 24px 0", paddingLeft: i === 0 ? 0 : 24, borderLeft: i === 0 ? "none" : "1px solid var(--inverse-line)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 19, color: "var(--inverse-ink)", lineHeight: 1.2 }}>{k}</div>
              <div style={{ fontSize: 13, color: "var(--inverse-ink-soft)", marginTop: 10, lineHeight: 1.55 }}>{v}</div>
            </div>)}
        </div>
        <div style={{ marginTop: 40, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="btn btn-primary" href="#contact">Evaluate Artha on your documents <Arrow /></a>
          <a className="btn btn-ghost" href="#contact">Licensing & self-hosting</a>
        </div>
      </div>
    </section>);
}

// ───────────────────────────────────────────────── Insurance / Governance
function Insurance() {
  return (
    <section id="insurance" className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="shell">
        <SectionHead tag="03" eyebrow="Insurance AI"
          title={<>Settle claims <em className="italic" style={{ color: "var(--accent)" }}>before</em> they&apos;re filed.</>}
          kicker="Newron's claims models inspect documents, parse policy language, and predict denial risk the moment a claim is initiated — so adjusters spend their time on edge cases, not paperwork." />
        <div className="r-split" style={{ marginTop: 56 }}>
          <div>
            <ClaimStep n="01" title="Eligibility check, before submission" desc="Policy retrieval + document understanding flags missing artefacts and ineligible claims at intake." meta="ELIGIBLE · 0.94" metaColor="green" />
            <ClaimStep n="02" title="Automated claim filing" desc="Forms, supporting documents and metadata assembled into TPA-ready packets in under 90 seconds." meta="FILED · 00:01:24" metaColor="slate" />
            <ClaimStep n="03" title="Denial risk & remediation" desc="Predicts likely denial reasons against historical adjudication data; suggests remediation pre-emptively." meta="RISK · 0.18 LOW" metaColor="amber" last />
          </div>
          <div>
            <ProductChrome title="Claims · Policy CLP-44829-1">
              <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 14, borderBottom: "1px solid var(--line)" }}>
                  <div>
                    <div className="eyebrow">Claim · CL-2026-9881</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 20, marginTop: 4 }}>Cardiac · Inpatient · ₹ 4.2L</div>
                  </div>
                  <div className="mono" style={{ fontSize: "var(--fs-micro)", color: "var(--green)", letterSpacing: "0.08em" }}>● ELIGIBLE</div>
                </div>
                <div className="r-3up">
                  {[["Policy fit", "0.98", "green"], ["Denial risk", "0.18", "amber"], ["Doc completeness", "11/11", "green"]].map(([k, v, c]) =>
                    <div key={k} style={{ border: "1px solid var(--line)", padding: 12, borderRadius: 4 }}>
                      <div className="eyebrow" style={{ fontSize: "var(--fs-micro)" }}>{k}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: `var(--${c})`, marginTop: 6 }}>{v}</div>
                    </div>)}
                </div>
                <div style={{ borderLeft: "2px solid var(--accent)", padding: 12, background: "var(--bg-2)", borderRadius: "0 4px 4px 0" }}>
                  <div className="mono" style={{ fontSize: "var(--fs-micro)", color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 6 }}>NEWRON · ADVISORY</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>
                    Claim is well within sub-limit. Recommend filing today via Star Allied TPA; historical SLA is 4.2 working days.
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn btn-primary" style={{ flex: 1, justifyContent: "center" }}>File claim <Arrow /></button>
                  <button className="btn btn-ghost">Hold for review</button>
                </div>
              </div>
            </ProductChrome>
          </div>
        </div>
      </div>
    </section>);
}

function ClaimStep({ n, title, desc, meta, metaColor, last }: { n: string; title: string; desc: string; meta: string; metaColor: string; last?: boolean }) {
  return (
    <div style={{ paddingBlock: 22, borderBottom: last ? "none" : "1px solid var(--line)", display: "grid", gridTemplateColumns: "32px 1fr auto", gap: 16, alignItems: "start" }}>
      <div className="mono" style={{ fontSize: "var(--fs-meta)", color: "var(--ink-muted)", letterSpacing: "0.1em", marginTop: 4 }}>{n}</div>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.2 }}>{title}</div>
        <div style={{ fontSize: 13.5, color: "var(--ink-soft)", marginTop: 6, lineHeight: 1.55, maxWidth: 380 }}>{desc}</div>
      </div>
      <div className="mono" style={{ fontSize: "var(--fs-micro)", color: `var(--${metaColor})`, letterSpacing: "0.1em", whiteSpace: "nowrap", marginTop: 6 }}>{meta}</div>
    </div>);
}

function Governance() {
  return (
    <section id="governance" className="section" data-on-dark="1" style={{ background: "var(--inverse-bg)", color: "var(--inverse-ink)" }}>
      <div className="shell">
        <SectionHead inverse tag="04" eyebrow="Governance AI"
          title={<>Citizen services<br />in <em className="italic" style={{ color: "var(--accent)" }}>their</em> language.</>}
          kicker="Built with the Government of Karnataka. Newron reads Kannada handwriting, speaks in regional dialects, and surfaces policy answers from documents that were never indexed — so grievance redressal works at the speed of a phone call." />
        <div className="r-split is-top" style={{ marginTop: 56 }}>
          <div>
            <div className="r-2up">
              {[["Custom OCR · Kannada", "Handwriting + print, ledger forms"], ["Regional TTS", "Natural voices, low latency"], ["Grievance triage", "Routing + summary + draft response"], ["Policy discovery", "Surfaces clauses from PDFs at scale"]].map(([k, v], i) =>
                <div key={k} style={{ borderTop: "1px solid var(--inverse-line)", borderRight: i % 2 === 0 ? "1px solid var(--inverse-line)" : "none", padding: "20px 24px 20px 0", paddingLeft: i % 2 === 1 ? 24 : 0 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--inverse-ink)" }}>{k}</div>
                  <div style={{ fontSize: 12.5, color: "var(--inverse-ink-soft)", marginTop: 4, lineHeight: 1.5 }}>{v}</div>
                </div>)}
            </div>
          </div>
          <div style={{ background: "var(--inverse-bg-2)", border: "1px solid var(--inverse-line)", borderRadius: 6, padding: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
              <span className="mono" style={{ fontSize: "var(--fs-micro)", color: "var(--inverse-ink-soft)", letterSpacing: "0.1em" }}>GRIEVANCE · GOK-2026-118447</span>
              <span className="mono" style={{ fontSize: "var(--fs-micro)", color: "var(--accent)", letterSpacing: "0.1em" }}>● LIVE</span>
            </div>
            <Bubble who="Citizen · Kannada audio">
              <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--inverse-ink)" }}>ನನ್ನ ರೇಶನ್ ಕಾರ್ಡ್ ಎರಡು ತಿಂಗಳಿಂದ ಬಂದಿಲ್ಲ.</span>
              <div style={{ fontSize: "var(--fs-meta)", marginTop: 6, opacity: 0.65 }}>&quot;My ration card has not arrived for two months.&quot;</div>
            </Bubble>
            <Bubble who="Newron · classification" accent>
              <span>Category: <strong style={{ color: "var(--inverse-ink)" }}>PDS — Card delivery</strong></span><br />
              <span>District: <strong style={{ color: "var(--inverse-ink)" }}>Mysuru</strong> · routed to <strong style={{ color: "var(--inverse-ink)" }}>Tier-2 officer</strong></span>
            </Bubble>
            <Bubble who="Policy retrieval">
              KA PDS rule 4.2(c): re-issuance permitted after 45 days from acknowledgement; last status:{" "}
              <strong style={{ color: "var(--inverse-ink)" }}>printed 12 Mar, undelivered</strong>.
            </Bubble>
            <Bubble who="Draft response · Kannada" accent>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--inverse-ink)" }}>ನಿಮ್ಮ ರೇಶನ್ ಕಾರ್ಡ್ ಮಾರ್ಚ್ 12 ರಂದು ಮುದ್ರಿತವಾಗಿದೆ…</span>
              <div style={{ marginTop: 10, display: "flex", gap: 16, fontSize: "var(--fs-micro)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>
                <span style={{ color: "var(--green)" }}>● APPROVED</span>
                <span style={{ color: "var(--inverse-ink-soft)" }}>SENT · TTS · 04:12s</span>
              </div>
            </Bubble>
          </div>
        </div>
      </div>
    </section>);
}

function Bubble({ who, accent, children }: { who: string; accent?: boolean; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div className="mono" style={{ fontSize: "var(--fs-micro)", letterSpacing: "0.1em", color: "var(--inverse-ink-soft)", marginBottom: 5 }}>{who.toUpperCase()}</div>
      <div style={{ border: "1px solid var(--inverse-line)", borderLeft: accent ? "2px solid var(--accent)" : "1px solid var(--inverse-line)", padding: "10px 12px", borderRadius: 4, fontSize: 13, lineHeight: 1.55, color: "var(--inverse-ink)", fontFamily: "var(--font-sans)" }}>{children}</div>
    </div>);
}

// ───────────────────────────────────────────────── Services
function Services() {
  const items = [
    { tag: "Engineering", title: "Custom AI engineering", desc: "We sit inside your team to design data pipelines, eval harnesses and the inference path. Scope to production in 8–12 weeks.", points: ["Discovery + scoping sprint", "Data + eval pipeline", "Deployment"] },
    { tag: "Foundational", title: "Custom foundational models", desc: "When off-the-shelf models won't do the job, we build them. Domain-pretrained, fine-tuned on your data, evaluated against the SOTA.", points: ["Pretraining + alignment", "On par with SOTA · 1/8 cost", "License: yours"] },
    { tag: "Automation", title: "Business automation with AI", desc: "Document workflows, ops tooling, and customer-facing copilots — built on the Newron platform, deployed in your VPC.", points: ["Document + workflow ops", "VPC or air-gapped", "API-first, self-hostable"] }];
  return (
    <section id="services" className="section">
      <div className="shell">
        <SectionHead tag="05" eyebrow="Custom AI services"
          title={<>When the product isn&apos;t enough,<br /><em className="italic" style={{ color: "var(--accent)" }}>we build it for you.</em></>}
          kicker="Newron is staffed by ex-research and ex-platform engineers. Most engagements ship to production inside one quarter." />
        <div className="r-cards" style={{ marginTop: 56 }}>
          {items.map((it, idx) =>
            <article key={it.title} className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div className="eyebrow">{it.tag}</div>
                <div className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)", letterSpacing: "0.1em" }}>0{idx + 1}</div>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1.05, margin: "24px 0 14px" }}>{it.title}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.55, margin: 0 }}>{it.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 8, borderTop: "1px solid var(--line)", paddingTop: 16 }}>
                {it.points.map((p) =>
                  <li key={p} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)" }} />{p}
                  </li>)}
              </ul>
            </article>)}
        </div>
      </div>
    </section>);
}

// ───────────────────────────────────────────────── Customers
const CUSTOMERS: [string, string][] = [
  ["Google", "Technology"], ["IISc", "Research"], ["Govt. of Karnataka", "State"],
  ["HDFC Credila", "NBFC"], ["Fusion", "Microfinance"]];
const CUST_TOP = 3;

function Customers() {
  return (
    <section id="customers" className="section" style={{ borderTop: "1px solid var(--line)", background: "var(--bg-2)" }}>
      <div className="shell">
        <SectionHead tag="06" eyebrow="Customers" title={<>In production at banks, NBFCs<br />and state institutions.</>} />
        <div className="r-split is-top" style={{ marginTop: 56 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Featured · NBFC, Tier-1 · Q3 2025</div>
            <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "clamp(26px, 2.6vw, 36px)", lineHeight: 1.2, letterSpacing: "-0.012em" }}>
              &quot;Newron&apos;s CAM engine replaced three weeks of human review with a 40-minute QC step. Our credit officers stopped reformatting Excel and went back to actually underwriting.&quot;
            </blockquote>
            <div style={{ marginTop: 24, fontSize: 13, color: "var(--ink-soft)" }}>Head of Credit · Tier-1 NBFC · ₹38,000 Cr AUM</div>
            <a href="#" className="btn btn-link" style={{ marginTop: 20, display: "inline-block" }}>Read the case study →</a>
          </div>
          <div className="r-custgrid">
            {CUSTOMERS.map((c, i) => {
              /* three across the top, the remainder sharing the row below — a
                 6-column track lets both rows stay flush without an empty cell */
              const top = i < CUST_TOP;
              const span = top ? 2 : Math.max(1, Math.round(6 / (CUSTOMERS.length - CUST_TOP)));
              const lastInRow = top ? i === CUST_TOP - 1 : i === CUSTOMERS.length - 1;
              return (
                <div key={c[0]} style={{ gridColumn: `span ${span}`, padding: "32px 24px", borderRight: lastInRow ? "none" : "1px solid var(--line)", borderBottom: top ? "1px solid var(--line)" : "none" }}>
                  <div className="eyebrow" style={{ fontSize: "var(--fs-micro)" }}>{c[1]}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, marginTop: 8, lineHeight: 1.15 }}>{c[0]}</div>
                </div>);
            })}
          </div>
        </div>
      </div>
    </section>);
}

// ───────────────────────────────────────────────── Company / Why
function Company() {
  const pillars = [
    { k: "Deploy where you need to", v: "Self-hostable on your VPC, on-prem, or fully air-gapped. Compliance teams get the audit trail; engineering keeps the keys." },
    { k: "API-first by design", v: "Every Newron product ships with the same REST + webhook surface. Drop into your LOS, your claims platform, your CRM." },
    { k: "On par with SOTA, at 1/8", v: "Our custom models score within striking distance of frontier systems on the tasks that matter — for a fraction of the inference bill." },
    { k: "Built with NVIDIA", v: "Inception Partner since 2023. Trained on Indian financial data with explicit residency commitments." }];
  return (
    <section id="company" className="section">
      <div className="shell">
        <SectionHead tag="07" eyebrow="Why Newron" title={<>A platform built for the way<br /><em className="italic" style={{ color: "var(--accent)" }}>regulated industries</em> actually buy AI.</>} />
        <div className="r-pillars" style={{ marginTop: 56 }}>
          {pillars.map((p, i) =>
            <div key={p.k} className="r-pillar">
              <div className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--ink-muted)", letterSpacing: "0.1em", marginTop: 6 }}>0{i + 1}</div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 26, lineHeight: 1.1 }}>{p.k}</div>
                <div style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 10, lineHeight: 1.55, maxWidth: 420 }}>{p.v}</div>
              </div>
            </div>)}
        </div>
      </div>
    </section>);
}

// ───────────────────────────────────────────────── CTA + Footer
const inputStyle: CSSProperties = {
  width: "100%", background: "transparent", border: "1px solid var(--inverse-line)", color: "var(--inverse-ink)",
  padding: "12px 14px", fontFamily: "var(--font-sans)", fontSize: 14, borderRadius: 4, outline: "none"
};
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label style={{ display: "block" }}>
      <div className="mono" style={{ fontSize: "var(--fs-micro)", letterSpacing: "0.1em", color: "var(--inverse-ink-soft)", marginBottom: 6 }}>{label}</div>
      {children}
    </label>);
}

function CTA({ headline }: { headline: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [ticket, setTicket] = useState("");
  return (
    <section id="contact" className="section" data-on-dark="1" style={{ background: "var(--inverse-bg)", color: "var(--inverse-ink)" }}>
      <div className="shell r-cta">
        <div>
          <div className="eyebrow" style={{ color: "var(--inverse-ink-soft)", marginBottom: 24 }}>Get started</div>
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.96, color: "var(--inverse-ink)" }}>
            {headline.split("on your data").length > 1 ?
              <>{headline.split("on your data")[0]}<em className="italic" style={{ color: "var(--accent)" }}>on your data</em>{headline.split("on your data")[1]}</> :
              <em className="italic" style={{ color: "var(--accent)" }}>{headline}</em>}
          </h2>
          <p style={{ fontSize: 16, color: "var(--inverse-ink-soft)", maxWidth: 520, marginTop: 28, lineHeight: 1.5 }}>
            We&apos;ll spin up a sandboxed instance against a slice of your data, deliver a working pilot, and give your team the eval numbers to make the decision.
          </p>
        </div>
        {submitted ?
          <div style={{ border: "1px solid var(--inverse-line)", padding: 28, borderRadius: 6, background: "var(--inverse-bg-2)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--inverse-ink)" }}>Thanks — we&apos;ll be in touch within one business day.</div>
            <div className="mono" style={{ fontSize: "var(--fs-label)", color: "var(--inverse-ink-soft)", letterSpacing: "0.08em", marginTop: 12 }}>TICKET · NWR-2026-{ticket}</div>
          </div> :
          <form onSubmit={(e) => { e.preventDefault(); setTicket(String(Math.floor(Math.random() * 90000 + 10000))); setSubmitted(true); }} style={{ border: "1px solid var(--inverse-line)", padding: 24, borderRadius: 6, background: "var(--inverse-bg-2)", display: "flex", flexDirection: "column", gap: 14 }}>
            <Field label="WORK EMAIL"><input required type="email" placeholder="cto@bank.example" style={inputStyle} /></Field>
            <Field label="COMPANY"><input required placeholder="Acme Capital" style={inputStyle} /></Field>
            <Field label="INTEREST">
              <select style={inputStyle} defaultValue="">
                <option value="" disabled>Choose one</option>
                <option>Lending intelligence</option>
                <option>Insurance AI</option>
                <option>Governance AI</option>
                <option>Custom AI engineering</option>
              </select>
            </Field>
            <button type="submit" className="btn" style={{ background: "var(--accent)", color: "#fff", marginTop: 6, justifyContent: "space-between" }}>Request a pilot <Arrow /></button>
          </form>}
      </div>
    </section>);
}

function Footer() {
  const cols = [
    { h: "Solutions", links: [["Lending intelligence", "lending-intelligence.html"], ["Insurance AI", "insurance-ai.html"], ["Governance AI", "governance-ai.html"], ["Custom AI engineering", "custom-ai-engineering.html"]] },
    { h: "Industries", links: [["Banks", "banks.html"], ["NBFCs", "nbfcs.html"], ["Insurance", "industry-insurance.html"], ["Public sector", "public-sector.html"]] },
    { h: "Company", links: [["About", "about.html"], ["Careers", "careers.html"], ["Press", "press.html"], ["Open source", "open-source.html"]] },
    { h: "Legal", links: [["Privacy", "privacy.html"], ["Terms", "terms.html"], ["Security", "security.html"], ["Responsible AI", "responsible-ai.html"]] }];
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--line)", paddingBlock: 80 }}>
      <div className="shell">
        <div className="r-footer">
          <div>
            <Wordmark />
            <p style={{ fontSize: 13, color: "var(--ink-soft)", maxWidth: 280, marginTop: 18, lineHeight: 1.55 }}>
              Newron is an applied-AI company building production systems for regulated industries. Bengaluru, India.
            </p>
            <div style={{ marginTop: 18 }}><span className="tag">NVIDIA PARTNERED</span></div>
          </div>
          {cols.map((c) =>
            <div key={c.h}>
              <div className="eyebrow" style={{ marginBottom: 18 }}>{c.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.links.map(([l, h]) =>
                  <li key={l}><a href={route(h)} style={{ color: "var(--ink)", textDecoration: "none", fontSize: 13.5 }}>{l}</a></li>)}
              </ul>
            </div>)}
        </div>
        <div style={{ borderTop: "1px solid var(--line)", marginTop: 64, paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap", fontSize: "var(--fs-meta)", color: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>
          <span>© 2026 NEWRON AI TECHNOLOGIES PVT. LTD.</span>
          <span style={{ display: "flex", gap: 14, flexWrap: "wrap", letterSpacing: "0.06em" }}>
            <span>SOC 2 (APPLIED)</span><span style={{ opacity: 0.5 }}>·</span>
            <span>ISO 27001</span><span style={{ opacity: 0.5 }}>·</span>
            <span>BENGALURU, INDIA</span>
          </span>
          <span>v4.0 · MAY 2026</span>
        </div>
      </div>
    </footer>);
}

// ───────────────────────────────────────────────── shared SectionHead
function SectionHead({ tag, eyebrow, title, kicker, inverse }: { tag: string; eyebrow: ReactNode; title: ReactNode; kicker?: string; inverse?: boolean }) {
  return (
    <header className={"section-head" + (inverse ? " is-inverse" : "")}>
      <div className="mono sh-tag">{tag}</div>
      <div>
        <div className="eyebrow eyebrow-grad" style={{ marginBottom: 18 }}>{eyebrow}</div>
        <h2 className="display sh-title">{title}</h2>
      </div>
      <div>{kicker && <p className="sh-kicker">{kicker}</p>}</div>
    </header>);
}

// ───────────────────────────────────────────────── Page
const HERO_SUB = "Newron is the applied-AI partner to India's banks, NBFCs, insurers and Government — building production systems that underwrite faster, settle claims sooner, serve citizens in their own language & many more";
const CTA_COPY = "See Newron on your data, in a week.";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero sub={HERO_SUB} />
      <LogoMarquee />
      <Lending />
      <Artha />
      <Insurance />
      <Governance />
      <Services />
      <Customers />
      <Company />
      <CTA headline={CTA_COPY} />
      <Footer />
    </>);
}

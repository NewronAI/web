/* global React, Wordmark, Mark, AnimatedNumber, SectionHeader, Icon */
const { useState: useStateS, useEffect: useEffectS } = React;

// ============ NAV ============
function Nav({ heroVariant }) {
  const [open, setOpen] = useStateS(null);
  const [scrolled, setScrolled] = useStateS(false);

  useEffectS(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solutions = [
  { id: "lending", label: "Lending intelligence", sub: "CAM, statement & bureau analysis" },
  { id: "insurance", label: "Insurance AI", sub: "Claim eligibility & remediation" },
  { id: "governance", label: "Governance AI", sub: "Citizen services in local languages" },
  { id: "services", label: "Custom AI engineering", sub: "Foundational models, automation" }];


  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "color-mix(in oklab, var(--bg) 88%, transparent)" : "transparent",
      backdropFilter: scrolled ? "blur(12px) saturate(140%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(12px) saturate(140%)" : "none",
      borderBottom: scrolled ? "1px solid var(--line-soft)" : "1px solid transparent",
      transition: "background 0.2s, border-color 0.2s"
    }}>
      <div className="shell" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 72
      }}>
        <a href="#top" style={{ textDecoration: "none", color: "var(--ink)" }}>
          <Wordmark height={20} />
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <NavItem
            label="Solutions"
            hasMenu
            open={open === "solutions"}
            onToggle={() => setOpen(open === "solutions" ? null : "solutions")}>
            
            <SolutionsMenu items={solutions} onClose={() => setOpen(null)} />
          </NavItem>
          <NavItem label="Industries" href="#industries" />
          <NavItem label="Customers" href="#customers" />
          <NavItem label="About" href="#about" />
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a className="btn btn-ghost" href="#contact">Talk to sales</a>
          <a className="btn btn-primary" href="#contact">
            Book a demo <Icon.arrow />
          </a>
        </div>
      </div>
    </header>);

}

function NavItem({ label, hasMenu, open, onToggle, href, children }) {
  if (hasMenu) {
    return (
      <div style={{ position: "relative" }}>
        <button
          onClick={onToggle}
          style={{
            background: "transparent",
            border: 0,
            padding: "10px 14px",
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            color: "var(--ink)",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontWeight: 500,
            borderRadius: 6
          }}>
          
          {label}
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 3.5 L5 6.5 L8 3.5"
              stroke="currentColor"
              strokeWidth="1.3"
              fill="none"
              style={{ transition: "transform 0.2s", transformOrigin: "center", transform: open ? "rotate(180deg)" : "rotate(0)" }} />
            
          </svg>
        </button>
        {open && children}
      </div>);

  }
  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        color: "var(--ink)",
        padding: "10px 14px",
        fontSize: 14,
        fontWeight: 500,
        borderRadius: 6
      }}>
      
      {label}
    </a>);

}

function SolutionsMenu({ items, onClose }) {
  return (
    <div
      onMouseLeave={onClose}
      style={{
        position: "absolute",
        top: "calc(100% + 8px)",
        left: 0,
        minWidth: 360,
        background: "var(--bg)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-lg)",
        boxShadow: "0 24px 60px -20px oklch(0 0 0 / 0.18)",
        padding: 8,
        zIndex: 60
      }}>
      
      {items.map((it) =>
      <a
        key={it.id}
        href={`#${it.id}`}
        onClick={onClose}
        style={{
          display: "block",
          padding: "14px 16px",
          textDecoration: "none",
          color: "var(--ink)",
          borderRadius: "var(--r)",
          transition: "background 0.12s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-2)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
        
          <div style={{ fontSize: 14, fontWeight: 500 }}>{it.label}</div>
          <div style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 2 }}>{it.sub}</div>
        </a>
      )}
    </div>);

}

// ============ HERO ============
function Hero({ variant = "editorial", copy }) {
  const headline = copy?.headline ?? "The intelligence layer for India's lenders.";
  const sub = copy?.sub ?? "Newron builds the AI systems banks and NBFCs deploy to underwrite faster, settle claims sooner, and serve citizens in their own language — privately, on your infrastructure.";

  if (variant === "split") return <HeroSplit headline={headline} sub={sub} />;
  if (variant === "stat") return <HeroStat headline={headline} sub={sub} />;
  return <HeroEditorial headline={headline} sub={sub} />;
}

function HeroEditorial({ headline, sub }) {
  return (
    <section id="top" style={{ paddingBlock: "calc(56px * var(--density)) calc(32px * var(--density))", borderBottom: "1px solid var(--line)" }}>
      <div className="shell">
        {/* Eyebrow line */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 28,
          borderBottom: "1px solid var(--line)",
          marginBottom: 56
        }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span className="tag tag-dot">
              <span style={{ fontFamily: "var(--font-mono)" }}>NVIDIA Inception Partner</span>
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.08em" }}>
              ESTABLISHED 2021 · BENGALURU
            </span>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.08em" }}>LENDING · INSURANCE · GOVERNANCE
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 240px",
          gap: 64,
          alignItems: "end"
        }}>
          {/* Headline */}
          <div>
            <h1 className="display" style={{
              margin: 0,
              fontSize: "clamp(60px, 9.8vw, 152px)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em"
            }}>
              The intelligence
              <br />
              <em className="italic" style={{ color: "var(--accent)" }}>layer</em> for India's
              <br />
              regulated industries.
            </h1>
          </div>

          {/* Right metadata column */}
          <aside style={{
            borderLeft: "1px solid var(--line)",
            paddingLeft: 24,
            display: "flex",
            flexDirection: "column",
            gap: 24
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 8 }}>Built for</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4, fontSize: 14 }}>
                <li>Banks & NBFCs</li>
                <li>Insurance providers</li>
                <li>State institutions</li>
              </ul>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 8 }}>Deployment</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4, fontSize: 14 }}>
                <li>Self-hosted</li>
                <li>VPC · air-gapped</li>
                <li>API-first</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Sub + CTAs */}
        <div style={{
          marginTop: 56,
          paddingTop: 32,
          borderTop: "1px solid var(--line)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          gap: 56,
          alignItems: "center"
        }}>
          <p style={{
            fontSize: "clamp(18px, 1.7vw, 22px)",
            lineHeight: 1.45,
            color: "var(--ink-soft)",
            maxWidth: 700,
            margin: 0,
            letterSpacing: "-0.005em"
          }}>
            {sub}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="#contact">Book a demo <Icon.arrow /></a>
              <a className="btn btn-ghost" href="#lending">See the lending suite</a>
            </div>
            <div style={{ fontSize: 11, color: "var(--ink-muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}>
              SOC 2 · ISO 27001 · DPDP-COMPLIANT
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function HeroSplit({ headline, sub }) {
  return (
    <section id="top" className="section" style={{ paddingBlock: "calc(80px * var(--density))" }}>
      <div className="shell" style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
        gap: 80,
        alignItems: "center"
      }}>
        <div>
          <span className="eyebrow" style={{ display: "block", marginBottom: 24 }}>Lending · Insurance · Governance</span>
          <h1 className="display" style={{
            margin: 0,
            fontSize: "clamp(48px, 6.4vw, 92px)",
            lineHeight: 1,
            letterSpacing: "-0.02em"
          }}>
            {headline.split("lenders.").length > 1 ?
            <>
                {headline.split("lenders.")[0]}
                <em className="italic" style={{ color: "var(--accent)" }}>lenders.</em>
              </> :
            headline}
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink-soft)", lineHeight: 1.55, marginTop: 28, maxWidth: 540 }}>
            {sub}
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 32 }}>
            <a className="btn btn-primary" href="#contact">Book a demo <Icon.arrow /></a>
            <a className="btn btn-ghost" href="#lending">See the lending suite</a>
          </div>
        </div>
        <HeroProductPeek />
      </div>
    </section>);

}

function HeroStat({ headline, sub }) {
  return (
    <section id="top" className="section" style={{ paddingBlock: "calc(72px * var(--density)) calc(20px * var(--density))" }}>
      <div className="shell">
        <span className="eyebrow" style={{ display: "block", marginBottom: 28 }}>Newron · 2026</span>
        <h1 className="display" style={{
          margin: 0,
          fontSize: "clamp(56px, 8vw, 120px)",
          lineHeight: 0.98,
          maxWidth: 1100
        }}>
          ₹<AnimatedNumber value={2200} /> Cr in loans,
          <br />
          underwritten <em className="italic" style={{ color: "var(--accent)" }}>with Newron.</em>
        </h1>
        <p style={{ fontSize: 19, color: "var(--ink-soft)", maxWidth: 600, marginTop: 32 }}>{sub}</p>
        <div style={{ display: "flex", gap: 10, marginTop: 32 }}>
          <a className="btn btn-primary" href="#contact">Book a demo <Icon.arrow /></a>
          <a className="btn btn-ghost" href="#lending">See the lending suite</a>
        </div>
      </div>
    </section>);

}

function ProofRow() {
  const items = [
  "Loan origination",
  "Credit policy",
  "KYC & onboarding",
  "Claims",
  "Citizen services"];

  return (
    <div style={{
      marginTop: 72,
      paddingTop: 28,
      borderTop: "1px solid var(--line)",
      display: "flex",
      gap: 32,
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <div className="eyebrow">Deployed across</div>
      <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
        {items.map((s) =>
        <div key={s} style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-soft)", letterSpacing: "0.04em" }}>
            {s.toUpperCase()}
          </div>
        )}
      </div>
    </div>);

}

function HeroProductPeek() {
  return (
    <div style={{
      aspectRatio: "5/4",
      background: "var(--bg-2)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-lg)",
      padding: 18,
      position: "relative",
      overflow: "hidden"
    }} className="dot-grid">
      <div style={{
        background: "var(--bg)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r)",
        height: "100%",
        boxShadow: "0 24px 60px -30px oklch(0 0 0 / 0.18)",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }}>
        <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-muted)", letterSpacing: "0.1em" }}>APPLICATION #LP-2884109</div>
        <div style={{ fontSize: 18, fontFamily: "var(--font-display)" }}>Suresh Iyer — Loan against property</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
          ["Income score", "0.86", "var(--signal-green)"],
          ["Bureau", "742", "var(--signal-amber)"],
          ["Policy fit", "Tier-2", "var(--ink-soft)"],
          ["Deviation", "1 minor", "var(--signal-teal)"]].
          map(([k, v, c]) =>
          <div key={k} style={{ border: "1px solid var(--line)", padding: "10px 12px", borderRadius: 6 }}>
              <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--ink-muted)", letterSpacing: "0.08em" }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: 18, marginTop: 2, color: c, fontWeight: 500 }}>{v}</div>
            </div>
          )}
        </div>
        <div style={{ flex: 1 }}></div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--line)", paddingTop: 14 }}>
          <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>Recommended</div>
          <div style={{ fontSize: 13, color: "var(--signal-green)", fontWeight: 500 }}>APPROVE · ₹ 38,00,000</div>
        </div>
      </div>
    </div>);

}

// ============ METRICS STRIP ============
function MetricsStrip() {
  const items = [
  { v: 2200, prefix: "₹", suffix: " Cr+", label: "Disbursed via Newron", spark: [1, 2, 2, 3, 4, 5, 7, 9, 11, 14, 18, 22] },
  { v: 66, suffix: "%", label: "Reduction in TAT", spark: [20, 18, 16, 14, 11, 9, 8, 7, 7, 7, 7, 7] },
  { v: 200, suffix: "%", label: "Productivity uplift", spark: [10, 11, 12, 13, 15, 17, 18, 19, 20, 22, 24, 30] },
  { v: 130000, suffix: "+", label: "Hours saved", spark: [2, 4, 6, 9, 13, 18, 24, 30, 38, 48, 57, 65] }];

  return (
    <section className="section-tight inverse" style={{ position: "relative" }}>
      <div className="shell">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "calc(40px * var(--density))" }}>
          <div className="eyebrow" style={{ color: "var(--inverse-ink-soft)" }}>In production · May 2026</div>
          <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--inverse-ink-soft)", letterSpacing: "0.08em" }}>
            ACROSS 14 LENDERS · 3 STATE INSTITUTIONS
          </div>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid var(--inverse-line)"
        }}>
          {items.map((m, i) =>
          <div key={i} style={{
            padding: "32px 28px 28px",
            borderLeft: i === 0 ? "none" : "1px solid var(--inverse-line)",
            borderBottom: "1px solid var(--inverse-line)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            position: "relative"
          }}>
              <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--inverse-ink-soft)",
              letterSpacing: "0.14em"
            }}>
                0{i + 1}
              </div>
              <div className="display" style={{
              fontSize: "clamp(48px, 5.4vw, 78px)",
              lineHeight: 0.9,
              color: "var(--inverse-ink)",
              letterSpacing: "-0.03em"
            }}>
                <AnimatedNumber value={m.v} prefix={m.prefix || ""} suffix={m.suffix || ""} />
              </div>
              <Sparkline data={m.spark} />
              <div style={{
              fontSize: 13,
              color: "var(--inverse-ink-soft)",
              lineHeight: 1.4
            }}>
                {m.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Sparkline({ data }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 100,h = 28;
  const points = data.map((v, i) => {
    const x = i / (data.length - 1) * w;
    const y = h - (v - min) / range * h;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height: 28, opacity: 0.85 }}>
      <polyline points={points} fill="none" stroke="var(--accent)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
    </svg>);

}

// ============ INSURANCE ============
function Insurance() {
  return (
    <section id="insurance" className="section" style={{ background: "var(--bg)" }}>
      <div className="shell">
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
          gap: 80,
          alignItems: "start"
        }}>
          <div style={{ position: "sticky", top: 100 }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>02 · Insurance AI</span>
            <h2 className="display" style={{
              margin: 0,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1.02
            }}>
              Settle claims <em className="italic" style={{ color: "var(--accent)" }}>before</em> they're filed.
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.55, marginTop: 24, maxWidth: 480 }}>
              Newron's claims models inspect documents, parse policy language, and predict denial risk
              the moment a claim is initiated — so adjusters spend their time on edge cases, not paperwork.
            </p>
            <a className="btn btn-ghost" style={{ marginTop: 28 }} href="#contact">Talk to the insurance team <Icon.arrow /></a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <ClaimRow
              tag="01"
              title="Eligibility check, before submission"
              desc="Policy retrieval + document understanding flags missing artefacts and ineligible claims at intake."
              status="ELIGIBLE · 0.94"
              statusColor="var(--signal-green)" />
            
            <ClaimRow
              tag="02"
              title="Automated claim filing"
              desc="Forms, supporting documents and metadata assembled into TPA-ready packets in under 90 seconds."
              status="FILED · 00:01:24"
              statusColor="var(--signal-teal)" />
            
            <ClaimRow
              tag="03"
              title="Denial risk &amp; remediation"
              desc="Predicts likely denial reasons against historical adjudication data; suggests remediation pre-emptively."
              status="RISK · 0.18 LOW"
              statusColor="var(--signal-amber)" />
            
          </div>
        </div>
      </div>
    </section>);

}

function ClaimRow({ tag, title, desc, status, statusColor }) {
  return (
    <div className="card" style={{ padding: 28, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center" }}>
      <div style={{ fontFamily: "var(--font-mono)", color: "var(--ink-muted)", fontSize: 12, letterSpacing: "0.08em" }}>{tag}</div>
      <div>
        <div style={{ fontSize: 19, fontFamily: "var(--font-display)", lineHeight: 1.2 }} dangerouslySetInnerHTML={{ __html: title }} />
        <div style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 8, maxWidth: 460, lineHeight: 1.55 }}>{desc}</div>
      </div>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.08em",
        color: statusColor,
        whiteSpace: "nowrap",
        textAlign: "right"
      }}>{status}</div>
    </div>);

}

// ============ GOVERNANCE ============
function Governance() {
  return (
    <section id="governance" className="section inverse">
      <div className="shell">
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          gap: 64,
          alignItems: "start"
        }}>
          <div>
            <span className="eyebrow" style={{ display: "block", marginBottom: 16, color: "var(--inverse-ink-soft)" }}>03 · Governance AI</span>
            <h2 className="display" style={{
              margin: 0,
              fontSize: "clamp(40px, 5.4vw, 72px)",
              lineHeight: 1,
              color: "var(--inverse-ink)"
            }}>
              Citizen services
              <br />
              in <em className="italic" style={{ color: "var(--accent)" }}>their</em> language.
            </h2>
            <p style={{
              fontSize: 17,
              color: "var(--inverse-ink-soft)",
              lineHeight: 1.55,
              marginTop: 28,
              maxWidth: 560
            }}>
              Built with the Government of Karnataka. Newron's models read Kannada handwriting, speak in
              regional dialects, and surface policy answers from documents that were never indexed —
              so grievance redressal works at the speed of a phone call.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 40, maxWidth: 600 }}>
              {[
              ["Custom OCR · Kannada", "Handwriting + print, ledger forms"],
              ["SOTA TTS · regional", "Natural-sounding voices, low latency"],
              ["Grievance triage", "Routing + summary + draft response"],
              ["Policy discovery", "Surfaces clauses from PDFs at scale"]].
              map(([k, v]) =>
              <div key={k} style={{ borderTop: "1px solid var(--inverse-line)", paddingTop: 16 }}>
                  <div style={{ fontSize: 14, color: "var(--inverse-ink)", fontWeight: 500 }}>{k}</div>
                  <div style={{ fontSize: 13, color: "var(--inverse-ink-soft)", marginTop: 4, lineHeight: 1.4 }}>{v}</div>
                </div>
              )}
            </div>
          </div>

          <GovernanceMockup />
        </div>
      </div>
    </section>);

}

function GovernanceMockup() {
  return (
    <div style={{
      background: "var(--inverse-bg-2)",
      border: "1px solid var(--inverse-line)",
      borderRadius: "var(--r-lg)",
      padding: 24,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--inverse-ink-soft)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18, fontSize: 11, letterSpacing: "0.1em" }}>
        <span>GRIEVANCE #GOK-2026-118447</span>
        <span style={{ color: "var(--accent)" }}>● LIVE</span>
      </div>

      <Bubble who="Citizen · Kannada audio" tone="muted">
        ನನ್ನ ರೇಶನ್ ಕಾರ್ಡ್ ಎರಡು ತಿಂಗಳಿಂದ ಬಂದಿಲ್ಲ.
        <div style={{ fontSize: 11, marginTop: 6, opacity: 0.7 }}>"My ration card has not arrived for two months."</div>
      </Bubble>

      <Bubble who="Newron · classification" tone="accent">
        Category: <span style={{ color: "var(--inverse-ink)" }}>PDS — Card delivery</span>
        <br />
        District: <span style={{ color: "var(--inverse-ink)" }}>Mysuru</span> · Routed to <span style={{ color: "var(--inverse-ink)" }}>Tier-2 officer</span>
      </Bubble>

      <Bubble who="Policy retrieval" tone="muted">
        Karnataka PDS rule 4.2(c): re-issuance permitted after 45 days from acknowledgement;
        last status on this card: <span style={{ color: "var(--inverse-ink)" }}>printed 12 Mar, undelivered</span>.
      </Bubble>

      <Bubble who="Draft response · Kannada" tone="accent">
        ನಿಮ್ಮ ರೇಶನ್ ಕಾರ್ಡ್ ಮಾರ್ಚ್ 12 ರಂದು ಮುದ್ರಿತವಾಗಿದೆ. ನಾವು ಪುನಃ ಕಳುಹಿಸುತ್ತಿದ್ದೇವೆ…
        <div style={{ display: "flex", gap: 16, marginTop: 12, fontSize: 11, letterSpacing: "0.08em" }}>
          <span style={{ color: "var(--signal-green)" }}>● APPROVED</span>
          <span>SENT VIA TTS · 04:12s</span>
        </div>
      </Bubble>
    </div>);

}

function Bubble({ who, tone, children }) {
  const border = tone === "accent" ? "var(--accent)" : "var(--inverse-line)";
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--inverse-ink-soft)", marginBottom: 6 }}>
        {who.toUpperCase()}
      </div>
      <div style={{
        border: "1px solid var(--inverse-line)",
        borderLeft: `2px solid ${border}`,
        padding: "12px 14px",
        borderRadius: 6,
        color: "var(--inverse-ink)",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        lineHeight: 1.5
      }}>
        {children}
      </div>
    </div>);

}

// ============ SERVICES ============
function Services() {
  const items = [
  {
    tag: "Engineering",
    title: "Custom AI engineering",
    desc: "We sit inside your team, designing the data pipeline, the eval harness, and the inference path. From scoping to production in 8–12 weeks.",
    bullets: ["Discovery + scoping sprint", "Data + eval pipeline", "Production deployment"]
  },
  {
    tag: "Foundational",
    title: "Custom foundational models",
    desc: "When off-the-shelf models won't do the job, we build them. Domain-pretrained, fine-tuned on your data, evaluated against the SOTA at a fraction of the cost.",
    bullets: ["Pretraining + alignment", "On-par with SOTA, at 1/8 cost", "License: yours, forever"]
  },
  {
    tag: "Automation",
    title: "Business automation with AI",
    desc: "Document workflows, ops tooling, and customer-facing copilots — built on the Newron platform, deployed inside your VPC.",
    bullets: ["Document + workflow ops", "VPC or air-gapped", "API-first, self-hostable"]
  }];

  return (
    <section id="services" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="04 · Custom AI services"
          title={<>When the product isn't enough,<br /><em className="italic" style={{ color: "var(--accent)" }}>we build it for you.</em></>}
          kicker="Newron is staffed by ex-research and ex-platform engineers. Most engagements ship to production inside one quarter." />
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16
        }}>
          {items.map((it) =>
          <article key={it.title} className="card" style={{ padding: 28, display: "flex", flexDirection: "column" }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>{it.tag}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, margin: 0, lineHeight: 1.1 }}>{it.title}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.55, marginTop: 14 }}>{it.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
                {it.bullets.map((b) =>
              <li key={b} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "var(--ink)" }}>
                    <span style={{ color: "var(--accent)" }}><Icon.check /></span>
                    {b}
                  </li>
              )}
              </ul>
            </article>
          )}
        </div>
      </div>
    </section>);

}

// ============ WHY NEWRON ============
function WhyNewron() {
  const items = [
  { icon: <Icon.shield />, title: "Deploy where you need to", desc: "Self-hostable on your VPC, on-prem, or fully air-gapped. Compliance teams get the audit trail; engineering keeps the keys." },
  { icon: <Icon.cube />, title: "API-first by design", desc: "Every Newron product ships with the same REST + webhook surface. Drop into your LOS, your claims platform, your CRM." },
  { icon: <Icon.cpu />, title: "On par with SOTA, at a fraction", desc: "Our custom models score within striking distance of frontier systems on the tasks that matter — for 1/8th the inference bill." },
  { icon: <Icon.spark />, title: "Built with NVIDIA", desc: "Inception Partner since 2023. Trained on Indian financial data with explicit residency commitments." }];

  return (
    <section id="about" className="section" style={{ background: "var(--bg-2)" }}>
      <div className="shell">
        <SectionHeader
          eyebrow="Why Newron"
          title={<>A platform built for the way <em className="italic" style={{ color: "var(--accent)" }}>regulated industries</em> actually buy AI.</>} />
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16
        }}>
          {items.map((it) =>
          <div key={it.title} className="card" style={{ padding: 24, background: "var(--bg)" }}>
              <div style={{ color: "var(--accent)", marginBottom: 16 }}>{it.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.15, margin: 0 }}>{it.title}</h3>
              <p style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.55, marginTop: 12, margin: "12px 0 0" }}>{it.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ============ CUSTOMERS / SOCIAL PROOF ============
function Customers() {
  const logos = ["KOTAK", "SATYA", "GOOGLE", "PHONEPE", "TRUKER", "AKMED", "TCI"];
  return (
    <section id="customers" className="section">
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: 56, alignItems: "center" }}>
          <div>
            <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>Customers</span>
            <h2 className="display" style={{ margin: 0, fontSize: "clamp(34px, 4vw, 48px)", lineHeight: 1.05 }}>
              In production at banks,<br />NBFCs, and state institutions.
            </h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-lg)",
            background: "var(--bg)"
          }}>
            {logos.map((l, i) =>
            <div key={l} style={{
              padding: "32px 16px",
              textAlign: "center",
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              letterSpacing: "0.18em",
              color: "var(--ink-soft)",
              borderLeft: i % 4 === 0 ? "none" : "1px solid var(--line)",
              borderTop: i >= 4 ? "1px solid var(--line)" : "none"
            }}>
                {l}
              </div>
            )}
            <div style={{
              padding: "32px 16px",
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontStyle: "italic",
              color: "var(--ink-muted)",
              borderLeft: "1px solid var(--line)",
              borderTop: "1px solid var(--line)",
              gridColumn: "auto"
            }}>
              + 12 more
            </div>
          </div>
        </div>

        <Testimonial />
      </div>
    </section>);

}

function Testimonial() {
  return (
    <figure style={{
      margin: "calc(72px * var(--density)) 0 0",
      padding: 0,
      borderTop: "1px solid var(--line)",
      paddingTop: 48,
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
      gap: 56,
      alignItems: "start"
    }}>
      <div>
        <span className="eyebrow">Case study · Tier-1 NBFC</span>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-muted)", marginTop: 14 }}>
          DEPLOYED · Q3 2025
        </div>
      </div>
      <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "clamp(26px, 2.6vw, 38px)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
        "Newron's CAM engine replaced three weeks of human review with a 40-minute QC step. Our credit
        officers stopped reformatting Excel and went back to actually underwriting."
        <figcaption style={{ marginTop: 24, fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--ink-soft)", fontStyle: "normal" }}>
          — Head of Credit · Tier-1 NBFC, ₹38,000 Cr AUM
        </figcaption>
      </blockquote>
    </figure>);

}

// ============ CTA ============
function CTA() {
  return (
    <section id="contact" className="section inverse">
      <div className="shell" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 80, alignItems: "end" }}>
        <div>
          <span className="eyebrow" style={{ display: "block", marginBottom: 24, color: "var(--inverse-ink-soft)" }}>Get started</span>
          <h2 className="display" style={{
            margin: 0,
            fontSize: "clamp(48px, 7vw, 96px)",
            lineHeight: 0.98,
            color: "var(--inverse-ink)"
          }}>
            See Newron <em className="italic" style={{ color: "var(--accent)" }}>on your data</em>, in a week.
          </h2>
          <p style={{ fontSize: 17, color: "var(--inverse-ink-soft)", marginTop: 28, maxWidth: 520, lineHeight: 1.5 }}>
            We'll spin up a sandboxed instance against a slice of your data, deliver a working pilot, and
            give your team the eval numbers to make the decision.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>);

}

function ContactForm() {
  const [submitted, setSubmitted] = useStateS(false);
  if (submitted) {
    return (
      <div style={{ border: "1px solid var(--inverse-line)", padding: 28, borderRadius: "var(--r-lg)", background: "var(--inverse-bg-2)" }}>
        <div style={{ color: "var(--accent)" }}><Icon.check /></div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--inverse-ink)", marginTop: 12 }}>Thanks — we'll be in touch within one business day.</div>
        <div style={{ fontSize: 13, color: "var(--inverse-ink-soft)", marginTop: 14, fontFamily: "var(--font-mono)" }}>TICKET · NWR-2026-{Math.floor(Math.random() * 90000 + 10000)}</div>
      </div>);

  }
  return (
    <form onSubmit={(e) => {e.preventDefault();setSubmitted(true);}} style={{
      border: "1px solid var(--inverse-line)",
      padding: 24,
      borderRadius: "var(--r-lg)",
      background: "var(--inverse-bg-2)",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
      <FormRow label="WORK EMAIL"><input required type="email" placeholder="cto@bank.example" style={inputStyle} /></FormRow>
      <FormRow label="COMPANY"><input required placeholder="Acme Capital" style={inputStyle} /></FormRow>
      <FormRow label="INTEREST">
        <select style={inputStyle} defaultValue="">
          <option value="" disabled>Choose one</option>
          <option>Lending intelligence</option>
          <option>Insurance AI</option>
          <option>Governance AI</option>
          <option>Custom AI engineering</option>
        </select>
      </FormRow>
      <button type="submit" className="btn btn-accent" style={{ marginTop: 8, justifyContent: "space-between" }}>
        Request a pilot <Icon.arrow />
      </button>
    </form>);

}

const inputStyle = {
  width: "100%",
  background: "transparent",
  border: "1px solid var(--inverse-line)",
  color: "var(--inverse-ink)",
  padding: "12px 14px",
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  borderRadius: 6,
  outline: "none"
};

function FormRow({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--inverse-ink-soft)", marginBottom: 6 }}>
        {label}
      </div>
      {children}
    </label>);

}

// ============ FOOTER ============
function Footer() {
  const cols = [
  { h: "Solutions", links: ["Lending intelligence", "Insurance AI", "Governance AI", "Custom AI engineering"] },
  { h: "Industries", links: ["Banks", "NBFCs", "Insurance", "Public sector"] },
  { h: "Company", links: ["About", "Careers", "Press", "Open source"] },
  { h: "Legal", links: ["Privacy", "Terms", "Security", "Responsible AI"] }];

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--line)", paddingBlock: "calc(80px * var(--density)) 40px" }}>
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) repeat(4, minmax(0, 1fr))", gap: 32 }}>
          <div>
            <Wordmark height={22} />
            <p style={{ fontSize: 13, color: "var(--ink-soft)", maxWidth: 280, marginTop: 20, lineHeight: 1.55 }}>
              Newron is an applied-AI company building production systems for regulated industries.
              Bengaluru, India.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <span className="tag tag-dot" style={{ fontSize: 10 }}>NVIDIA INCEPTION</span>
            </div>
          </div>
          {cols.map((c) =>
          <div key={c.h}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>{c.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.links.map((l) =>
              <li key={l}><a href="#" style={{ color: "var(--ink)", textDecoration: "none", fontSize: 13.5 }}>{l}</a></li>
              )}
              </ul>
            </div>
          )}
        </div>
        <div style={{ borderTop: "1px solid var(--line)", marginTop: 64, paddingTop: 24, display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>
          <span>© 2026 NEWRON AI TECHNOLOGIES PVT. LTD.</span>
          <span>v3.0 · MAY 2026</span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, {
  Nav, Hero, MetricsStrip, Insurance, Governance, Services, WhyNewron, Customers, CTA, Footer
});
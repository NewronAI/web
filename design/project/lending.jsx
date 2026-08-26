/* global React, AnimatedNumber, Icon, SectionHeader */
const { useState: useL, useEffect: useLe } = React;

// ============ LENDING — the marquee section ============
function Lending() {
  const tabs = [
    { id: "cam", label: "CAM generation", desc: "Compose Credit Approval Memos in your bank's format" },
    { id: "statement", label: "Statement analyser", desc: "Parse 12 months of bank statements in under 60s" },
    { id: "view360", label: "360° applicant view", desc: "One screen, every signal, every deviation" },
    { id: "videopd", label: "Video PD", desc: "Verify the property without leaving the desk" },
    { id: "chat", label: "Policy chat", desc: "Underwriters ask, Newron answers from policy" },
  ];
  const [tab, setTab] = useL("cam");

  return (
    <section id="lending" className="section" style={{ background: "var(--bg-2)" }}>
      <div className="shell">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, marginBottom: 48 }}>
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 18 }}>01 · Lending intelligence</span>
            <h2 className="display" style={{ margin: 0, fontSize: "clamp(44px, 6vw, 84px)", lineHeight: 0.98 }}>
              The credit officer's <em className="italic" style={{ color: "var(--accent)" }}>second brain.</em>
            </h2>
            <p style={{ fontSize: 18, color: "var(--ink-soft)", lineHeight: 1.5, marginTop: 28, maxWidth: 620 }}>
              A modular suite for the loan origination lifecycle — from intake and statement parsing to
              CAM generation, deviation handling, and video verification. Configured to your policy, your
              format, your tier structure.
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", maxWidth: 340 }}>
            <Pill label="Commercial" sub="LAP · OD · Gold · Equipment · Revenue · LOC" />
            <Pill label="Consumer" sub="Home · Auto · LAS · Personal · Education" />
            <Pill label="Secured + Unsecured" />
          </div>
        </div>

        {/* Big tabbed mockup */}
        <div style={{
          background: "var(--bg)",
          border: "1px solid var(--line)",
          borderRadius: "var(--r-lg)",
          overflow: "hidden",
          boxShadow: "0 40px 120px -40px oklch(0 0 0 / 0.18)",
        }}>
          <div style={{
            display: "flex",
            gap: 0,
            borderBottom: "1px solid var(--line)",
            overflowX: "auto",
          }}>
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  flex: 1,
                  minWidth: 180,
                  padding: "20px 24px",
                  background: tab === t.id ? "var(--bg)" : "var(--bg-2)",
                  border: "none",
                  borderRight: "1px solid var(--line)",
                  borderBottom: tab === t.id ? "2px solid var(--accent)" : "2px solid transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-sans)",
                  color: "var(--ink)",
                  transition: "background 0.12s",
                }}
              >
                <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: tab === t.id ? "var(--accent)" : "var(--ink-muted)", letterSpacing: "0.1em", marginBottom: 6 }}>
                  0{tabs.indexOf(t) + 1}
                </div>
                <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{t.label}</div>
                <div style={{ fontSize: 12, color: "var(--ink-muted)", lineHeight: 1.4 }}>{t.desc}</div>
              </button>
            ))}
          </div>

          <div style={{ padding: 32, background: "var(--bg-3)" }}>
            {tab === "cam" && <CAMMockup />}
            {tab === "statement" && <StatementMockup />}
            {tab === "view360" && <View360Mockup />}
            {tab === "videopd" && <VideoPDMockup />}
            {tab === "chat" && <PolicyChatMockup />}
          </div>
        </div>

        {/* The capabilities grid below */}
        <CapabilityGrid />
      </div>
    </section>
  );
}

function Pill({ label, sub }) {
  return (
    <div style={{
      padding: "10px 14px",
      border: "1px solid var(--line)",
      borderRadius: 999,
      background: "var(--bg)",
      fontSize: 12,
      fontFamily: "var(--font-mono)",
      letterSpacing: "0.04em",
      color: "var(--ink-soft)",
    }}>
      <span style={{ color: "var(--ink)", marginRight: sub ? 8 : 0 }}>{label}</span>
      {sub && <span style={{ color: "var(--ink-muted)", fontSize: 11 }}>{sub}</span>}
    </div>
  );
}

// ============ MOCKUP: CAM GENERATION ============
function CAMMockup() {
  return (
    <BrowserChrome title="CAM Generator · LP-2884109 · Tier-2 Bank">
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr 320px", gap: 0, minHeight: 480 }}>
        {/* Left rail */}
        <div style={{ borderRight: "1px solid var(--line)", padding: "20px 16px", background: "var(--bg-2)" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>CAM Sections</div>
          {[
            ["Borrower profile", true, true],
            ["Business overview", true, true],
            ["Financial summary", true, true],
            ["Cash-flow analysis", true, true],
            ["Bureau analysis", true, true],
            ["Collateral", true, false],
            ["Deviations & mitigation", false, false],
            ["Recommendation", false, false],
          ].map(([k, gen, done], i) => (
            <div key={k} style={{
              padding: "10px 12px",
              borderRadius: 6,
              fontSize: 13,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: i === 5 ? "var(--bg)" : "transparent",
              border: i === 5 ? "1px solid var(--line)" : "1px solid transparent",
              marginBottom: 2,
            }}>
              <span style={{ color: done ? "var(--ink)" : "var(--ink-muted)" }}>{k}</span>
              <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: done ? "var(--signal-green)" : "var(--ink-muted)", letterSpacing: "0.08em" }}>
                {done ? "DONE" : gen ? "GEN" : "—"}
              </span>
            </div>
          ))}
        </div>

        {/* Document */}
        <div style={{ padding: 32, background: "var(--bg)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.1em", marginBottom: 6 }}>SECTION 6 · COLLATERAL</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 24, marginBottom: 18 }}>Collateral assessment</div>

          <div style={{ fontSize: 13.5, lineHeight: 1.65, color: "var(--ink)" }}>
            The proposed loan of <strong>₹ 38,00,000</strong> is to be secured against a residential
            property at <span style={{ background: "color-mix(in oklab, var(--accent) 18%, transparent)" }}>Plot 14, HSR Layout, Sector 7, Bengaluru</span>,
            extent 1,840 sq ft. Title is held singly in the name of the applicant since 2019; encumbrance
            certificate confirms no charge as of <strong>14 May 2026</strong>.
          </div>

          <div style={{ marginTop: 20, padding: 14, border: "1px solid var(--line)", borderLeft: "2px solid var(--accent)", borderRadius: 6, background: "var(--bg-2)" }}>
            <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: 8 }}>NEWRON · DRAFTING</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--ink)" }}>
              Based on the Video PD conducted on 12 May 2026, the property…
              <span style={{ display: "inline-block", width: 8, height: 14, background: "var(--accent)", verticalAlign: "middle", marginLeft: 2, animation: "blink 1s steps(1) infinite" }}></span>
            </div>
          </div>
        </div>

        {/* Right rail: deviations */}
        <div style={{ borderLeft: "1px solid var(--line)", padding: 20, background: "var(--bg-2)" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Flags · Policy</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["Deviation", "DTI > 0.45 by 2%", "var(--signal-amber)", "Tier-2 override permitted"],
              ["Confirmed", "Property age within limit", "var(--signal-green)", "EC clean, title singular"],
              ["Verify", "Income variance Q1 → Q2", "var(--signal-teal)", "Statement re-check queued"],
            ].map(([k, v, c, s]) => (
              <div key={v} style={{ padding: "12px 12px", border: "1px solid var(--line)", borderRadius: 6, background: "var(--bg)" }}>
                <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: c, letterSpacing: "0.1em" }}>● {k.toUpperCase()}</div>
                <div style={{ fontSize: 13, marginTop: 6, fontWeight: 500 }}>{v}</div>
                <div style={{ fontSize: 11.5, color: "var(--ink-muted)", marginTop: 4, lineHeight: 1.4 }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

// ============ MOCKUP: STATEMENT ANALYSER ============
function StatementMockup() {
  const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
  const inflow = [3.2, 3.4, 2.8, 3.6, 4.1, 3.9, 3.7, 4.4, 4.1, 4.8, 5.1, 5.3];
  const outflow = [2.7, 2.9, 2.6, 3.1, 3.4, 3.2, 3.0, 3.6, 3.5, 4.0, 4.2, 4.4];
  const max = Math.max(...inflow, ...outflow);

  return (
    <BrowserChrome title="Statement Analyser · ICICI · A/c xxxx-7821 · 12 mo">
      <div style={{ minHeight: 480, padding: 28, background: "var(--bg)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, marginBottom: 28 }}>
          {[
            ["Total inflow", "₹ 47.4 L", "var(--signal-green)"],
            ["Avg balance", "₹ 1.84 L", "var(--ink)"],
            ["Bounce events", "0", "var(--signal-green)"],
            ["Salary regularity", "11/12", "var(--signal-amber)"],
          ].map(([k, v, c]) => (
            <div key={k} style={{ border: "1px solid var(--line)", borderRadius: 6, padding: 14 }}>
              <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-muted)", letterSpacing: "0.08em" }}>{k.toUpperCase()}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: c, marginTop: 8 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ border: "1px solid var(--line)", borderRadius: 6, padding: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Monthly cash-flow</div>
            <div style={{ display: "flex", gap: 14, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-soft)" }}>
              <span><span style={{ display: "inline-block", width: 8, height: 8, background: "var(--ink)", marginRight: 4, verticalAlign: "middle" }}></span>INFLOW</span>
              <span><span style={{ display: "inline-block", width: 8, height: 8, background: "var(--accent)", marginRight: 4, verticalAlign: "middle" }}></span>OUTFLOW</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "flex-end", height: 200 }}>
            {months.map((m, i) => (
              <div key={m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: "100%", height: 180, display: "flex", gap: 3, alignItems: "flex-end" }}>
                  <div style={{ flex: 1, height: `${(inflow[i]/max)*100}%`, background: "var(--ink)", borderRadius: "2px 2px 0 0" }} />
                  <div style={{ flex: 1, height: `${(outflow[i]/max)*100}%`, background: "var(--accent)", borderRadius: "2px 2px 0 0" }} />
                </div>
                <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--ink-muted)" }}>{m}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
          <div style={{ border: "1px solid var(--line)", borderRadius: 6, padding: 16 }}>
            <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--ink-muted)", letterSpacing: "0.08em", marginBottom: 10 }}>RECURRING OBLIGATIONS</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[["HDFC home loan EMI", "₹ 42,800"], ["SBI car loan EMI", "₹ 18,300"], ["Bajaj card revolve", "₹ 4,200"]].map(([k,v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "var(--ink-soft)" }}>{k}</span>
                  <span className="tabular">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ border: "1px solid var(--line)", borderLeft: "2px solid var(--accent)", borderRadius: 6, padding: 16, background: "var(--bg-2)" }}>
            <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.08em", marginBottom: 10 }}>NEWRON · INSIGHT</div>
            <div style={{ fontSize: 14, lineHeight: 1.55 }}>
              Stable salary credit on the 2nd of every month except Dec 2025 (4-day delay).
              Inflow trend <strong>+18% YoY</strong>. No round-tripping or circular transactions detected.
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

// ============ MOCKUP: 360° VIEW ============
function View360Mockup() {
  return (
    <BrowserChrome title="360° View · Application LP-2884109">
      <div style={{ minHeight: 480, padding: 28, background: "var(--bg)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.1em" }}>APPLICANT</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 38, lineHeight: 1.05, marginTop: 4 }}>Suresh Iyer</div>
            <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 6 }}>LAP · ₹ 38,00,000 · 180 months · Bengaluru, KA</div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 28 }}>
              {[
                ["Income score", "0.86", "AAA"],
                ["Bureau", "742", "B+"],
                ["Policy fit", "0.91", "Tier-2"],
                ["LTV", "62%", "OK"],
                ["FOIR", "47%", "Watch"],
                ["Vintage", "8.4 yr", "Strong"],
              ].map(([k, v, b]) => (
                <div key={k} style={{ border: "1px solid var(--line)", padding: 14, borderRadius: 6 }}>
                  <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", color: "var(--ink-muted)" }}>{k.toUpperCase()}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 8 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 24 }}>{v}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-muted)" }}>{b}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, padding: 16, border: "1px solid var(--line)", borderLeft: "2px solid var(--signal-green)", background: "var(--bg-2)", borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", color: "var(--signal-green)" }}>● RECOMMENDED</div>
              <div style={{ fontSize: 16, marginTop: 8, lineHeight: 1.5 }}>
                <strong>Approve at ₹ 38,00,000</strong> · 11.4% p.a. · 180 mo ·
                with covenant: <span style={{ color: "var(--ink-soft)" }}>FOIR review at 12 months.</span>
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Decision trail</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, borderLeft: "1px solid var(--line)", paddingLeft: 16 }}>
              {[
                ["09:14", "Application received via LOS", "var(--ink-muted)"],
                ["09:14", "KYC + bureau pulled", "var(--ink-muted)"],
                ["09:17", "Statement analyser · 11 months", "var(--signal-green)"],
                ["09:19", "Property verification · Video PD scheduled", "var(--signal-teal)"],
                ["09:42", "Video PD complete · auto-report attached", "var(--signal-green)"],
                ["09:43", "CAM v1 generated · 6 of 8 sections", "var(--accent)"],
                ["09:44", "Deviation surfaced · DTI > 0.45", "var(--signal-amber)"],
                ["—", "Awaiting credit officer review", "var(--ink-soft)"],
              ].map(([t, s, c], i) => (
                <div key={i} style={{ position: "relative", paddingBottom: 14 }}>
                  <span style={{ position: "absolute", left: -22, top: 5, width: 9, height: 9, background: c, borderRadius: "50%", border: "2px solid var(--bg)" }}></span>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-muted)", letterSpacing: "0.08em" }}>{t}</div>
                  <div style={{ fontSize: 13, color: "var(--ink)", marginTop: 2 }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

// ============ MOCKUP: VIDEO PD ============
function VideoPDMockup() {
  return (
    <BrowserChrome title="Video PD · Property verification · LP-2884109">
      <div style={{ minHeight: 480, padding: 28, background: "var(--bg)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }}>
          <div style={{
            aspectRatio: "16/10",
            background: "linear-gradient(135deg, oklch(0.34 0.04 250), oklch(0.22 0.03 250))",
            borderRadius: 8,
            position: "relative",
            overflow: "hidden",
            border: "1px solid var(--line)",
          }}>
            {/* Fake camera shot */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, oklch(0 0 0 / 0.5))" }}></div>
            <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 8 }}>
              <span style={{ background: "oklch(0.5 0.2 25)", color: "white", padding: "4px 8px", borderRadius: 4, fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}>● REC</span>
              <span style={{ background: "rgba(0,0,0,0.5)", color: "white", padding: "4px 8px", borderRadius: 4, fontSize: 10, fontFamily: "var(--font-mono)" }}>02:14</span>
            </div>
            <div style={{ position: "absolute", bottom: 18, left: 18, color: "white", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", opacity: 0.85 }}>
              GEO · 12.9159°N 77.6428°E · HSR LAYOUT
            </div>
            <div style={{ position: "absolute", inset: "32% 28%", border: "1px solid oklch(0.7 0.18 42)", borderRadius: 4 }}>
              <div style={{ position: "absolute", top: -22, left: 0, color: "oklch(0.7 0.18 42)", fontSize: 10, fontFamily: "var(--font-mono)" }}>BOUNDARY · MATCH 0.94</div>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Auto-generated report</div>
            <div style={{ border: "1px solid var(--line)", borderRadius: 6, padding: 16, background: "var(--bg-2)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18, marginBottom: 10 }}>Customer verified</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12.5 }}>
                {[
                  ["Face match", "0.94", "var(--signal-green)"],
                  ["Address Location", "Confirmed", "var(--signal-green)"],
                  ["GPS", "Locked", "var(--ink)"],
                  ["Call", "Analysed", "var(--signal-green)"],
                  ["Surroundings", "Residential, low density", "var(--ink-soft)"],
                ].map(([k, v, c]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--ink-soft)" }}>{k}</span>
                    <span style={{ color: c, fontFamily: "var(--font-mono)", fontSize: 12 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn btn-ghost" style={{ width: "100%", justifyContent: "center", marginTop: 12 }}>
              Download PDF report <Icon.arrow />
            </button>
          </div>
        </div>

        <div style={{ marginTop: 20, padding: 16, border: "1px solid var(--line)", borderLeft: "2px solid var(--accent)", background: "var(--bg-2)", borderRadius: 6 }}>
          <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: 6 }}>NEWRON · WHY THIS MATTERS</div>
          <div style={{ fontSize: 14, lineHeight: 1.55 }}>
            No site visit, no field officer scheduling, no paper. Video PD captures everything an in-person
            verification would — geotag, boundary, condition, neighbourhood — and ships a standardised
            report ready to attach to the CAM.
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

// ============ MOCKUP: POLICY CHAT ============
function PolicyChatMockup() {
  return (
    <BrowserChrome title="Policy Chat · LAP product policy v3.2">
      <div style={{ minHeight: 480, padding: 0, background: "var(--bg)", display: "grid", gridTemplateColumns: "260px 1fr", minHeight: 480 }}>
        <div style={{ borderRight: "1px solid var(--line)", padding: 20, background: "var(--bg-2)" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Indexed policies</div>
          {[
            ["LAP product policy v3.2", true],
            ["NPA classification SOP", false],
            ["FCU triggers · 2025", false],
            ["Co-applicant guidelines", false],
            ["RBI MD on KYC", false],
          ].map(([p, active]) => (
            <div key={p} style={{
              padding: "10px 12px",
              fontSize: 13,
              borderRadius: 6,
              background: active ? "var(--bg)" : "transparent",
              border: active ? "1px solid var(--line)" : "1px solid transparent",
              marginBottom: 2,
              color: active ? "var(--ink)" : "var(--ink-soft)",
            }}>
              {p}
            </div>
          ))}
        </div>

        <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16, overflow: "hidden" }}>
          <Msg from="Pratiksha · Credit Officer" side="right">
            For a self-employed applicant with two co-applicants, is a 5-year ITR mandatory or can we work
            with 3 years + GST returns?
          </Msg>
          <Msg from="Newron" side="left" accent>
            Per LAP policy v3.2 §4.3(b), <span style={{ background: "color-mix(in oklab, var(--accent) 18%, transparent)" }}>3 years of ITRs are permitted</span> when paired with 24 months of
            GST returns and 12 months of business banking statements. The 5-year requirement applies only
            to Tier-3 markets or ticket sizes above ₹ 75L.
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--line)", fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-muted)", letterSpacing: "0.06em" }}>
              SOURCE · LAP-POLICY-V3.2 · PAGE 14 · §4.3(b)
            </div>
          </Msg>
          <Msg from="Pratiksha · Credit Officer" side="right">
            And the ticket size for this case is ₹ 38L, Bengaluru — Tier-1?
          </Msg>
          <Msg from="Newron" side="left" accent>
            Yes, Bengaluru is Tier-1 per the policy's geographic schedule. For ₹ 38L in Tier-1 you can
            proceed with the 3+24+12 combination. I've pre-populated the deviations section accordingly.
          </Msg>
          <div style={{ marginTop: "auto", display: "flex", gap: 10, border: "1px solid var(--line)", borderRadius: 6, padding: "10px 12px" }}>
            <input placeholder="Ask anything from the policy book…" style={{ border: 0, outline: 0, flex: 1, fontFamily: "var(--font-sans)", fontSize: 14, background: "transparent", color: "var(--ink)" }} />
            <button className="btn btn-primary" style={{ padding: "8px 14px" }}>Ask <Icon.arrow /></button>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function Msg({ from, side, accent, children }) {
  return (
    <div style={{ alignSelf: side === "right" ? "flex-end" : "flex-start", maxWidth: "78%" }}>
      <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", color: "var(--ink-muted)", marginBottom: 6, textAlign: side === "right" ? "right" : "left" }}>
        {from.toUpperCase()}
      </div>
      <div style={{
        padding: "12px 14px",
        background: side === "right" ? "var(--bg-2)" : "var(--bg)",
        border: "1px solid var(--line)",
        borderLeft: accent ? "2px solid var(--accent)" : `1px solid var(--line)`,
        borderRadius: 8,
        fontSize: 14,
        lineHeight: 1.55,
      }}>
        {children}
      </div>
    </div>
  );
}

// ============ Browser chrome ============
function BrowserChrome({ title, children }) {
  return (
    <div style={{ border: "1px solid var(--line)", borderRadius: 6, overflow: "hidden", background: "var(--bg)" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "10px 18px",
        borderBottom: "1px solid var(--line)",
        background: "var(--bg)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", color: "var(--ink)" }}>
            NEWRON
          </span>
        </div>
        <div style={{ width: 1, height: 14, background: "var(--line)" }} />
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-soft)", letterSpacing: "0.04em" }}>
          {title}
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-muted)", letterSpacing: "0.08em" }}>
          ●●● LIVE
        </div>
      </div>
      {children}
    </div>
  );
}

// ============ CAPABILITY GRID (below tabs) ============
function CapabilityGrid() {
  const caps = [
    ["FTR/FTNR checklist", "Auto-fills + validates document checklists at intake."],
    ["Bureau analyser", "Parses CIBIL/Experian reports; flags inconsistencies."],
    ["Finance & RTR analyser", "Cohort comparison + trend detection on ledgers."],
    ["Deviation engine", "Maps deviations to policy clauses and historical decisions."],
    ["Sales support flow", "Guided application with immediate field-level feedback."],
    ["Workflow customisation", "Re-shape the pipeline for your tier structure."],
  ];
  return (
    <div style={{ marginTop: 56 }}>
      <div className="eyebrow" style={{ marginBottom: 24 }}>Everything else in the suite</div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 0,
        border: "1px solid var(--line)",
        borderRadius: "var(--r-lg)",
        background: "var(--bg)",
        overflow: "hidden",
      }}>
        {caps.map(([k, v], i) => (
          <div key={k} style={{
            padding: 24,
            borderLeft: i % 3 === 0 ? "none" : "1px solid var(--line)",
            borderTop: i >= 3 ? "1px solid var(--line)" : "none",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.1, marginBottom: 10 }}>{k}</div>
            <div style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// blink keyframe
if (typeof document !== "undefined" && !document.querySelector("#blink-kf")) {
  const s = document.createElement("style");
  s.id = "blink-kf";
  s.textContent = "@keyframes blink { 50% { opacity: 0; } }";
  document.head.appendChild(s);
}

Object.assign(window, { Lending });

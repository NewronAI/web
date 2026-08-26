import { BOOKING_URL } from "@/lib/route";
import React, { type CSSProperties } from "react";
import {
  Nav, Footer, PageHero, Band, Head, FeatureGrid, StatBand, Timeline, FAQ, CTABand, Quote,
} from "@/components/site-chrome";
import { IlloLending } from "@/components/illustrations";

export const metadata = { title: "Lending intelligence — Newron" };

function Chips({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="card" style={{ padding: 24 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22 }}>{label}</div>
        <div className="eyebrow">{items.length} products</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {items.map((it) =>
          <span key={it} style={{ padding: "6px 10px", border: "1px solid var(--line)", borderRadius: 999, fontSize: 12, color: "var(--ink-soft)", background: "var(--bg)" }}>{it}</span>)}
      </div>
    </div>);
}

const modules = [
  { tag: "Generation", title: "CAM generation", desc: "Compose Credit Approval Memos in your bank's exact format, with deviation flags and inline policy citations.", points: ["Your template, your tiers", "Clause-level citations", "Human-in-the-loop QC"] },
  { tag: "Analysis", title: "Statement analyser", desc: "12 months of bank statements parsed in under 60 seconds — cash-flow, recurring obligations, anomalies.", points: ["Multi-bank ingestion", "Round-tripping detection", "Salary regularity"] },
  { tag: "Profile", title: "Applicant 360°", desc: "Every signal, covenant and prior decision on one screen, with a recommendation and a full decision trail.", points: ["Bureau + income score", "Policy-fit scoring", "Audit timeline"] },
  { tag: "Verification", title: "Video PD", desc: "Hold the personal discussion over video instead of a field visit — identity and address verified, the call analysed, a standard report attached to the CAM.", points: ["Face + address match", "Geotag + GPS lock", "Call analysis, auto-report"] },
  { tag: "Knowledge", title: "Policy chat", desc: "Underwriters ask, Newron answers — sourced from your policy book with page-level references.", points: ["Sourced answers", "Pre-fills deviations", "Always current"] },
  { tag: "Controls", title: "Deviation engine", desc: "Detects, classifies and routes deviations against your credit policy and tier override matrix.", points: ["Tiered overrides", "Reason codes", "Maker-checker"] },
];

export default function Page() {
  return (
    <>
      <Nav />

      <PageHero
        crumb="Solutions / Lending intelligence"
        aside={<IlloLending />}
        eyebrow="Lending intelligence"
        title={<>The credit officer&apos;s <em className="italic">second brain.</em></>}
        lead="A modular suite for the loan origination lifecycle — from intake and statement parsing to CAM generation, deviation handling and verification. Configured to your policy, your format, your tier structure."
        ctas={[{ label: "Talk to Us", href: BOOKING_URL, primary: true }]} />

      <Band id="suite">
        <Head tag="01" eyebrow="In the suite" title={<>Six modules, one origination flow.</>} kicker="Adopt the whole suite or drop a single module into your existing LOS. Every module is API-first and self-hostable." />
        <FeatureGrid items={modules} cols={3} />
      </Band>

      <Band id="coverage" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="Coverage" title={<>Built for the products you <em className="italic">actually</em> originate.</>} kicker="Pre-trained on Indian commercial and consumer credit. New products onboard in days, not quarters." />
        <div className="r-cards" style={{ marginTop: 56, ...{ "--card-min": "min(400px, 100%)" } as CSSProperties }}>
          <Chips label="Commercial" items={["Loan against property", "Overdraft", "Gold loan", "Equipment finance", "Revenue-based finance", "Line of credit"]} />
          <Chips label="Consumer" items={["Home loan", "Auto loan", "Loan against securities", "Personal loan", "Education loan", "Credit card"]} />
        </div>
        <StatBand lead={<>What credit teams see in production</>} stats={[{ v: "66", suffix: "%", k: "Reduction in TAT" }, { v: "200", suffix: "%", k: "Productivity uplift" }, { v: "230k", suffix: "+", k: "Hours saved" }]} />
      </Band>

      <Band id="flow">
        <Head tag="03" eyebrow="How it fits" title={<>From application to <em className="italic">decision-ready</em>.</>} kicker="Newron sits between your LOS and your credit committee — automating the mechanical work so officers spend time on judgement." />
        <div style={{ marginTop: 48, maxWidth: 760 }}>
          <Timeline items={[
            ["STEP 01", "Intake from your LOS", "Application, KYC and bureau pulled automatically the moment a file is created."],
            ["STEP 02", "Statement & document analysis", "Bank statements, ITRs and GST returns parsed; anomalies and obligations surfaced."],
            ["STEP 03", "CAM drafted in your format", "Sections written with citations; deviations flagged against your policy book."],
            ["STEP 04", "Verification & remediation", "Personal discussion held over video and attached; missing artefacts requested before review."],
            ["STEP 05", "Officer review & decision", "A clean recommendation with a complete, exportable audit trail."]]} />
        </div>
      </Band>

      <Band id="proof" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 900 }}>
          <Quote text={"“Newron’s AI CAM engine replaced weeks of human review with a 40-minute QC step. Our credit officers stopped reformatting Excel and went back to actual underwriting.”"} who="Arun V" sub="Head of Product, Aditya Birla Capital (ABCL)" />
        </div>
      </Band>

      <Band id="faq">
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["Does it work with our existing LOS?", "Yes. Newron is API-first with REST + webhook surfaces and drops into your loan origination system without replacing it. Most integrations are live within a quarter."],
          ["Where does our data live?", "Wherever you need it to. Newron self-hosts on your VPC, on-premise, or fully air-gapped. Your engineers keep the keys; compliance gets a complete audit trail."],
          ["Can it follow our credit policy exactly?", "The suite is configured to your policy book, formats and tier override matrix. Deviations are detected and routed against your own rules, not generic ones."],
          ["What about model accuracy?", "On the tasks we train for, our custom models score on par with frontier systems in our own evaluations, at a fraction of the inference cost — and every output is sourced and reviewable."]]} />
      </Band>

      <CTABand headline={<>See Newron on your <em className="italic">own credit files</em>.</>} sub="We'll spin up a sandboxed instance against a slice of your data and deliver a working pilot with eval numbers your team can trust." secondary={{ label: "Read customer stories", href: "v4.html#customers" }} />

      <Footer />
    </>);
}

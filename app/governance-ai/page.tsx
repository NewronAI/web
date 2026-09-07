import React from "react";
import { BOOKING_URL } from "@/lib/route";
import { Nav, Footer, PageHero, Band, Head, FeatureGrid, StatBand, Timeline, FAQ, CTABand } from "@/components/site-chrome";

export const metadata = { title: "Governance AI — Newron" };

const caps = [
  { tag: "Language", title: "Custom OCR · Kannada", desc: "Reads Kannada handwriting and print — ledger forms, applications and field notes that were never digitised.", points: ["Handwriting + print", "Ledger & form layouts", "Field-note capture"] },
  { tag: "Voice", title: "Regional TTS & ASR", desc: "Natural regional voices with low latency, so citizens can speak and be answered in their own dialect.", points: ["Dialect-aware", "Low latency", "Phone-line ready"] },
  { tag: "Triage", title: "Grievance triage", desc: "Classifies, routes, summarises and drafts a response for every grievance — at the speed of a phone call.", points: ["Auto-classification", "Officer routing", "Draft responses"] },
  { tag: "Knowledge", title: "Policy discovery", desc: "Surfaces the exact clause from PDFs and circulars that were never indexed, with a citation.", points: ["Clause-level retrieval", "Cited answers", "Scales to archives"] },
];

export default function Page() {
  return (
    <div className="immersive inner-site">
      <Nav />
      <main id="main">
      <PageHero
        crumb="Solutions / Governance AI"
        art="citizen"
        caption="LANGUAGE TO UNDERSTANDING"
        eyebrow="Governance AI"
        title={<> Every voice.<br /><em>Understood.</em></>}
        lead="Citizen-service AI built with the Government of Karnataka. Kannada handwriting, regional speech and cited policy answers."
        ctas={[{ label: "Talk to Us", href: BOOKING_URL, primary: true }, { label: "Public sector", href: "public-sector.html" }]} />

      <div id="page-content" />
      <Band id="capabilities">
        <Head tag="01" eyebrow="Capabilities" title={<>The stack behind a <em className="italic">working</em> grievance desk.</>} kicker="Language, voice, triage and knowledge — assembled into one workflow that meets citizens where they are." />
        <FeatureGrid items={caps} />
      </Band>

      <Band id="flow" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="A grievance, end to end" title={<>From a voice note to a <em className="italic">resolved</em> case.</>} kicker="Every step is logged and reviewable. Officers approve; Newron does the assembly." />
        <div style={{ marginTop: 48 }}>
          <Timeline items={[
            ["00:00", "Citizen speaks, in Kannada", "A voice note or call is transcribed and understood — no forms, no app, no English."],
            ["00:04", "Classified & routed", "Category, district and the right officer tier identified automatically."],
            ["00:09", "Policy retrieved", "The governing rule is surfaced with its clause and current status."],
            ["00:14", "Response drafted", "A reply is drafted in the citizen's language for officer approval."],
            ["SENT", "Spoken back", "The approved response is delivered as natural regional speech."]]} />
        </div>
      </Band>

      <Band id="impact">
        <Head tag="03" eyebrow="Why it matters" title={<>Reach the citizens a form <em className="italic">never</em> could.</>} kicker="Language and literacy are the real barriers to public services. Newron reduces the reliance on English-language forms and written applications." />
        <StatBand lead={<>Across grievance categories in pilot</>} stats={[{ v: "1", suffix: "", k: "Language in production · Kannada" }, { v: "4:12", suffix: "", k: "Median response time (mm:ss)" }, { v: "100", suffix: "%", k: "Cases audit-logged" }]} />
      </Band>

      <Band id="faq" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["Which languages and dialects are supported?", "Kannada is in production, including handwriting recognition. No other language is in production today — the stack is built to extend to other Indian languages and regional dialects, but each one needs its own data and evaluation before we would call it supported."],
          ["Can it run inside government infrastructure?", "Yes. Newron deploys on-premise or air-gapped within state data centres, with explicit data-residency commitments and full audit trails."],
          ["Does an officer stay in the loop?", "Always. Newron drafts and routes; a human officer reviews and approves every response before it is sent."],
          ["How does it find answers in old circulars?", "Policy discovery indexes scanned PDFs and circulars and retrieves the exact governing clause with a citation, even when the source was never digitised."]]} />
      </Band>

      <CTABand eyebrow="For the public sector" headline={<>Bring services to <em className="italic">every</em> citizen.</>} sub="We work with state bodies to scope a pilot on a single grievance category, on your own infrastructure, with the audit trail your compliance teams require." secondary={{ label: "Public sector", href: "public-sector.html" }} />
      </main>
      <Footer />
    </div>);
}

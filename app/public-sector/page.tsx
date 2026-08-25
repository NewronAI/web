import React from "react";
import { BOOKING_URL } from "@/lib/route";
import { Nav, Footer, PageHero, Band, Head, FeatureGrid, StatBand, SplitRows, FAQ, CTABand } from "@/components/site-chrome";
import { IlloPublic } from "@/components/illustrations";

export const metadata = { title: "Newron for the Public Sector" };

const useCases = [
  { tag: "Citizen services", title: "Grievance redressal", desc: "Citizens speak in their own dialect; Newron classifies, routes, retrieves the policy and drafts a response for officer approval.", points: ["Voice-first intake", "Auto-routing", "Sourced responses"] },
  { tag: "Records", title: "Digitising the archive", desc: "Custom OCR reads Kannada handwriting and print from ledgers and forms that were never digitised.", points: ["Handwriting + print", "Ledger layouts", "Searchable archive"] },
  { tag: "Policy", title: "Clause-level discovery", desc: "Surface the exact rule from circulars and PDFs, with a citation, so frontline staff answer correctly the first time.", points: ["Cited answers", "Scales to archives", "Always current"] },
];

export default function Page() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Industries / Public sector"
        aside={<IlloPublic />}
        eyebrow="Newron for the Public Sector"
        title={<>Public services that <em className="italic">reach further</em>.</>}
        lead="Built with the Government of Karnataka. Newron meets citizens in their own language and runs entirely inside government infrastructure — so digital services don't leave people behind."
        ctas={[{ label: "Talk to Us", href: BOOKING_URL, primary: true }, { label: "Governance AI", href: "governance-ai.html" }]} />

      <Band id="use-cases">
        <Head tag="01" eyebrow="Where the state deploys Newron" title={<>From the grievance desk to the <em className="italic">archive</em>.</>} kicker="Language, voice and document understanding, assembled into services citizens can actually use." />
        <FeatureGrid items={useCases} cols={3} />
      </Band>

      <Band id="impact" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="In pilot" title={<>Service at the speed of a <em className="italic">phone call</em>.</>} kicker="Across grievance categories in the Karnataka deployment." />
        <StatBand lead={<>What citizen-service teams see</>} stats={[{ v: "1", suffix: "", k: "Language in production · Kannada" }, { v: "4:12", suffix: "", k: "Median response time (mm:ss)" }, { v: "100", suffix: "%", k: "Cases audit-logged" }]} />
      </Band>

      <Band id="trust">
        <Head tag="03" eyebrow="Built for government" title={<>Sovereignty, <em className="italic">by default</em>.</>} />
        <SplitRows items={[
          ["Runs on your infrastructure", "Deploy on-premise or air-gapped within state data centres, with explicit data-residency commitments."],
          ["Officer accountability", "Newron drafts and routes; an officer reviews and approves every response, with a full audit log."],
          ["Accessible by design", "Voice-first intake in Kannada, so a citizen who cannot fill an English form can still be heard."],
          ["Transparent & auditable", "Every answer is sourced to the governing rule, and every case is logged for oversight."]]} />
      </Band>

      <Band id="faq">
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["Can Newron run inside our data centre?", "Yes. Public-sector deployments run on-premise or air-gapped within state infrastructure, with data-residency commitments."],
          ["Which languages are supported?", "Kannada is in production, including handwriting. Other Indian languages are extensions the stack is built for, but each needs its own data and evaluation before we would call it supported."],
          ["How is citizen data protected?", "Data stays within government infrastructure, processing is logged end to end, and access is controlled and auditable."],
          ["Does it replace our officers?", "No — it removes the mechanical work. Officers review and approve responses; Newron handles intake, routing, retrieval and drafting."]]} />
      </Band>

      <CTABand eyebrow="For the public sector" headline={<>Start with a single <em className="italic">grievance category</em>.</>} sub="We work with state bodies to scope a pilot on your own infrastructure, with the audit trail and sovereignty your mandate requires." secondary={{ label: "About Newron", href: "about.html" }} />
      <Footer />
    </>);
}

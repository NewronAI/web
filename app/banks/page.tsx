import React from "react";
import { Nav, Footer, PageHero, Band, Head, FeatureGrid, StatBand, SplitRows, FAQ, CTABand, Quote } from "@/components/site-chrome";
import { IlloBank } from "@/components/illustrations";

export const metadata = { title: "Newron for Banks" };

const useCases = [
  { tag: "Origination", title: "Faster credit decisions", desc: "CAM generation, statement analysis and deviation handling configured to your retail and commercial credit policy.", points: ["Retail + commercial", "Your policy & formats", "Maker-checker controls"] },
  { tag: "Operations", title: "Document-heavy back office", desc: "Automate KYC review, document understanding and reconciliation workflows that still run on people and PDFs.", points: ["KYC + onboarding", "Reconciliation", "Exception routing"] },
  { tag: "Service", title: "Policy & product copilots", desc: "Give relationship managers and support teams sourced answers from your product and policy documentation.", points: ["Sourced answers", "RM enablement", "Always current"] },
];

export default function Page() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Industries / Banks"
        aside={<IlloBank />}
        eyebrow="Newron for Banks"
        title={<>AI that respects the <em className="italic">regulator</em>.</>}
        lead="Banks operate under scrutiny that generic AI tools ignore. Newron deploys inside your perimeter, follows your credit policy to the clause, and leaves an audit trail for every decision."
        ctas={[{ label: "Book a demo", href: "v4.html#contact", primary: true }, { label: "Lending intelligence", href: "lending-intelligence.html" }]} />

      <Band id="use-cases">
        <Head tag="01" eyebrow="Where banks deploy Newron" title={<>From origination to the <em className="italic">back office</em>.</>} kicker="Start with the credit desk or the operations floor — Newron meets the same controls either way." />
        <FeatureGrid items={useCases} cols={3} />
      </Band>

      <Band id="trust" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="Built for regulated buyers" title={<>The controls your <em className="italic">risk team</em> asks for.</>} kicker="Every Newron deployment is designed to pass procurement, security and audit review." />
        <SplitRows items={[
          ["Deploy in your perimeter", "Self-host on your VPC, on-premise or air-gapped. Data never leaves your environment, and your engineers hold the keys."],
          ["Full decision audit trail", "Every output is sourced and logged — clause citations, timestamps and reviewer actions — exportable for audit and regulator review."],
          ["Policy-faithful by design", "Configured to your credit policy, tier override matrix and formats, so deviations are evaluated against your own rules."],
          ["Human-in-the-loop", "Newron drafts and recommends; your officers decide. Maker-checker is built in, not bolted on."]]} />
      </Band>

      <Band id="impact">
        <Head tag="03" eyebrow="In production" title={<>Outcomes banks measure.</>} />
        <StatBand lead={<>Across credit and operations deployments</>} stats={[{ v: "66", suffix: "%", k: "Reduction in TAT" }, { v: "200", suffix: "%", k: "Productivity uplift" }, { v: "65k", suffix: "+", k: "Hours saved" }]} />
      </Band>

      <Band id="proof" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 900 }}>
          <Quote text={"“Procurement and the security team signed off because nothing leaves our VPC. That's what made it possible to actually deploy AI on the credit desk.”"} who="Chief Risk Officer" sub="Private-sector bank" />
        </div>
      </Band>

      <Band id="faq">
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["Will this pass our security review?", "Newron is designed for it: VPC, on-prem or air-gapped deployment, SOC 2 (applied) and ISO 27001 controls, and a complete audit trail. We work directly with your security and procurement teams."],
          ["Does it replace our core or LOS?", "No. Newron is API-first and integrates with your existing core, LOS and claims systems rather than replacing them."],
          ["How long to first production use?", "Most banks reach a production pilot within a quarter, starting with one workflow and expanding from there."],
          ["Can it follow our exact credit policy?", "Yes — Newron is configured to your policy book, tiers and formats, and evaluates deviations against your own rules with citations."]]} />
      </Band>

      <CTABand headline={<>Put Newron in front of your <em className="italic">risk team</em>.</>} sub="We'll run a sandboxed pilot inside your environment and give your security, risk and credit teams the evidence they need." secondary={{ label: "Security & compliance", href: "security.html" }} />
      <Footer />
    </>);
}

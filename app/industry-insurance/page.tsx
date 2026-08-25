import { BOOKING_URL } from "@/lib/route";
import React from "react";
import { Nav, Footer, PageHero, Band, Head, FeatureGrid, StatBand, SplitRows, FAQ, CTABand, Quote } from "@/components/site-chrome";
import { IlloInsuranceInd } from "@/components/illustrations";

export const metadata = { title: "Newron for Insurance" };

const useCases = [
  { tag: "Claims", title: "Straight-through claims", desc: "Document understanding, eligibility checks and TPA-ready filing that clear clean claims without manual handling.", points: ["Eligibility at intake", "TPA-ready packets", "Sub-limit awareness"] },
  { tag: "Risk", title: "Denial-risk modelling", desc: "Predict which claims will bounce, and why, against your historical adjudication data — and fix them first.", points: ["Denial-reason model", "Pre-emptive remediation", "SLA forecasting"] },
  { tag: "Underwriting", title: "Document-driven underwriting", desc: "Parse proposal forms, medical records and financials to speed up underwriting and reduce leakage.", points: ["Proposal automation", "Medical record parsing", "Leakage controls"] },
];

export default function Page() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Industries / Insurance"
        aside={<IlloInsuranceInd />}
        eyebrow="Newron for Insurance"
        title={<>Settle the clean claims <em className="italic">automatically</em>.</>}
        lead="Insurers and TPAs drown in documents. Newron reads them, checks eligibility against the specific policy, and predicts denial risk — so adjusters focus on the genuine edge cases."
        ctas={[{ label: "Talk to Us", href: BOOKING_URL, primary: true }, { label: "Insurance AI", href: "insurance-ai.html" }]} />

      <Band id="use-cases">
        <Head tag="01" eyebrow="Where insurers deploy Newron" title={<>Across claims and <em className="italic">underwriting</em>.</>} kicker="Cut handling time on routine claims and surface risk before it becomes a denial or a dispute." />
        <FeatureGrid items={useCases} cols={3} />
      </Band>

      <Band id="impact" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="In production" title={<>Faster settlements, <em className="italic">fewer</em> denials.</>} kicker="Measured across health and motor lines at insurers and TPAs." />
        <StatBand lead={<>What claims teams see in production</>} stats={[{ v: "90", suffix: "s", k: "Avg time to file" }, { v: "0.18", suffix: "", k: "Median denial risk" }, { v: "4.2", suffix: "d", k: "Settlement SLA" }]} />
      </Band>

      <Band id="trust">
        <Head tag="03" eyebrow="Built for regulated buyers" title={<>The controls your <em className="italic">compliance</em> team expects.</>} />
        <SplitRows items={[
          ["Patient & policyholder privacy", "All processing runs inside your environment — VPC, on-prem or air-gapped — with full audit logging."],
          ["Explainable decisions", "Every eligibility check and denial-risk score is backed by the specific policy clauses and document evidence."],
          ["TPA-ready integration", "API-first packets and webhooks slot into your existing claims platform and TPA handoffs."],
          ["Human-in-the-loop", "Newron assembles and recommends; adjusters approve. Nothing settles without a person in the loop."]]} />
      </Band>

      <Band id="proof" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 900 }}>
          <Quote text={"“We stopped filing claims that were always going to bounce. The denial-risk model paid for itself in a quarter.”"} who="VP, Claims Operations" sub="Health insurer · multi-TPA" />
        </div>
      </Band>

      <Band id="faq">
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["Which lines are supported?", "Health and motor are in production, with the document and policy-reasoning stack generalising to other lines as new document types onboard."],
          ["How does denial-risk prediction work?", "It is trained on your historical adjudication outcomes and explains every prediction with the policy clauses and evidence behind it."],
          ["Does it fit our TPA workflow?", "Yes. Newron produces TPA-ready packets and integrates via REST + webhooks with your claims platform and TPA partners."],
          ["Is sensitive medical data protected?", "Processing stays inside your environment with audit logging and data-residency commitments — nothing is sent to third-party model APIs."]]} />
      </Band>

      <CTABand headline={<>Replay <em className="italic">last quarter&apos;s claims</em> through Newron.</>} sub="We'll show you the denial-risk and time-to-file numbers on your own historical claims before you commit to anything." secondary={{ label: "Security & compliance", href: "security.html" }} />
      <Footer />
    </>);
}

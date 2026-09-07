import { BOOKING_URL } from "@/lib/route";
import React from "react";
import { Nav, Footer, PageHero, Band, Head, FeatureGrid, StatBand, SplitRows, FAQ, CTABand } from "@/components/site-chrome";

export const metadata = { title: "Newron for NBFCs" };

const useCases = [
  { tag: "Speed", title: "Underwrite at NBFC pace", desc: "Statement analysis and CAM generation that keep up with high-volume, thin-file lending without losing rigour.", points: ["Thin-file friendly", "Sub-60s statement parse", "Same-day decisions"] },
  { tag: "Breadth", title: "Every product you originate", desc: "LAP, gold, equipment, personal and revenue-based finance — pre-trained on Indian commercial and consumer credit.", points: ["Commercial + consumer", "Fast product onboarding", "Configurable policy"] },
  { tag: "Field", title: "Verification without the visit", desc: "Video PD runs the personal discussion remotely — identity and address verified, geotagged, and attached to the file automatically.", points: ["Remote personal discussion", "Geotag + timestamp", "Auto-attached report"] },
];

export default function Page() {
  return (
    <div className="immersive inner-site">
      <Nav />
      <main id="main">
      <PageHero
        crumb="Industries / NBFCs"
        art="lending"
        tool="Statement analyser"
        caption="SCALE WITH INTELLIGENCE"
        eyebrow="Newron for NBFCs"
        title={<> More momentum.<br /><em>Same rigour.</em></>}
        lead="Move from thin files to informed decisions. Lending intelligence built for the speed and reach of NBFCs."
        ctas={[{ label: "Talk to Us", href: BOOKING_URL, primary: true }, { label: "Lending intelligence", href: "lending-intelligence.html" }]} />

      <div id="page-content" />
      <Band id="use-cases">
        <Head tag="01" eyebrow="Where NBFCs deploy Newron" title={<>Underwrite faster, <em className="italic">without</em> cutting corners.</>} kicker="The same modular suite that powers banks, tuned for the speed and product mix of an NBFC." />
        <FeatureGrid items={useCases} />
      </Band>

      <Band id="impact" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="In production" title={<>The numbers that <em className="italic">move the book</em>.</>} kicker="From NBFC origination and verification deployments. The CAM figure is from the Aditya Birla Capital deployment." />
        <StatBand lead={<>What credit teams see in production</>} stats={[{ v: "66", suffix: "%", k: "Reduction in TAT" }, { v: "200", suffix: "%", k: "Productivity uplift" }, { v: "40", suffix: "min", k: "CAM QC, from 3 weeks" }]} />
      </Band>

      <Band id="trust">
        <Head tag="03" eyebrow="Controls that scale" title={<>Grow fast, <em className="italic">stay</em> compliant.</>} />
        <SplitRows items={[
          ["Deploy in your environment", "VPC, on-prem or air-gapped, so customer financial data never leaves your control."],
          ["Audit trail on every decision", "Sourced, timestamped and exportable — ready for lenders, auditors and co-lending partners."],
          ["Policy-configurable", "Your tiers, your deviation matrix, your formats — applied consistently across every officer and branch."],
          ["API-first integration", "Drops into your LOS and collections stack via REST + webhooks, without a rip-and-replace."]]} />
      </Band>

      <Band id="faq" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["Can it handle our volume?", "Yes. Statement analysis runs in under a minute and the suite is built for high-throughput origination, with human review reserved for exceptions and deviations."],
          ["We lend on thin files — does that work?", "Newron is tuned for Indian thin-file lending, combining banking, GST and bureau signals to build a defensible picture where traditional documents are sparse."],
          ["Does it support co-lending audit needs?", "Every decision carries a sourced, exportable audit trail suitable for co-lending partners and lenders' due diligence."],
          ["How quickly can we onboard a new product?", "New products configure in days because the underlying models are pre-trained on Indian commercial and consumer credit."]]} />
      </Band>

      <CTABand headline={<>Scale the book, not the <em className="italic">risk</em>.</>} sub="We'll pilot Newron on a slice of your historical, de-identified files and show you the TAT and productivity numbers before you commit." secondary={{ label: "Read customer stories", href: "v4.html#customers" }} />
      </main>
      <Footer />
    </div>);
}

import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "banks",
  group: "Industries",
  name: "Banks",
  metaDescription:
    "Connect credit intelligence to your existing systems. Your policies, your infrastructure, your officers in control.",
  hero: {
    title: ["Built for banks.", "Ready for scrutiny."],
    body: "Connect credit intelligence to your existing systems. Your policies, your infrastructure, your officers in control.",
    primary: { label: "Talk to us", href: BOOK },
    secondary: { label: "Lending intelligence", href: "/lending-intelligence" },
    steps: [
      { tag: "Multiple inputs", word: "Inputs" },
      { tag: "Policy checks", word: "Policy" },
      { tag: "Approval tiers", word: "Approve" },
      { tag: "Review workspace", word: "Review" },
    ],
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Where banks deploy Newron",
      title: ["From origination", "to the back office."],
      body: "Start with the credit desk or the operations floor. Newron meets the same controls either way.",
      items: [
        {
          tags: "Origination / 01",
          title: "Faster credit decisions",
          body: "CAM generation, statement analysis and deviation handling configured to your retail and commercial credit policy.",
          points: ["Retail + commercial", "Your policy & formats", "Maker-checker controls"],
        },
        {
          tags: "Operations / 02",
          title: "Document-heavy back office",
          body: "Automate KYC review, document understanding and reconciliation workflows that still run on people and PDFs.",
          points: ["KYC + onboarding", "Reconciliation", "Exception routing"],
        },
        {
          tags: "Service / 03",
          title: "Policy & product copilots",
          body: "Give relationship managers and support teams sourced answers from your product and policy documentation.",
          points: ["Sourced answers", "RM enablement", "Always current"],
        },
      ],
    },
    {
      type: "rows",
      eyebrow: "Built for regulated buyers",
      title: ["The controls your", "risk team asks for."],
      body: "Every Newron deployment is designed to pass procurement, security and audit review.",
      items: [
        {
          title: "Deploy in your perimeter",
          meta: "01",
          body: "Self-host on your VPC, on-premise or air-gapped. Data never leaves your environment, and your engineers hold the keys.",
        },
        {
          title: "Full decision audit trail",
          meta: "02",
          body: "Every output is sourced and logged (clause citations, timestamps and reviewer actions), exportable for audit and regulator review.",
        },
        {
          title: "Policy-faithful by design",
          meta: "03",
          body: "Configured to your credit policy, tier override matrix and formats, so deviations are evaluated against your own rules.",
        },
        {
          title: "Human-in-the-loop",
          meta: "04",
          body: "Newron drafts and recommends; your officers decide. Maker-checker is built in, not bolted on.",
        },
      ],
    },
    {
      type: "stats",
      eyebrow: "In production",
      title: ["Outcomes banks", "measure."],
      stats: [
        { value: "66%", label: "Reduction in TAT" },
        { value: "200%", label: "Productivity uplift" },
        { value: "230k+", label: "Hours saved" },
      ],
      note: "Measured on credit-desk deployments. From origination deployments; the operations and copilot workflows above are newer and are not covered by these numbers.",
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "Will this pass our security review?",
          a: "Newron is designed for it: VPC, on-prem or air-gapped deployment, controls aligned to ISO 27001 with a SOC 2 Type II programme in progress, and a complete audit trail. We work directly with your security and procurement teams.",
        },
        {
          q: "Does it replace our core or LOS?",
          a: "No. Newron is API-first and integrates with your existing core, LOS and claims systems rather than replacing them.",
        },
        {
          q: "How long to first production use?",
          a: "Most banks reach a production pilot within a quarter, starting with one workflow and expanding from there.",
        },
        {
          q: "Can it follow our exact credit policy?",
          a: "Yes. Newron is configured to your policy book, tiers and formats, and evaluates deviations against your own rules with citations.",
        },
      ],
    },
  ],
  cta: {
    status: "Let’s build what’s next",
    title: ["Put Newron in", "front of your", "risk team."],
    body: "We’ll run a sandboxed pilot inside your environment and give your security, risk and credit teams the evidence they need.",
    primary: { label: "Let’s talk", href: BOOK },
    secondary: { label: "Security & compliance", href: "/security" },
  },
};

export default page;

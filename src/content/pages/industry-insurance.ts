import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "industry-insurance",
  group: "Industries",
  name: "Insurance",
  metaDescription:
    "Document and policy intelligence for insurers and TPAs. Help adjusters focus on the cases that need their judgement.",
  hero: {
    title: ["Less paperwork.", "More assurance."],
    body: "Document and policy intelligence for insurers and TPAs. Help adjusters focus on the cases that need their judgement.",
    primary: { label: "Talk to us", href: BOOK },
    secondary: { label: "Insurance AI", href: "/insurance-ai" },
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Where insurers deploy Newron",
      title: ["Across claims", "and underwriting."],
      body: "Cut handling time on routine claims and surface risk before it becomes a denial or a dispute.",
      items: [
        {
          tags: "Claims / 01",
          title: "Straight-through claims",
          body: "Document understanding, eligibility checks and TPA-ready filing that clear clean claims without manual handling.",
          points: ["Eligibility at intake", "TPA-ready packets", "Sub-limit awareness"],
        },
        {
          tags: "Risk / 02",
          title: "Denial-risk modelling",
          body: "Predict which claims will bounce, and why, against your historical adjudication data — and fix them first.",
          points: ["Denial-reason model", "Pre-emptive remediation", "SLA forecasting"],
        },
        {
          tags: "Underwriting / 03",
          title: "Document-driven underwriting",
          body: "Parse proposal forms, medical records and financials to speed up underwriting and reduce leakage.",
          points: ["Proposal automation", "Medical record parsing", "Leakage controls"],
        },
      ],
    },
    {
      type: "stats",
      eyebrow: "In production",
      title: ["Faster settlements,", "fewer denials."],
      stats: [
        { value: "90s", label: "Avg time to file" },
        { value: "4.2d", label: "Observed TPA settlement SLA" },
      ],
      note: "Measured across health and motor lines at insurers and TPAs.",
    },
    {
      type: "rows",
      eyebrow: "Built for regulated buyers",
      title: ["The controls your", "compliance team expects."],
      items: [
        {
          title: "Patient & policyholder privacy",
          body: "All processing runs inside your environment — VPC, on-prem or air-gapped — with full audit logging.",
        },
        {
          title: "Explainable decisions",
          body: "Every eligibility check and denial-risk score is backed by the specific policy clauses and document evidence.",
        },
        {
          title: "TPA-ready integration",
          body: "API-first packets and webhooks slot into your existing claims platform and TPA handoffs.",
        },
        {
          title: "Human-in-the-loop",
          body: "Newron assembles and recommends; adjusters approve. Nothing settles without a person in the loop.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "Which lines are supported?",
          a: "Health and motor are in production. Other lines are not validated yet; we scope them case by case rather than claiming coverage up front.",
        },
        {
          q: "How does denial-risk prediction work?",
          a: "It is trained on your historical adjudication outcomes and explains every prediction with the policy clauses and evidence behind it.",
        },
        {
          q: "Does it fit our TPA workflow?",
          a: "Yes. Newron produces TPA-ready packets and integrates via REST + webhooks with your claims platform and TPA partners.",
        },
        {
          q: "Is sensitive medical data protected?",
          a: "Processing stays inside your environment with audit logging and data-residency commitments — nothing is sent to third-party model APIs.",
        },
      ],
    },
  ],
  cta: {
    status: "Let’s build what’s next",
    title: ["Replay last", "quarter’s claims", "through Newron."],
    body: "We’ll show you the denial-risk and time-to-file numbers on your own historical claims before you commit to anything.",
    primary: { label: "Let’s talk", href: BOOK },
    secondary: { label: "Security & compliance", href: "/security" },
  },
};

export default page;

import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "insurance-ai",
  group: "Solutions",
  name: "Insurance AI",
  metaDescription:
    "Understand documents, check eligibility and surface denial risk. Give your claims team the clarity to move forward.",
  hero: {
    title: ["Claims, without", "the complexity."],
    body: "Understand documents, check eligibility and surface denial risk. Give your claims team the clarity to move forward.",
    primary: { label: "Talk to us", href: BOOK },
    secondary: { label: "Explore", href: "#blocks" },
    steps: [
      { tag: "Claim evidence", word: "Evidence" },
      { tag: "Eligibility checks", word: "Check" },
      { tag: "Gap identification", word: "Gaps" },
      { tag: "Assembled packet", word: "Packet" },
    ],
  },
  blocks: [
    {
      type: "features",
      eyebrow: "The claims pipeline",
      title: ["Three checkpoints,", "fully automated."],
      body: "From first notice of loss to a TPA-ready packet, Newron handles the mechanical work and escalates only what needs a human.",
      items: [
        {
          tags: "Eligibility / 01",
          title: "Eligibility check, before submission",
          body: "Policy retrieval and document understanding flag missing artefacts and ineligible claims at intake, before they enter the queue.",
          points: ["Sub-limit awareness", "Document completeness", "Pre-auth guidance"],
        },
        {
          tags: "Filing / 02",
          title: "Automated claim filing",
          body: "Forms, supporting documents and metadata assembled into TPA-ready packets in under 90 seconds.",
          points: ["TPA-ready packets", "Auto-attached evidence", "Status tracking"],
        },
        {
          tags: "Risk / 03",
          title: "Denial risk & remediation",
          body: "Predicts likely denial reasons against historical adjudication data and suggests remediation pre-emptively.",
          points: ["Denial-reason model", "Pre-emptive fixes", "SLA forecasting"],
        },
      ],
    },
    {
      type: "stats",
      eyebrow: "Impact",
      title: ["Fewer denials,", "faster settlements."],
      stats: [
        { value: "90s", label: "Avg time to file" },
        { value: "4.2d", label: "Observed TPA settlement SLA" },
      ],
      note: "Measured across health and motor lines at insurers and TPAs running Newron in production. The settlement figure is the TPA turnaround we observe, not a Newron commitment.",
    },
    {
      type: "steps",
      eyebrow: "Lines & documents",
      title: ["Built for messy,", "real-world claims."],
      body: "Newron reads discharge summaries, prescriptions, invoices, FIRs and policy schedules, printed or handwritten.",
      steps: [
        {
          word: "Intake",
          label: "Document understanding",
          body: "Discharge summaries, bills, prescriptions and policy schedules parsed and cross-checked.",
        },
        {
          word: "Eligibility",
          label: "Policy reasoning",
          body: "Sub-limits, waiting periods and exclusions evaluated against the specific policy schedule.",
        },
        {
          word: "Filing",
          label: "Packet assembly",
          body: "A complete, TPA-ready packet with every required artefact attached and indexed.",
        },
        {
          word: "Adjudicate",
          label: "Denial prediction",
          body: "Likely denial reasons surfaced with the historical evidence behind them.",
        },
        {
          word: "Settle",
          label: "Remediation loop",
          body: "Gaps closed before submission, shortening the back-and-forth with the TPA.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "Which lines of business are supported?",
          a: "Health and motor are in production today. No other line is validated yet. The document and policy-reasoning stack is line-agnostic in design, so we scope additional lines case by case rather than claiming coverage up front.",
        },
        {
          q: "Does it integrate with our TPA workflow?",
          a: "Yes. Newron produces TPA-ready packets and exposes REST + webhook APIs, so it slots into your existing claims platform and TPA handoffs.",
        },
        {
          q: "How is denial risk calculated?",
          a: "The model is trained on historical adjudication outcomes and explains each prediction with the policy clauses and document evidence behind it, never an unexplained score.",
        },
        {
          q: "Is patient data kept private?",
          a: "All processing runs inside your environment (VPC, on-prem or air-gapped) with full audit logging and data-residency commitments.",
        },
      ],
    },
  ],
  cta: {
    status: "Let’s build what’s next",
    title: ["Run a pilot on", "last quarter’s", "claims."],
    body: "We’ll replay a slice of your historical claims through Newron and show you the denial-risk and time-to-file numbers before you commit.",
    primary: { label: "Let’s talk", href: BOOK },
    secondary: { label: "Read customer stories", href: "/#work" },
  },
};

export default page;

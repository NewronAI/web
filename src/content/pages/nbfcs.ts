import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "nbfcs",
  group: "Industries",
  name: "NBFCs",
  metaDescription:
    "Move from thin files to informed decisions. Lending intelligence built for the speed and reach of NBFCs.",
  hero: {
    title: ["More momentum.", "Same rigour."],
    body: "Move from thin files to informed decisions. Lending intelligence built for the speed and reach of NBFCs.",
    primary: { label: "Talk to us", href: BOOK },
    secondary: { label: "Lending intelligence", href: "/lending-intelligence" },
    steps: [
      { tag: "Incoming applications", word: "Intake" },
      { tag: "Verification", word: "Verify" },
      { tag: "Exception routing", word: "Route" },
      { tag: "Underwriting queue", word: "Underwrite" },
    ],
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Where NBFCs deploy Newron",
      title: ["Underwrite faster,", "without cutting corners."],
      body: "The same modular suite that powers banks, tuned for the speed and product mix of an NBFC.",
      items: [
        {
          tags: "Speed / 01",
          title: "Underwrite at NBFC pace",
          body: "Statement analysis and CAM generation that keep up with high-volume, thin-file lending without losing rigour.",
          points: ["Thin-file friendly", "Sub-60s statement parse", "Same-day decisions"],
        },
        {
          tags: "Breadth / 02",
          title: "Every product you originate",
          body: "LAP, gold, equipment, personal and revenue-based finance, pre-trained on Indian commercial and consumer credit.",
          points: ["Commercial + consumer", "Fast product onboarding", "Configurable policy"],
        },
        {
          tags: "Field / 03",
          title: "Verification without the visit",
          body: "Video PD runs the personal discussion remotely: identity and address verified, geotagged, and attached to the file automatically.",
          points: ["Remote personal discussion", "Geotag + timestamp", "Auto-attached report"],
        },
      ],
    },
    {
      type: "stats",
      eyebrow: "In production",
      title: ["The numbers that", "move the book."],
      stats: [
        { value: "66%", label: "Reduction in TAT" },
        { value: "200%", label: "Productivity uplift" },
        { value: "40min", label: "CAM QC, from 3 weeks" },
      ],
      note: "From NBFC origination and verification deployments. The CAM figure is from the Aditya Birla Capital deployment.",
    },
    {
      type: "rows",
      eyebrow: "Controls that scale",
      title: ["Grow fast,", "stay compliant."],
      items: [
        {
          title: "Deploy in your environment",
          meta: "01",
          body: "VPC, on-prem or air-gapped, so customer financial data never leaves your control.",
        },
        {
          title: "Audit trail on every decision",
          meta: "02",
          body: "Sourced, timestamped and exportable, ready for lenders, auditors and co-lending partners.",
        },
        {
          title: "Policy-configurable",
          meta: "03",
          body: "Your tiers, your deviation matrix, your formats, applied consistently across every officer and branch.",
        },
        {
          title: "API-first integration",
          meta: "04",
          body: "Drops into your LOS and collections stack via REST + webhooks, without a rip-and-replace.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "Can it handle our volume?",
          a: "Yes. Statement analysis runs in under a minute and the suite is built for high-throughput origination, with human review reserved for exceptions and deviations.",
        },
        {
          q: "We lend on thin files. Does that work?",
          a: "Newron is tuned for Indian thin-file lending, combining banking, GST and bureau signals to build a defensible picture where traditional documents are sparse.",
        },
        {
          q: "Does it support co-lending audit needs?",
          a: "Every decision carries a sourced, exportable audit trail suitable for co-lending partners and lenders’ due diligence.",
        },
        {
          q: "How quickly can we onboard a new product?",
          a: "New products configure in days because the underlying models are pre-trained on Indian commercial and consumer credit.",
        },
      ],
    },
  ],
  cta: {
    status: "Let’s build what’s next",
    title: ["Scale the book,", "not the risk."],
    body: "We’ll pilot Newron on a slice of your historical, de-identified files and show you the TAT and productivity numbers before you commit.",
    primary: { label: "Let’s talk", href: BOOK },
    secondary: { label: "Read customer stories", href: "/#work" },
  },
};

export default page;

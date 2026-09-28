import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "lending-intelligence",
  group: "Solutions",
  name: "Lending intelligence",
  metaDescription:
    "From statement analysis to credit memos. One intelligent suite, configured to your policy and your workflow.",
  hero: {
    title: ["Credit decisions.", "Connected."],
    body: "From statement analysis to credit memos. One intelligent suite, configured to your policy and your workflow.",
    primary: { label: "Talk to us", href: BOOK },
    secondary: { label: "Explore the suite", href: "#blocks" },
    steps: [
      { tag: "Application batch", word: "Intake" },
      { tag: "Analysis", word: "Analyse" },
      { tag: "Sourced credit memo", word: "Draft" },
      { tag: "Officer review", word: "Review" },
    ],
  },
  blocks: [
    {
      type: "features",
      eyebrow: "In the suite",
      title: ["Six modules,", "one origination flow."],
      body: "Adopt the whole suite or drop a single module into your existing LOS. Every module is API-first and self-hostable.",
      items: [
        {
          tags: "Generation / 01",
          title: "CAM generation",
          body: "Compose Credit Approval Memos in your bank's exact format, with deviation flags and inline policy citations.",
          points: ["Your template, your tiers", "Clause-level citations", "Human-in-the-loop QC"],
        },
        {
          tags: "Analysis / 02",
          title: "Statement analyser",
          body: "12 months of bank statements parsed in under 60 seconds: cash-flow, recurring obligations, anomalies.",
          points: ["Multi-bank ingestion", "Round-tripping detection", "Salary regularity"],
        },
        {
          tags: "Profile / 03",
          title: "Applicant 360°",
          body: "Every signal, covenant and prior decision on one screen, with a recommendation and a full decision trail.",
          points: ["Bureau + income score", "Policy-fit scoring", "Audit timeline"],
        },
        {
          tags: "Verification / 04",
          title: "Video PD",
          body: "Hold the personal discussion over video instead of a field visit: identity and address verified, the call analysed, a standard report attached to the CAM.",
          points: ["Face + address match", "Geotag + GPS lock", "Call analysis, auto-report"],
        },
        {
          tags: "Knowledge / 05",
          title: "Policy chat",
          body: "Underwriters ask, Newron answers, sourced from your policy book with page-level references.",
          points: ["Sourced answers", "Always current"],
        },
        {
          tags: "Controls / 06",
          title: "Deviation engine",
          body: "Detects, classifies and routes deviations against your credit policy and tier override matrix.",
          points: ["Tiered overrides", "Reason codes", "Pre-fills deviations", "Maker-checker"],
        },
      ],
    },
    {
      type: "groups",
      eyebrow: "Coverage",
      title: ["Built for the products", "you actually originate."],
      body: "Pre-trained on Indian commercial and consumer credit. New products onboard in days, not quarters.",
      groups: [
        {
          label: "Commercial",
          meta: "6 products",
          items: [
            "Loan against property",
            "Overdraft",
            "Gold loan",
            "Equipment finance",
            "Revenue-based finance",
            "Line of credit",
          ],
        },
        {
          label: "Consumer",
          meta: "6 products",
          items: ["Home loan", "Auto loan", "Loan against securities", "Personal loan", "Education loan", "Credit card"],
        },
      ],
    },
    {
      type: "stats",
      eyebrow: "In practice",
      title: ["What credit teams", "see in production."],
      stats: [
        { value: "66%", label: "Reduction in TAT" },
        { value: "200%", label: "Productivity uplift" },
        { value: "230k+", label: "Hours saved" },
      ],
    },
    {
      type: "steps",
      eyebrow: "How it fits",
      title: ["From application", "to decision-ready."],
      body: "Newron sits between your LOS and your credit committee, automating the mechanical work so officers spend time on judgement.",
      steps: [
        {
          word: "Intake",
          label: "Intake from your LOS",
          body: "Application, KYC and bureau pulled automatically the moment a file is created.",
        },
        {
          word: "Analyse",
          label: "Statement & document analysis",
          body: "12 months of bank statements parsed in under 60 seconds: cash-flow, recurring obligations, anomalies.",
        },
        {
          word: "Draft",
          label: "CAM drafted in your format",
          body: "Sections written with citations; deviations flagged against your policy book.",
        },
        {
          word: "Verify",
          label: "Verification & remediation",
          body: "Personal discussion held over video and attached; missing artefacts requested before review.",
        },
        {
          word: "Decide",
          label: "Officer review & decision",
          body: "A clean recommendation with a complete, exportable audit trail.",
        },
      ],
    },
    {
      type: "quote",
      quote:
        "Newron’s AI CAM engine replaced weeks of human review with a 40-minute QC step. Our credit officers stopped reformatting Excel and went back to actual underwriting.",
      name: "Arun V",
      role: "Head of Product, Aditya Birla Capital (ABCL)",
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "Does it work with our existing LOS?",
          a: "Yes. Newron is API-first with REST + webhook surfaces and drops into your loan origination system without replacing it. Most integrations are live within a quarter.",
        },
        {
          q: "Where does our data live?",
          a: "Wherever you need it to. Newron self-hosts on your VPC, on-premise, or fully air-gapped. Your engineers keep the keys; compliance gets a complete audit trail.",
        },
        {
          q: "Can it follow our credit policy exactly?",
          a: "The suite is configured to your policy book, formats and tier override matrix. Deviations are detected and routed against your own rules, not generic ones.",
        },
        {
          q: "What about model accuracy?",
          a: "On the tasks we train for, our custom models score on par with frontier systems in our own evaluations, at a fraction of the inference cost, and every output is sourced and reviewable.",
        },
      ],
    },
  ],
  cta: {
    status: "Let’s build what’s next",
    title: ["See Newron on", "your own", "credit files."],
    body: "We'll spin up a sandboxed instance against a slice of your data and deliver a working pilot with eval numbers your team can trust.",
    primary: { label: "Let’s talk", href: BOOK },
    secondary: { label: "Read customer stories", href: "/#work" },
  },
};

export default page;

// All copy for the landing page lives here so it can be edited without touching layout code.
// Content sourced from https://www.arthalm.com/

import { BOOK } from "./links";

export const brand = "ArthaLM";

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  {
    label: "Solutions",
    children: [
      { label: "Lending intelligence", href: "/lending-intelligence" },
      { label: "Insurance AI", href: "/insurance-ai" },
      { label: "Governance AI", href: "/governance-ai" },
      { label: "Custom AI engineering", href: "/custom-ai-engineering" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Banks", href: "/banks" },
      { label: "NBFCs", href: "/nbfcs" },
      { label: "Insurance", href: "/industry-insurance" },
      { label: "Public sector", href: "/public-sector" },
    ],
  },
  { label: "ArthaLM", href: "/#execution" },
  { label: "Customers", href: "/#work" },
  {
    label: "Company",
    children: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Open source", href: "/open-source" },
    ],
  },
];

export const navCta = { label: "Let’s talk", href: BOOK };

export const hero = {
  title: ["The model of", "choice for BFSI."],
  body: "From fragmented data to actionable frontier intelligence which you can self host.",
  primary: { label: "Evaluate ArthaLM", href: BOOK },
  secondary: { label: "See intelligence in action", href: "#execution" },
  steps: [
    { tag: "Documents", word: "Classify" },
    { tag: "Fields", word: "Extract" },
    { tag: "Parties", word: "Map" },
    { tag: "Officer", word: "Decide" },
  ],
};

export const manifesto = {
  eyebrow: "अर्थ · Finance / Meaning / Purpose",
  statement:
    "Not just an answer. A whole working system. See the AI, tools and application connect.",
  rail: [
    { label: "AI", value: "ArthaLM · classify, extract, map" },
    { label: "Tools", value: "CAM generation, statement analyser, policy chat" },
    { label: "Application", value: "Officer workspace, connected to your LOS" },
  ],
};

export const capabilities = {
  eyebrow: "Solutions",
  title: ["Built by Newron.", "Built for your world."],
  body: "Applied AI for banks, NBFCs, insurers and the public sector, running on your infrastructure.",
  items: [
    {
      tags: "Origination / Verification / Decision",
      title: "Lending Intelligence",
      body: "The credit officer’s second brain. Six connected modules configured to your policy, your formats and your tier structure.",
      art: "sun",
    },
    {
      tags: "Eligibility / Gaps / TPA packets",
      title: "Insurance AI",
      body: "Check eligibility, assemble TPA-ready packets and identify denial risk before submission. Built for health and motor claims.",
      art: "blush",
    },
    {
      tags: "Kannada OCR / Voice / Policy",
      title: "Governance AI",
      body: "Built with the Government of Karnataka. Handwriting recognition, regional voice and policy discovery for citizen services.",
      art: "tide",
    },
    {
      tags: "Data / Model / Deployment",
      title: "Custom AI Engineering",
      body: "Embedded engineers. Custom models. A working system in your environment.",
      art: "mint",
    },
  ],
} as const;

export const execution = {
  eyebrow: "Meet ArthaLM",
  title: ["Superfast form filling.", "Without the hassle."],
  body: "ArthaLM’s vision-language models, built for the documents Indian banks and NBFCs actually process.",
  panelLabel: "Document intelligence",
  status: "Processing",
  request: { label: "combined_scan.pdf", text: ["5 files.", "30 pages.", "One scan."], note: "Received" },
  steps: [
    { title: "Classify", tag: "Merged + scanned" },
    { title: "Extract", tag: "Structured fields" },
    { title: "Map", tag: "Parties + collateral" },
    { title: "Assemble", tag: "One case file" },
  ],
  outcome: {
    label: "Case file · LP-2884109",
    title: "Resolved",
    body: "6 documents · 4 parties resolved",
    meta: "30 pages read · 0 re-keyed by hand",
  },
  log: ["Documents classified", "Fields extracted", "Parties mapped", "Case file assembled"],
};

export const approach = {
  eyebrow: "Your infrastructure. Your control.",
  title: ["Intelligence moves in.", "Your data stays put."],
  body: "Run in your VPC, on-premise or air-gapped. Connect through REST APIs and webhooks. Your team keeps the keys; your reviewers get the audit trail.",
  steps: [
    {
      word: "Perimeter",
      label: "The boundary comes first",
      body: "Deploy inside your VPC, your data centre or an air-gapped network, on a customer-owned account with your KMS keys.",
    },
    {
      word: "Move in",
      label: "Model and application, in place",
      body: "ArthaLM model serving, the tool layer and the officer workspace run inside your environment.",
    },
    {
      word: "Connect",
      label: "On your terms",
      body: "REST APIs and webhooks to your LOS, outbound only where you allow it.",
    },
    {
      word: "Record",
      label: "Everything recorded",
      body: "Every model output and user action is timestamped, sourced and exportable for audit and regulator review.",
    },
  ],
};

export const work = {
  eyebrow: "Real work. Real impact.",
  title: ["Intelligence", "deployed across."],
  hint: "Hover a customer to see the impact.",
  projects: [
    {
      name: "Aditya Birla Capital",
      sector: "Financial services",
      result: "3 weeks → 40 minutes",
      tiles: [
        { label: "Before", value: "3 weeks" },
        { label: "After", value: "40 min" },
        { label: "Step", value: "CAM QC" },
      ],
      body: "“Newron’s CAM engine replaced three weeks of human review with a 40-minute QC step. Our credit officers stopped reformatting Excel and went back to actually underwriting.” — Arun Velayutham, Head of SME, Aditya Birla Capital",
    },
    {
      name: "Government of Karnataka",
      sector: "Public sector",
      result: "Kannada in production",
      tiles: [
        { label: "Input", value: "Handwritten" },
        { label: "Status", value: "Live" },
        { label: "Approval", value: "Officer" },
      ],
      body: "Kannada handwriting recognition, regional voice and policy discovery bring citizen services closer to the people who need them. No reply reaches a citizen until an officer approves it.",
    },
    {
      name: "Lending deployments",
      sector: "Banks & NBFCs",
      result: "66% faster turnaround",
      tiles: [
        { label: "Turnaround", value: "−66%" },
        { label: "Modules", value: "6" },
        { label: "Decision", value: "Officer" },
      ],
      body: "66% reduction in turnaround time, reported across Newron lending deployments. The recommendation arrives with its evidence attached; the judgement stays with your team.",
    },
    {
      name: "NVIDIA Inception",
      sector: "Partner",
      result: "Since 2023",
      tiles: [
        { label: "Programme", value: "Inception" },
        { label: "Since", value: "2023" },
        { label: "Status", value: "Partner" },
      ],
      body: "Newron is an NVIDIA Inception partner. Also trusted by HDFC Credila, Fedbank, Fusion, Niwas, IISc, ARTPARK and SATTVA.",
    },
  ],
};

export const metrics = [
  { value: 3, prefix: "", suffix: "×", decimals: 0, label: "Up to 3× faster processing" },
  { value: 8, prefix: "1/", suffix: "", decimals: 0, label: "≈ the inference cost" },
  { value: 200, prefix: "", suffix: "%", decimals: 0, label: "Productivity uplift" },
  { value: 230, prefix: "", suffix: "k+", decimals: 0, label: "Hours saved" },
];

export const metricsNote =
  "Performance figures from Newron’s own document evaluations against frontier models on the same document set. Results vary by task, workload and deployment. Productivity and hours reported across Newron lending deployments.";

export const plans = {
  eyebrow: "From scope to production",
  title: ["Start with your documents.", "Scale to production."],
  items: [
    {
      name: "Sandboxed evaluation",
      price: "Your data",
      body: "Start with a sandboxed evaluation on a slice of your historical data. Get the evidence your team needs before a production rollout.",
      cta: "Evaluate on your documents",
      href: BOOK,
    },
    {
      name: "Custom AI engineering",
      price: "8–12 wks",
      body: "A typical engagement timeline, scoped to your data and integration needs. Embedded engineers, custom models, production in your environment.",
      cta: "Build with Newron",
      href: BOOK,
    },
  ],
};

export const cta = {
  status: "Your data. Your infra. Your model.",
  title: ["Let’s see what", "ArthaLM can", "unlock."],
  body: "Start with a sandboxed evaluation on a slice of your historical data.",
  primary: { label: "Evaluate on your documents", href: BOOK },
};

export const footer = {
  columns: [
    {
      title: "Solutions",
      links: [
        { label: "Lending intelligence", href: "/lending-intelligence" },
        { label: "Insurance AI", href: "/insurance-ai" },
        { label: "Governance AI", href: "/governance-ai" },
        { label: "Custom AI engineering", href: "/custom-ai-engineering" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Banks", href: "/banks" },
        { label: "NBFCs", href: "/nbfcs" },
        { label: "Insurance", href: "/industry-insurance" },
        { label: "Public sector", href: "/public-sector" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Open source", href: "/open-source" },
      ],
    },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "Responsible AI", href: "/responsible-ai" },
  ],
  copyright: "© 2026 Newron. All rights reserved.",
  tagline: "Newron / Bengaluru, India",
  contact: {
    eyebrow: "Let’s talk",
    title: ["Intelligence for a world", "of possibility."],
    body: "Tell us about your documents and workflow, and we’ll set up an evaluation.",
    fields: { name: "Your name", email: "Work email", message: "Which documents or workflow should ArthaLM handle?" },
    button: "Let’s talk",
    note: "Prefer a call? Book a slot on our calendar.",
  },
};

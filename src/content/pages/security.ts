import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "security",
  group: "Legal",
  name: "Security",
  metaDescription:
    "Deployment inside your environment. Encryption, access controls and a traceable record of every action.",
  hero: {
    title: ["Your perimeter.", "Our starting point."],
    body: "Deployment inside your environment. Encryption, access controls and a traceable record of every action.",
    primary: { label: "Request our security pack", href: BOOK },
    secondary: { label: "Report a vulnerability", href: "#blocks" },
    steps: [
      { tag: "Infrastructure boundary", word: "Boundary" },
      { tag: "Deployed components", word: "Components" },
      { tag: "Controlled access", word: "Access" },
      { tag: "Audit trail", word: "Audit" },
    ],
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Posture",
      title: ["What every", "deployment includes."],
      body: "Controls aligned to ISO 27001, with a SOC 2 Type II programme in progress. Every item below applies to every deployment.",
      items: [
        {
          tags: "Data / 01",
          title: "Data stays in your environment",
          body: "Newron runs in your VPC, on-premise or air-gapped. Customer data is never sent to third-party model APIs, and Newron keeps no copy of it outside your environment. Support access, where you grant it, is scoped, time-bound and logged.",
        },
        {
          tags: "Encryption / 02",
          title: "Encryption everywhere",
          body: "TLS for data in transit and encryption at rest, with keys managed by you through your own KMS where you choose.",
        },
        {
          tags: "Access / 03",
          title: "Least-privilege access",
          body: "Role-based access control, scoped service credentials and just-in-time access for support, all logged.",
        },
        {
          tags: "Audit / 04",
          title: "Complete audit trail",
          body: "Every model output and user action is timestamped, sourced and exportable for audit and regulator review.",
        },
      ],
    },
    {
      type: "rows",
      eyebrow: "Deployment models",
      title: ["You choose", "where it runs."],
      body: "The more sensitive the workload, the more isolated we deploy.",
      items: [
        {
          title: "Your private cloud",
          meta: "VPC / 01",
          detail: "Customer-owned account · Private networking · Your KMS keys",
          body: "Runs inside your AWS, Oracle or Google VPC. Data stays in your account; Newron holds no copy of it.",
        },
        {
          title: "On-premise",
          meta: "On-prem / 02",
          body: "Deploys into your own data centre for full physical control over data and compute.",
        },
        {
          title: "Fully air-gapped",
          meta: "Air-gapped / 03",
          body: "Operates with no internet connectivity for the most sensitive government and financial workloads.",
        },
      ],
    },
    {
      type: "rows",
      eyebrow: "Certifications & programme",
      title: ["Exactly where", "we stand."],
      body: "Stated precisely, because procurement will check. We do not claim a certification we do not hold.",
      items: [
        {
          title: "ISO 27001",
          meta: "Aligned",
          body: "Our information security management system is built to the standard’s controls. We are not certified against it.",
        },
        {
          title: "SOC 2",
          meta: "In progress",
          body: "A Type II programme covering security, availability and confidentiality is underway. No report has been issued yet.",
        },
        {
          title: "Data residency",
          meta: "Contractual",
          body: "Indian data-residency commitments, made in the customer agreement rather than by certification.",
        },
      ],
    },
    {
      type: "rows",
      eyebrow: "Last reviewed 1 May 2026",
      title: ["Engineering practices", "and subprocessors."],
      items: [
        {
          title: "Engineering practices",
          body: "Security is part of how we build, not a layer on top. Our practices include code review on every change, dependency and vulnerability scanning in CI, isolated environments for development and production, and regular internal review of access and configuration. Production changes are logged and reversible.",
        },
        {
          title: "Subprocessors",
          body: "For our own corporate operations (such as hosting our website and email) we use a small set of vetted providers under contract. For customer deployments, Newron runs inside your environment, so there are typically no Newron subprocessors in the data path. A current subprocessor list is available on request and as part of our security pack.",
        },
      ],
    },
    {
      type: "statement",
      eyebrow: "Responsible disclosure",
      text: "We welcome reports from security researchers. If you believe you’ve found a vulnerability, please disclose it responsibly: email our security contact with details and steps to reproduce, give us reasonable time to investigate and remediate before any public disclosure, and avoid accessing or modifying data that isn’t yours. We will acknowledge your report, keep you updated, and credit you if you wish once the issue is resolved. Please do not run automated scans against customer deployments.",
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "Can we get your security pack?",
          a: "Yes. Under NDA we share our security documentation, including controls, architecture and subprocessor details. Our SOC 2 Type II programme is still in progress, so there is no report to share yet — the pack sets out where the programme stands.",
        },
        {
          q: "Does Newron ever see our data?",
          a: "In a standard deployment, no. The system runs inside your environment and we hold no copy of your data. Support access, where granted, is scoped, just-in-time and logged.",
        },
        {
          q: "Do you use our data to train models?",
          a: "Not without an explicit, contracted agreement. Customer data is processed under your instructions and is not used to train shared models.",
        },
        {
          q: "How do you handle vulnerabilities?",
          a: "We scan continuously, patch on a risk-based schedule, and operate a responsible-disclosure process for external reports.",
        },
      ],
    },
  ],
  cta: {
    status: "Security",
    title: ["Send us your", "questionnaire."],
    body: "We’ve answered a lot of them. Share your security and procurement requirements and we’ll work through them with your team.",
    primary: { label: "Request security pack", href: BOOK },
    secondary: { label: "Privacy Policy", href: "/privacy" },
  },
};

export default page;

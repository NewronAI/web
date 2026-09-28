import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "custom-ai-engineering",
  group: "Solutions",
  name: "Custom AI engineering",
  metaDescription:
    "Custom models, intelligent workflows and production platforms. Engineered for your data, your infrastructure and your ambition.",
  hero: {
    title: ["Your next leap.", "Built together."],
    body: "Custom models, intelligent workflows and production platforms. Engineered for your data, your infrastructure and your ambition.",
    primary: { label: "Scope an engagement", href: BOOK },
    secondary: { label: "See the product suite", href: "/lending-intelligence" },
    steps: [
      { tag: "Requirements", word: "Scope" },
      { tag: "Model", word: "Model" },
      { tag: "Evaluation", word: "Evaluate" },
      { tag: "Deployment", word: "Deploy" },
    ],
  },
  blocks: [
    {
      type: "features",
      eyebrow: "What we do",
      title: ["Three ways to", "work with us."],
      body: "From a focused engineering sprint to a custom foundational model, scoped to the problem, not a fixed package.",
      items: [
        {
          tags: "Engineering / 01",
          title: "Custom AI engineering",
          body: "We sit inside your team to design the data pipelines, eval harnesses and inference path. Scope to production in 8–12 weeks.",
          points: ["Discovery + scoping sprint", "Data + eval pipeline", "Production deployment"],
        },
        {
          tags: "Foundational / 02",
          title: "Custom foundational models",
          body: "When off-the-shelf models won’t do the job, we build them: domain-pretrained, fine-tuned on your data, evaluated against frontier baselines.",
          points: ["Pretraining + alignment", "Frontier-comparable · ~1/8 cost", "License: yours"],
        },
        {
          tags: "Automation / 03",
          title: "Business automation with AI",
          body: "Document workflows, ops tooling and customer-facing copilots, built on the Newron platform and deployed in your VPC.",
          points: ["Document + workflow ops", "VPC or air-gapped", "API-first, self-hostable"],
        },
      ],
    },
    {
      type: "steps",
      eyebrow: "How we engage",
      title: ["A quarter from kickoff", "to production."],
      body: "We don’t hand over a slide deck. We deliver a working system your team owns and can run.",
      steps: [
        {
          word: "Discover",
          label: "Week 1–2 · Discovery & scoping",
          body: "We map the problem, the data and the eval criteria with your team and agree on what ‘working’ means.",
        },
        {
          word: "Data",
          label: "Week 3–6 · Data & eval pipeline",
          body: "We build the ingestion, labelling and evaluation harness so progress is measurable from day one.",
        },
        {
          word: "Model",
          label: "Week 6–10 · Model & inference path",
          body: "We train, fine-tune or assemble the models and stand up the inference path in your environment.",
        },
        {
          word: "Handover",
          label: "Week 10–12 · Hardening & handover",
          body: "We deploy to production, document everything, and hand your engineers the keys.",
        },
      ],
    },
    {
      type: "rows",
      eyebrow: "How we build",
      title: ["Principles we", "won’t trade away."],
      items: [
        {
          title: "Deploy where you need to",
          meta: "01",
          body: "Self-hostable on your VPC, on-premise or fully air-gapped. Compliance teams get the audit trail; your engineering keeps the keys.",
        },
        {
          title: "API-first by design",
          meta: "02",
          body: "Every Newron system ships with the same REST + webhook surface, so it drops into your existing stack instead of replacing it.",
        },
        {
          title: "Frontier-comparable, at ~1/8",
          meta: "03",
          body: "On the specific tasks we train for, our custom models score on par with frontier systems in our own evaluations, for a fraction of the inference bill.",
        },
        {
          title: "Built with NVIDIA",
          meta: "04",
          body: "NVIDIA Inception Partner since 2023, training on Indian data with explicit residency commitments.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "Who owns the model and the code?",
          a: "The deliverables we build for you (code, trained weights and documentation) are handed over at the end of the engagement. Where a deliverable builds on Newron’s existing base models or platform packages, those are licensed to you to run and self-host rather than assigned. Which parts are owned and which are licensed is set out explicitly in the engagement agreement.",
        },
        {
          q: "How small a problem is worth an engagement?",
          a: "The smallest thing we take on is one workflow with a success criterion we can measure, in practice an 8–12 week engagement. Below that, the product suite is usually the better fit than a custom build, and we’ll say so.",
        },
        {
          q: "Can you really match frontier models at lower cost?",
          a: "On the specific tasks that matter to you, yes, measured on your data with an evaluation harness you can re-run. Domain pretraining and fine-tuning let a smaller model match much larger ones at roughly an eighth of the inference cost. We publish the eval numbers to you rather than asking you to take the claim on trust.",
        },
        {
          q: "What does your team look like?",
          a: "Ex-research and ex-platform engineers who have shipped production AI. You work directly with the people building your system, not an account layer.",
        },
      ],
    },
  ],
  cta: {
    status: "Let’s build what’s next",
    title: ["Bring us your", "hardest problem."],
    body: "Tell us what off-the-shelf AI can’t do for you. We’ll scope an engagement and tell you honestly whether, and how, we can ship it.",
    primary: { label: "Let’s talk", href: BOOK },
    secondary: { label: "About Newron", href: "/about" },
  },
};

export default page;

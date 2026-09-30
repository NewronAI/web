import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "responsible-ai",
  group: "Legal",
  name: "Responsible AI",
  metaDescription:
    "Sourced answers. Human decisions. Clear limits. The principles and practices behind our production systems.",
  hero: {
    title: ["Intelligence with", "accountability."],
    body: "Sourced answers. Human decisions. Clear limits. The principles and practices behind our production systems.",
    primary: { label: "Talk to us", href: BOOK },
    secondary: { label: "How we deploy", href: "/security" },
    steps: [
      { tag: "Model output", word: "Output" },
      { tag: "Sources and limitations", word: "Evidence" },
      { tag: "Human review", word: "Review" },
    ],
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Our principles",
      title: ["Six commitments", "we design around."],
      body: "Not a manifesto — the constraints our systems are actually built to meet.",
      items: [
        {
          tags: "Principle / 01",
          title: "Sourced, not asserted",
          body: "Outputs cite the specific policy clause, document or record behind them. If we can’t show the source, we don’t present it as fact.",
        },
        {
          tags: "Principle / 02",
          title: "Humans decide",
          body: "Newron drafts, scores and recommends; a person makes the decision. Maker-checker and human-in-the-loop are built in, not optional.",
        },
        {
          tags: "Principle / 03",
          title: "Calibrated uncertainty",
          body: "We’d rather a system say “I’m not sure, here’s the clause” than guess with confidence. Abstention is a feature.",
        },
        {
          tags: "Principle / 04",
          title: "Auditable by design",
          body: "Every output is logged, timestamped and exportable, so any decision can be reconstructed and reviewed later.",
        },
        {
          tags: "Principle / 05",
          title: "Fairness under scrutiny",
          body: "We test for disparate impact on the populations our customers serve and document known limitations honestly.",
        },
        {
          tags: "Principle / 06",
          title: "Privacy as a default",
          body: "Data stays in the customer’s environment; we minimise what’s collected and never train shared models on it without consent.",
        },
      ],
    },
    {
      type: "rows",
      eyebrow: "Last reviewed 1 May 2026",
      title: ["How we put it", "into practice."],
      body: "This page sets out how Newron approaches the responsible development and deployment of AI. It applies across our products and custom engagements, and it informs the contracts we sign.",
      items: [
        {
          title: "Governance",
          body: "Responsible-AI decisions are owned by the same people who build the systems — not delegated to a separate committee that never sees the code. High-impact features are reviewed before deployment for sourcing, oversight and failure modes, and we revisit those decisions as systems change.",
        },
        {
          title: "Data & training",
          body: "We train and fine-tune on data we are permitted to use, with attention to provenance and licensing. For customer deployments, customer data is processed under the customer’s instructions and is not used to train shared models without an explicit, contracted agreement. We train on India-hosted data with residency commitments where required.",
        },
        {
          title: "Evaluation",
          body: "Every production workflow ships with an evaluation harness. We measure accuracy on the tasks that matter, track regressions over time, and — where the workflow affects people — test for disparate impact across relevant groups. We prefer reproducible, honest benchmarks over cherry-picked demos, which is part of why we open-source some of our evaluation tooling.",
          href: "/open-source",
        },
        {
          title: "Human oversight",
          body: "Newron is built to assist expert decision-makers, not replace them. Systems are configured so that consequential actions — approving a loan, settling a claim, responding to a citizen — require a human to review and confirm. Interfaces are designed to surface uncertainty and the underlying evidence rather than hide them.",
        },
        {
          title: "Known limitations",
          body: "AI systems make mistakes, can reflect biases in their training data, and can be confidently wrong. We document known limitations for each deployment, design for graceful failure and abstention, and we are explicit with customers about what a system should and should not be relied upon to do.",
        },
        {
          title: "Raising concerns",
          body: "If you believe a Newron system has behaved unfairly or harmfully, we want to know. Contact us via our contact page; concerns are routed to the team responsible for the relevant system and used to improve it.",
          href: "#contact",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "Does Newron make automated decisions about people?",
          a: "Our systems are designed to assist, not to decide autonomously. Consequential actions require human review and confirmation.",
        },
        {
          q: "How do you handle bias?",
          a: "We test for disparate impact on the populations a workflow affects, document known limitations, and work with customers to monitor outcomes in production.",
        },
        {
          q: "Do you use customer data to train models?",
          a: "Not without an explicit, contracted agreement. Customer data is processed under the customer’s instructions inside their environment.",
        },
        {
          q: "What happens when the model is unsure?",
          a: "We design for abstention. A system that surfaces uncertainty and the relevant policy clause is more useful — and safer — than one that always answers.",
        },
      ],
    },
  ],
  cta: {
    status: "Responsible AI",
    title: ["Hold us", "to this."],
    body: "If you’re deploying AI where the stakes are real, let’s talk about how to do it defensibly — and what we’d refuse to build.",
    primary: { label: "Talk to us", href: BOOK },
    secondary: { label: "Security", href: "/security" },
  },
};

export default page;

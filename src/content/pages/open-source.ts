import type { PageContent } from "./types";

const page: PageContent = {
  slug: "open-source",
  group: "Company",
  name: "Open source",
  metaDescription:
    "Explore the tools we can share: public repositories, permissive licences and practical ways to contribute.",
  hero: {
    title: ["Built to be", "built upon."],
    body: "Explore the tools we can share: public repositories, permissive licences and practical ways to contribute.",
    primary: { label: "View on GitHub", href: "https://github.com/NewronAI" },
    secondary: { label: "How to contribute", href: "#blocks" },
  },
  blocks: [
    {
      type: "rows",
      eyebrow: "Projects",
      title: ["What we’ve released."],
      body: "Every public repository in the Newron org, with its licence and last activity. Nothing here is listed as maintained that we are not touching.",
      items: [
        {
          title: "cortex",
          meta: "JavaScript · MIT",
          detail: "Last activity Apr 2026",
          body: "Electron-based crawler for automating repetitive collection and scraping tasks.",
          href: "https://github.com/NewronAI/cortex",
        },
        {
          title: "n00bs",
          meta: "TypeScript · MIT",
          detail: "Last activity Jun 2024",
          body: "Framework for running data collection at scale.",
          href: "https://github.com/NewronAI/n00bs",
        },
        {
          title: "newron-sdk",
          meta: "Python · Apache-2.0",
          detail: "Last activity Oct 2022",
          body: "SDK for the data-centric ML platform Newron started on — build, manage and deploy models through data-driven development.",
          href: "https://github.com/NewronAI/newron-sdk",
        },
      ],
    },
    {
      type: "features",
      eyebrow: "Why we do it",
      title: ["Some things shouldn’t", "be proprietary."],
      body: "Our edge is in deployment and custom models — not in hoarding the basics.",
      items: [
        {
          tags: "Benchmarks / 01",
          title: "Shared evaluation",
          body: "Honest, reproducible benchmarks make the whole field better. We’d rather compete on results than on secret test sets.",
        },
        {
          tags: "Tooling / 02",
          title: "Indian-language tooling",
          body: "Tooling for Indic OCR and speech is scarce, and most of ours is still customer-specific. Where we can separate it from customer data, releasing it lowers the barrier for everyone building here.",
        },
        {
          tags: "Schemas / 03",
          title: "Interop over lock-in",
          body: "Open schemas for statements and documents would let institutions move data without being trapped by any one vendor. We’d like to publish ours; it isn’t public yet.",
        },
        {
          tags: "Limits / 04",
          title: "What we can’t open",
          body: "Customer-trained models, customer data and anything covered by a deployment agreement stay closed. We’d rather say that plainly than imply a bigger public footprint than we have.",
        },
      ],
    },
    {
      type: "steps",
      eyebrow: "Contributing",
      title: ["How to get", "involved."],
      body: "Issues and pull requests are welcome on any public repository.",
      steps: [
        {
          word: "Issue",
          label: "Start with an issue",
          body: "Open one describing the bug or proposal before sending a large change, so we can align on approach.",
        },
        {
          word: "README",
          label: "Check the repository README",
          body: "Setup, style and test expectations live there; open an issue if anything is missing or out of date.",
        },
        {
          word: "Benchmark",
          label: "Add to the benchmarks",
          body: "New evaluation cases — especially for Indian languages and document types — are some of the most valuable contributions.",
        },
        {
          word: "Sign-off",
          label: "Sign your commits",
          body: "We use the Developer Certificate of Origin; a signed-off commit confirms you can contribute the code.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "What licence do you use?",
          a: "Per project, and it is listed next to each one above: cortex and n00bs are MIT, newron-sdk is Apache-2.0. The LICENSE file in each repository is the authority.",
        },
        {
          q: "Do you accept external contributions?",
          a: "Yes. Issues and pull requests are welcome; start with an issue for anything substantial so we can discuss the approach.",
        },
        {
          q: "Are the production models open?",
          a: "The shared tooling, schemas and benchmarks are open. Our custom, customer-trained models are not — those are licensed to the customer.",
        },
        {
          q: "How do I report a security issue?",
          a: "Please disclose responsibly via our security contact rather than a public issue. See the Security page for details.",
        },
      ],
    },
  ],
  cta: {
    status: "Build with us",
    title: ["Use it,", "improve it,", "ship it."],
    body: "Open an issue or send a pull request on anything public. If you’re building regulated AI in India, we’d love to compare notes.",
    primary: { label: "View on GitHub", href: "https://github.com/NewronAI" },
    secondary: { label: "Security", href: "/security" },
  },
};

export default page;

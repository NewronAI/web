import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "about",
  group: "Company",
  name: "About",
  metaDescription:
    "We are an applied-AI company in Bengaluru, building production systems for banks, insurers and public institutions.",
  hero: {
    title: ["Intelligence.", "With purpose."],
    body: "We are an applied-AI company in Bengaluru, building production systems for banks, insurers and public institutions.",
    primary: { label: "Work with us", href: "/careers" },
    secondary: { label: "Explore", href: "#blocks" },
    steps: [
      { tag: "Expertise", word: "Expertise" },
      { tag: "Product", word: "Product" },
      { tag: "Connected network", word: "Network" },
    ],
  },
  blocks: [
    {
      type: "statement",
      eyebrow: "Why we exist",
      text: "In a credit office, an error is a mis-priced loan. In a claims queue, it’s a family left waiting. At a grievance desk, it’s a citizen who couldn’t be heard. We would rather ship a system that says “I’m not sure, here’s the policy clause” than one that guesses with confidence.",
    },
    {
      type: "rows",
      eyebrow: "How we work",
      title: ["Engineering,", "not magic."],
      body: "We began in Bengaluru with a narrow conviction: the distance between a frontier model and a deployable one is engineering.",
      items: [
        {
          title: "We sit inside your team",
          body: "Ex-research and ex-platform engineers embed with your people to design the data pipelines, eval harnesses and inference path.",
        },
        {
          title: "We ship to production",
          body: "Most engagements reach production inside a single quarter — a working system you own, not a proof of concept.",
        },
        {
          title: "We deploy where data lives",
          body: "VPC, on-premise or air-gapped. Compliance gets the audit trail; your engineering keeps the keys.",
        },
        {
          title: "We earn the cost",
          body: "On the tasks we train for, our custom models score on par with frontier systems in our own evaluations, at a fraction of the inference bill.",
        },
      ],
    },
    {
      type: "stats",
      eyebrow: "Where we run",
      title: ["Already in", "production."],
      stats: [
        { value: "3", label: "Live practice areas" },
        { value: "230k+", label: "Hours saved" },
        { value: "2023", label: "NVIDIA Inception" },
      ],
      note: "Not theoretical — running today across three surfaces: lending, insurance and governance.",
    },
    {
      type: "steps",
      eyebrow: "The story so far",
      title: ["A short history."],
      steps: [
        {
          word: "Early 2023",
          label: "Founded in Bengaluru",
          body: "Started with a focus on regulated industries and a conviction that deployability is an engineering problem.",
        },
        {
          word: "Late 2023",
          label: "NVIDIA Inception Partner",
          body: "Joined NVIDIA Inception, training on Indian financial data with explicit residency commitments.",
        },
        {
          word: "2024",
          label: "Lending suite in production",
          body: "Credit memos, statement analysis and verification live at banks and NBFCs.",
        },
        {
          word: "2025",
          label: "Insurance & governance",
          body: "Claims automation for insurers and citizen-service AI with the Government of Karnataka.",
        },
      ],
    },
  ],
  cta: {
    status: "Let’s build what’s next",
    title: ["Build the", "defensible kind", "of AI."],
    body: "Whether you want to deploy our products or have us build something custom, we’d like to hear what you’re working on.",
    primary: { label: "Let’s talk", href: BOOK },
    secondary: { label: "See open roles", href: "/careers" },
  },
};

export default page;

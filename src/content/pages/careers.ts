import type { PageContent } from "./types";

const page: PageContent = {
  slug: "careers",
  group: "Company",
  name: "Careers",
  metaDescription:
    "A small team. Real ownership. AI that reaches credit desks, claims teams and the people they serve.",
  hero: {
    title: ["Build what", "matters."],
    body: "A small team. Real ownership. AI that reaches credit desks, claims teams and the people they serve.",
    primary: { label: "See open roles", href: "#blocks" },
    secondary: { label: "About Newron", href: "/about" },
    steps: [
      { tag: "Data", word: "Pipeline" },
      { tag: "Model", word: "Evaluate" },
      { tag: "Impact", word: "Ship" },
    ],
  },
  blocks: [
    {
      type: "rows",
      eyebrow: "How we operate",
      title: ["What it’s like", "to work here."],
      body: "Small team, direct ownership, real customers from week one.",
      items: [
        {
          title: "Embedded, not abstracted",
          body: "You’ll sit with the credit officers, adjusters and clerks who use what you build. The problem is never theoretical.",
        },
        {
          title: "Own the whole path",
          body: "From data pipeline to eval harness to the inference running in a customer’s VPC — you ship the thing end to end.",
        },
        {
          title: "Rigour over hype",
          body: "We measure everything and we’d rather say ‘not yet’ than ship a confident guess into a regulated workflow.",
        },
        {
          title: "Built in Bengaluru",
          body: "On-site by default because the work is collaborative and fast. Some roles are remote within India.",
        },
      ],
    },
    {
      type: "rows",
      eyebrow: "Open roles",
      title: ["Where we’re hiring."],
      body: "Don’t see your exact role? If you do work that’s relevant to regulated AI, write to us anyway.",
      items: [
        { title: "AI Engineer", meta: "Bengaluru · On-site", href: "/#contact" },
        { title: "Financial Data Curator — Internship", meta: "Bengaluru · On-site", href: "/#contact" },
      ],
    },
    {
      type: "steps",
      eyebrow: "How we hire",
      title: ["A short,", "honest process."],
      body: "Four steps, real work, no trick questions. Usually wrapped up in two to three weeks.",
      steps: [
        {
          word: "Intro",
          label: "Intro call",
          body: "A conversation about your work and what you’re looking for — and an honest read on fit.",
        },
        {
          word: "Deep-dive",
          label: "Technical deep-dive",
          body: "We dig into something you’ve actually built. No whiteboard puzzles.",
        },
        {
          word: "Session",
          label: "Working session",
          body: "A scoped exercise close to the real work, done together with the team. It is paid, and we agree the scope and the time it should take with you before you start.",
        },
        {
          word: "Offer",
          label: "Team & offer",
          body: "Meet the people you’ll work with, then a decision — fast, either way.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "Do you hire remotely?",
          a: "Most engineering roles are on-site in Bengaluru because the work is collaborative and client-embedded, but some roles are open to remote within India. Each listing says where it’s based.",
        },
        {
          q: "Do you sponsor relocation?",
          a: "Yes, for roles where it makes sense. We’ll discuss specifics during the process.",
        },
        {
          q: "What’s the stack?",
          a: "Python-heavy ML and data tooling, modern inference infrastructure, and product surfaces in TypeScript/React. We train and fine-tune our own models.",
        },
        {
          q: "I’m early in my career — should I apply?",
          a: "If you’ve shipped something real and you’re drawn to high-stakes problems, yes. We weight evidence of building over years of experience.",
        },
      ],
    },
  ],
  cta: {
    status: "Join us",
    title: ["Tell us what", "you’ve built."],
    body: "Send the role you want, a CV or LinkedIn, and one thing you’ve built that you can talk through in detail — a repo, a paper, a system in production. The last one carries the most weight.",
    primary: { label: "Apply with your work", href: "/#contact" },
    secondary: { label: "About Newron", href: "/about" },
  },
};

export default page;

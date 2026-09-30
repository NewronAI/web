import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "public-sector",
  group: "Industries",
  name: "Public sector",
  metaDescription:
    "Meet citizens in their own language, inside government infrastructure. Built with the Government of Karnataka.",
  hero: {
    title: ["Public services.", "Human connection."],
    body: "Meet citizens in their own language, inside government infrastructure. Built with the Government of Karnataka.",
    primary: { label: "Talk to us", href: BOOK },
    secondary: { label: "Governance AI", href: "/governance-ai" },
    steps: [
      { tag: "Voice & documents", word: "Intake" },
      { tag: "Classify & route", word: "Route" },
      { tag: "Officer review", word: "Review" },
    ],
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Where the state deploys Newron",
      title: ["From the grievance", "desk to the archive."],
      body: "Language, voice and document understanding, assembled into services citizens can actually use.",
      items: [
        {
          tags: "Citizen services / 01",
          title: "Grievance redressal",
          body: "Citizens speak in their own dialect; Newron classifies, routes, retrieves the policy and drafts a response for officer approval.",
          points: ["Voice-first intake", "Auto-routing", "Sourced responses"],
        },
        {
          tags: "Records / 02",
          title: "Digitising the archive",
          body: "Custom OCR reads Kannada handwriting and print from ledgers and forms that were never digitised.",
          points: ["Handwriting + print", "Ledger layouts", "Searchable archive"],
        },
        {
          tags: "Policy / 03",
          title: "Clause-level discovery",
          body: "Surface the exact rule from circulars and PDFs, with a citation, so frontline staff answer correctly the first time.",
          points: ["Cited answers", "Scales to archives", "Always current"],
        },
      ],
    },
    {
      type: "stats",
      eyebrow: "In pilot",
      title: ["Service at the speed", "of a phone call."],
      stats: [
        { value: "1", label: "Language in production · Kannada" },
        { value: "4:12", label: "Median response time (mm:ss)" },
        { value: "100%", label: "Cases audit-logged" },
      ],
      note: "Across grievance categories in the Karnataka deployment.",
    },
    {
      type: "rows",
      eyebrow: "Built for government",
      title: ["Sovereignty,", "by default."],
      items: [
        {
          title: "Runs on your infrastructure",
          body: "Deploy on-premise or air-gapped within state data centres, with explicit data-residency commitments.",
        },
        {
          title: "Officer accountability",
          body: "Newron drafts and routes; an officer reviews and approves every response, with a full audit log.",
        },
        {
          title: "Accessible by design",
          body: "Voice-first intake in Kannada, so a citizen who cannot fill an English form can still be heard.",
        },
        {
          title: "Transparent & auditable",
          body: "Every answer is sourced to the governing rule, and every case is logged for oversight.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "Can Newron run inside our data centre?",
          a: "Yes. Public-sector deployments run on-premise or air-gapped within state infrastructure, with data-residency commitments.",
        },
        {
          q: "Which languages are supported?",
          a: "Kannada is in production, including handwriting. Other Indian languages are extensions the stack is built for, but each needs its own data and evaluation before we would call it supported.",
        },
        {
          q: "How is citizen data protected?",
          a: "Data stays within government infrastructure, processing is logged end to end, and access is controlled and auditable.",
        },
        {
          q: "Does it replace our officers?",
          a: "No — it removes the mechanical work. Officers review and approve responses; Newron handles intake, routing, retrieval and drafting.",
        },
      ],
    },
  ],
  cta: {
    status: "For the public sector",
    title: ["Start with a", "single grievance", "category."],
    body: "We work with state bodies to scope a pilot on your own infrastructure, with the audit trail and sovereignty your mandate requires.",
    primary: { label: "Let’s talk", href: BOOK },
    secondary: { label: "About Newron", href: "/about" },
  },
};

export default page;

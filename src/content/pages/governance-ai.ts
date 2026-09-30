import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "governance-ai",
  group: "Solutions",
  name: "Governance AI",
  metaDescription:
    "Citizen-service AI built with the Government of Karnataka. Kannada handwriting, regional speech and cited policy answers.",
  hero: {
    title: ["Every voice.", "Understood."],
    body: "Citizen-service AI built with the Government of Karnataka. Kannada handwriting, regional speech and cited policy answers.",
    primary: { label: "Talk to us", href: BOOK },
    secondary: { label: "Public sector", href: "/public-sector" },
    steps: [
      { tag: "Kannada input", word: "Input" },
      { tag: "Understanding", word: "Understand" },
      { tag: "Policy evidence", word: "Evidence" },
      { tag: "Officer response", word: "Respond" },
    ],
  },
  blocks: [
    {
      type: "features",
      eyebrow: "Capabilities",
      title: ["The stack behind a", "working grievance desk."],
      body: "Language, voice, triage and knowledge, assembled into one workflow that meets citizens where they are.",
      items: [
        {
          tags: "Language / 01",
          title: "Custom OCR · Kannada",
          body: "Reads Kannada handwriting and print: ledger forms, applications and field notes that were never digitised.",
          points: ["Handwriting + print", "Ledger & form layouts", "Field-note capture"],
        },
        {
          tags: "Voice / 02",
          title: "Regional TTS & ASR",
          body: "Natural regional voices with low latency, so citizens can speak and be answered in their own dialect.",
          points: ["Dialect-aware", "Low latency", "Phone-line ready"],
        },
        {
          tags: "Triage / 03",
          title: "Grievance triage",
          body: "Classifies, routes, summarises and drafts a response for every grievance, at the speed of a phone call.",
          points: ["Auto-classification", "Officer routing", "Draft responses"],
        },
        {
          tags: "Knowledge / 04",
          title: "Policy discovery",
          body: "Surfaces the exact clause from PDFs and circulars that were never indexed, with a citation.",
          points: ["Clause-level retrieval", "Cited answers", "Scales to archives"],
        },
      ],
    },
    {
      type: "steps",
      eyebrow: "A grievance, end to end",
      title: ["From a voice note", "to a resolved case."],
      body: "Every step is logged and reviewable. Officers approve; Newron does the assembly.",
      steps: [
        {
          word: "Speak",
          label: "00:00 · Citizen speaks, in Kannada",
          body: "A voice note or call is transcribed and understood: no forms, no app, no English.",
        },
        {
          word: "Route",
          label: "00:04 · Classified & routed",
          body: "Category, district and the right officer tier identified automatically.",
        },
        {
          word: "Retrieve",
          label: "00:09 · Policy retrieved",
          body: "The governing rule is surfaced with its clause and current status.",
        },
        {
          word: "Draft",
          label: "00:14 · Response drafted",
          body: "A reply is drafted in the citizen’s language for officer approval.",
        },
        {
          word: "Reply",
          label: "Sent · Spoken back",
          body: "The approved response is delivered as natural regional speech.",
        },
      ],
    },
    {
      type: "stats",
      eyebrow: "Why it matters",
      title: ["Reach the citizens", "a form never could."],
      stats: [
        { value: "1", label: "Language in production · Kannada" },
        { value: "4:12", label: "Median response time (mm:ss)" },
        { value: "100%", label: "Cases audit-logged" },
      ],
      note: "Language and literacy are the real barriers to public services. Newron reduces the reliance on English-language forms and written applications. Figures across grievance categories in pilot.",
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: ["Common questions."],
      items: [
        {
          q: "Which languages and dialects are supported?",
          a: "Kannada is in production, including handwriting recognition. No other language is in production today. The stack is built to extend to other Indian languages and regional dialects, but each one needs its own data and evaluation before we would call it supported.",
        },
        {
          q: "Can it run inside government infrastructure?",
          a: "Yes. Newron deploys on-premise or air-gapped within state data centres, with explicit data-residency commitments and full audit trails.",
        },
        {
          q: "Does an officer stay in the loop?",
          a: "Always. Newron drafts and routes; a human officer reviews and approves every response before it is sent.",
        },
        {
          q: "How does it find answers in old circulars?",
          a: "Policy discovery indexes scanned PDFs and circulars and retrieves the exact governing clause with a citation, even when the source was never digitised.",
        },
      ],
    },
  ],
  cta: {
    status: "For the public sector",
    title: ["Bring services", "to every citizen."],
    body: "We work with state bodies to scope a pilot on a single grievance category, on your own infrastructure, with the audit trail your compliance teams require.",
    primary: { label: "Let’s talk", href: BOOK },
    secondary: { label: "Public sector", href: "/public-sector" },
  },
};

export default page;

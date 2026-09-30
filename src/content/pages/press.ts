import type { PageContent } from "./types";

const page: PageContent = {
  slug: "press",
  group: "Company",
  name: "Press",
  metaDescription:
    "Company milestones, press resources and the stories behind our work. Everything you need to get to know Newron.",
  hero: {
    title: ["The latest.", "From Newron."],
    body: "Company milestones, press resources and the stories behind our work. Everything you need to get to know Newron.",
    primary: { label: "Media enquiries", href: "#contact" },
    secondary: { label: "View press resources", href: "#blocks" },
    steps: [
      { tag: "Company milestones", word: "Milestones" },
      { tag: "Stories & interviews", word: "Stories" },
      { tag: "Brand & media resources", word: "Resources" },
    ],
  },
  blocks: [
    {
      type: "rows",
      eyebrow: "Announcements",
      title: ["Latest from Newron."],
      body: "Product milestones, deployments and partnerships.",
      items: [
        {
          title: "Newron expands citizen-services AI with the Government of Karnataka",
          detail: "May 2026",
          body: "The deployment now spans additional grievance categories with dialect-aware voice intake.",
        },
        {
          title: "Newron’s claims models reach production at a national health insurer",
          detail: "Feb 2026",
          body: "Denial-risk prediction and TPA-ready filing go live across health and motor lines.",
        },
        {
          title: "Tier-1 NBFC cuts credit-memo turnaround from three weeks to under an hour",
          detail: "Nov 2025",
          body: "The lending suite replaces manual CAM review with a 40-minute QC step.",
        },
        {
          title: "Newron joins NVIDIA Inception’s accelerated cohort",
          detail: "Jun 2025",
          body: "Deepening work on India-trained foundational models with data-residency commitments.",
        },
      ],
    },
    {
      type: "rows",
      eyebrow: "Story angles",
      title: ["What we can", "talk about."],
      body: "Subjects we can brief on with data and a named spokesperson. Not published coverage — ask us and we’ll put the material together.",
      items: [
        {
          title: "Auditable AI on the credit desk",
          meta: "Feature",
          body: "Why deployability — not raw model size — is the real constraint for regulated industries, and what it takes to pass a bank’s security review.",
        },
        {
          title: "Building systems that can say “I’m not sure”",
          meta: "Interview",
          body: "Abstention, sourcing and human sign-off as product requirements rather than safety talking points.",
        },
        {
          title: "Indian-language AI in public service",
          meta: "Analysis",
          body: "What dialect-aware grievance redressal looks like in a live state deployment, and where it still falls short.",
        },
      ],
    },
    {
      type: "rows",
      eyebrow: "Press kit",
      title: ["Brand & media", "resources."],
      body: "Logos, the company description and approved imagery for editorial use.",
      items: [
        { title: "Logo & wordmark", meta: "SVG", href: "/artha.svg", preview: "/artha.svg", body: "The Artha mark as a vector file. Opens in a new tab — save it from there." },
        {
          title: "Company boilerplate",
          meta: "Text",
          copy: "Newron is an applied-AI company based in Bengaluru, building production systems for regulated industries — banks, NBFCs, insurers and state institutions. An NVIDIA Inception Partner, Newron deploys inside customer environments with full audit trails and data-residency commitments.",
        },
        {
          title: "Imagery",
          meta: "On request",
          href: "#contact",
          body: "Product and brand visuals are released per request, so we can confirm the usage. Tell us your outlet and story.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "For journalists",
      title: ["Working with us."],
      items: [
        {
          q: "How do I request an interview?",
          a: "Book a slot with us and tell us your outlet, angle and deadline. We typically respond within one business day.",
        },
        {
          q: "Can I use your logo in an article?",
          a: "Yes — please use the asset from the press resources above and don’t alter the mark’s colours or proportions.",
        },
        {
          q: "Do you share customer names?",
          a: "Only with the customer’s explicit consent. Many deployments are referenced anonymously by sector and scale.",
        },
        {
          q: "Are spokespeople available?",
          a: "Yes, for briefings and commentary on applied AI in regulated industries. Reach out with your topic and timing.",
        },
      ],
    },
  ],
  cta: {
    status: "Media",
    title: ["Working on", "a story?"],
    body: "Tell us your angle and deadline and we’ll get you what you need — data, context or a spokesperson.",
    primary: { label: "Contact the media team", href: "#contact" },
    secondary: { label: "About Newron", href: "/about" },
  },
};

export default page;

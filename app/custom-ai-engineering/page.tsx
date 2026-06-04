import React from "react";
import { Nav, Footer, PageHero, Band, Head, FeatureGrid, SplitRows, Timeline, FAQ, CTABand, Quote } from "@/components/site-chrome";
import { IlloCustom } from "@/components/illustrations";

export const metadata = { title: "Custom AI engineering — Newron" };

const services = [
  { tag: "Engineering", title: "Custom AI engineering", desc: "We sit inside your team to design the data pipelines, eval harnesses and inference path. Scope to production in 8–12 weeks.", points: ["Discovery + scoping sprint", "Data + eval pipeline", "Production deployment"] },
  { tag: "Foundational", title: "Custom foundational models", desc: "When off-the-shelf models won't do the job, we build them — domain-pretrained, fine-tuned on your data, evaluated against the SOTA.", points: ["Pretraining + alignment", "On par with SOTA · 1/8 cost", "License: yours"] },
  { tag: "Automation", title: "Business automation with AI", desc: "Document workflows, ops tooling and customer-facing copilots, built on the Newron platform and deployed in your VPC.", points: ["Document + workflow ops", "VPC or air-gapped", "API-first, self-hostable"] },
];

export default function Page() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Solutions / Custom AI engineering"
        aside={<IlloCustom />}
        eyebrow="Custom AI engineering"
        title={<>When the product isn&apos;t enough, <em className="italic">we build it for you.</em></>}
        lead="Newron is staffed by ex-research and ex-platform engineers who embed with your team. Most engagements ship to production inside one quarter."
        ctas={[{ label: "Scope an engagement", href: "v4.html#contact", primary: true }, { label: "See the product suite", href: "lending-intelligence.html" }]} />

      <Band id="offerings">
        <Head tag="01" eyebrow="What we do" title={<>Three ways to work with us.</>} kicker="From a focused engineering sprint to a custom foundational model — scoped to the problem, not a fixed package." />
        <FeatureGrid items={services} cols={3} />
      </Band>

      <Band id="how" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="How we engage" title={<>A quarter from <em className="italic">kickoff</em> to production.</>} kicker="We don't hand over a slide deck. We deliver a working system your team owns and can run." />
        <div style={{ marginTop: 48, maxWidth: 760 }}>
          <Timeline items={[
            ["WEEK 1–2", "Discovery & scoping", "We map the problem, the data and the eval criteria with your team and agree on what 'working' means."],
            ["WEEK 3–6", "Data & eval pipeline", "We build the ingestion, labelling and evaluation harness so progress is measurable from day one."],
            ["WEEK 6–10", "Model & inference path", "We train, fine-tune or assemble the models and stand up the inference path in your environment."],
            ["WEEK 10–12", "Hardening & handover", "We deploy to production, document everything, and hand your engineers the keys."]]} />
        </div>
      </Band>

      <Band id="principles">
        <Head tag="03" eyebrow="How we build" title={<>Principles we <em className="italic">won&apos;t</em> trade away.</>} />
        <SplitRows items={[
          ["Deploy where you need to", "Self-hostable on your VPC, on-premise or fully air-gapped. Compliance teams get the audit trail; your engineering keeps the keys."],
          ["API-first by design", "Every Newron system ships with the same REST + webhook surface, so it drops into your existing stack instead of replacing it."],
          ["On par with SOTA, at 1/8", "Our custom models score within striking distance of frontier systems on the tasks that matter — for a fraction of the inference bill."],
          ["Built with NVIDIA", "NVIDIA Inception Partner since 2023, training on Indian data with explicit residency commitments."]]} />
      </Band>

      <Band id="proof" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 900 }}>
          <Quote text={"“They embedded with our team, shipped to production in eleven weeks, and left us with a system we actually understand and can operate ourselves.”"} who="VP Engineering" sub="Banking platform" />
        </div>
      </Band>

      <Band id="faq">
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["Who owns the model and the code?", "You do. Custom models are licensed to you, and we hand over the code, weights and documentation at the end of the engagement."],
          ["How small a problem is worth an engagement?", "If it's well-scoped and measurable, it's worth a conversation. Many engagements start as a single workflow and grow from there."],
          ["Can you really match frontier models at lower cost?", "On the specific tasks that matter to you, yes. Domain pretraining and fine-tuning let a smaller model match much larger ones at roughly an eighth of the inference cost."],
          ["What does your team look like?", "Ex-research and ex-platform engineers who have shipped production AI. You work directly with the people building your system, not an account layer."]]} />
      </Band>

      <CTABand headline={<>Bring us your <em className="italic">hardest</em> problem.</>} sub="Tell us what off-the-shelf AI can't do for you. We'll scope an engagement and tell you honestly whether — and how — we can ship it." secondary={{ label: "About Newron", href: "about.html" }} />
      <Footer />
    </>);
}

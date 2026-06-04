"use client";
import React from "react";
import { Nav, Footer, PageHero, Band, Head, SplitRows, Timeline, FAQ, CTABand, Arrow } from "@/components/site-chrome";
import { route } from "@/lib/route";
import { IlloCareers } from "@/components/illustrations";

const ROLES: [string, string, string][] = [
  ["Engineering", "Senior ML Engineer — Document Understanding", "Bengaluru · On-site"],
  ["Engineering", "Applied Research Scientist — LLM Fine-tuning", "Bengaluru · On-site"],
  ["Engineering", "Platform Engineer — Inference & Deployment", "Bengaluru / Remote (India)"],
  ["Engineering", "Forward-Deployed Engineer — Lending", "Bengaluru · Client-embedded"],
  ["Product", "Product Manager — Insurance AI", "Bengaluru · On-site"],
  ["Go-to-market", "Solutions Engineer — Banks & NBFCs", "Bengaluru / Mumbai"],
  ["Operations", "Customer Success Lead — Public Sector", "Bengaluru · On-site"],
];

function Roles() {
  const groups = [...new Set(ROLES.map((r) => r[0]))];
  return (
    <div style={{ marginTop: 48, borderTop: "1px solid var(--line)" }}>
      {groups.map((g) =>
        <div key={g}>
          <div className="eyebrow" style={{ padding: "26px 0 6px" }}>{g}</div>
          {ROLES.filter((r) => r[0] === g).map(([, title, loc]) =>
            <a key={title} href={route("v4.html#contact")} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 24, alignItems: "center", padding: "20px 0", borderTop: "1px solid var(--line)", textDecoration: "none", color: "var(--ink)", transition: "padding 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = "12px"; }}
              onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = "0"; }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19 }}>{title}</span>
              <span className="mono" style={{ fontSize: 12, color: "var(--ink-muted)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{loc}</span>
              <Arrow size={15} />
            </a>)}
        </div>)}
    </div>);
}

export default function Page() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Company / Careers"
        aside={<IlloCareers />}
        eyebrow="Careers"
        title={<>Ship AI that <em className="italic">survives</em> contact with production.</>}
        lead="We're a small team of ex-research and ex-platform engineers building systems for regulated industries. The work is hard, the stakes are real, and the feedback loop is a live deployment — not a leaderboard."
        ctas={[{ label: "See open roles", href: "#roles", primary: true }, { label: "About Newron", href: "about.html" }]} />

      <Band id="values">
        <Head tag="01" eyebrow="How we operate" title={<>What it&apos;s <em className="italic">like</em> to work here.</>} kicker="Small team, direct ownership, real customers from week one." />
        <SplitRows items={[
          ["Embedded, not abstracted", "You'll sit with the credit officers, adjusters and clerks who use what you build. The problem is never theoretical."],
          ["Own the whole path", "From data pipeline to eval harness to the inference running in a customer's VPC — you ship the thing end to end."],
          ["Rigour over hype", "We measure everything and we'd rather say 'not yet' than ship a confident guess into a regulated workflow."],
          ["Built in Bengaluru", "On-site by default because the work is collaborative and fast. Some roles are remote within India."]]} />
      </Band>

      <Band id="roles" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="Open roles" title={<>Where we&apos;re <em className="italic">hiring</em>.</>} kicker="Don't see your exact role? If you do work that's relevant to regulated AI, write to us anyway." />
        <Roles />
      </Band>

      <Band id="process">
        <Head tag="03" eyebrow="How we hire" title={<>A short, <em className="italic">honest</em> process.</>} kicker="Four steps, real work, no trick questions. Usually wrapped up in two to three weeks." />
        <div style={{ marginTop: 48, maxWidth: 760 }}>
          <Timeline items={[
            ["STEP 01", "Intro call", "A conversation about your work and what you're looking for — and an honest read on fit."],
            ["STEP 02", "Technical deep-dive", "We dig into something you've actually built. No whiteboard puzzles."],
            ["STEP 03", "Working session", "A scoped, paid exercise close to the real work, done together with the team."],
            ["STEP 04", "Team & offer", "Meet the people you'll work with, then a decision — fast, either way."]]} />
        </div>
      </Band>

      <Band id="faq" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["Do you hire remotely?", "Most engineering roles are on-site in Bengaluru because the work is collaborative and client-embedded, but some roles are open to remote within India. Each listing says which."],
          ["Do you sponsor relocation?", "Yes, for roles where it makes sense. We'll discuss specifics during the process."],
          ["What's the stack?", "Python-heavy ML and data tooling, modern inference infrastructure, and product surfaces in TypeScript/React. We train and fine-tune our own models."],
          ["I'm early in my career — should I apply?", "If you've shipped something real and you're drawn to high-stakes problems, yes. We weight evidence of building over years of experience."]]} />
      </Band>

      <CTABand eyebrow="Join us" headline={<>Tell us what you&apos;ve <em className="italic">built</em>.</>} sub="Send us your work — a repo, a paper, a system you shipped. That tells us more than a CV ever could." primary={{ label: "Get in touch", href: "v4.html#contact" }} secondary={{ label: "About Newron", href: "about.html" }} />
      <Footer />
    </>);
}

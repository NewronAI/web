import React from "react";
import { Nav, Footer, PageHero, Band, Head, SplitRows, Timeline, FAQ, CTABand, Arrow } from "@/components/site-chrome";
import { route } from "@/lib/route";

export const metadata = { title: "Careers — Newron" };

const ROLES: [string, string][] = [
  ["AI Engineer", "Bengaluru · On-site"],
  ["Financial Data Curator — Internship", "Bengaluru · On-site"],
];

function Roles() {
  return (
    <div style={{ marginTop: 48, borderTop: "1px solid var(--line)" }}>
      {ROLES.map(([title, loc]) =>
        <a className="career-role" key={title} href={route("v4.html#contact")}>
          <span>{title}</span>
          <span className="mono job-loc">{loc}</span>
          <Arrow size={15} />
        </a>)}
    </div>);
}

export default function Page() {
  return (
    <div className="immersive inner-site">
      <Nav />
      <main id="main">
      <PageHero
        crumb="Company / Careers"
        art="careers"
        caption="BUILD THE NEXT CHAPTER"
        eyebrow="Careers"
        title={<> Build what<br /><em>matters.</em></>}
        lead="A small team. Real ownership. AI that reaches credit desks, claims teams and the people they serve."
        ctas={[{ label: "See open roles", href: "#roles", primary: true }, { label: "About Newron", href: "about.html" }]} />

      <div id="page-content" />
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
        <div style={{ marginTop: 48 }}>
          <Timeline items={[
            ["STEP 01", "Intro call", "A conversation about your work and what you're looking for — and an honest read on fit."],
            ["STEP 02", "Technical deep-dive", "We dig into something you've actually built. No whiteboard puzzles."],
            ["STEP 03", "Working session", "A scoped exercise close to the real work, done together with the team. It is paid, and we agree the scope and the time it should take with you before you start."],
            ["STEP 04", "Team & offer", "Meet the people you'll work with, then a decision — fast, either way."]]} />
        </div>
      </Band>

      <Band id="faq" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["Do you hire remotely?", "Most engineering roles are on-site in Bengaluru because the work is collaborative and client-embedded, but some roles are open to remote within India. Each listing says where it&apos;s based."],
          ["Do you sponsor relocation?", "Yes, for roles where it makes sense. We'll discuss specifics during the process."],
          ["What's the stack?", "Python-heavy ML and data tooling, modern inference infrastructure, and product surfaces in TypeScript/React. We train and fine-tune our own models."],
          ["I'm early in my career — should I apply?", "If you've shipped something real and you're drawn to high-stakes problems, yes. We weight evidence of building over years of experience."]]} />
      </Band>

      <CTABand eyebrow="Join us" headline={<>Tell us what you&apos;ve <em className="italic">built</em>.</>} sub="Send the role you want, a CV or LinkedIn, and one thing you've built that you can talk through in detail — a repo, a paper, a system in production. The last one carries the most weight." primary={{ label: "Apply with your work", href: "v4.html#contact" }} secondary={{ label: "About Newron", href: "about.html" }} />
      </main>
      <Footer />
    </div>);
}

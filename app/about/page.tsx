import React from "react";
import { Nav, Footer, PageHero, Band, Head, StatBand, SplitRows, Timeline, CTABand } from "@/components/site-chrome";
import { IlloAbout } from "@/components/illustrations";

export const metadata = { title: "About — Newron" };

export default function Page() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Company / About"
        aside={<IlloAbout />}
        eyebrow="About Newron"
        title={<>We build the intelligence <em className="italic">behind</em> decisions that can&apos;t be taken back.</>}
        lead="Newron is an applied-AI company building production systems for the institutions that operate under regulation — India's banks, NBFCs, insurers and state bodies — where a wrong answer is never just a bug report."
        ctas={[{ label: "Work with us", href: "careers.html", primary: true }]} />

      <Band id="why">
        <Head tag="01" eyebrow="Why we exist" title={<>Some rooms don&apos;t <em className="italic">forgive</em> a guess.</>} kicker="The constraint of regulated work shapes everything we make." />
        <div style={{ marginTop: 40, maxWidth: 820 }}>
          <p className="page-lead">In a credit office, an error is a mis-priced loan. In a claims queue, it&apos;s a family left waiting. At a grievance desk, it&apos;s a citizen who couldn&apos;t be heard. We would rather ship a system that says <em className="italic" style={{ fontStyle: "normal" }}>“I&apos;m not sure, here&apos;s the policy clause”</em> than one that guesses with confidence.</p>
        </div>
      </Band>

      <Band id="approach" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="How we work" title={<>Engineering, <em className="italic">not</em> magic.</>} kicker="We began in Bengaluru with a narrow conviction: the distance between a frontier model and a deployable one is engineering." />
        <SplitRows items={[
          ["We sit inside your team", "Ex-research and ex-platform engineers embed with your people to design the data pipelines, eval harnesses and inference path."],
          ["We ship to production", "Most engagements reach production inside a single quarter — a working system you own, not a proof of concept."],
          ["We deploy where data lives", "VPC, on-premise or air-gapped. Compliance gets the audit trail; your engineering keeps the keys."],
          ["We earn the cost", "On the tasks we train for, our custom models score on par with frontier systems in our own evaluations, at a fraction of the inference bill."]]} />
      </Band>

      <Band id="footprint">
        <Head tag="03" eyebrow="Where we run" title={<>Already in <em className="italic">production</em>.</>} kicker="Not theoretical — running today across three surfaces." />
        <StatBand lead={<>Across lending, insurance and governance</>} stats={[{ v: "3", suffix: "", k: "Live practice areas" }, { v: "65k", suffix: "+", k: "Hours saved" }, { v: "2023", suffix: "", k: "NVIDIA Inception" }]} />
      </Band>

      <Band id="story" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="04" eyebrow="The story so far" title={<>A short history.</>} />
        <div style={{ marginTop: 48, maxWidth: 760 }}>
          <Timeline items={[
            ["2023", "Founded in Bengaluru", "Started with a focus on regulated industries and a conviction that deployability is an engineering problem."],
            ["2023", "NVIDIA Inception Partner", "Joined NVIDIA Inception, training on Indian financial data with explicit residency commitments."],
            ["2024", "Lending suite in production", "Credit memos, statement analysis and verification live at banks and NBFCs."],
            ["2025", "Insurance & governance", "Claims automation for insurers and citizen-service AI with the Government of Karnataka."]]} />
        </div>
      </Band>

      <CTABand headline={<>Build the <em className="italic">defensible</em> kind of AI.</>} sub="Whether you want to deploy our products or have us build something custom, we'd like to hear what you're working on." secondary={{ label: "See open roles", href: "careers.html" }} />
      <Footer />
    </>);
}

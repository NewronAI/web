import React from "react";
import { Nav, Footer, PageHero, Band, Head, SplitRows, FAQ, CTABand, Arrow } from "@/components/site-chrome";
import { IlloOpenSource } from "@/components/illustrations";

export const metadata = { title: "Open source — Newron" };

type Repo = { name: string; desc: string; lang: string; licence: string; active: string; href: string };
const REPOS: Repo[] = [
  { name: "cortex", desc: "Electron-based crawler for automating repetitive collection and scraping tasks.", lang: "JavaScript", licence: "MIT", active: "Apr 2026", href: "github.com/NewronAI/cortex" },
  { name: "n00bs", desc: "Framework for running data collection at scale.", lang: "TypeScript", licence: "MIT", active: "Jun 2024", href: "github.com/NewronAI/n00bs" },
  { name: "newron-sdk", desc: "SDK for the data-centric ML platform Newron started on — build, manage and deploy models through data-driven development.", lang: "Python", licence: "Apache-2.0", active: "Oct 2022", href: "github.com/NewronAI/newron-sdk" },
];

function Repos() {
  return (
    <div style={{ marginTop: 48, borderTop: "1px solid var(--line)" }}>
      {REPOS.map((r) =>
        <a key={r.name} href={"https://" + r.href} target="_blank" rel="noopener" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 28, alignItems: "center", padding: "24px 0", borderBottom: "1px solid var(--line)", textDecoration: "none", color: "var(--ink)" }}>
          <span style={{ minWidth: 0 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <span className="mono" style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 18, color: "var(--ink)" }}>{r.name}</span>
              <span className="lang-chip">{r.lang.toUpperCase()}</span>
              <span className="lang-chip">{r.licence.toUpperCase()}</span>
              <span className="mono" style={{ fontSize: "var(--fs-micro)", letterSpacing: "0.08em", color: "var(--ink-muted)" }}>LAST ACTIVITY {r.active.toUpperCase()}</span>
            </span>
            <span style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 8, lineHeight: 1.55, display: "block", maxWidth: 620 }}>{r.desc}</span>
          </span>
          <Arrow size={15} />
        </a>)}
    </div>);
}

export default function Page() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Company / Open source"
        aside={<IlloOpenSource />}
        eyebrow="Open source"
        title={<>The tools we wish <em className="italic">existed</em>.</>}
        lead="What we can release, we release — tooling built alongside our production work, under permissive licences. This is a small roster, not a portfolio: it lists what is actually public today."
        ctas={[{ label: "View on GitHub", href: "https://github.com/NewronAI", primary: true }, { label: "How to contribute", href: "#contributing" }]} />

      <Band id="repos">
        <Head tag="01" eyebrow="Projects" title={<>What we&apos;ve <em className="italic">released</em>.</>} kicker="Every public repository in the Newron org, with its licence and last activity. Nothing here is listed as maintained that we are not touching." />
        <Repos />
      </Band>

      <Band id="why" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="Why we do it" title={<>Some things shouldn&apos;t be <em className="italic">proprietary</em>.</>} kicker="Our edge is in deployment and custom models — not in hoarding the basics." />
        <SplitRows items={[
          ["Shared evaluation", "Honest, reproducible benchmarks make the whole field better. We'd rather compete on results than on secret test sets."],
          ["Indian-language tooling", "Tooling for Indic OCR and speech is scarce, and most of ours is still customer-specific. Where we can separate it from customer data, releasing it lowers the barrier for everyone building here."],
          ["Interop over lock-in", "Open schemas for statements and documents would let institutions move data without being trapped by any one vendor. We'd like to publish ours; it isn't public yet."],
          ["What we can't open", "Customer-trained models, customer data and anything covered by a deployment agreement stay closed. We'd rather say that plainly than imply a bigger public footprint than we have."]]} />
      </Band>

      <Band id="contributing">
        <Head tag="03" eyebrow="Contributing" title={<>How to get <em className="italic">involved</em>.</>} kicker="Issues and pull requests are welcome on any public repository." />
        <div className="prose" style={{ marginTop: 36 }}>
          <ul>
            <li><strong>Start with an issue.</strong> Open one describing the bug or proposal before sending a large change, so we can align on approach.</li>
            <li><strong>Check the repository README.</strong> Setup, style and test expectations live there; open an issue if anything is missing or out of date.</li>
            <li><strong>Add to the benchmarks.</strong> New evaluation cases — especially for Indian languages and document types — are some of the most valuable contributions.</li>
            <li><strong>Sign your commits.</strong> We use the Developer Certificate of Origin; a signed-off commit confirms you can contribute the code.</li>
          </ul>
        </div>
      </Band>

      <Band id="faq" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["What licence do you use?", "Per project, and it is listed next to each one above: cortex and n00bs are MIT, newron-sdk is Apache-2.0. The LICENSE file in each repository is the authority."],
          ["Do you accept external contributions?", "Yes. Issues and pull requests are welcome; start with an issue for anything substantial so we can discuss the approach."],
          ["Are the production models open?", "The shared tooling, schemas and benchmarks are open. Our custom, customer-trained models are not — those are licensed to the customer."],
          ["How do I report a security issue?", "Please disclose responsibly via our security contact rather than a public issue. See the Security page for details."]]} />
      </Band>

      <CTABand eyebrow="Build with us" headline={<>Use it, <em className="italic">improve</em> it, ship it.</>} sub="Open an issue or send a pull request on anything public. If you're building regulated AI in India, we'd love to compare notes." primary={{ label: "View on GitHub", href: "https://github.com/NewronAI" }} secondary={{ label: "Security", href: "security.html" }} />
      <Footer />
    </>);
}

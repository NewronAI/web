import React from "react";
import { Nav, Footer, PageHero, Band, Head, SplitRows, FAQ, CTABand, Arrow } from "@/components/site-chrome";
import { IlloOpenSource } from "@/components/illustrations";

export const metadata = { title: "Open source — Newron" };

const REPOS: [string, string, string, string][] = [
  ["nexus", "The Newron monorepo — shared platform packages and the public marketing surface.", "TypeScript", "github.com/NewronAI/nexus"],
  ["indic-ocr-eval", "Evaluation harness and benchmarks for Indian-language OCR, including Kannada handwriting.", "Python", "github.com/NewronAI"],
  ["statement-parse", "Reference parsers and schemas for Indian bank-statement formats.", "Python", "github.com/NewronAI"],
  ["eval-harness", "A lightweight, reproducible evaluation harness for production LLM workflows.", "Python", "github.com/NewronAI"],
];

function Repos() {
  return (
    <div style={{ marginTop: 48, borderTop: "1px solid var(--line)" }}>
      {REPOS.map(([name, desc, lang, href]) =>
        <a key={name} href={"https://" + href} target="_blank" rel="noopener" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 28, alignItems: "center", padding: "24px 0", borderBottom: "1px solid var(--line)", textDecoration: "none", color: "var(--ink)" }}>
          <span style={{ minWidth: 0 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span className="mono" style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 18, color: "var(--ink)" }}>{name}</span>
              <span className="lang-chip">{lang.toUpperCase()}</span>
            </span>
            <span style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 8, lineHeight: 1.55, display: "block", maxWidth: 620 }}>{desc}</span>
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
        lead="Regulated AI in India needs shared infrastructure — benchmarks, parsers and evaluation harnesses that everyone can build on. We open-source the pieces that shouldn't be reinvented behind closed doors."
        ctas={[{ label: "View on GitHub", href: "https://github.com/NewronAI/nexus", primary: true }, { label: "How to contribute", href: "#contributing" }]} />

      <Band id="repos">
        <Head tag="01" eyebrow="Projects" title={<>What we&apos;ve <em className="italic">released</em>.</>} kicker="Open-source under permissive licences, maintained alongside our production work." />
        <Repos />
      </Band>

      <Band id="why" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="Why we do it" title={<>Some things shouldn&apos;t be <em className="italic">proprietary</em>.</>} kicker="Our edge is in deployment and custom models — not in hoarding the basics." />
        <SplitRows items={[
          ["Shared evaluation", "Honest, reproducible benchmarks make the whole field better. We'd rather compete on results than on secret test sets."],
          ["Indian-language data", "Tooling for Indic OCR and speech is scarce. Releasing ours lowers the barrier for everyone building here."],
          ["Interop over lock-in", "Open schemas for statements and documents let institutions move data without being trapped by any one vendor."],
          ["Give back to the stack", "We build on open source every day; contributing upstream is the rent we pay for it."]]} />
      </Band>

      <Band id="contributing">
        <Head tag="03" eyebrow="Contributing" title={<>How to get <em className="italic">involved</em>.</>} kicker="Issues, pull requests and benchmark contributions are all welcome." />
        <div className="prose" style={{ marginTop: 36 }}>
          <ul>
            <li><strong>Start with an issue.</strong> Open one describing the bug or proposal before sending a large change, so we can align on approach.</li>
            <li><strong>Read the contributing guide.</strong> Each repository ships a CONTRIBUTING file with setup, style and test expectations.</li>
            <li><strong>Add to the benchmarks.</strong> New evaluation cases — especially for Indian languages and document types — are some of the most valuable contributions.</li>
            <li><strong>Sign your commits.</strong> We use the Developer Certificate of Origin; a signed-off commit confirms you can contribute the code.</li>
          </ul>
        </div>
      </Band>

      <Band id="faq" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["What licence do you use?", "Our open-source projects ship under permissive licences (typically MIT or Apache 2.0). Check each repository for specifics."],
          ["Do you accept external contributions?", "Yes. Issues and pull requests are welcome; start with an issue for anything substantial so we can discuss the approach."],
          ["Are the production models open?", "The shared tooling, schemas and benchmarks are open. Our custom, customer-trained models are not — those are licensed to the customer."],
          ["How do I report a security issue?", "Please disclose responsibly via our security contact rather than a public issue. See the Security page for details."]]} />
      </Band>

      <CTABand eyebrow="Build with us" headline={<>Use it, <em className="italic">improve</em> it, ship it.</>} sub="Star the repos, open an issue, or send a pull request. If you're building regulated AI in India, we'd love to compare notes." primary={{ label: "View on GitHub", href: "https://github.com/NewronAI/nexus" }} secondary={{ label: "Security", href: "security.html" }} />
      <Footer />
    </>);
}

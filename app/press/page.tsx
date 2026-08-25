import React from "react";
import { Nav, Footer, PageHero, Band, Head, FeatureGrid, FAQ, CTABand, Arrow } from "@/components/site-chrome";
import { route } from "@/lib/route";
import { IlloPress } from "@/components/illustrations";

export const metadata = { title: "Press — Newron" };

const RELEASES: [string, string, string][] = [
  ["May 2026", "Newron expands citizen-services AI with the Government of Karnataka", "The deployment now spans additional grievance categories with dialect-aware voice intake."],
  ["Feb 2026", "Newron's claims models reach production at a national health insurer", "Denial-risk prediction and TPA-ready filing go live across health and motor lines."],
  ["Nov 2025", "Tier-1 NBFC cuts credit-memo turnaround from three weeks to under an hour", "The lending suite replaces manual CAM review with a 40-minute QC step."],
  ["Jun 2025", "Newron joins NVIDIA Inception's accelerated cohort", "Deepening work on India-trained foundational models with data-residency commitments."],
];

const ANGLES = [
  { tag: "Feature", title: "Auditable AI on the credit desk", desc: "Why deployability — not raw model size — is the real constraint for regulated industries, and what it takes to pass a bank's security review." },
  { tag: "Interview", title: "Building systems that can say “I'm not sure”", desc: "Abstention, sourcing and human sign-off as product requirements rather than safety talking points." },
  { tag: "Analysis", title: "Indian-language AI in public service", desc: "What dialect-aware grievance redressal looks like in a live state deployment, and where it still falls short." },
];

function Releases() {
  return (
    <div style={{ marginTop: 48, borderTop: "1px solid var(--line)" }}>
      {RELEASES.map(([date, title, desc]) =>
        <div key={title} className="r-listrow">
          <span className="mono" style={{ fontSize: 12, color: "var(--ink-muted)", letterSpacing: "0.06em", paddingTop: 4 }}>{date.toUpperCase()}</span>
          <span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 21, lineHeight: 1.2, display: "block" }}>{title}</span>
            <span style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 6, lineHeight: 1.55, display: "block" }}>{desc}</span>
          </span>
        </div>)}
    </div>);
}

export default function Page() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Company / Press"
        aside={<IlloPress />}
        eyebrow="Press"
        title={<>News from the <em className="italic">production</em> floor.</>}
        lead="Announcements, coverage and press resources. For interviews, briefings or media enquiries, our team usually responds within one business day."
        ctas={[{ label: "Media enquiries", href: "v4.html#contact", primary: true }, { label: "View press resources", href: "#kit" }]} />

      <Band id="releases">
        <Head tag="01" eyebrow="Announcements" title={<>Latest from Newron.</>} kicker="Product milestones, deployments and partnerships." />
        <Releases />
      </Band>

      <Band id="coverage" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="Story angles" title={<>What we can <em className="italic">talk about</em>.</>} kicker="Subjects we can brief on with data and a named spokesperson. Not published coverage — ask us and we'll put the material together." />
        <FeatureGrid items={ANGLES} cols={3} />
      </Band>

      <Band id="kit">
        <Head tag="03" eyebrow="Press kit" title={<>Brand & <em className="italic">media</em> resources.</>} kicker="Logos, the company description and approved imagery for editorial use." />
        <div className="r-cards" style={{ marginTop: 48 }}>
          {([["Logo & wordmark", "PNG · open in a new tab and save", "newron-logo.png"], ["Company boilerplate", "Printed in full below — copy it straight off this page.", ""], ["Imagery", "Product and brand visuals released per request, so we can confirm the usage.", ""]] as [string, string, string][]).map(([t, d, href]) => {
            const body = (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22 }}>{t}</span>
                  {href ? <Arrow size={15} /> : null}
                </div>
                <p style={{ fontSize: 13.5, color: "var(--ink-soft)", marginTop: 12, lineHeight: 1.55 }}>{d}</p>
              </>);
            return href
              ? <a key={t} className="card" href={route(href)} target="_blank" rel="noopener" style={{ padding: 28, textDecoration: "none", color: "var(--ink)", display: "block" }}>{body}</a>
              : <div key={t} className="card" style={{ padding: 28 }}>{body}</div>;
          })}
        </div>
        <div style={{ marginTop: 32, padding: 24, border: "1px solid var(--line)", borderRadius: "var(--r-lg)", background: "var(--bg-2)", maxWidth: 820 }}>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Boilerplate</div>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "var(--ink-soft)" }}>
            Newron is an applied-AI company based in Bengaluru, building production systems for regulated
            industries — banks, NBFCs, insurers and state institutions. An NVIDIA Inception Partner, Newron
            deploys inside customer environments with full audit trails and data-residency commitments.
          </p>
        </div>
      </Band>

      <Band id="faq" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="04" eyebrow="For journalists" title={<>Working with us.</>} />
        <FAQ items={[
          ["How do I request an interview?", "Book a slot with us and tell us your outlet, angle and deadline. We typically respond within one business day."],
          ["Can I use your logo in an article?", "Yes — please use the asset from the press resources above and don't alter the mark's colours or proportions."],
          ["Do you share customer names?", "Only with the customer's explicit consent. Many deployments are referenced anonymously by sector and scale."],
          ["Are spokespeople available?", "Yes, for briefings and commentary on applied AI in regulated industries. Reach out with your topic and timing."]]} />
      </Band>

      <CTABand eyebrow="Media" headline={<>Working on a <em className="italic">story</em>?</>} sub="Tell us your angle and deadline and we'll get you what you need — data, context or a spokesperson." primary={{ label: "Contact the media team", href: "v4.html#contact" }} secondary={{ label: "About Newron", href: "about.html" }} />
      <Footer />
    </>);
}

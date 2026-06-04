import React from "react";
import { Nav, Footer, PageHero, Band, Head, SplitRows, FeatureGrid, Prose, FAQ, CTABand } from "@/components/site-chrome";
import { route } from "@/lib/route";
import { IlloSecurity } from "@/components/illustrations";

export const metadata = { title: "Security — Newron" };

const deploy = [
  { tag: "VPC", title: "Your private cloud", desc: "Runs inside your AWS, Oracle or Google VPC. Data stays in your account; we never see it.", points: ["Customer-owned account", "Private networking", "Your KMS keys"] },
  { tag: "On-prem", title: "On-premise", desc: "Deploys into your own data centre for full physical control over data and compute.", points: ["No external egress", "Hardware you control", "Local key management"] },
  { tag: "Air-gapped", title: "Fully air-gapped", desc: "Operates with no internet connectivity for the most sensitive government and financial workloads.", points: ["Zero outbound", "Offline model updates", "Sovereign by default"] },
];

function LegalAside({ updated, items }: { updated: string; items: [string, string][] }) {
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 10 }}>Last reviewed</div>
      <div className="mono" style={{ fontSize: 13, color: "var(--ink)", marginBottom: 28 }}>{updated}</div>
      <div className="eyebrow" style={{ marginBottom: 12 }}>On this page</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
        {items.map(([id, label]) =>
          <li key={id}><a href={"#" + id} style={{ color: "var(--ink-soft)", textDecoration: "none", fontSize: 13.5 }}>{label}</a></li>)}
      </ul>
    </div>);
}

export default function Page() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Legal / Security"
        aside={<IlloSecurity />}
        eyebrow="Security"
        title={<>Built to pass the <em className="italic">security review</em>.</>}
        lead="Newron is designed for buyers whose procurement, risk and audit teams ask hard questions. We deploy inside your perimeter, encrypt everything, and leave a trail for every action."
        ctas={[{ label: "Request our security pack", href: "v4.html#contact", primary: true }, { label: "Report a vulnerability", href: "#disclosure" }]} />

      <Band id="pillars">
        <Head tag="01" eyebrow="Posture" title={<>The controls your <em className="italic">risk team</em> expects.</>} kicker="Aligned to ISO 27001 and our SOC 2 programme, and validated in regulated deployments." />
        <SplitRows items={[
          ["Data stays in your environment", "Newron runs in your VPC, on-premise or air-gapped. Customer data is never sent to third-party model APIs, and we hold no copy of it."],
          ["Encryption everywhere", "TLS for data in transit and strong encryption at rest, with keys managed by you through your own KMS where you choose."],
          ["Least-privilege access", "Role-based access control, scoped service credentials and just-in-time access for support, all logged."],
          ["Complete audit trail", "Every model output and user action is timestamped, sourced and exportable for audit and regulator review."]]} />
      </Band>

      <Band id="deploy" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="02" eyebrow="Deployment models" title={<>You choose where it <em className="italic">runs</em>.</>} kicker="The more sensitive the workload, the more isolated we deploy." />
        <FeatureGrid items={deploy} cols={3} />
      </Band>

      <Band id="certs">
        <Head tag="03" eyebrow="Certifications & programme" title={<>Independently <em className="italic">checked</em>.</>} />
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {([["ISO 27001", "Information security management system aligned to the standard."], ["SOC 2", "Type II programme covering security, availability and confidentiality (in progress)."], ["Data residency", "Indian data-residency commitments; training on India-hosted data."]] as [string, string][]).map(([t, d]) =>
            <div key={t} className="card" style={{ padding: 28 }}>
              <div className="eyebrow eyebrow-grad" style={{ marginBottom: 14 }}>Certified</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26 }}>{t}</div>
              <p style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 10, lineHeight: 1.6 }}>{d}</p>
            </div>)}
        </div>
      </Band>

      <Prose aside={<LegalAside updated="1 May 2026" items={[["practices", "Engineering practices"], ["sub", "Subprocessors"], ["disclosure", "Responsible disclosure"]]} />}>
        <h2 id="practices">Engineering practices</h2>
        <p>Security is part of how we build, not a layer on top. Our practices include code review on every change, dependency and vulnerability scanning in CI, isolated environments for development and production, and regular internal review of access and configuration. Production changes are logged and reversible.</p>

        <h2 id="sub">Subprocessors</h2>
        <p>For our own corporate operations (such as hosting our website and email) we use a small set of vetted providers under contract. For <strong>customer deployments</strong>, Newron runs inside your environment, so there are typically <strong>no Newron subprocessors</strong> in the data path. A current subprocessor list is available on request and as part of our security pack.</p>

        <h2 id="disclosure">Responsible disclosure</h2>
        <p>We welcome reports from security researchers. If you believe you&apos;ve found a vulnerability, please disclose it responsibly: email our security contact with details and steps to reproduce, give us reasonable time to investigate and remediate before any public disclosure, and avoid accessing or modifying data that isn&apos;t yours. We will acknowledge your report, keep you updated, and credit you if you wish once the issue is resolved. Please do not run automated scans against customer deployments.</p>
      </Prose>

      <Band id="faq" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
        <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
        <FAQ items={[
          ["Can we get your SOC 2 report and security pack?", "Yes. Under NDA we share our security documentation, including controls, architecture and subprocessor details. Request it via the contact form."],
          ["Does Newron ever see our data?", "In a standard deployment, no. The system runs inside your environment and we hold no copy of your data. Support access, where granted, is scoped, just-in-time and logged."],
          ["Do you use our data to train models?", "Not without an explicit, contracted agreement. Customer data is processed under your instructions and is not used to train shared models."],
          ["How do you handle vulnerabilities?", "We scan continuously, patch on a risk-based schedule, and operate a responsible-disclosure process for external reports."]]} />
      </Band>

      <CTABand eyebrow="Security" headline={<>Send us your <em className="italic">questionnaire</em>.</>} sub="We've answered a lot of them. Share your security and procurement requirements and we'll work through them with your team." primary={{ label: "Request security pack", href: "v4.html#contact" }} secondary={{ label: "Privacy Policy", href: "privacy.html" }} />
      <Footer />
    </>);
}

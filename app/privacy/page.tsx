import React from "react";
import { Nav, Footer, PageHero, Prose, Band } from "@/components/site-chrome";
import { route } from "@/lib/route";
import { IlloPrivacy } from "@/components/illustrations";

export const metadata = { title: "Privacy Policy — Newron" };

function LegalAside({ updated, items }: { updated: string; items: [string, string][] }) {
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 10 }}>Effective</div>
      <div className="mono" style={{ fontSize: 13, color: "var(--ink)", marginBottom: 28 }}>{updated}</div>
      <div className="eyebrow" style={{ marginBottom: 12 }}>On this page</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
        {items.map(([id, label]) =>
          <li key={id}><a className="toc-link" href={"#" + id}>{label}</a></li>)}
      </ul>
    </div>);
}

export default function Page() {
  return (
    <>
      <Nav />
      <PageHero
        crumb="Legal / Privacy"
        aside={<IlloPrivacy />}
        eyebrow="Privacy Policy"
        title={<>Your data, <em className="italic">handled</em> the way we&apos;d want ours to be.</>}
        lead="This policy explains what Newron collects, why, and the choices you have. We build for regulated industries, so privacy isn't an afterthought — it's the design constraint." />

      <Prose aside={<LegalAside updated="1 May 2026" items={[["scope", "1. Scope"], ["collect", "2. What we collect"], ["use", "3. How we use it"], ["customer", "4. Customer data"], ["sharing", "5. Sharing"], ["retention", "6. Retention"], ["rights", "7. Your rights"], ["security", "8. Security"], ["contact", "9. Contact"]]} />}>
        <p className="lede">This Privacy Policy describes how NewronAI Technologies Pvt. Ltd. (“Newron”, “we”, “us”) collects and processes personal information through our website and corporate operations. It is written to be read, not just filed.</p>

        <h2 id="scope">1. Scope</h2>
        <p>This policy covers personal information we handle as a <strong>data controller</strong> — primarily visitors to our website and people who contact us about our products or careers. It does <strong>not</strong> govern data we process <strong>on behalf of customers</strong> inside their deployments; that relationship is covered by the contract and Data Processing Agreement with each customer (see <a href="#customer">Customer data</a>).</p>

        <h2 id="collect">2. What we collect</h2>
        <p>We aim to collect as little as possible. Depending on how you interact with us, that may include:</p>
        <ul>
          <li><strong>Contact details</strong> you provide — name, work email, company and role — when you request a demo, talk to sales, or apply for a role.</li>
          <li><strong>Message content</strong> — what you tell us in a form or email.</li>
          <li><strong>Basic usage data</strong> — pages visited and approximate region, collected to keep the site working and understand interest. We do not run advertising trackers.</li>
        </ul>
        <p>We do not knowingly collect special-category data through the website, and we ask that you not include it in free-text fields.</p>

        <h2 id="use">3. How we use it</h2>
        <p>We use personal information to respond to your enquiry, evaluate job applications, operate and secure our website, and meet legal and accounting obligations. Our lawful bases are your <strong>consent</strong>, our <strong>legitimate interests</strong> in running the business, and <strong>compliance</strong> with applicable law. We do not sell personal information.</p>

        <h2 id="customer">4. Customer data &amp; deployments</h2>
        <p>When Newron is deployed for a customer, it runs <strong>inside the customer&apos;s environment</strong> — their VPC, on-premise, or fully air-gapped. In those settings the customer is the data controller and Newron acts as a <strong>processor</strong> under their instructions. Your engineers keep the keys; compliance teams get the audit trail. We do not move customer data to third-party model APIs, and processing terms are set out in the applicable DPA.</p>

        <h2 id="sharing">5. When we share</h2>
        <p>We share personal information only with vetted service providers who help us operate (for example, hosting and email), under contracts that restrict their use of it; with professional advisers; and where required by law. Any such transfer is limited to what is necessary.</p>

        <h2 id="retention">6. How long we keep it</h2>
        <p>We retain personal information only as long as needed for the purpose it was collected, or as required by law. Enquiry and recruitment data is reviewed periodically and deleted when no longer relevant.</p>

        <h2 id="rights">7. Your rights</h2>
        <p>Subject to applicable law, you may request access to, correction of, or deletion of your personal information, and you may object to or restrict certain processing. To exercise any of these, contact us using the details below; we will respond within the timeframes the law requires.</p>

        <h2 id="security">8. How we protect it</h2>
        <p>We apply technical and organisational measures aligned to <strong>ISO 27001</strong> and our <strong>SOC 2</strong> programme — encryption in transit, access controls, logging and least-privilege practices. For details of our security posture, see the <a href={route("security.html")}>Security</a> page.</p>

        <h2 id="contact">9. Contact us</h2>
        <p>For any privacy question or request, contact our team at <a href={route("v4.html#contact")}>our contact page</a> or write to the Data Protection point of contact at NewronAI Technologies Pvt. Ltd., Bengaluru, India. We may update this policy from time to time; material changes will be reflected by the effective date above.</p>
      </Prose>

      <Band id="more" bg="var(--bg-2)" tight style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", fontSize: 14 }}>
          <a href={route("terms.html")} className="xlink">Terms of Service →</a>
          <a href={route("security.html")} className="xlink">Security →</a>
          <a href={route("responsible-ai.html")} className="xlink">Responsible AI →</a>
        </div>
      </Band>
      <Footer />
    </>);
}

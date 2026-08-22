import React from "react";
import { Nav, Footer, PageHero, Prose, Band } from "@/components/site-chrome";
import { route } from "@/lib/route";
import { IlloTerms } from "@/components/illustrations";

export const metadata = { title: "Terms of Service — Newron" };

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
        crumb="Legal / Terms"
        aside={<IlloTerms />}
        eyebrow="Terms of Service"
        title={<>The <em className="italic">agreement</em>, in plain language.</>}
        lead="These terms govern your use of Newron's website and any evaluation access we provide. Production deployments are governed by a separate master agreement — these terms don't override it." />

      <Prose aside={<LegalAside updated="1 May 2026" items={[["accept", "1. Acceptance"], ["site", "2. Use of the site"], ["eval", "3. Evaluation access"], ["ip", "4. Intellectual property"], ["customer", "5. Customer agreements"], ["disclaimer", "6. Disclaimers"], ["liability", "7. Liability"], ["law", "8. Governing law"], ["contact", "9. Contact"]]} />}>
        <p className="lede">These Terms of Service (“Terms”) are a contract between you and NewronAI Technologies Pvt. Ltd. (“Newron”). By using our website or any evaluation environment we provide, you agree to them.</p>

        <h2 id="accept">1. Acceptance</h2>
        <p>By accessing newron.ai or using any materials, demos or evaluation access we make available, you accept these Terms. If you are agreeing on behalf of an organisation, you represent that you have authority to bind it. If you do not agree, please do not use the site.</p>

        <h2 id="site">2. Use of the site</h2>
        <p>You may use our website for lawful, informational purposes. You agree not to:</p>
        <ul>
          <li>interfere with or disrupt the site, its security, or its underlying infrastructure;</li>
          <li>attempt to access areas or data you are not authorised to access;</li>
          <li>scrape, copy or republish content except as permitted by our <a href="#ip">intellectual property</a> terms; or</li>
          <li>use the site to infringe the rights of others or violate any applicable law.</li>
        </ul>

        <h2 id="eval">3. Evaluation &amp; pilot access</h2>
        <p>If we provide a sandbox, pilot or evaluation environment, it is offered <strong>“as is”</strong> for assessment purposes only, may change or be withdrawn, and must not be used in production or with live regulated data unless a separate written agreement says so. Any data you choose to load into an evaluation environment remains your responsibility.</p>

        <h2 id="ip">4. Intellectual property</h2>
        <p>The website, our trademarks, and the content we publish are owned by Newron or our licensors and are protected by law. We grant you a limited, revocable, non-exclusive licence to view and share our content for non-commercial, informational use with attribution. Our open-source projects are licensed separately under the terms in each repository (see <a href={route("open-source.html")}>Open source</a>).</p>

        <h2 id="customer">5. Customer agreements prevail</h2>
        <p>Production use of Newron&apos;s products and services is governed by a separate <strong>master services agreement, order form and Data Processing Agreement</strong>. Where those documents conflict with these Terms, <strong>they control</strong> for that engagement. Nothing on this website constitutes an offer, warranty or commitment outside such an agreement.</p>

        <h2 id="disclaimer">6. Disclaimers</h2>
        <p>The website and any evaluation access are provided “as is” and “as available”, without warranties of any kind, whether express or implied, including fitness for a particular purpose. AI systems can produce errors; outputs from any demo or evaluation must not be relied upon for real decisions without independent review.</p>

        <h2 id="liability">7. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, Newron will not be liable for any indirect, incidental, special or consequential damages, or loss of profits or data, arising from your use of the website or evaluation access. Our total liability in connection with the website is limited to the amount you paid us for that access, if any.</p>

        <h2 id="law">8. Governing law</h2>
        <p>These Terms are governed by the laws of India, and the courts of Bengaluru, Karnataka have exclusive jurisdiction over any dispute, without prejudice to any mandatory rights you have under applicable law.</p>

        <h2 id="contact">9. Contact</h2>
        <p>Questions about these Terms? Reach us via <a href={route("v4.html#contact")}>our contact page</a>. We may update these Terms from time to time; the effective date above reflects the latest version, and continued use after a change constitutes acceptance.</p>
      </Prose>

      <Band id="more" bg="var(--bg-2)" tight style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", fontSize: 14 }}>
          <a href={route("privacy.html")} className="xlink">Privacy Policy →</a>
          <a href={route("security.html")} className="xlink">Security →</a>
          <a href={route("responsible-ai.html")} className="xlink">Responsible AI →</a>
        </div>
      </Band>
      <Footer />
    </>);
}

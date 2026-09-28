import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "terms",
  group: "Legal",
  name: "Terms",
  metaDescription:
    "These Terms of Service (“Terms”) are a contract between you and NewronAI Technologies Pvt. Ltd. (“Newron”).",
  hero: {
    title: ["Clear terms.", "Shared understanding."],
    body: "The terms for using our website and evaluation access. Customer deployments remain governed by their own agreements.",
    primary: { label: "Read the terms", href: "#blocks" },
    secondary: { label: "Privacy Policy", href: "/privacy" },
  },
  blocks: [
    {
      type: "prose",
      updated: "Effective 1 May 2026",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "These Terms of Service (“Terms”) are a contract between you and NewronAI Technologies Pvt. Ltd. (“Newron”). By using our website or any evaluation environment we provide, you agree to them.",
          ],
        },
        {
          heading: "1. Acceptance",
          paragraphs: [
            "By accessing newron.ai or using any materials, demos or evaluation access we make available, you accept these Terms. If you are agreeing on behalf of an organisation, you represent that you have authority to bind it. If you do not agree, please do not use the site.",
          ],
        },
        {
          heading: "2. Use of the site",
          paragraphs: ["You may use our website for lawful, informational purposes. You agree not to:"],
          bullets: [
            "interfere with or disrupt the site, its security, or its underlying infrastructure;",
            "attempt to access areas or data you are not authorised to access;",
            "scrape, copy or republish content except as permitted by our intellectual property terms; or",
            "use the site to infringe the rights of others or violate any applicable law.",
          ],
        },
        {
          heading: "3. Evaluation & pilot access",
          paragraphs: [
            "If we provide a sandbox, pilot or evaluation environment, it is offered “as is” for assessment purposes only, may change or be withdrawn, and must not be used in production or with live regulated data unless a separate written agreement says so. Any data you choose to load into an evaluation environment remains your responsibility.",
          ],
        },
        {
          heading: "4. Intellectual property",
          paragraphs: [
            "The website, our trademarks, and the content we publish are owned by Newron or our licensors and are protected by law. We grant you a limited, revocable, non-exclusive licence to view and share our content for non-commercial, informational use with attribution. Our open-source projects are licensed separately under the terms in each repository (see Open source).",
          ],
        },
        {
          heading: "5. Customer agreements prevail",
          paragraphs: [
            "Production use of Newron’s products and services is governed by a separate master services agreement, order form and Data Processing Agreement. Where those documents conflict with these Terms, they control for that engagement. Nothing on this website constitutes an offer, warranty or commitment outside such an agreement.",
          ],
        },
        {
          heading: "6. Disclaimers",
          paragraphs: [
            "The website and any evaluation access are provided “as is” and “as available”, without warranties of any kind, whether express or implied, including fitness for a particular purpose. AI systems can produce errors; outputs from any demo or evaluation must not be relied upon for real decisions without independent review.",
          ],
        },
        {
          heading: "7. Limitation of liability",
          paragraphs: [
            "To the maximum extent permitted by law, Newron will not be liable for any indirect, incidental, special or consequential damages, or loss of profits or data, arising from your use of the website or evaluation access. Our total liability in connection with the website is limited to the amount you paid us for that access, if any.",
          ],
        },
        {
          heading: "8. Governing law",
          paragraphs: [
            "These Terms are governed by the laws of India, and the courts of Bengaluru, Karnataka have exclusive jurisdiction over any dispute, without prejudice to any mandatory rights you have under applicable law.",
          ],
        },
        {
          heading: "9. Contact",
          paragraphs: [
            "Questions about these Terms? Reach us via our contact page. We may update these Terms from time to time; the effective date above reflects the latest version, and continued use after a change constitutes acceptance.",
          ],
        },
      ],
    },
  ],
  cta: {
    status: "Questions about these terms?",
    title: ["Talk to", "Newron."],
    body: "Questions about these Terms? Reach us via our contact page.",
    primary: { label: "Let’s talk", href: BOOK },
    secondary: { label: "Contact us", href: "/#contact" },
  },
};

export default page;

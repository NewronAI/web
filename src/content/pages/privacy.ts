import { BOOK } from "../links";
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "privacy",
  group: "Legal",
  name: "Privacy",
  metaDescription:
    "This Privacy Policy describes how NewronAI Technologies Pvt. Ltd. (“Newron”, “we”, “us”) collects and processes personal information through our website and corporate operations.",
  hero: {
    title: ["Your privacy.", "By design."],
    body: "What we collect, how we use it and the choices you have. Our privacy policy, in full.",
    primary: { label: "Read the policy", href: "#blocks" },
    secondary: { label: "Terms of Service", href: "/terms" },
  },
  blocks: [
    {
      type: "prose",
      updated: "Effective 1 May 2026",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "This Privacy Policy describes how NewronAI Technologies Pvt. Ltd. (“Newron”, “we”, “us”) collects and processes personal information through our website and corporate operations. It is written to be read, not just filed.",
          ],
        },
        {
          heading: "1. Scope",
          paragraphs: [
            "This policy covers personal information we handle as a data controller — primarily visitors to our website and people who contact us about our products or careers. It does not govern data we process on behalf of customers inside their deployments; that relationship is covered by the contract and Data Processing Agreement with each customer (see Customer data).",
          ],
        },
        {
          heading: "2. What we collect",
          paragraphs: [
            "We aim to collect as little as possible. Depending on how you interact with us, that may include:",
            "We do not knowingly collect special-category data through the website, and we ask that you not include it in free-text fields.",
          ],
          bullets: [
            "Contact details you provide — name, work email, company and role — when you request a demo, talk to sales, or apply for a role.",
            "Message content — what you tell us in a form or email.",
            "Basic usage data — pages visited and approximate region, collected to keep the site working and understand interest. We do not run advertising trackers.",
          ],
        },
        {
          heading: "3. How we use it",
          paragraphs: [
            "We use personal information to respond to your enquiry, evaluate job applications, operate and secure our website, and meet legal and accounting obligations. Our lawful bases are your consent, our legitimate interests in running the business, and compliance with applicable law. We do not sell personal information.",
          ],
        },
        {
          heading: "4. Customer data & deployments",
          paragraphs: [
            "When Newron is deployed for a customer, it runs inside the customer’s environment — their VPC, on-premise, or fully air-gapped. In those settings the customer is the data controller and Newron acts as a processor under their instructions. Your engineers keep the keys; compliance teams get the audit trail. We do not move customer data to third-party model APIs, and processing terms are set out in the applicable DPA.",
          ],
        },
        {
          heading: "5. When we share",
          paragraphs: [
            "We share personal information only with vetted service providers who help us operate (for example, hosting and email), under contracts that restrict their use of it; with professional advisers; and where required by law. Any such transfer is limited to what is necessary.",
          ],
        },
        {
          heading: "6. How long we keep it",
          paragraphs: [
            "We retain personal information only as long as needed for the purpose it was collected, or as required by law. Enquiry and recruitment data is reviewed periodically and deleted when no longer relevant.",
          ],
        },
        {
          heading: "7. Your rights",
          paragraphs: [
            "Subject to applicable law, you may request access to, correction of, or deletion of your personal information, and you may object to or restrict certain processing. To exercise any of these, contact us using the details below; we will respond within the timeframes the law requires.",
          ],
        },
        {
          heading: "8. How we protect it",
          paragraphs: [
            "We apply technical and organisational measures aligned to ISO 27001 and our SOC 2 programme — encryption in transit, access controls, logging and least-privilege practices. For details of our security posture, see the Security page.",
          ],
        },
        {
          heading: "9. Contact us",
          paragraphs: [
            "For any privacy question or request, contact our team at our contact page or write to the Data Protection point of contact at NewronAI Technologies Pvt. Ltd., Bengaluru, India. We may update this policy from time to time; material changes will be reflected by the effective date above.",
          ],
        },
      ],
    },
  ],
  cta: {
    status: "Questions about this policy?",
    title: ["Talk to", "Newron."],
    body: "For any privacy question or request, reach our team through our contact page or write to our Data Protection point of contact in Bengaluru.",
    primary: { label: "Let’s talk", href: BOOK },
    secondary: { label: "Contact us", href: "#contact" },
  },
};

export default page;

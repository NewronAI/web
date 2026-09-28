import { ContentPageView } from "@/components/content-page";
import { metaFor } from "@/content/load";
import page from "@/content/pages/security.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      related={[
        { href: "/banks", kicker: "Industries", t: "Newron for Banks" },
        { href: "/lending-intelligence", kicker: "Solutions", t: "Lending intelligence" },
        { href: "/custom-ai-engineering", kicker: "Solutions", t: "Custom AI engineering" },
      ]}
    />
  );
}

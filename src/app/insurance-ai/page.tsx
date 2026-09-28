import { ContentPageView } from "@/components/content-page";
import { InsuranceVisual } from "@/components/page-visuals";
import { metaFor } from "@/content/load";
import page from "@/content/pages/insurance-ai.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      visual={<InsuranceVisual />}
      related={[
        { href: "/industry-insurance", kicker: "Industries", t: "Newron for Insurance" },
        { href: "/security", kicker: "Trust", t: "Security & compliance" },
        { href: "/responsible-ai", kicker: "Trust", t: "Responsible AI" },
      ]}
    />
  );
}

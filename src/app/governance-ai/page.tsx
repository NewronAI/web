import { ContentPageView } from "@/components/content-page";
import { GovernanceVisual } from "@/components/page-visuals";
import { metaFor } from "@/content/load";
import page from "@/content/pages/governance-ai.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      visual={<GovernanceVisual />}
      related={[
        { href: "/public-sector", kicker: "Industries", t: "Newron for the Public Sector" },
        { href: "/responsible-ai", kicker: "Trust", t: "Responsible AI" },
        { href: "/security", kicker: "Trust", t: "Security & compliance" },
      ]}
    />
  );
}

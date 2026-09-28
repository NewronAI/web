import { ContentPageView } from "@/components/content-page";
import { LendingVisual } from "@/components/page-visuals";
import { metaFor } from "@/content/load";
import page from "@/content/pages/lending-intelligence.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      visual={<LendingVisual />}
      related={[
        { href: "/banks", kicker: "Industries", t: "Newron for Banks" },
        { href: "/nbfcs", kicker: "Industries", t: "Newron for NBFCs" },
        { href: "/custom-ai-engineering", kicker: "Solutions", t: "Custom AI engineering" },
      ]}
    />
  );
}

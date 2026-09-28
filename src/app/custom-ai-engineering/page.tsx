import { ContentPageView } from "@/components/content-page";
import { EngagementVisual } from "@/components/page-visuals";
import { metaFor } from "@/content/load";
import page from "@/content/pages/custom-ai-engineering.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      visual={<EngagementVisual />}
    />
  );
}

import { ContentPageView } from "@/components/content-page";
import { TeamStrip } from "@/components/page-visuals";
import { metaFor } from "@/content/load";
import page from "@/content/pages/about.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      visual={<TeamStrip />}
    />
  );
}

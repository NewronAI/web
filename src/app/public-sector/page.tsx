import { ContentPageView } from "@/components/content-page";
import { PhotoBanner } from "@/components/page-visuals";
import governancePhoto from "@/assets/photos/governance.jpg";
import { metaFor } from "@/content/load";
import page from "@/content/pages/public-sector.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      visual={<PhotoBanner src={governancePhoto} position="60% 45%" />}
    />
  );
}

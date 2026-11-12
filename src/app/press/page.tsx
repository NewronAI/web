import { ContentPageView } from "@/components/content-page";
import { PhotoBanner } from "@/components/page-visuals";
import heroBackdrop from "@/assets/photos/hero-backdrop.jpg";
import { metaFor } from "@/content/load";
import page from "@/content/pages/press.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      visual={<PhotoBanner src={heroBackdrop} position="50% 50%" />}
    />
  );
}

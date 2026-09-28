import { ContentPageView } from "@/components/content-page";
import { PhotoBanner } from "@/components/page-visuals";
import lendingPhoto from "@/assets/photos/lending.jpg";
import { metaFor } from "@/content/load";
import page from "@/content/pages/careers.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      visual={<PhotoBanner src={lendingPhoto} position="50% 60%" />}
    />
  );
}

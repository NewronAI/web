import { ContentPageView } from "@/components/content-page";
import { PhotoBanner } from "@/components/page-visuals";
import insurancePhoto from "@/assets/photos/insurance.jpg";
import { metaFor } from "@/content/load";
import page from "@/content/pages/industry-insurance.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      visual={<PhotoBanner src={insurancePhoto} position="50% 40%" />}
    />
  );
}

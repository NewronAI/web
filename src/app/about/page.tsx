import { ContentPageView } from "@/components/content-page";
import { PhotoBanner } from "@/components/page-visuals";
import ctaPhoto from "@/assets/photos/og-image.jpg";
import { metaFor } from "@/content/load";
import page from "@/content/pages/about.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      visual={<PhotoBanner src={ctaPhoto} position="75% 50%" />}
      related={[
        { href: "/careers", kicker: "Company", t: "Careers" },
        { href: "/press", kicker: "Company", t: "Press" },
        { href: "/custom-ai-engineering", kicker: "Solutions", t: "Custom AI engineering" },
      ]}
    />
  );
}

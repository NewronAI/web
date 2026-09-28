import { ContentPageView } from "@/components/content-page";
import { metaFor } from "@/content/load";
import page from "@/content/pages/open-source.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      related={[
        { href: "/security", kicker: "Trust", t: "Security & compliance" },
        { href: "/careers", kicker: "Company", t: "Careers" },
        { href: "/about", kicker: "Company", t: "About Newron" },
      ]}
    />
  );
}

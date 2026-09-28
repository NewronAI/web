import { ContentPageView } from "@/components/content-page";
import { metaFor } from "@/content/load";
import page from "@/content/pages/privacy.json";
import type { ContentPage } from "@/content/types";

const content = page as ContentPage;

export const metadata = metaFor(content);

export default function Page() {
  return (
    <ContentPageView
      page={content}
      related={[
        { href: "/terms", kicker: "Legal", t: "Terms of Service" },
        { href: "/security", kicker: "Trust", t: "Security & compliance" },
        { href: "/responsible-ai", kicker: "Trust", t: "Responsible AI" },
      ]}
    />
  );
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/links";
import { pages } from "@/content/pages";

// Home plus every inner page, so new pages are listed as soon as they're added.
export default function sitemap(): MetadataRoute.Sitemap {
  const legal = new Set(["privacy", "terms"]);
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...Object.keys(pages).map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: legal.has(slug) ? 0.3 : 0.7,
    })),
  ];
}

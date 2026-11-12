import type { Metadata } from "next";
import type { ContentPage } from "@/content/types";

/** Page metadata from a content file: the live site's exact <title>, and the hero line as the description. */
export function metaFor(page: ContentPage): Metadata {
  const description = page.hero.line;
  return {
    title: { absolute: page.title },
    description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: page.title, description, url: `/${page.slug}` },
  };
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { InnerBlocks } from "@/components/inner/InnerBlocks";
import { InnerCta } from "@/components/inner/InnerCta";
import { InnerHero } from "@/components/inner/InnerHero";
import { pages } from "@/content/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return {
    title: `${page.name} — Newron`,
    description: page.metaDescription,
  };
}

export default async function InnerPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <main className="overflow-x-clip">
      {/* Inner pages have their own design; the home sections live in src/app/page.tsx. */}
      <InnerHero hero={page.hero} group={page.group} name={page.name} />
      <InnerBlocks blocks={page.blocks} />
      <InnerCta cta={page.cta} />
      <Footer />
    </main>
  );
}

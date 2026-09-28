import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/Blocks";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
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
      <Hero {...page.hero} crumbs={[page.group, page.name]} />
      <Blocks blocks={page.blocks} />
      <Cta {...page.cta} />
      <Footer />
    </main>
  );
}

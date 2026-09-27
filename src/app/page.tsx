import { Nav } from "@/components/nav";
import {
  Builders,
  CatalogSection,
  CTA,
  Footer,
  Governance,
  Hero,
  Integrations,
  Lifecycle,
  Outcomes,
  Proof,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Proof />
        <CatalogSection />
        <Lifecycle />
        <Integrations />
        <Governance />
        <Outcomes />
        <Builders />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

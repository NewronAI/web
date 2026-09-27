import { Announcement, Nav } from "@/components/nav";
import {
  Artha,
  CTA,
  Deployment,
  Footer,
  Governance,
  Hero,
  Insurance,
  Lending,
  Proof,
  Services,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-xl bg-fg px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Announcement />
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Proof />
        <Lending />
        <Artha />
        <Insurance />
        <Governance />
        <Services />
        <Deployment />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

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
      <Announcement />
      <Nav />
      <main className="flex-1">
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

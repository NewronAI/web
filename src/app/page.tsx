import { Nav } from "@/components/nav";
import {
  Artha,
  CTA,
  Deployment,
  Footer,
  Governance,
  Hero,
  Insurance,
  Lending,
  Numbers,
  Proof,
  Services,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Proof />
        <Numbers />
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

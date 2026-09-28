import { Artha, CTA, Deployment, Governance, Hero, Insurance, Lending, Proof, Services } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Lending />
      <Artha />
      <Insurance />
      <Governance />
      <Services />
      <Deployment />
      <CTA />
    </>
  );
}

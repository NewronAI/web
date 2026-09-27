import { Nav } from "@/components/nav";
import {
  CTA,
  Customers,
  Deployment,
  Footer,
  Hero,
  Products,
  Recognition,
  Stats,
  Testimonial,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Customers />
        <Stats />
        <Products />
        <Deployment />
        <Testimonial />
        <Recognition />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

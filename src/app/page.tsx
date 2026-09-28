import { Capabilities } from "@/components/Capabilities";
import { Cta } from "@/components/Cta";
import { Execution } from "@/components/Execution";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { cta, hero } from "@/content/site";
import { Manifesto } from "@/components/Manifesto";
import { Metrics } from "@/components/Metrics";
import { Plans } from "@/components/Plans";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero {...hero} />
      <Manifesto />
      <Capabilities />
      <Execution />
      <Process />
      <Work />
      <Metrics />
      <Plans />
      <Cta {...cta} />
      <Footer />
    </main>
  );
}

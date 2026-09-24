"use client";
import { SiteNav, SiteFooter } from "./site-navigation";
import CustomerCarousel from "./customer-carousel";
import ScrollScene from "./motion/scroll-scene";
import ArthaHeroScene from "./scenes/artha-hero-scene";
import DocumentUnderstandingScene from "./scenes/document-understanding-scene";
import IntelligenceSystemScene from "./scenes/intelligence-system-scene";
import LendingScene from "./scenes/lending-scene";
import ClaimsScene from "./scenes/claims-scene";
import CitizenServiceScene from "./scenes/citizen-service-scene";
import EngineeringScene from "./scenes/engineering-scene";
import EvidenceScene from "./scenes/evidence-scene";
import DeploymentScene from "./scenes/deployment-scene";
import ClosingScene from "./scenes/closing-scene";

/* Eleven chapters, told in order. Each scene owns its own scroll distance and
   its own illustration; the strip and the closing sections stay in normal flow
   so the page is not one pinned stage after another. */
export default function Home() {
  return <div className="immersive artha-home">
    <SiteNav />
    <main id="main">
      <ArthaHeroScene />
      <ScrollScene as="div" className="scene-strip" travel="auto" mode="cross" span={0.5} cues={{ enter: [0, 0.7] }}>
        {() => <CustomerCarousel />}
      </ScrollScene>
      <DocumentUnderstandingScene />
      <IntelligenceSystemScene />
      <LendingScene />
      <div id="solutions">
        <ClaimsScene />
        <CitizenServiceScene />
      </div>
      <EngineeringScene />
      <EvidenceScene />
      <DeploymentScene />
      <ClosingScene />
    </main>
    <SiteFooter />
  </div>;
}

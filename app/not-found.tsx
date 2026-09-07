import { SiteNav, SiteFooter } from "@/components/site-navigation";

export default function NotFound() {
  return <div className="immersive inner-site">
    <SiteNav />
    <main id="main" className="n-final-cta inner-cta">
      <div className="n-eyebrow">404 / UNCHARTED TERRITORY</div>
      <h1 style={{ fontSize: "clamp(42px, 7vw, 90px)", fontWeight: 400, letterSpacing: "-.05em", lineHeight: 1.1 }}>A little off course.<br /><em>Let’s reconnect.</em></h1>
      <p>The page you’re looking for isn’t here. Explore what’s possible with Newron.</p>
      <div className="inner-actions"><a className="n-button" href="/">Back to Newron ↗</a><a className="n-text-link" href="/#solutions">Explore our solutions ↗</a></div>
      <div className="n-cta-orbit" aria-hidden="true" />
    </main>
    <SiteFooter />
  </div>;
}

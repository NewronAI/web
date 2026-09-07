import { LendingPreview, ClaimsPreview, CitizenPreview, DeploymentPreview } from "./product-previews";
import SpatialScene, { type SceneKind } from "./spatial-scene";

/* Each page states which hero art it wants. The four "product" values frame a
   real product preview; the rest are bespoke pieces; a SceneKind falls through
   to the generic CSS scene. */
export type HeroArt =
  | SceneKind
  | "lending" | "claims" | "citizen" | "deployment"
  | "privacy" | "terms"
  | "careers" | "open-source" | "engineering"
  | "press" | "public-sector" | "responsible";

const previews = {
  lending: (tool?: string) => <LendingPreview tool={tool} />,
  claims: () => <ClaimsPreview />,
  citizen: () => <CitizenPreview />,
  deployment: () => <DeploymentPreview />,
};

export default function TailoredHero({ art, label, caption, tool }: { art: HeroArt; label: string; caption: string; tool?: string }) {
  if (art === "lending" || art === "claims" || art === "citizen" || art === "deployment")
    return <div className={`tailored-hero tailored-${art}`}><div className="tailored-caption">{caption}</div><div className="tailored-product">{previews[art](tool)}</div><span className="tailored-footnote">{art === "deployment" ? "DEPLOYMENT ARCHITECTURE" : "A LOOK INSIDE THE APPLICATION"}</span></div>;

  if (art === "privacy" || art === "terms")
    return <div className="legal-hero-art"><span>{art === "privacy" ? "01 / PRIVACY" : "02 / TERMS"}</span><div className="legal-paper"><span>NEWRON</span><h3>{art === "privacy" ? <>Your data.<br />Your rights.</> : <>Clear terms.<br />Shared trust.</>}</h3><div className="legal-paper-lines"><i /><i /><i /></div><small>THE DETAILS MATTER.</small></div></div>;

  if (art === "careers" || art === "open-source" || art === "engineering") {
    const open = art === "open-source", careers = art === "careers";
    return <div className="tailored-terminal"><div className="terminal-bar"><span>● ● ●</span>{open ? "NEWRON / OPEN SOURCE" : careers ? "YOUR NEXT COMMIT" : "NEWRON / ENGINEERING"}</div><code><span>{open ? "$ explore NewronAI" : careers ? "$ build something that matters" : "$ design --for your-world"}</span>{(open ? ["cortex        JavaScript / MIT", "n00bs         TypeScript / MIT", "newron-sdk    Python / Apache-2.0"] : careers ? ["01  Own the data pipeline", "02  Build the evaluation", "03  Ship into production"] : ["01  YOUR DATA → domain understanding", "02  YOUR TASKS → custom models", "03  YOUR STACK → production systems"]).map((line, i) => <b key={i}>{line}</b>)}<em>{open ? "Issues and pull requests welcome." : careers ? "Bengaluru. Real customers. Real ownership." : "REST + webhooks / VPC · on-prem · air-gapped"}</em></code><div className="terminal-schematic" aria-hidden="true"><span>DATA</span><i>→</i><span>{open ? "CODE" : "MODEL"}</span><i>→</i><span>{careers ? "IMPACT" : "BUILD"}</span></div></div>;
  }

  if (art === "press")
    return <div className="press-hero-art"><span className="n-eyebrow">DISPATCHES / NEWRON</span><strong>Ideas.<br /><em>In production.</em></strong><div><span>01</span>Company milestones</div><div><span>02</span>Stories &amp; interviews</div><div><span>03</span>Brand &amp; media resources</div></div>;

  if (art === "public-sector")
    return <div className="public-service-art"><span className="n-eyebrow">CITIZEN → SERVICE → OFFICER</span><div className="public-districts"><span>Mysuru</span><span>Bengaluru</span><span>Karnataka</span><i aria-hidden="true" /></div><div className="public-service-flow"><span>Voice &amp; documents</span><span>Classify &amp; route</span><span>Officer review</span></div><small>KANNADA / INSIDE GOVERNMENT INFRASTRUCTURE</small></div>;

  if (art === "responsible")
    return <div className="responsible-hero-art"><div><span>AI</span><i>→</i><span>EVIDENCE</span><i>→</i><strong>YOU</strong></div><h3>The final decision<br />is a human one.</h3><p>Sourced outputs. Reviewable recommendations. Explicit limits.</p></div>;

  return <SpatialScene kind={art} label={label} caption={caption} />;
}

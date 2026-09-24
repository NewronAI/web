"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { SiteNav, SiteFooter } from "@/components/site-navigation";
import { BOOKING_URL } from "@/lib/route";
import styles from "./artha.module.css";

const capabilities = [
  { title: "Classify", subtitle: "Find order in every batch.", copy: "A merged PDF. A phone photo. A stack of scanned pages. ArthaLM separates the documents and identifies what each one is.", input: "MERGED DOCUMENT BATCH", output: "DOCUMENT TYPES IDENTIFIED" },
  { title: "Extract", subtitle: "Read the fields. Keep the context.", copy: "Turn balances, identifiers and periods into structured fields, with the source context your team needs to review them.", input: "BANK STATEMENT / PAGE 01", output: "STRUCTURED FIELDS" },
  { title: "Connect", subtitle: "Every document. The right owner.", copy: "Map documents to the applicant, co-applicant, business and collateral. Bring the pieces together into one connected case file.", input: "CLASSIFIED DOCUMENTS", output: "PARTIES RESOLVED" },
];
const deployments = [
  { name: "Private cloud", label: "YOUR VPC", copy: "Bring ArthaLM into your private cloud. Connect document intelligence to your applications inside an infrastructure boundary your team controls.", nodes: ["Your application", "ArthaLM", "Your storage"], note: "REST APIs and webhooks · Your infrastructure" },
  { name: "On-premise", label: "YOUR DATA CENTRE", copy: "Run the model alongside your existing systems. Keep document processing close to the data, with deployment scoped to your environment.", nodes: ["Internal systems", "ArthaLM", "Local storage"], note: "Local deployment · Your operations team" },
  { name: "Air-gapped", label: "ISOLATED ENVIRONMENT", copy: "Deploy within an isolated environment for workloads that require it. Plan model delivery, updates and evaluation around your operational controls.", nodes: ["Local intake", "ArthaLM", "Local review"], note: "Isolated processing · No external paths shown" },
];
const faqs = [
  ["What is ArthaLM?", "ArthaLM is Newron’s family of vision-language models for document intelligence. It classifies documents, extracts relevant fields and maps documents to the people, businesses and assets they belong to."],
  ["Can we self-host it?", "Yes. ArthaLM is licensable and self-hostable. VPC, on-premise and air-gapped deployments are scoped to your infrastructure and workload."],
  ["Does it handle scanned and merged documents?", "ArthaLM is designed for mixed document batches, including merged PDFs, scans and phone photos. An evaluation on your own document set establishes how it performs on your formats and image quality."],
  ["How should we evaluate the model?", "Start with a representative sample of historical documents and agreed evaluation criteria. Compare document classification, field extraction, party mapping, latency and inference cost on the same workload."],
  ["How does it fit into our existing workflow?", "Newron’s applications connect document intelligence to lending, insurance and citizen-service workflows. REST APIs and webhooks support integration with your existing systems; the evaluation defines the exact integration scope."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function useMotionPreference() {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const preference = document.documentElement.dataset.motion;
      setReduced(preference === "reduced" || (preference !== "full" && media.matches));
    };
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
    media.addEventListener("change", update); update();
    return () => { observer.disconnect(); media.removeEventListener("change", update); };
  }, []);
  return reduced;
}

function DocumentAction({ step, running }: { step: number; running: boolean }) {
  return <svg viewBox="0 0 680 310" className={styles.processSvg} data-running={running} role="img" aria-label={[
    "Pages separate from one merged batch into a bank statement, tax return and identity document.",
    "A scan reads the statement balance and transfers it into a structured balance field.",
    "PAN, GST and property documents travel along connections to their respective owners.",
  ][step]}>
    <defs><pattern id="artha-demo-grid" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".6" fill="#baa5e6" opacity=".2" /></pattern></defs>
    <rect width="680" height="310" fill="url(#artha-demo-grid)" />
    {step === 0 && <g>
      <path className={styles.guide} d="M140 155H535" />
      {[0, 1, 2].map(i => <g key={i} className={`${styles.sheet} ${styles.splitSheet}`} style={{ "--shift": `${(i - 1) * 195}px`, "--turn": `${(i - 1) * 8}deg` } as CSSProperties}>
        <rect x="260" y="48" width="160" height="200" rx="8" /><path d="M282 88h60M282 118h110M282 134h90M282 150h104M282 166h76" />
        <text x="282" y="210">{["STATEMENT", "TAX RETURN", "IDENTITY"][i]}</text><text className={styles.mutedSvg} x="282" y="229">{["06 PAGES", "04 PAGES", "01 PAGE"][i]}</text>
      </g>)}
      <path className={styles.classifyScan} d="M253 68h174" />
    </g>}
    {step === 1 && <g>
      <g className={styles.sheet}><rect x="65" y="40" width="215" height="225" rx="8" /><text x="88" y="76">BANK STATEMENT</text><path d="M88 94h165M88 111h125M88 210h153M88 228h118" /><text x="88" y="145">AVERAGE BALANCE</text><text x="88" y="175">₹ 8,41,905</text></g>
      <rect className={styles.fieldHighlight} x="80" y="126" width="184" height="60" rx="4" />
      <path className={styles.transferWire} d="M278 156C350 156 350 156 414 156" />
      <g className={styles.sheet}><rect x="410" y="90" width="220" height="125" rx="8" /><text x="432" y="122">average_balance</text><path d="M432 138h173" /></g>
      <g className={styles.transferValue}><rect x="84" y="153" width="174" height="36" rx="4" /><text x="96" y="177">₹ 8,41,905</text></g>
      <path className={styles.extractScan} d="M77 92h191" />
    </g>}
    {step === 2 && <g>{[0, 1, 2].map(i => <g key={i} style={{ "--delay": `${i * .45}s` } as CSSProperties}>
      <path className={styles.mapWire} d={`M190 ${65 + i * 90}H455`} />
      <g className={`${styles.sheet} ${styles.routingDoc}`}><rect x="80" y={43 + i * 90} width="110" height="44" rx="5" /><text x="96" y={70 + i * 90}>{["PAN CARD", "GST RETURN", "SALE DEED"][i]}</text></g>
      <g className={styles.owner}><rect x="455" y={39 + i * 90} width="170" height="52" rx="26" /><circle cx="480" cy={65 + i * 90} r="7" /><text x="498" y={70 + i * 90}>{["APPLICANT", "BUSINESS", "PROPERTY"][i]}</text></g>
    </g>)}</g>}
  </svg>;
}

function CapabilityDemo({ reduced }: { reduced: boolean }) {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [focused, setFocused] = useState(false);
  const [revision, setRevision] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const running = visible && !hidden && !paused && !reduced;
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .3 });
    if (ref.current) observer.observe(ref.current);
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility); onVisibility();
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);
  useEffect(() => {
    if (!running || focused) return;
    const timer = setTimeout(() => setStep(current => (current + 1) % 3), 6500);
    return () => clearTimeout(timer);
  }, [running, focused, step, revision]);
  const select = (next: number) => { setStep(next); setRevision(current => current + 1); };
  return <div ref={ref} className={styles.demo}>
    <div className={styles.demoToolbar}><span><i /> ARTHALM / DOCUMENT WORKBENCH</span><button onClick={() => setPaused(!paused)} disabled={reduced} aria-pressed={paused}>{reduced ? "Motion reduced" : paused ? "Play walkthrough ▷" : "Pause walkthrough Ⅱ"}</button></div>
    <div className={styles.demoTabs} role="tablist" aria-label="Document capabilities" onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      {capabilities.map((item, index) => <button key={item.title} role="tab" id={`artha-capability-${index}`} aria-controls="artha-capability-panel" aria-selected={step === index} tabIndex={step === index ? 0 : -1} onClick={() => select(index)} onKeyDown={event => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % 3;
        else if (event.key === "ArrowLeft") next = (index + 2) % 3;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = 2;
        else return;
        event.preventDefault(); select(next); document.getElementById(`artha-capability-${next}`)?.focus();
      }}><small>0{index + 1}</small>{item.title}<span aria-hidden="true">↗</span></button>)}
    </div>
    <div id="artha-capability-panel" role="tabpanel" aria-labelledby={`artha-capability-${step}`}>
      <div className={styles.demoLabels}><span>{capabilities[step].input}</span><span>{capabilities[step].output}</span></div>
      <DocumentAction key={`${step}-${revision}`} step={step} running={running} />
      <div className={styles.demoCaption}><div><h3>{capabilities[step].subtitle}</h3><p>{capabilities[step].copy}</p></div><small>ILLUSTRATIVE WORKFLOW<br />SAMPLE DATA</small></div>
    </div>
  </div>;
}

export default function ArthaPage() {
  const reduced = useMotionPreference();
  const heroRef = useRef<HTMLElement>(null);
  const [deployment, setDeployment] = useState(0);
  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const progress = reduced ? 0 : Math.min(1, Math.max(0, -rect.top / rect.height));
      element.style.setProperty("--hero-progress", String(progress));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true }); update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); };
  }, [reduced]);
  return <div className={`immersive ${styles.page}`} data-reduced={reduced}>
    <SiteNav />
    <main id="main">
      <section ref={heroRef} className={styles.hero} aria-labelledby="artha-title">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroTopline}><span>NEWRON / MODEL INTELLIGENCE</span><span>BUILT FOR THE REAL WORLD</span></div>
        <div className={styles.heroCopy}><span className={styles.eyebrow}><i /> INTRODUCING ARTHALM</span><h1 id="artha-title">Intelligence.<br /><em>With meaning.</em></h1><p>The model of choice for BFSI &amp; regulated industries.</p><div className={styles.actions}><a className={styles.primary} href={BOOKING_URL}>Evaluate ArthaLM <Arrow /></a><a className={styles.textLink} href="#capabilities">Meet the model <span aria-hidden="true">↓</span></a></div></div>
        <div className={styles.heroArt} aria-hidden="true">
          <div className={styles.orbitGrid} />
          <div className={styles.orbitRing} /><div className={styles.orbitRingTwo} />
          <div className={styles.modelCore}><span>अर्थ</span><small>MEANING · PURPOSE</small></div>
          <span className={`${styles.heroDocument} ${styles.docOne}`}><i /><i /><i /><small>STATEMENT.PDF</small></span>
          <span className={`${styles.heroDocument} ${styles.docTwo}`}><i /><i /><i /><small>IDENTITY.JPG</small></span>
          <span className={`${styles.heroDocument} ${styles.docThree}`}><i /><i /><i /><small>ANNUAL_RETURN.PDF</small></span>
          <span className={`${styles.orbitLabel} ${styles.labelOne}`}>01 / CLASSIFY</span><span className={`${styles.orbitLabel} ${styles.labelTwo}`}>02 / EXTRACT</span><span className={`${styles.orbitLabel} ${styles.labelThree}`}>03 / CONNECT</span>
        </div>
        <div className={styles.heroWordmark} aria-hidden="true">Artha<span>LM</span><sup>↗</sup></div>
        <div className={styles.heroFoot}><span>DOCUMENTS IN. UNDERSTANDING OUT.</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <nav className={styles.sectionNav} aria-label="Explore ArthaLM"><a href="#overview">Overview</a><a href="#capabilities">Capabilities</a><a href="#evaluation">Evaluation</a><a href="#deployment">Deployment</a><a href="#questions">Questions</a><a href={BOOKING_URL}>Let’s talk <Arrow /></a></nav>

      <section id="overview" className={`${styles.section} ${styles.intro}`}>
        <div><span className={styles.eyebrow}>01 / A MODEL WITH CONTEXT</span><h2>Documents are complex.<br /><em>Understanding should travel.</em></h2></div>
        <div><p className={styles.statement}>From fragmented data to actionable frontier intelligence which you can self host.</p><p>Real work arrives in scans, statements, forms and photographs. ArthaLM brings them into a shared understanding, ready for the systems and people that need to act.</p><div className={styles.tags}><span>Vision + language</span><span>Domain-focused</span><span>Self-hostable</span></div></div>
      </section>

      <section id="capabilities" className={styles.darkSection}>
        <div className={styles.sectionHeading}><span className={styles.eyebrow}>02 / SEE UNDERSTANDING HAPPEN</span><h2>One batch.<br /><em>A connected picture.</em></h2><p>Follow the document from the moment it arrives to the context your team can use.</p></div>
        <CapabilityDemo reduced={reduced} />
        <div className={styles.inputStrip}><span>BUILT FOR REAL INPUTS</span><span>Merged PDFs</span><span>Scanned pages</span><span>Phone photos</span><span>Mixed batches</span></div>
      </section>

      <section id="evaluation" className={styles.section}>
        <div className={styles.sectionHeading}><span className={styles.eyebrow}>03 / MEASURE WHAT MATTERS</span><h2>Frontier ambition.<br /><em>Grounded in your work.</em></h2><p>Evaluate the model on the documents, deployment and task that matter to you.</p></div>
        <div className={styles.metrics}>{[["Up to 3×", "Faster processing", "Spend less time waiting for document understanding."], ["≈ 1/8", "The inference cost", "Make repeated, high-volume document work practical."], ["Your stack", "Your model deployment", "Licensable and self-hostable in your environment."]].map(([value, title, copy]) => <article key={title}><span className={styles.metricValue}>{value}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <p className={styles.qualification}>Performance figures are from Newron’s own document evaluations against frontier models on the same document set. Results vary by task, workload and deployment. Confirm performance on your own data.</p>
        <div className={styles.evaluationLink}><span>YOUR DOCUMENTS ARE THE BENCHMARK.</span><a href={BOOKING_URL}>Scope an evaluation <Arrow /></a></div>
      </section>

      <section className={`${styles.section} ${styles.applications}`}>
        <div className={styles.sectionHeading}><span className={styles.eyebrow}>04 / ONE FOUNDATION. REAL APPLICATIONS.</span><h2>Understanding is<br /><em>just the beginning.</em></h2></div>
        <div className={styles.applicationGrid}>{[
          ["01", "Lending", "From statements and identity documents to a connected borrower file and sourced credit memo.", "/lending-intelligence", "DOCUMENTS → CREDIT WORKSPACE"],
          ["02", "Insurance", "From policy and claim documents to connected evidence, eligibility checks and review-ready packets.", "/insurance-ai", "EVIDENCE → CLAIM REVIEW"],
          ["03", "Public sector", "From citizen documents to structured requests and the context an officer needs to respond.", "/governance-ai", "REQUEST → OFFICER WORKSPACE"],
        ].map(([number, title, copy, href, flow]) => <a key={title} href={href} className={styles.applicationCard}><span className={styles.cardIndex}>{number}<Arrow /></span><div className={styles.miniDiagram} aria-hidden="true"><i /><i /><span>अर्थ</span><b>→</b><i /></div><h3>{title}</h3><p>{copy}</p><small>{flow}</small></a>)}</div>
      </section>

      <section id="deployment" className={`${styles.section} ${styles.deployment}`}>
        <div><span className={styles.eyebrow}>05 / OWN THE ENVIRONMENT</span><h2>Intelligence moves in.<br /><em>Your data stays put.</em></h2><p>{deployments[deployment].copy}</p><div className={styles.deploymentOptions} aria-label="Choose deployment model">{deployments.map((item, index) => <button key={item.name} aria-pressed={deployment === index} onClick={() => setDeployment(index)}>{item.name}</button>)}</div><a className={styles.textLink} href="/security">Explore security <Arrow /></a></div>
        <div className={styles.deploymentDiagram}><div className={styles.boundaryLabel}><i />{deployments[deployment].label}<span>CONTROLLED BOUNDARY</span></div><div className={styles.deploymentNodes}>{deployments[deployment].nodes.map((node, i) => <div key={node} className={i === 1 ? styles.centralNode : undefined}><span aria-hidden="true">{["▤", "अर्थ", "▥"][i]}</span><strong>{node}</strong></div>)}</div><div className={styles.auditTrail}><span>MODEL</span><i /><span>APPLICATION</span><i /><span>AUDIT TRAIL</span></div><p>{deployments[deployment].note}</p></div>
      </section>

      <section id="questions" className={`${styles.section} ${styles.faq}`}><div><span className={styles.eyebrow}>06 / A LITTLE MORE CONTEXT</span><h2>Good questions.<br /><em>Clear answers.</em></h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className={styles.closing}><span className={styles.eyebrow}>YOUR DOCUMENTS. YOUR NEXT CHAPTER.</span><h2>Find the meaning<br />in <em>your data.</em></h2><p>Start with a representative slice of your documents.<br />See what ArthaLM can make of them.</p><a className={styles.primary} href={BOOKING_URL}>Evaluate ArthaLM <Arrow /></a><span className={styles.closingMark} aria-hidden="true">अर्थ</span></section>
    </main><SiteFooter />
  </div>;
}

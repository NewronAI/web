/* global React */
const { PageHero, Band, Head, FeatureGrid, StatBand, Timeline, FAQ, CTABand, Quote, renderPage } = window;

const steps = [
  { tag: "Eligibility", title: "Eligibility check, before submission", desc: "Policy retrieval and document understanding flag missing artefacts and ineligible claims at intake — before they enter the queue.", points: ["Sub-limit awareness", "Document completeness", "Pre-auth guidance"] },
  { tag: "Filing", title: "Automated claim filing", desc: "Forms, supporting documents and metadata assembled into TPA-ready packets in under 90 seconds.", points: ["TPA-ready packets", "Auto-attached evidence", "Status tracking"] },
  { tag: "Risk", title: "Denial risk & remediation", desc: "Predicts likely denial reasons against historical adjudication data and suggests remediation pre-emptively.", points: ["Denial-reason model", "Pre-emptive fixes", "SLA forecasting"] },
];

function Page() {
  return (<>
    <PageHero
      crumb="Solutions / Insurance AI"
      aside={<IlloInsurance />}
      eyebrow="Insurance AI"
      title={<>Settle claims <em className="italic">before</em> they're filed.</>}
      lead="Newron's claims models inspect documents, parse policy language and predict denial risk the moment a claim is initiated — so adjusters spend their time on edge cases, not paperwork."
      ctas={[{ label: "Book a demo", href: "v4.html#contact", primary: true }, { label: "Talk to sales", href: "v4.html#contact" }]} />

    <Band id="pipeline">
      <Head tag="01" eyebrow="The claims pipeline" title={<>Three checkpoints, fully automated.</>} kicker="From first notice of loss to a TPA-ready packet, Newron handles the mechanical work and escalates only what needs a human." />
      <FeatureGrid items={steps} cols={3} />
    </Band>

    <Band id="outcomes" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
      <Head tag="02" eyebrow="Impact" title={<>Fewer denials, <em className="italic">faster</em> settlements.</>} kicker="Measured across health and motor lines at insurers and TPAs running Newron in production." />
      <StatBand lead={<>What claims teams see in production</>} stats={[{ v: "90", suffix: "s", k: "Avg time to file" }, { v: "0.18", suffix: "", k: "Median denial risk" }, { v: "4.2", suffix: "d", k: "Settlement SLA" }]} />
    </Band>

    <Band id="lines">
      <Head tag="03" eyebrow="Lines & documents" title={<>Built for messy, <em className="italic">real-world</em> claims.</>} kicker="Newron reads discharge summaries, prescriptions, invoices, FIRs and policy schedules — printed or handwritten." />
      <div style={{ marginTop: 48, maxWidth: 760 }}>
        <Timeline items={[
          ["INTAKE", "Document understanding", "Discharge summaries, bills, prescriptions and policy schedules parsed and cross-checked."],
          ["ELIGIBILITY", "Policy reasoning", "Sub-limits, waiting periods and exclusions evaluated against the specific policy schedule."],
          ["FILING", "Packet assembly", "A complete, TPA-ready packet with every required artefact attached and indexed."],
          ["ADJUDICATION", "Denial prediction", "Likely denial reasons surfaced with the historical evidence behind them."],
          ["SETTLEMENT", "Remediation loop", "Gaps closed before submission, shortening the back-and-forth with the TPA."]]} />
      </div>
    </Band>

    <Band id="proof" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 900 }}>
        <Quote text="“The denial-risk model paid for itself in a quarter. We stopped filing claims that were always going to bounce, and our adjusters finally have time for the genuinely hard cases.”" who="VP, Claims Operations" sub="Health insurer · multi-TPA" />
      </div>
    </Band>

    <Band id="faq">
      <Head tag="04" eyebrow="Questions" title={<>Common questions.</>} />
      <FAQ items={[
        ["Which lines of business are supported?", "Health and motor are in production today, with the document and policy-reasoning stack generalising to other lines. New document types onboard quickly because the models are pre-trained on Indian claims data."],
        ["Does it integrate with our TPA workflow?", "Yes. Newron produces TPA-ready packets and exposes REST + webhook APIs, so it slots into your existing claims platform and TPA handoffs."],
        ["How is denial risk calculated?", "The model is trained on historical adjudication outcomes and explains each prediction with the policy clauses and document evidence behind it — never an unexplained score."],
        ["Is patient data kept private?", "All processing runs inside your environment — VPC, on-prem or air-gapped — with full audit logging and data-residency commitments."]]} />
    </Band>

    <CTABand headline={<>Run a pilot on <em className="italic">last quarter's claims</em>.</>} sub="We'll replay a slice of your historical claims through Newron and show you the denial-risk and time-to-file numbers before you commit." secondary={{ label: "Read customer stories", href: "v4.html#customers" }} />
  </>);
}

renderPage(<Page />);

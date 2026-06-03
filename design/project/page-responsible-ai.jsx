/* global React */
const { PageHero, Band, Head, SplitRows, Prose, FAQ, CTABand, renderPage } = window;

function LegalAside({ updated, items }) {
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 10 }}>Last reviewed</div>
      <div className="mono" style={{ fontSize: 13, color: "var(--ink)", marginBottom: 28 }}>{updated}</div>
      <div className="eyebrow" style={{ marginBottom: 12 }}>On this page</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
        {items.map(([id, label]) =>
          <li key={id}><a href={"#" + id} style={{ color: "var(--ink-soft)", textDecoration: "none", fontSize: 13.5 }}>{label}</a></li>)}
      </ul>
    </div>);
}

function Page() {
  return (<>
    <PageHero
      crumb="Legal / Responsible AI"
      aside={<IlloResponsible />}
      eyebrow="Responsible AI"
      title={<>In our rooms, a wrong answer has <em className="italic">consequences</em>.</>}
      lead="We build AI for credit desks, claims queues and grievance counters. That obligates us to a higher bar than a chatbot: sourced answers, human decisions, and the humility to say “I'm not sure.”"
      ctas={[{ label: "Talk to us", href: "v4.html#contact", primary: true }, { label: "How we deploy", href: "security.html" }]} />

    <Band id="principles">
      <Head tag="01" eyebrow="Our principles" title={<>Six commitments we <em className="italic">design</em> around.</>} kicker="Not a manifesto — the constraints our systems are actually built to meet." />
      <SplitRows items={[
        ["Sourced, not asserted", "Outputs cite the specific policy clause, document or record behind them. If we can't show the source, we don't present it as fact."],
        ["Humans decide", "Newron drafts, scores and recommends; a person makes the decision. Maker-checker and human-in-the-loop are built in, not optional."],
        ["Calibrated uncertainty", "We'd rather a system say “I'm not sure, here's the clause” than guess with confidence. Abstention is a feature."],
        ["Auditable by design", "Every output is logged, timestamped and exportable, so any decision can be reconstructed and reviewed later."],
        ["Fairness under scrutiny", "We test for disparate impact on the populations our customers serve and document known limitations honestly."],
        ["Privacy as a default", "Data stays in the customer's environment; we minimise what's collected and never train shared models on it without consent."]]} />
    </Band>

    <Prose aside={<LegalAside updated="1 May 2026" items={[["governance", "Governance"], ["data", "Data & training"], ["evaluation", "Evaluation"], ["humanoversight", "Human oversight"], ["limits", "Known limits"], ["report", "Raising concerns"]]} />}>
      <p className="lede">This page sets out how Newron approaches the responsible development and deployment of AI. It applies across our products and custom engagements, and it informs the contracts we sign.</p>

      <h2 id="governance">Governance</h2>
      <p>Responsible-AI decisions are owned by the same people who build the systems — not delegated to a separate committee that never sees the code. High-impact features are reviewed before deployment for sourcing, oversight and failure modes, and we revisit those decisions as systems change.</p>

      <h2 id="data">Data &amp; training</h2>
      <p>We train and fine-tune on data we are permitted to use, with attention to provenance and licensing. For customer deployments, customer data is processed under the customer's instructions and is <strong>not</strong> used to train shared models without an explicit, contracted agreement. We train on India-hosted data with residency commitments where required.</p>

      <h2 id="evaluation">Evaluation</h2>
      <p>Every production workflow ships with an evaluation harness. We measure accuracy on the tasks that matter, track regressions over time, and — where the workflow affects people — test for disparate impact across relevant groups. We prefer reproducible, honest benchmarks over cherry-picked demos, which is part of why we <a href="open-source.html">open-source</a> some of our evaluation tooling.</p>

      <h2 id="humanoversight">Human oversight</h2>
      <p>Newron is built to assist expert decision-makers, not replace them. Systems are configured so that consequential actions — approving a loan, settling a claim, responding to a citizen — require a human to review and confirm. Interfaces are designed to surface uncertainty and the underlying evidence rather than hide them.</p>

      <h2 id="limits">Known limitations</h2>
      <p>AI systems make mistakes, can reflect biases in their training data, and can be confidently wrong. We document known limitations for each deployment, design for graceful failure and abstention, and we are explicit with customers about what a system should and should not be relied upon to do.</p>

      <h2 id="report">Raising concerns</h2>
      <p>If you believe a Newron system has behaved unfairly or harmfully, we want to know. Contact us via <a href="v4.html#contact">our contact page</a>; concerns are routed to the team responsible for the relevant system and used to improve it.</p>
    </Prose>

    <Band id="faq" bg="var(--bg-2)" style={{ borderTop: "1px solid var(--line)" }}>
      <Head tag="02" eyebrow="Questions" title={<>Common questions.</>} />
      <FAQ items={[
        ["Does Newron make automated decisions about people?", "Our systems are designed to assist, not to decide autonomously. Consequential actions require human review and confirmation."],
        ["How do you handle bias?", "We test for disparate impact on the populations a workflow affects, document known limitations, and work with customers to monitor outcomes in production."],
        ["Do you use customer data to train models?", "Not without an explicit, contracted agreement. Customer data is processed under the customer's instructions inside their environment."],
        ["What happens when the model is unsure?", "We design for abstention. A system that surfaces uncertainty and the relevant policy clause is more useful — and safer — than one that always answers."]]} />
    </Band>

    <CTABand eyebrow="Responsible AI" headline={<>Hold us to <em className="italic">this</em>.</>} sub="If you're deploying AI where the stakes are real, let's talk about how to do it defensibly — and what we'd refuse to build." primary={{ label: "Talk to us", href: "v4.html#contact" }} secondary={{ label: "Security", href: "security.html" }} />
  </>);
}

renderPage(<Page />);

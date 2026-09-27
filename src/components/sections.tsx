import { Reveal } from "@/components/reveal";
import { Logo } from "@/components/nav";
import { AgentRun } from "@/components/agent-run";
import { Catalog } from "@/components/catalog";
import { CONTACT_HREF, customers, integrations, partners, protocols } from "@/lib/site";

function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
      →
    </span>
  );
}

function PrimaryCTA({ href = "#agents", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg transition hover:brightness-110"
    >
      {children} <Arrow />
    </a>
  );
}

function SecondaryCTA({ href = CONTACT_HREF, children }: { href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-lg border border-line-2 px-5 py-3 text-sm text-fg transition-colors hover:bg-s2"
    >
      {children} <Arrow />
    </a>
  );
}

function SectionHead({
  kicker,
  title,
  body,
  className = "",
}: {
  kicker: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`flex flex-col justify-between gap-6 md:flex-row md:items-end ${className}`}>
      <div className="max-w-3xl">
        <p className="text-sm text-accent">{kicker}</p>
        <h2 className="mt-3 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">{title}</h2>
      </div>
      {body && <p className="max-w-sm text-fg-2 md:text-right">{body}</p>}
    </Reveal>
  );
}

const Accent = ({ children }: { children: React.ReactNode }) => (
  <em className="font-serif font-normal italic tracking-[-0.01em] text-fg">{children}</em>
);

/* ───────────────────────── Hero ───────────────────────── */

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden className="grid-field pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#agents"
            className="rise group inline-flex items-center gap-2 rounded-full border border-line-2 bg-s1 py-1 pl-1 pr-3 text-xs text-fg-2 transition-colors hover:text-fg"
            style={{ animationDelay: "40ms" }}
          >
            <span className="rounded-full bg-s3 px-2 py-0.5 text-fg">New</span>
            Newron&apos;s production AI, now as agents your teams can deploy <Arrow />
          </a>
          <h1
            className="rise mt-7 text-[2.9rem] font-medium leading-[1] tracking-[-0.045em] sm:text-6xl lg:text-[4.75rem]"
            style={{ animationDelay: "120ms" }}
          >
            The agent marketplace for <Accent>regulated</Accent> teams.
          </h1>
          <p
            className="rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-2"
            style={{ animationDelay: "220ms" }}
          >
            Discover, approve and deploy AI agents for credit, claims and citizen services. Each one is scoped to the
            data it needs, signed off by your people and runs inside your perimeter.
          </p>
          <div className="rise mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: "320ms" }}>
            <PrimaryCTA>Browse agents</PrimaryCTA>
            <SecondaryCTA>Book a demo</SecondaryCTA>
          </div>
        </div>

        <div className="rise mx-auto mt-16 max-w-5xl" style={{ animationDelay: "460ms" }}>
          <AgentRun />
          <p className="mt-3 text-center font-mono text-[11px] text-muted">
            Sample run · a CAM Writer agent pauses for credit-officer approval before writing back to the LOS
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Proof ───────────────────────── */

export function Proof() {
  return (
    <section id="customers" className="scroll-mt-20 border-y border-line bg-s1/60">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <p className="text-center text-sm text-muted">In production at lenders, insurers and government</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {customers.map((c) => (
            <li key={c} className="text-lg font-medium tracking-tight whitespace-nowrap text-fg-2">
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center font-mono text-[11px] text-muted">
          Programs & research partners · {partners.join(" · ")}
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── Catalog ───────────────────────── */

export function CatalogSection() {
  return (
    <section id="agents" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        kicker="The catalog"
        title={
          <>
            Agents with a job title, <Accent>not a chat box.</Accent>
          </>
        }
        body="Every listing states what it reads, what it writes and who has to sign off, before anyone installs it."
      />
      <Reveal className="mt-12">
        <Catalog />
      </Reveal>
    </section>
  );
}

/* ───────────────────────── Lifecycle ───────────────────────── */

const chapters = [
  {
    n: "01",
    t: "Discover",
    h: "Find the agent for the workflow, not the model.",
    d: "Search by task, team or the system it connects to. Listings read like a due-diligence file, not an ad.",
    ui: <DiscoverFragment />,
  },
  {
    n: "02",
    t: "Review",
    h: "Risk and IT approve scopes line by line.",
    d: "Admins see every permission an agent requests, then grant, narrow or refuse it for a team before first run.",
    ui: <ReviewFragment />,
  },
  {
    n: "03",
    t: "Deploy",
    h: "Runs where your data already lives.",
    d: "One click into your VPC, your data centre or an air-gapped enclave, with your keys and no outbound egress.",
    ui: <DeployFragment />,
  },
  {
    n: "04",
    t: "Observe",
    h: "Every run is measured, logged and reversible.",
    d: "Track volume, pass rates and human overrides per agent, and trace any decision back to its source documents.",
    ui: <ObserveFragment />,
  },
];

export function Lifecycle() {
  return (
    <section id="how" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead
          kicker="How it works"
          title={
            <>
              From listing to production, <Accent>with a paper trail.</Accent>
            </>
          }
          body="Discover, review, deploy and observe. Each step has an owner on your side."
        />
        <div className="mt-16 space-y-6">
          {chapters.map((c, i) => (
            <Reveal key={c.n}>
              <article className="grid items-center gap-8 rounded-2xl border border-line bg-s1 p-6 md:p-10 lg:grid-cols-2 lg:gap-16">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <p className="font-mono text-xs text-muted">
                    <span className="text-accent">{c.n}</span> · {c.t}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em] md:text-3xl">{c.h}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-fg-2">{c.d}</p>
                </div>
                <div className={i % 2 ? "lg:order-1" : ""}>{c.ui}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Frame({ title, meta, children }: { title: string; meta?: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-2 bg-bg">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[11px] text-muted">
        <span className="text-fg-2">{title}</span>
        {meta && <span>{meta}</span>}
      </div>
      {children}
    </div>
  );
}

function DiscoverFragment() {
  const rows = [
    { m: "SA", n: "Statement Analyst", s: "read:statements", tag: "Credit" },
    { m: "AX", n: "Artha Extract", s: "read:documents", tag: "Documents" },
    { m: "A3", n: "Applicant 360°", s: "read:bureau", tag: "Credit" },
  ];
  return (
    <Frame title="Search" meta="3 results">
      <div className="border-b border-line px-4 py-3 text-sm text-fg">
        bank statement analysis<span className="caret text-accent">|</span>
      </div>
      <ul>
        {rows.map((r, i) => (
          <li
            key={r.n}
            className={`flex items-center gap-3 px-4 py-3 ${i === 0 ? "bg-s2" : ""} ${i ? "border-t border-line" : ""}`}
          >
            <span className="grid h-8 w-8 place-items-center rounded-md border border-line-2 bg-s3 font-mono text-[10px]">
              {r.m}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-fg">{r.n}</p>
              <p className="font-mono text-[11px] text-muted">{r.s}</p>
            </div>
            <span className="label text-muted">{r.tag}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function ReviewFragment() {
  const scopes = [
    { s: "read:application", d: "Loan file and KYC documents", st: "Granted", c: "text-ok" },
    { s: "read:bureau", d: "Bureau pulls for this applicant", st: "Granted", c: "text-ok" },
    { s: "write:cam-draft", d: "Draft only, never final", st: "Narrowed", c: "text-warn" },
    { s: "write:disbursal", d: "Not requested", st: "Blocked", c: "text-muted" },
  ];
  return (
    <Frame title="CAM Writer · access review" meta="Credit Ops">
      <div className="flex gap-4 border-b border-line px-4 text-xs">
        {["Overview", "Data & tools", "Security", "Activity"].map((t, i) => (
          <span key={t} className={`py-2.5 ${i === 1 ? "border-b border-accent text-fg" : "text-muted"}`}>
            {t}
          </span>
        ))}
      </div>
      <ul>
        {scopes.map((r, i) => (
          <li key={r.s} className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 ${i ? "border-t border-line" : ""}`}>
            <div className="min-w-0">
              <p className="font-mono text-xs text-fg">{r.s}</p>
              <p className="truncate text-xs text-muted">{r.d}</p>
            </div>
            <span className={`font-mono text-[11px] ${r.c}`}>{r.st}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-end gap-2 border-t border-line px-4 py-3 whitespace-nowrap">
        <span className="rounded-md border border-line-2 px-3 py-1.5 text-xs text-fg-2">Request changes</span>
        <span className="rounded-md bg-fg px-3 py-1.5 text-xs font-medium text-bg">Approve for Credit Ops</span>
      </div>
    </Frame>
  );
}

function DeployFragment() {
  const targets = [
    { t: "Your VPC", d: "Your cloud account, keys and IAM", on: true },
    { t: "On-premise", d: "Your hardware, your data centre" },
    { t: "Air-gapped", d: "Fully offline, never phones home" },
  ];
  return (
    <Frame title="Deploy target" meta="CAM Writer">
      <ul className="space-y-2 p-3">
        {targets.map((x) => (
          <li
            key={x.t}
            className={`flex items-center gap-3 rounded-lg border px-3 py-3 ${x.on ? "border-accent/60 bg-accent/5" : "border-line"}`}
          >
            <span className={`grid h-4 w-4 place-items-center rounded-full border ${x.on ? "border-accent" : "border-line-2"}`}>
              {x.on && <span className="h-2 w-2 rounded-full bg-accent" />}
            </span>
            <div>
              <p className="text-sm text-fg">{x.t}</p>
              <p className="text-xs text-muted">{x.d}</p>
            </div>
          </li>
        ))}
      </ul>
      <dl className="grid grid-cols-3 border-t border-line font-mono text-[11px]">
        {[
          ["Region", "ap-south-1"],
          ["Keys", "Customer KMS"],
          ["Egress", "None"],
        ].map(([k, v], i) => (
          <div key={k} className={`px-4 py-3 ${i ? "border-l border-line" : ""}`}>
            <dt className="text-muted">{k}</dt>
            <dd className="mt-1 text-fg">{v}</dd>
          </div>
        ))}
      </dl>
    </Frame>
  );
}

function ObserveFragment() {
  const bars = [38, 44, 41, 52, 49, 61, 58, 66, 63, 72, 70, 78];
  return (
    <Frame title="CAM Writer · last 12 weeks" meta="sample workspace">
      <div className="grid grid-cols-3 border-b border-line">
        {[
          ["Runs", "7,412"],
          ["Checks passed", "97.8%"],
          ["Human overrides", "2.1%"],
        ].map(([k, v], i) => (
          <div key={k} className={`px-4 py-4 ${i ? "border-l border-line" : ""}`}>
            <p className="text-xs text-muted">{k}</p>
            <p className="mt-1 text-xl font-medium tabular-nums tracking-tight">{v}</p>
          </div>
        ))}
      </div>
      <div className="flex h-32 items-end gap-1.5 px-4 pt-4 pb-3" aria-hidden>
        {bars.map((b, i) => (
          <span
            key={i}
            className={`flex-1 rounded-sm ${i === bars.length - 1 ? "bg-accent" : "bg-line-2"}`}
            style={{ height: `${b}%` }}
          />
        ))}
      </div>
      <p className="border-t border-line px-4 py-2.5 font-mono text-[11px] text-muted">
        Override on LN-20391 · reason logged · R. Iyer
      </p>
    </Frame>
  );
}

/* ───────────────────────── Integrations ───────────────────────── */

export function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-20 border-t border-line bg-s1/50">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead
          kicker="Integrations"
          title={
            <>
              Agents work in the systems <Accent>you already run.</Accent>
            </>
          }
          body="Connectors for lending, insurance and document stacks, and open protocols for everything else."
        />
        <Reveal className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((g) => (
            <div key={g.group} className="bg-bg p-6">
              <p className="label text-muted">{g.group}</p>
              <ul className="mt-5 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-sm text-fg-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
        <Reveal className="mt-6 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-sm text-muted">Or connect anything over</span>
          {protocols.map((p) => (
            <span key={p} className="rounded-md border border-line-2 bg-bg px-2.5 py-1 font-mono text-xs text-fg-2">
              {p}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── Governance ───────────────────────── */

const controls = [
  { t: "Scoped permissions", d: "Agents only get the read and write scopes your admins grant, per team." },
  { t: "Human approval", d: "Set which steps need a named person to sign off before anything is written." },
  { t: "Full audit trail", d: "Every input, tool call, output and approval is logged and exportable." },
  { t: "Your models, your keys", d: "Artha models run self-hosted under your encryption keys." },
  { t: "No training on your data", d: "Customer data is never used to train shared models." },
  { t: "Deploy anywhere", d: "Your VPC, on-premise or fully air-gapped, with the same controls." },
];

const audit = [
  ["10:42:07", "cam-writer", "read:application", "LN-20417", "ok"],
  ["10:42:58", "cam-writer", "tool:artha.extract", "41 pages", "ok"],
  ["10:43:31", "cam-writer", "policy.check", "1 exception", "warn"],
  ["10:51:12", "r.iyer", "approve", "cam-draft", "ok"],
  ["10:51:13", "cam-writer", "write:cam-draft", "LOS", "ok"],
];

export function Governance() {
  return (
    <section id="governance" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead
          kicker="Governance"
          title={
            <>
              Your risk team signs off <Accent>before</Accent> an agent touches production.
            </>
          }
          body="Built for regulated industries from day one, not bolted on after the pilot."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {controls.map((c) => (
                <div key={c.t} className="bg-s1 p-6">
                  <dt className="font-medium text-fg">{c.t}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-fg-2">{c.d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <Frame title="Audit log" meta="run 4812 · exportable">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[30rem] font-mono text-[11px]">
                  <tbody>
                    {audit.map((r, i) => (
                      <tr key={i} className={i ? "border-t border-line" : ""}>
                        <td className="px-4 py-2.5 text-muted">{r[0]}</td>
                        <td className="px-2 py-2.5 text-fg-2">{r[1]}</td>
                        <td className="px-2 py-2.5 text-fg">{r[2]}</td>
                        <td className="px-2 py-2.5 text-muted">{r[3]}</td>
                        <td className={`px-4 py-2.5 text-right ${r[4] === "warn" ? "text-warn" : "text-ok"}`}>{r[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Frame>
            <div className="rounded-2xl border border-line bg-s1 p-6">
              <p className="label text-muted">Certifications</p>
              <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                <li className="flex items-center gap-2 text-fg">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden /> ISO 27001 certified
                </li>
                <li className="flex items-center gap-2 text-fg">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden /> NVIDIA Inception
                </li>
                <li className="flex items-center gap-2 text-fg-2">
                  <span className="h-1.5 w-1.5 rounded-full border border-warn" aria-hidden /> SOC 2 in progress
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Outcomes ───────────────────────── */

const outcomes = [
  { n: "60s", l: "to parse 12 months of bank statements" },
  { n: "90s", l: "to file an insurance claim" },
  { n: "≈⅛", l: "the per-document cost of frontier models, with Artha" },
  { n: "8–12 wks", l: "from kickoff to agents in production" },
];

export function Outcomes() {
  return (
    <section className="border-t border-line bg-s1/50">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <figure>
            <blockquote className="font-serif text-3xl leading-[1.2] tracking-[-0.01em] text-fg md:text-[2.75rem]">
              “Newron&apos;s CAM engine replaced three weeks of human review with a 40-minute QC step. Our credit
              officers stopped reformatting Excel and went back to actually underwriting.”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3 text-sm">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-line-2 bg-s3 font-mono text-[11px]">
                AV
              </span>
              <span>
                <span className="text-fg">Arun Velayutham</span>
                <span className="text-muted"> · Aditya Birla Capital</span>
              </span>
            </figcaption>
          </figure>
          <div className="rounded-2xl border border-line bg-bg p-6">
            <p className="font-mono text-xs text-accent">1st place</p>
            <p className="mt-2 text-lg text-fg">Nasscom AI Gamechangers 2026</p>
            <p className="mt-1 text-sm text-fg-2">
              Startup category, BFSI. Recognised for taking AI out of the pilot stage and into production at
              India&apos;s lenders.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => (
            <Reveal key={o.n} delay={i * 80} className="bg-bg p-6">
              <p className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">{o.n}</p>
              <p className="mt-3 max-w-[15rem] text-sm text-fg-2">{o.l}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Builders ───────────────────────── */

const publishSteps = [
  { t: "Build", d: "Start from Artha document models and the AgentHub API, or bring your own agent." },
  { t: "Pass review", d: "Declare scopes, attach evals and clear the security review before listing." },
  { t: "List", d: "Publish privately to your org, or to regulated teams across the marketplace." },
];

export function Builders() {
  return (
    <section id="builders" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="text-sm text-accent">For builders</p>
          <h2 className="mt-3 text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Ship agents to buyers <Accent>who can say yes.</Accent>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-fg-2">
            AgentHub handles review, permissions, deployment and audit, so your team&apos;s agent reaches production
            instead of stalling in procurement.
          </p>
          <div className="mt-8">
            <SecondaryCTA>Talk to the partner team</SecondaryCTA>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {publishSteps.map((s, i) => (
            <Reveal key={s.t} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-s1 p-6">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-10 text-xl font-medium tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-2">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */

export function CTA() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 pb-24 md:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-line-2 bg-s1 px-6 py-16 text-center md:py-24">
        <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
            Pilot three agents <Accent>on your own data,</Accent> in a week.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-fg-2">
            Bring one real workflow and a sample of real documents. We deploy inside your perimeter and you see what
            production looks like.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <PrimaryCTA href={CONTACT_HREF}>Book a demo</PrimaryCTA>
            <SecondaryCTA href="#agents">Browse agents</SecondaryCTA>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

export function Footer() {
  const cols = [
    {
      h: "Product",
      l: [
        ["Agents", "#agents"],
        ["How it works", "#how"],
        ["Integrations", "#integrations"],
        ["Governance", "#governance"],
      ],
    },
    {
      h: "Company",
      l: [
        ["Customers", "#customers"],
        ["For builders", "#builders"],
        ["Contact", CONTACT_HREF],
      ],
    },
  ];
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.6fr_1fr_1fr] md:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-2">
            Production AI agents for banks, NBFCs, insurers and government. Built in Bengaluru, India.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <p className="label text-muted">{c.h}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.l.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-fg-2 transition-colors hover:text-fg">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-line px-5 py-6 font-mono text-[11px] text-muted md:px-8">
        <span>© {new Date().getFullYear()} Newron</span>
        <span>ISO 27001 · NVIDIA Inception · SOC 2 in progress</span>
      </div>
    </footer>
  );
}

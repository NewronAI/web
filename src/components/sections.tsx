import { Reveal } from "@/components/reveal";
import { Logo } from "@/components/nav";
import { CamRun } from "@/components/cam-run";
import { artha, CONTACT_HREF, customers, governance, insurance, lending, partners, services } from "@/lib/site";

function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
      →
    </span>
  );
}

function PrimaryCTA({ href = "#contact", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-xl border border-fg bg-cta px-5 py-3 text-sm font-medium text-cta-fg transition hover:brightness-95"
    >
      {children} <Arrow />
    </a>
  );
}

function SecondaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-xl border border-line-2 px-5 py-3 text-sm text-fg transition-colors hover:bg-s2"
    >
      {children} <Arrow />
    </a>
  );
}

const Accent = ({ children }: { children: React.ReactNode }) => (
  <em className="accent">{children}</em>
);

function ProductHead({
  n,
  name,
  tagline,
  body,
}: {
  n: string;
  name: string;
  tagline: React.ReactNode;
  body: React.ReactNode;
}) {
  return (
    <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      <div className="max-w-4xl text-balance">
        <p className="label text-muted">
          <span className="text-accent">{n}</span> · {name}
        </p>
        <h2 className="mt-5 font-serif text-5xl leading-[1] tracking-[-0.045em] md:text-[4.25rem]">{tagline}</h2>
      </div>
      <p className="max-w-sm text-fg-2 md:text-right">{body}</p>
    </Reveal>
  );
}

function Frame({ title, meta, children }: { title: string; meta?: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line-2 bg-bg">
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-2.5 font-mono text-[11px] text-muted">
        <span className="truncate text-fg-2">{title}</span>
        {meta && <span className="shrink-0">{meta}</span>}
      </div>
      {children}
    </div>
  );
}

function Dot({ tone = "ok" }: { tone?: "ok" | "warn" | "open" }) {
  const cls = tone === "ok" ? "bg-ok" : tone === "warn" ? "bg-warn" : "border border-warn";
  return <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${cls}`} aria-hidden />;
}

/* ───────────────────────── Hero ───────────────────────── */

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-36 md:pt-24 md:pb-52">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="rise label text-muted" style={{ animationDelay: "40ms" }}>
            Applied AI · Bengaluru, India
          </p>
          <h1
            className="rise mt-6 font-serif text-[3.2rem] leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[6.25rem]"
            style={{ animationDelay: "120ms" }}
          >
            The enterprise AI partner of choice for <Accent>regulated industries.</Accent>
          </h1>
          <p
            className="rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-2"
            style={{ animationDelay: "220ms" }}
          >
            Newron is the applied-AI partner to India&apos;s banks, NBFCs, insurers and Government — building
            production systems that underwrite faster, settle claims sooner, serve citizens in their own language.
          </p>
          <div className="rise mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: "320ms" }}>
            <PrimaryCTA>Talk to us</PrimaryCTA>
            <SecondaryCTA href="#lending">Explore the platform</SecondaryCTA>
          </div>
        </div>

        <div className="rise mx-auto mt-16 max-w-5xl" style={{ animationDelay: "460ms" }}>
          <CamRun />
          <p className="mt-3 text-center font-mono text-[11px] text-muted">
            Sample file · Lending Intelligence composes a CAM in your bank&apos;s format, then waits for credit QC
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Proof ───────────────────────── */

export function Proof() {
  return (
    <section id="customers" className="sheet sheet-dark scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <p className="label text-center text-fg-2">In production at India&apos;s lenders and in government</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {customers.map((c) => (
            <li key={c} className="text-xl font-semibold tracking-tight whitespace-nowrap text-fg">
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-muted">
          Technology, research & ecosystem partners · {partners.join(" · ")}
        </p>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {numbers.map((o, i) => (
            <Reveal key={o.n} delay={i * 80} className="bg-s1 p-7">
              <p className="font-serif text-5xl tracking-[-0.045em] md:text-6xl">{o.n}</p>
              <p className="mt-3 max-w-[15rem] text-sm text-fg-2">{o.l}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Numbers ───────────────────────── */

const numbers = [
  { n: "< 60s", l: "to parse 12 months of bank statements" },
  { n: "< 90s", l: "to assemble a TPA-ready claim packet" },
  { n: "≈⅛", l: "the cost of frontier models, with Artha" },
  { n: "8–12 wks", l: "from scope to production" },
];


/* ───────────────────────── 01 Lending ───────────────────────── */

export function Lending() {
  return (
    <section id="lending" className="sheet  scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <ProductHead
          n="01"
          name="Lending Intelligence"
          tagline={
            <>
              The credit officer&apos;s <Accent>second brain.</Accent>
            </>
          }
          body="A modular suite for the loan origination lifecycle — from intake and statement parsing to CAM generation, deviation handling, and verification."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <CamFragment />
          </Reveal>
          <Reveal delay={120} className="grid gap-6">
            <div className="rounded-3xl border border-line bg-s1 p-6">
              <p className="label text-muted">12 loan products, out of the box</p>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {[
                  ["Commercial", lending.commercial],
                  ["Consumer", lending.consumer],
                ].map(([h, items]) => (
                  <div key={h as string}>
                    <p className="text-sm text-fg">{h}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {(items as string[]).map((it) => (
                        <li key={it} className="rounded-md border border-line-2 px-2 py-1 text-xs text-fg-2">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="rounded-3xl border border-line bg-s1 p-6">
              <p className="font-serif text-2xl leading-snug text-fg">
                “Newron&apos;s CAM engine replaced three weeks of human review with a 40-minute QC step.”
              </p>
              <footer className="mt-5 flex items-center gap-3 text-sm">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line-2 bg-s3 font-mono text-[11px]">
                  AV
                </span>
                <span>
                  <span className="text-fg">Arun Velayutham</span>
                  <span className="text-muted"> · Head of SME, Aditya Birla Capital</span>
                </span>
              </footer>
            </blockquote>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {lending.modules.map((m, i) => (
            <Reveal key={m.t} delay={i * 60} className="bg-bg p-6">
              <h3 className="font-medium text-fg">{m.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-2">{m.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CamFragment() {
  const sections = [
    { t: "Applicant & group profile", s: "4 parties resolved" },
    { t: "Banking behaviour", s: "12 months · ABB ₹18.4 L" },
    { t: "Obligations & FOIR", s: "EMI ₹1.85 L / mo" },
    { t: "Collateral", s: "LAP · valuation attached" },
  ];
  return (
    <Frame title="Credit Approval Memo · LN-20417" meta="your bank's format">
      <ul>
        {sections.map((s, i) => (
          <li key={s.t} className={`flex items-center justify-between gap-4 px-4 py-3 ${i ? "border-t border-line" : ""}`}>
            <span className="flex items-center gap-3 text-sm text-fg">
              <Dot /> {s.t}
            </span>
            <span className="font-mono text-[11px] text-muted">{s.s}</span>
          </li>
        ))}
      </ul>
      <div className="border-t border-line bg-warn/5 px-4 py-4">
        <p className="flex items-center gap-2 font-mono text-[11px] text-warn">
          <Dot tone="warn" /> Deviation flagged
        </p>
        <p className="mt-2 text-sm text-fg">FOIR at 58% against a 55% cap for this product.</p>
        <p className="mt-2 font-mono text-[11px] text-muted">Policy book §4.2.1 · approval: Zonal Credit Head</p>
      </div>
      <div className="flex items-center justify-between border-t border-line px-4 py-3 font-mono text-[11px] text-muted">
        <span>18 sections · every figure cited to source</span>
        <span className="text-ok">Ready for QC</span>
      </div>
    </Frame>
  );
}

/* ───────────────────────── 02 Artha ───────────────────────── */

export function Artha() {
  return (
    <section id="artha" className="sheet sheet-teal scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <ProductHead
          n="02"
          name="Artha Models"
          tagline={
            <>
              The models <Accent>underneath</Accent> Indian credit.
            </>
          }
          body="Artha is Newron's suite of vision-language models, built for the paperwork Indian banks and NBFCs actually process."
        />

        <Reveal className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {artha.claims.map((c) => (
            <div key={c.l} className="bg-bg p-6">
              <p className="font-serif text-4xl tracking-[-0.045em] md:text-5xl">{c.n}</p>
              <p className="mt-2 text-sm text-fg-2">{c.l}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <ul className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-bg">
              {artha.capabilities.map((c, i) => (
                <li key={c.t} className="grid gap-2 p-6 sm:grid-cols-[2rem_1fr]">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-medium text-fg">{c.t}</h3>
                      <span className="font-mono text-[11px] text-accent">{c.v}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-fg-2">{c.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <ClassifyFragment />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ClassifyFragment() {
  const files = ["scan_0412.pdf", "IMG_2231.jpg", "docs_final(2).pdf", "stmt.pdf", "kyc.zip"];
  const docs = [
    { d: "Bank statement · HDFC", p: "Shree Steels Pvt. Ltd." },
    { d: "GST return · GSTR-3B", p: "Shree Steels Pvt. Ltd." },
    { d: "ITR-V · AY 2025-26", p: "R. Kulkarni (promoter)" },
    { d: "Sale deed", p: "R. Kulkarni (promoter)" },
    { d: "PAN card", p: "S. Kulkarni (co-applicant)" },
    { d: "Udyam certificate", p: "Shree Steels Pvt. Ltd." },
  ];
  return (
    <Frame title="artha · classify + map" meta="sample batch">
      <div className="grid sm:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-line p-4 sm:border-r sm:border-b-0">
          <p className="label text-muted">5 files in</p>
          <ul className="mt-3 space-y-2 font-mono text-[11px] text-fg-2">
            {files.map((f) => (
              <li key={f} className="truncate rounded border border-line px-2 py-1.5">
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <p className="label text-muted">6 documents · 4 parties</p>
          <ul className="mt-3 space-y-2">
            {docs.map((d) => (
              <li key={d.d} className="flex items-center justify-between gap-3 rounded border border-line px-2 py-1.5">
                <span className="truncate text-xs text-fg">{d.d}</span>
                <span className="shrink-0 truncate font-mono text-[10px] text-muted">{d.p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-4 py-2.5 font-mono text-[11px] text-muted">
        {"POST /v1/artha/extract  →  { doc_type, fields[], parties[] }"}
      </p>
    </Frame>
  );
}

/* ───────────────────────── 03 Insurance ───────────────────────── */

export function Insurance() {
  return (
    <section id="insurance" className="sheet  scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <ProductHead
          n="03"
          name="Insurance AI"
          tagline={
            <>
              Settle claims <Accent>before</Accent> they&apos;re filed.
            </>
          }
          body="Newron's claims models inspect documents, parse policy language, and predict denial risk the moment a claim is initiated."
        />
        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-3">
            {insurance.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="grid grid-cols-[2rem_1fr] gap-2 rounded-3xl border border-line bg-s1 p-6">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="font-medium text-fg">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-2">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <ClaimFragment />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ClaimFragment() {
  const artefacts = [
    { t: "Policy schedule", ok: true },
    { t: "Pre-authorisation", ok: true },
    { t: "Discharge summary", ok: true },
    { t: "Final hospital bill", ok: true },
    { t: "Investigation reports", ok: false },
  ];
  return (
    <Frame title="Claim CLM-88214 · Health · Cashless" meta="sample claim">
      <div className="grid sm:grid-cols-2">
        <div className="border-b border-line p-4 sm:border-r sm:border-b-0">
          <p className="label text-muted">Eligibility · intake</p>
          <ul className="mt-3 space-y-2.5">
            {artefacts.map((a) => (
              <li key={a.t} className="flex items-center justify-between gap-3 text-sm">
                <span className={a.ok ? "text-fg" : "text-warn"}>{a.t}</span>
                <span className={`font-mono text-[11px] ${a.ok ? "text-ok" : "text-warn"}`}>{a.ok ? "found" : "missing"}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <p className="label text-muted">Denial risk</p>
          <p className="mt-3 font-serif text-4xl text-warn">Elevated</p>
          <p className="mt-2 text-sm text-fg-2">Likely reason: investigation reports absent for a surgical claim.</p>
          <p className="mt-4 rounded-md border border-line-2 px-3 py-2 text-xs text-fg">
            Remediation · request reports from hospital before submission
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-line px-4 py-3 font-mono text-[11px] text-muted">
        <span>TPA-ready packet assembled</span>
        <span className="text-ok">01:24</span>
      </div>
    </Frame>
  );
}

/* ───────────────────────── 04 Governance ───────────────────────── */

export function Governance() {
  return (
    <section id="governance" className="sheet sheet-dawn scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <ProductHead
          n="04"
          name="Governance AI"
          tagline={
            <>
              Citizen services in <Accent>their</Accent> language.
            </>
          }
          body="Built with the Government of Karnataka. Newron reads Kannada handwriting, speaks in regional dialects, and surfaces policy answers from documents."
        />
        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <GrievanceFragment />
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
              {governance.map((g, i) => (
                <li key={g} className="bg-bg p-6">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <p className="mt-8 font-serif text-3xl leading-tight text-fg">{g}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GrievanceFragment() {
  return (
    <Frame title="Grievance GR-30952 · handwritten form" meta="sample">
      <div className="grid sm:grid-cols-2">
        <div className="border-b border-line p-4 sm:border-r sm:border-b-0">
          <p className="label text-muted">OCR · Kannada</p>
          <p lang="kn" className="mt-3 text-xl leading-relaxed text-fg">
            ರಸ್ತೆ ದುರಸ್ತಿ ಮನವಿ
          </p>
          <p className="mt-2 text-sm text-fg-2">Request for road repair</p>
        </div>
        <div className="p-4">
          <p className="label text-muted">Triage</p>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-muted">Department</dt>
              <dd className="text-fg">Public Works</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-muted">Priority</dt>
              <dd className="text-warn">High</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-muted">Relevant scheme</dt>
              <dd className="text-fg">Found · 2 documents</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex items-center gap-3 border-t border-line px-4 py-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-bg" aria-hidden>
          <svg viewBox="0 0 12 12" className="h-3 w-3">
            <path d="M3 2l7 4-7 4z" fill="currentColor" />
          </svg>
        </span>
        <span className="flex h-6 flex-1 items-center gap-[3px]" aria-hidden>
          {[4, 9, 14, 8, 17, 11, 6, 13, 18, 10, 5, 12, 16, 7, 11, 15, 9, 4, 8, 13, 6, 10].map((h, i) => (
            <span key={i} className="w-[3px] rounded-full bg-line-2" style={{ height: h }} />
          ))}
        </span>
        <span className="font-mono text-[11px] text-muted">Reply · regional TTS</span>
      </div>
    </Frame>
  );
}

/* ───────────────────────── 05 Services ───────────────────────── */

export function Services() {
  return (
    <section id="services" className="sheet sheet-dark scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <ProductHead
          n="05"
          name="Custom AI Services"
          tagline={
            <>
              When the product isn&apos;t enough, <Accent>we build it for you.</Accent>
            </>
          }
          body="Scope to production in 8–12 weeks."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 100}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-s1 p-6">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-12 font-serif text-3xl leading-tight">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-2">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Deployment & security ───────────────────────── */

const deploys = [
  { t: "Self-hosted on your VPC", d: "Runs in your cloud account, under your keys and your IAM." },
  { t: "On-prem", d: "Runs on your own hardware, inside your data centre." },
  { t: "Fully air-gapped", d: "Fully offline for environments that can never phone home." },
];

export function Deployment() {
  return (
    <section id="security" className="sheet scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="label text-accent">Deployment & security</p>
          <h2 className="mt-5 font-serif text-5xl leading-[1] tracking-[-0.045em] md:text-[4.25rem]">
            Your data stays <Accent>where regulators expect it.</Accent>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-fg-2">
            API-first, with a REST + webhook surface that fits into the systems you already run.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-center gap-3 text-fg">
              <Dot /> ISO 27001
            </li>
            <li className="flex items-center gap-3 text-fg">
              <Dot /> NVIDIA Inception Partner
            </li>
            <li className="flex items-center gap-3 text-fg-2">
              <Dot tone="open" /> SOC 2 · in progress
            </li>
          </ul>
        </Reveal>
        <Reveal delay={120} className="grid gap-4">
          {deploys.map((d, i) => (
            <div key={d.t} className="grid grid-cols-[2rem_1fr] gap-2 rounded-3xl border border-line bg-bg p-6">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <div>
                <h3 className="font-medium text-fg">{d.t}</h3>
                <p className="mt-1.5 text-sm text-fg-2">{d.d}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */

export function CTA() {
  return (
    <section id="contact" className="sheet sheet-teal scroll-mt-24">
      <Reveal className="mx-auto max-w-7xl px-5 pt-24 pb-40 text-center md:px-8 md:pt-32 md:pb-56">
        <div>
          <p className="label text-accent">One-week evaluation</p>
          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] md:text-7xl">
            A working pilot <Accent>on your own data,</Accent> inside a week.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-fg-2">
            We&apos;ll spin up a sandboxed instance against a slice of your historical data and deliver a working pilot
            inside a week. Production rollouts typically run over the following quarter.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <PrimaryCTA href={CONTACT_HREF}>Talk to us</PrimaryCTA>
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
      h: "Solutions",
      l: [
        ["Lending intelligence", "#lending"],
        ["Insurance AI", "#insurance"],
        ["Governance AI", "#governance"],
        ["Custom AI engineering", "#services"],
      ],
    },
    { h: "Industries", l: [["Banks"], ["NBFCs"], ["Insurance"], ["Public sector"]] },
    { h: "Company", l: [["About"], ["Careers"], ["Press"], ["Open source"]] },
    { h: "Legal", l: [["Privacy"], ["Terms"], ["Security", "#security"], ["Responsible AI"]] },
  ];
  return (
    <footer className="sheet sheet-dark">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.6fr_repeat(4,1fr)]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-2">
            Newron is an applied-AI company building production systems for regulated industries. Bengaluru, India.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <p className="label text-muted">{c.h}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.l.map(([label, href]) => (
                <li key={label}>
                  {href ? (
                    <a href={href} className="text-fg-2 transition-colors hover:text-fg">
                      {label}
                    </a>
                  ) : (
                    // TODO: link once these pages exist.
                    <span className="text-fg-2">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-line px-5 py-6 font-mono text-[11px] text-muted md:px-8">
        <span>© {new Date().getFullYear()} Newron AI Technologies Pvt. Ltd.</span>
        <span>NVIDIA Inception Partner · ISO 27001 · SOC 2 in progress · Bengaluru, India</span>
      </div>
    </footer>
  );
}

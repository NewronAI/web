import { Reveal } from "@/components/reveal";
import { Logo } from "@/components/nav";
import { StatementParser } from "@/components/statement-parser";
import { CONTACT_HREF, customers } from "@/lib/site";

function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
      →
    </span>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow rise flex items-center gap-3 text-muted" style={{ animationDelay: "60ms" }}>
            <span className="h-px w-8 bg-saffron" />
            Applied AI · Bengaluru
          </p>
          <h1
            className="rise mt-6 font-serif text-[3.2rem] leading-[0.95] tracking-[-0.02em] sm:text-7xl lg:text-[5.6rem]"
            style={{ animationDelay: "160ms" }}
          >
            The enterprise AI partner for{" "}
            <em className="relative whitespace-nowrap text-moss">
              regulated
              <svg
                viewBox="0 0 300 20"
                className="absolute -bottom-2 left-0 w-full text-saffron"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M2 14 C 80 4, 200 4, 298 12" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </em>{" "}
            industries.
          </h1>
          <p
            className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink-2"
            style={{ animationDelay: "280ms" }}
          >
            Production AI systems for banks, NBFCs, insurers and government. From credit underwriting to claims
            to citizen services, built to run inside your perimeter and ship within a quarter.
          </p>
          <div className="rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "400ms" }}>
            <a
              href={CONTACT_HREF}
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-paper transition hover:bg-saffron"
            >
              Talk to us <Arrow />
            </a>
            <a href="#lending" className="group inline-flex items-center gap-2 px-2 py-4 text-ink-2 hover:text-ink">
              Explore the platform <Arrow />
            </a>
          </div>
        </div>

        <div className="rise" style={{ animationDelay: "520ms" }}>
          <StatementParser />
          <p className="eyebrow mt-4 text-muted">
            12 months of bank statements, parsed in under 60 seconds
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Customers marquee ───────────────────────── */

export function Customers() {
  const list = [...customers, ...customers];
  return (
    <section id="customers" className="border-y border-rule bg-paper-2/60 py-7">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-5 md:px-8">
        <p className="eyebrow hidden shrink-0 text-muted md:block">Trusted by</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <ul className="marquee flex w-max items-center gap-14">
            {list.map((c, i) => (
              <li key={i} className="font-serif text-2xl whitespace-nowrap text-ink/70" aria-hidden={i >= customers.length}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Stats ───────────────────────── */

const stats = [
  { n: "60s", l: "to parse 12 months of bank statements" },
  { n: "90s", l: "to file an insurance claim" },
  { n: "≈⅛", l: "the cost of frontier models with Artha" },
  { n: "8–12", l: "weeks from kickoff to production" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.n} delay={i * 90} className="bg-paper p-8">
            <div className="font-serif text-6xl tracking-tight md:text-7xl">{s.n}</div>
            <p className="mt-4 max-w-[16rem] text-ink-2">{s.l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── Products ───────────────────────── */

const products = [
  {
    id: "lending",
    no: "01",
    name: "Lending Intelligence",
    kicker: "Loan origination, intake to verification",
    body: "A suite that covers the full origination lifecycle across 12 commercial and consumer loan products, from home and auto loans to personal loans and equipment finance.",
    items: ["CAM Generation", "Statement Analyser", "Applicant 360°", "Video PD", "Policy Chat"],
  },
  {
    id: "insurance",
    no: "03",
    name: "Insurance AI",
    kicker: "Claims, end to end",
    body: "Eligibility checks, automated filing and denial-risk prediction that bring claim filing down to under 90 seconds.",
    items: ["Eligibility checking", "Automated filing", "Denial risk prediction"],
  },
  {
    id: "governance",
    no: "04",
    name: "Governance AI",
    kicker: "Built with the Government of Karnataka",
    body: "Citizen services in regional languages: handwriting OCR, speech, grievance triage and policy discovery for the people who use them.",
    items: ["Kannada handwriting OCR", "Regional text-to-speech", "Grievance triage", "Policy discovery"],
  },
  {
    id: "services",
    no: "05",
    name: "Custom AI Services",
    kicker: "Your problem, in production",
    body: "Custom foundational models, engineering and business automation. Most engagements ship to production inside one quarter.",
    items: ["Foundational models", "AI engineering", "Business automation"],
  },
];

function ProductRow({ p }: { p: (typeof products)[number] }) {
  return (
    <Reveal>
      <article
        id={p.id}
        className="group grid scroll-mt-24 gap-6 border-t border-ink/80 py-12 md:grid-cols-[6rem_1fr_1fr] md:gap-10"
      >
        <span className="font-mono text-sm text-saffron">{p.no}</span>
        <div>
          <p className="eyebrow text-muted">{p.kicker}</p>
          <h3 className="mt-3 font-serif text-4xl leading-none md:text-5xl">{p.name}</h3>
          <p className="mt-5 max-w-md leading-relaxed text-ink-2">{p.body}</p>
        </div>
        <ul className="self-end">
          {p.items.map((it) => (
            <li
              key={it}
              className="flex items-center justify-between border-b border-rule py-3 text-ink-2 transition-colors hover:text-ink"
            >
              {it}
              <span className="font-mono text-xs text-muted">●</span>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export function Products() {
  const [lending, ...rest] = products;
  return (
    <section className="ledger py-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 pb-14 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-serif text-5xl leading-[1] tracking-tight md:text-6xl">
              One platform, built for the <em>paperwork</em> of regulated work.
            </h2>
            <p className="max-w-sm text-ink-2">
              Every product is API-first and deploys where your data already lives.
            </p>
          </div>
        </Reveal>
        <ProductRow p={lending} />
      </div>
      <Artha />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {rest.map((p) => (
          <ProductRow key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── Artha (dark band) ───────────────────────── */

function Artha() {
  const capabilities = [
    { k: "Classification", v: "5 files → 6 docs" },
    { k: "Extraction", v: "Fields, tables, stamps" },
    { k: "Party mapping", v: "4 parties resolved" },
  ];
  return (
    <div id="artha" className="relative my-12 scroll-mt-16 overflow-hidden bg-night text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-moss/60 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 md:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="font-mono text-sm text-saffron">02</span>
          <p className="eyebrow mt-6 text-paper/50">Vision-language models · Indian financial data</p>
          <h3 className="mt-4 font-serif text-6xl leading-[0.95] md:text-8xl">
            Artha <em className="text-saffron">Models</em>
          </h3>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
            Document models trained on Indian financial paperwork, with accuracy comparable to frontier models at a
            fraction of the cost. You can self-host them or license them.
          </p>
          <div className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-paper/15 pt-8">
            <div>
              <div className="font-serif text-5xl">3×</div>
              <p className="mt-1 text-sm text-paper/60">up to, faster than frontier</p>
            </div>
            <div>
              <div className="font-serif text-5xl">≈⅛</div>
              <p className="mt-1 text-sm text-paper/60">the cost per document</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150} className="self-center">
          <ul className="divide-y divide-paper/10 border-y border-paper/10">
            {capabilities.map((c, i) => (
              <li key={c.k} className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-7">
                <span className="font-mono text-xs text-paper/40">0{i + 1}</span>
                <span className="font-serif text-3xl">{c.k}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-saffron">{c.v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-xs text-paper/40">
            {"POST /v1/artha/extract  →  { doc_type, fields[], parties[] }"}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ───────────────────────── Deployment ───────────────────────── */

const deploys = [
  { t: "Your VPC", d: "Runs in your cloud account, under your keys and your IAM." },
  { t: "On-premise", d: "Runs on your own hardware, inside your data centre." },
  { t: "Air-gapped", d: "Fully offline for environments that can never phone home." },
];

export function Deployment() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="eyebrow text-muted">Deployment</p>
          <h2 className="mt-4 font-serif text-5xl leading-[1] tracking-tight md:text-6xl">
            Your data stays <em className="text-moss">where regulators expect it.</em>
          </h2>
          <ul className="mt-10 space-y-3 font-mono text-sm text-ink-2">
            <li>✓ ISO 27001 certified</li>
            <li>✓ NVIDIA Inception Partner since 2023</li>
            <li className="text-muted">◌ SOC 2 in progress</li>
          </ul>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {deploys.map((d, i) => (
            <Reveal key={d.t} delay={i * 110}>
              <div className="flex h-full flex-col justify-between border border-ink/80 p-6 transition hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--ink)]">
                <DeployGlyph i={i} />
                <div className="mt-16">
                  <h3 className="font-serif text-3xl">{d.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">{d.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeployGlyph({ i }: { i: number }) {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
      {i === 0 && (
        <>
          <path d="M14 34a9 9 0 0 1 1-18 12 12 0 0 1 23 4 7 7 0 0 1-1 14Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="19" y="24" width="10" height="8" fill="var(--saffron)" />
        </>
      )}
      {i === 1 && (
        <>
          {[10, 20, 30].map((y) => (
            <rect key={y} x="8" y={y} width="32" height="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          ))}
          <circle cx="34" cy="24" r="1.8" fill="var(--saffron)" />
        </>
      )}
      {i === 2 && (
        <>
          <rect x="6" y="14" width="14" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="28" y="14" width="14" height="20" fill="var(--saffron)" />
          <path d="M20 24h3m2 0h3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        </>
      )}
    </svg>
  );
}

/* ───────────────────────── Testimonial ───────────────────────── */

export function Testimonial() {
  return (
    <section className="bg-paper-2/70 py-28">
      <Reveal className="mx-auto max-w-5xl px-5 md:px-8">
        <span className="font-serif text-8xl leading-none text-saffron">“</span>
        <blockquote className="-mt-8 font-serif text-3xl leading-[1.2] md:text-5xl">
          Newron&apos;s CAM engine replaced three weeks of human review with a{" "}
          <em className="text-moss">40-minute QC step.</em> Our credit officers stopped reformatting Excel and went
          back to actually underwriting.
        </blockquote>
        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-10 bg-ink" />
          <p className="text-ink-2">
            <span className="font-medium text-ink">Arun Velayutham</span> · Aditya Birla Capital
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── Recognition ───────────────────────── */

export function Recognition() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 border-y border-ink/80 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-6">
            <span className="font-serif text-7xl leading-none text-saffron">1st</span>
            <div>
              <p className="eyebrow text-muted">Nasscom AI Gamechangers 2026</p>
              <p className="mt-1 font-serif text-2xl">Startup category · BFSI</p>
            </div>
          </div>
          <p className="max-w-sm text-ink-2">
            Recognised for taking AI out of the pilot stage and into production at India&apos;s lenders.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */

export function CTA() {
  return (
    <section id="contact" className="scroll-mt-16 px-5 pb-24 md:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden bg-saffron px-8 py-20 text-night md:px-16 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(135deg,transparent_0_22px,rgba(15,20,17,0.35)_22px_23px)]"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            See Newron <em>on your data,</em> in a one-week evaluation.
          </h2>
          <div>
            <p className="max-w-sm text-night/80">
              Bring a real workflow and a sample of real documents. In a week you&apos;ll see what production looks
              like.
            </p>
            <a
              href={CONTACT_HREF}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-night px-7 py-4 text-paper transition hover:bg-paper hover:text-night"
            >
              Talk to us <Arrow />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

export function Footer() {
  const cols = [
    { h: "Products", l: ["Lending Intelligence", "Artha Models", "Insurance AI", "Governance AI"] },
    { h: "Company", l: ["Customers", "Services", "Careers", "Contact"] },
  ];
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-2">
            Applied AI for regulated industries. Built in Bengaluru, India.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <p className="eyebrow text-muted">{c.h}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {c.l.map((x) => (
                <li key={x} className="text-ink-2">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-rule px-5 py-6 font-mono text-xs text-muted md:px-8">
        <span>© {new Date().getFullYear()} Newron</span>
        <span>ISO 27001 · NVIDIA Inception · SOC 2 in progress</span>
      </div>
    </footer>
  );
}

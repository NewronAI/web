import { Reveal } from "@/components/reveal";
import { Accent, Head, Num, PrimaryCTA, SecondaryCTA } from "@/components/kit";
import { AwardPill } from "@/components/nav";
import { CamRun } from "@/components/cam-run";
import { LendingShowcase } from "@/components/lending-showcase";
import { PhotoStage } from "@/components/photo-stage";
import Image from "next/image";
import { Check, Dot, Eighth, Frame } from "@/components/ui";
import ctaPhoto from "@/assets/photos/og-image.jpg";
import arthaPhoto from "@/assets/photos/artha.jpg";
import governancePhoto from "@/assets/photos/governance.jpg";
import heroBackdrop from "@/assets/photos/hero-backdrop.jpg";
import insurancePhoto from "@/assets/photos/insurance.jpg";
import { artha, CONTACT_HREF, customers, governance, insurance, partners, services } from "@/lib/site";

/* ───────────────────────── Hero ───────────────────────── */

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-36 md:pt-24 md:pb-52">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rise" style={{ animationDelay: "40ms" }}>
            <AwardPill />
          </div>
          {/* No entrance animation on the headline: it's the LCP element and should paint at first render. */}
          <h1 className="mt-6 font-serif text-[3.2rem] leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[6.25rem]">
            The enterprise AI partner of choice for <Accent>regulated industries.</Accent>
          </h1>
          <p className="rise mx-auto mt-7 max-w-xl text-lg text-fg-2" style={{ animationDelay: "220ms" }}>
            Production AI for India&apos;s banks, NBFCs, insurers and Government.
          </p>
          <div className="rise mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: "320ms" }}>
            <PrimaryCTA href={CONTACT_HREF}>Talk to Us</PrimaryCTA>
            <SecondaryCTA href="/lending-intelligence">Explore the platform</SecondaryCTA>
          </div>
        </div>

        <div className="rise mx-auto mt-16 max-w-6xl" style={{ animationDelay: "460ms" }}>
          <PhotoStage src={heroBackdrop} priority>
            <CamRun />
          </PhotoStage>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Proof ───────────────────────── */

// Production figures published on newron.ai.
const numbers: { n: React.ReactNode; l: string }[] = [
  { n: "66%", l: "Reduction in TAT" },
  { n: "200%", l: "Productivity uplift" },
  { n: "230k+", l: "Hours saved" },
  { n: "< 60s", l: "12 months of statements" },
];

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
        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted">
          <span className="label text-fg-2">Partners &amp; ecosystem</span>
          {partners.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </p>

        <div className="mt-16 grid grid-cols-2 gap-y-10 border-y border-line py-12 lg:grid-cols-4 lg:divide-x lg:divide-line">
          {numbers.map((o, i) => (
            <Reveal key={o.l} delay={i * 80} className="text-center">
              <p className="flex justify-center font-serif text-5xl tabular-nums tracking-[-0.04em] md:text-6xl">{o.n}</p>
              <p className="mt-2 text-sm text-muted">{o.l}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-24 max-w-5xl text-center text-balance">
          <blockquote className="font-serif text-3xl leading-[1.15] tracking-[-0.03em] md:text-5xl">
            “Newron&apos;s CAM engine replaced three weeks of human review with a{" "}
            <Accent>40-minute QC step.</Accent>”
          </blockquote>
          <p className="mt-8 text-sm text-fg-2">
            <span className="text-fg">Arun Velayutham</span> · Head of SME, Aditya Birla Capital
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── 01 Lending ───────────────────────── */

export function Lending() {
  return (
    <section id="lending" className="sheet scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <Head
          kicker={<Num n="01" name="Lending Intelligence" />}
          title={
            <>
              The credit officer&apos;s <Accent>second brain.</Accent>
            </>
          }
          line="Intake to verification, across 12 commercial and consumer loan products."
          more={{ href: "/lending-intelligence", label: "Explore Lending Intelligence" }}
        />
        <Reveal className="mt-16">
          <LendingShowcase />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── 02 Artha ───────────────────────── */

export function Artha() {
  return (
    <section id="artha" className="sheet sheet-teal scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <Head
          kicker={<Num n="02" name="Artha Models" />}
          title={
            <>
              The models <Accent>underneath</Accent> Indian credit.
            </>
          }
          line="Vision-language models built for Indian financial paperwork."
        />

        <Reveal className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-x-14 gap-y-6">
          {artha.claims.map((c) => (
            <div key={c.l} className="text-center">
              <p className="flex justify-center font-serif text-5xl tabular-nums tracking-[-0.04em]">
                {c.n === "eighth" ? <Eighth /> : c.n}
              </p>
              <p className="mt-1 text-sm text-muted">{c.l}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-6xl">
          <PhotoStage src={arthaPhoto}>
            <ClassifyFragment />
          </PhotoStage>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {artha.capabilities.map((c, i) => (
              <li key={c.t} className="flex items-center justify-between gap-3 rounded-2xl border border-line px-5 py-4">
                <span className="flex items-baseline gap-2.5">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <span className="font-medium">{c.t}</span>
                </span>
                <span className="font-mono text-[11px] text-accent">{c.v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function ClassifyFragment() {
  const files = ["scan_0412.pdf", "IMG_2231.jpg", "docs_final(2).pdf", "stmt.pdf", "kyc.zip"];
  const docs = [
    { d: "Bank statement", p: "Shree Steels" },
    { d: "GST return", p: "Shree Steels" },
    { d: "ITR-V", p: "R. Kulkarni" },
    { d: "Sale deed", p: "R. Kulkarni" },
    { d: "PAN card", p: "S. Kulkarni" },
    { d: "Udyam certificate", p: "Shree Steels" },
  ];
  return (
    <Frame title="artha · classify + extract + map" meta="sample batch">
      <div className="grid items-center gap-4 p-4 md:grid-cols-[1fr_auto_1.4fr]">
        <ul className="space-y-2 font-mono text-[11px] text-fg-2">
          {files.map((f) => (
            <li key={f} className="truncate rounded-lg border border-line px-3 py-2">
              {f}
            </li>
          ))}
        </ul>
        <span aria-hidden className="hidden font-mono text-lg text-accent md:block">
          →
        </span>
        <ul className="grid grid-cols-2 gap-2">
          {docs.map((d) => (
            <li key={d.d} className="rounded-lg border border-line-2 bg-s1 px-3 py-2.5">
              <p className="truncate text-sm">{d.d}</p>
              <p className="truncate font-mono text-[10px] text-muted">{d.p}</p>
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}

/* ───────────────────────── 03 Insurance ───────────────────────── */

export function Insurance() {
  return (
    <section id="insurance" className="sheet scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <Head
          kicker={<Num n="03" name="Insurance AI" />}
          title={
            <>
              Settle claims <Accent>before</Accent> they&apos;re filed.
            </>
          }
          line="Documents checked, claims filed and denial risk predicted at intake."
          more={{ href: "/insurance-ai", label: "Explore Insurance AI" }}
        />

        <Reveal className="mx-auto mt-14 max-w-5xl">
          <ol className="mb-6 grid gap-3 sm:grid-cols-3">
            {insurance.map((s, i) => (
              <li key={s.t} className="flex items-center gap-4 rounded-2xl border border-line px-5 py-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cta font-mono text-xs text-cta-fg">
                  0{i + 1}
                </span>
                <span>
                  <span className="block font-medium">{s.t}</span>
                  <span className="block text-sm text-muted">{s.s}</span>
                </span>
              </li>
            ))}
          </ol>
          <PhotoStage src={insurancePhoto} position="50% 40%">
            <ClaimFragment />
          </PhotoStage>
        </Reveal>
      </div>
    </section>
  );
}

export function ClaimFragment() {
  const artefacts = [
    { t: "Policy schedule", ok: true },
    { t: "Pre-authorisation", ok: true },
    { t: "Discharge summary", ok: true },
    { t: "Final bill", ok: true },
    { t: "Investigation reports", ok: false },
  ];
  return (
    <Frame title="Claim CLM-88214 · Health · Cashless" meta="packet ready in 01:24">
      <div className="grid md:grid-cols-[1.2fr_1fr]">
        <ul className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2">
          {artefacts.map((a) => (
            <li
              key={a.t}
              className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm ${
                a.ok ? "border-line" : "border-warn/50 bg-warn/5 text-warn"
              }`}
            >
              {a.ok ? <Check /> : <Dot tone="warn" />} {a.t}
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-center border-t border-line p-6 md:border-t-0 md:border-l">
          <p className="label text-muted">Denial risk</p>
          <p className="mt-2 font-serif text-5xl tracking-[-0.04em] text-warn">Elevated</p>
          <p className="mt-3 text-sm text-fg-2">Request investigation reports before submitting.</p>
        </div>
      </div>
    </Frame>
  );
}

/* ───────────────────────── 04 Governance ───────────────────────── */

export function Governance() {
  return (
    <section id="governance" className="sheet sheet-dawn scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <Head
          kicker={<Num n="04" name="Governance AI" />}
          title={
            <>
              Citizen services in <Accent>their</Accent> language.
            </>
          }
          line="Built with the Government of Karnataka."
          more={{ href: "/governance-ai", label: "Explore Governance AI" }}
        />
        <Reveal className="mx-auto mt-14 max-w-5xl">
          <PhotoStage src={governancePhoto} position="60% 45%">
            <GrievanceFragment />
          </PhotoStage>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {governance.map((g) => (
              <li key={g} className="rounded-full border border-line-2 bg-s1 px-4 py-2 text-sm">
                {g}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function GrievanceFragment() {
  return (
    <Frame title="Grievance GR-30952 · handwritten" meta="sample">
      <div className="grid items-center md:grid-cols-[1fr_auto_1fr]">
        <div className="p-6">
          <p className="label text-muted">Read · Kannada</p>
          <p lang="kn" className="mt-3 text-3xl leading-relaxed">
            ರಸ್ತೆ ದುರಸ್ತಿ ಮನವಿ
          </p>
          <p className="mt-1 text-sm text-fg-2">Request for road repair</p>
        </div>
        <span aria-hidden className="hidden px-2 font-mono text-lg text-accent md:block">
          →
        </span>
        <dl className="space-y-3 border-t border-line p-6 text-sm md:border-t-0">
          {[
            ["Routed to", "Public Works"],
            ["Priority", "High"],
            ["Reply", "Kannada voice note"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-3">
              <dt className="text-muted">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Frame>
  );
}

/* ───────────────────────── 05 Services ───────────────────────── */

export function Services() {
  return (
    <section id="services" className="sheet sheet-dark scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <Head
          kicker={<Num n="05" name="Custom AI Services" />}
          title={
            <>
              When the product isn&apos;t enough, <Accent>we build it for you.</Accent>
            </>
          }
          line="Scope to production in 8–12 weeks."
          more={{ href: "/custom-ai-engineering", label: "Explore Custom AI Services" }}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 100}>
              <div className="group flex h-full flex-col justify-between gap-12 rounded-3xl border border-line bg-s1 p-7 transition-colors duration-300 hover:border-line-2 hover:bg-s2">
                <span className="flex items-center justify-between">
                  <ServiceIcon kind={s.icon} />
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </span>
                <div>
                  <h3 className="font-serif text-3xl leading-tight tracking-[-0.03em]">{s.t}</h3>
                  <p className="mt-2 text-sm text-fg-2">{s.s}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ kind }: { kind: (typeof services)[number]["icon"] }) {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line-2 bg-s2 text-accent transition-transform duration-300 group-hover:-rotate-6">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {kind === "code" && <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />}
        {kind === "layers" && <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />}
        {kind === "flow" && (
          <>
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
            <path d="M10 6.5h4a3.5 3.5 0 0 1 3.5 3.5v4" />
          </>
        )}
      </svg>
    </span>
  );
}

/* ───────────────────────── Deployment & security ───────────────────────── */

const deploys = [
  { t: "Your VPC", s: "Your keys, your IAM", icon: "cloud" },
  { t: "On-prem", s: "Your data centre", icon: "rack" },
  { t: "Air-gapped", s: "Never phones home", icon: "lock" },
] as const;

function DeployIcon({ kind }: { kind: (typeof deploys)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 text-accent" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
      {kind === "cloud" && <path d="M9 24a6 6 0 0 1 .6-12 8 8 0 0 1 15.3 2.6A4.8 4.8 0 0 1 24 24Z" />}
      {kind === "rack" && (
        <>
          <rect x="6" y="6" width="20" height="6" rx="1.5" />
          <rect x="6" y="14" width="20" height="6" rx="1.5" />
          <rect x="6" y="22" width="20" height="4" rx="1.5" />
        </>
      )}
      {kind === "lock" && (
        <>
          <rect x="8" y="14" width="16" height="12" rx="2" />
          <path d="M11 14v-3a5 5 0 0 1 10 0v3" />
        </>
      )}
    </svg>
  );
}

export function Deployment() {
  return (
    <section id="security" className="sheet scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52">
        <Head
          kicker="Deployment & security"
          title={
            <>
              Your data stays <Accent>where regulators expect it.</Accent>
            </>
          }
          line="API-first, with REST and webhooks."
          more={{ href: "/security", label: "Security & compliance" }}
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {deploys.map((d, i) => (
            <Reveal key={d.t} delay={i * 90}>
              <div className="flex h-full flex-col items-center rounded-3xl border border-line bg-s1 px-6 py-8 text-center">
                <DeployIcon kind={d.icon} />
                <p className="mt-5 text-lg font-medium">{d.t}</p>
                <p className="mt-1 text-sm text-muted">{d.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            ["ISO 27001 aligned", "ok"],
            ["NVIDIA Inception Partner", "ok"],
            ["SOC 2 · in progress", "open"],
          ].map(([t, tone]) => (
            <span key={t} className="flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 text-sm">
              <Dot tone={tone as "ok" | "open"} /> {t}
            </span>
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
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-24 pb-40 md:px-8 md:pt-32 md:pb-56 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal>
          <p className="label text-accent">One-week evaluation</p>
          <h2 className="mt-5 text-balance font-serif text-5xl leading-[0.98] tracking-[-0.045em] md:text-7xl">
            A working pilot <Accent>on your own data,</Accent> inside a week.
          </h2>
          <ol className="mt-10 space-y-4">
            {[
              ["Day 1", "Sandbox on a slice of your historical data"],
              ["Day 5", "A working pilot on a real workflow"],
              ["Next quarter", "Production rollout, inside your perimeter"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-baseline gap-4 border-b border-line pb-4">
                <span className="w-28 shrink-0 font-mono text-xs text-accent">{k}</span>
                <span className="text-fg-2">{v}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PrimaryCTA href={CONTACT_HREF}>Talk to Us</PrimaryCTA>
            <SecondaryCTA href="/security">How we deploy</SecondaryCTA>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="stage relative isolate aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={ctaPhoto}
              alt=""
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="stage-photo -z-10 object-cover"
              style={{ objectPosition: "75% 50%" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { PageContent } from "@/content/pages/types";
import { Nav } from "../Nav";
import { ArrowIcon, PillButton, SmartLink } from "../ui";

// Inner-page hero: light paper, sans headline and a static flow of steps.
// The home hero's dark card, mono headline and animated rail stay on the home page.
export function InnerHero({
  hero,
  group,
  name,
}: {
  hero: PageContent["hero"];
  group: string;
  name: string;
}) {
  return (
    <>
      {/* "Back to top" target: a plain marker, since a sticky element never scrolls. */}
      <span id="top" className="block" aria-hidden />
      {/* Sticky for the whole page, so it sits outside the header. */}
      <div className="sticky top-0 z-30 bg-paper/90 backdrop-blur-md">
        <Nav tone="light" />
      </div>
      <header className="border-b border-line bg-paper">

      <div className="px-5 pt-14 pb-14 md:px-12 md:pt-20 md:pb-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.04em] text-muted uppercase">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span>{group}</span>
            <span aria-hidden>/</span>
            <span className="text-ink">{name}</span>
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
            <span className="size-[5px] rounded-full bg-accent" />
            {group}
          </span>
        </div>

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <h1 className="font-display text-[40px] leading-[1.02] font-medium tracking-[-0.045em] sm:text-[56px] lg:text-[72px]">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="lg:pb-2">
            <p className="max-w-[440px] text-[16px] leading-[1.6] text-ink/70">{hero.body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <PillButton href={hero.primary.href} tone="dark">
                {hero.primary.label}
              </PillButton>
              {hero.secondary && (
                <SmartLink
                  href={hero.secondary.href}
                  className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[-0.01em] text-ink"
                >
                  <span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-ink">
                    {hero.secondary.label}
                  </span>
                  <ArrowIcon className="transition-transform duration-300 group-hover:rotate-45" />
                </SmartLink>
              )}
            </div>
          </div>
        </div>

        {hero.steps && (
          <ol className="mt-14 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-stretch md:mt-20" aria-label="How it works">
            {hero.steps.map((step, i) => (
              <li key={step.word} className="flex items-stretch gap-2 sm:items-center">
                <div className="flex w-full min-w-0 flex-col gap-3 rounded-xl border border-line bg-cream px-4 py-3.5 sm:w-auto sm:min-w-[150px]">
                  <span className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
                    {String(i + 1).padStart(2, "0")} · {step.tag}
                  </span>
                  <span className="text-[20px] leading-none font-medium tracking-[-0.035em]">{step.word}</span>
                </div>
                {i < hero.steps!.length - 1 && (
                  <span className="hidden font-mono text-[14px] text-muted sm:inline" aria-hidden>
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
      </header>
    </>
  );
}

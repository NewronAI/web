import type { PageContent } from "@/content/pages/types";
import { PillButton, Reveal, SmartLink } from "../ui";

// A compact dark card that closes an inner page. The large periwinkle block stays on home.
export function InnerCta({ cta }: { cta: PageContent["cta"] }) {
  return (
    <section className="px-4 md:px-12">
      <Reveal>
        <div className="grid gap-10 rounded-2xl bg-ink px-6 py-10 text-cream md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:px-12 md:py-14">
          <div>
            <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-cream/55 uppercase">
              <span className="pulse-dot size-[5px] rounded-full bg-accent" />
              {cta.status}
            </p>
            <h2 className="mt-6 font-display text-[34px] leading-[1.02] font-medium tracking-[-0.045em] md:text-[48px]">
              {cta.title.join(" ")}
            </h2>
            <p className="mt-5 max-w-[520px] text-[14px] leading-[1.6] text-cream/60">{cta.body}</p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            {cta.secondary && (
              <SmartLink
                href={cta.secondary.href}
                className="text-[12px] font-medium tracking-[-0.01em] text-cream/80 underline-offset-4 hover:text-cream hover:underline"
              >
                {cta.secondary.label}
              </SmartLink>
            )}
            <PillButton href={cta.primary.href}>{cta.primary.label}</PillButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

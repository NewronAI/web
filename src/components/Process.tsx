import { approach } from "@/content/site";
import { Reveal, SectionHeader } from "./ui";

export function Process() {
  return (
    <section id="process" className="bg-ink px-4 pt-[160px] pb-[190px] text-cream md:px-16">
      <SectionHeader eyebrow={approach.eyebrow} title={approach.title} body={approach.body} dark />

      <div className="mt-[100px] border-b border-white/10">
        {approach.steps.map((step, i) => (
          <div key={step.word} className="relative overflow-hidden border-t border-white/10">
            {/* Accent marker drifting along the rule */}
            <span
              className="rail-dot absolute -top-[3px] size-[6px] -translate-x-1/2 rounded-full bg-accent"
              style={{ animationDelay: `${-i * 3.7}s` }}
            />
            <Reveal className="grid min-h-[320px] grid-cols-[48px_1fr] gap-y-6 pt-[38px] md:grid-cols-[112px_1fr_1fr]">
              <span className="text-[12px] leading-3 text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[48px] leading-[0.9] tracking-[-0.065em] md:text-[72px]">{step.word}</h3>
              <div className="relative z-10 col-start-2 md:col-start-3">
                <p className="text-[10px] leading-3 font-semibold tracking-[0.11em] text-cream/60 uppercase">
                  {step.label}
                </p>
                <p className="mt-6 max-w-[480px] text-[15px] leading-[1.55] font-medium text-cream/55">{step.body}</p>
              </div>
            </Reveal>
            <span
              className="pointer-events-none absolute right-0 -bottom-[0.18em] font-display text-[clamp(150px,21vw,302px)] leading-[0.8] font-medium tracking-[-0.08em] text-white/[0.035] select-none"
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

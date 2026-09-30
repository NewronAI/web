import { plans } from "@/content/site";
import { PillButton, Reveal, SectionHeader } from "./ui";

export function Plans() {
  return (
    <section id="plans" className="px-4 pt-[190px] pb-[200px] md:px-16">
      <SectionHeader eyebrow={plans.eyebrow} title={plans.title} />

      <div className="mt-[72px] grid gap-4 md:grid-cols-2">
        {plans.items.map((plan, i) => {
          const dark = i === 0;
          return (
            <Reveal key={plan.name} delay={i * 120}>
              <div
                className={`flex h-full flex-col rounded-2xl px-6 pt-12 pb-10 md:px-10 ${
                  dark ? "bg-ink text-cream" : "border border-line"
                }`}
              >
                <p className={`text-[12px] ${dark ? "text-cream/60" : "text-muted"}`}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-7 text-[30px] leading-none tracking-[-0.045em] md:text-[36px]">{plan.name}</h3>
                <p className="mt-4 text-[56px] leading-[0.95] tracking-[-0.065em] md:text-[72px]">{plan.price}</p>
                <p className={`mt-16 max-w-[420px] text-[13px] leading-[1.55] ${dark ? "text-cream/60" : "text-muted"}`}>
                  {plan.body}
                </p>
                <div className="mt-8">
                  <PillButton href={plan.href} tone={dark ? "light" : "dark"}>
                    {plan.cta}
                  </PillButton>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

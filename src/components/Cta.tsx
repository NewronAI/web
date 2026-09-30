import { brand } from "@/content/site";
import type { Link } from "@/content/pages/types";
import { LogoMark, PillButton, Reveal, SmartLink } from "./ui";

export type CtaProps = {
  status: string;
  title: string[];
  body: string;
  primary: Link;
  secondary?: Link;
};

export function Cta({ status, title, body, primary, secondary }: CtaProps) {
  return (
    <section className="px-2 md:px-4">
      <div className="flex min-h-[720px] flex-col justify-between rounded-3xl bg-accent px-5 pt-14 pb-14 text-ink md:px-14">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2.5 text-[17px] font-bold tracking-[-0.03em]">
            <LogoMark className="h-[22px]" />
            {brand}
          </span>
          <span className="flex items-center gap-2 text-right text-[10px] tracking-[0.1em]">
            <span className="pulse-dot size-[5px] shrink-0 rounded-full bg-ink" />
            {status}
          </span>
        </div>

        <Reveal>
          <h2 className="mt-24 font-display text-[52px] leading-none tracking-[-0.04em] sm:text-[64px] md:text-[92px]">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[400px] text-[14px] leading-[1.5]">{body}</p>
          <div className="flex flex-wrap items-center gap-5">
            {secondary && (
              <SmartLink
                href={secondary.href}
                className="text-[12px] font-medium tracking-[-0.01em] underline-offset-4 hover:underline"
              >
                {secondary.label}
              </SmartLink>
            )}
            <PillButton href={primary.href} tone="dark">
              {primary.label}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}

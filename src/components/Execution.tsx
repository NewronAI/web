"use client";

import { useEffect, useState } from "react";
import { execution } from "@/content/site";
import { SectionHeader, useInView } from "./ui";

const STEP_MS = 1100;
// phase: 0 = request received, 1..4 = steps running, 5 = resolved
const LAST_PHASE = execution.steps.length + 1;

export function Execution() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3, false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setPhase((p) => (p >= LAST_PHASE + 2 ? 0 : p + 1));
    }, STEP_MS);
    return () => clearInterval(id);
  }, [inView]);

  const resolved = phase >= LAST_PHASE;

  return (
    <section id="execution" className="bg-fog px-4 pt-[160px] pb-[180px] md:px-16">
      <SectionHeader eyebrow={execution.eyebrow} title={execution.title} body={execution.body} />

      <div
        ref={ref}
        className="relative mt-16 overflow-hidden rounded-[20px] bg-ink-2 px-5 pt-9 pb-12 text-cream md:px-8"
        style={{
          backgroundImage:
            "radial-gradient(60% 70% at 70% 40%, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      >
        <div className="flex items-center justify-between text-[10px] leading-3 tracking-[0.1em] text-muted">
          <span className="uppercase">{execution.panelLabel}</span>
          <span className="flex items-center gap-2">
            <span className={`size-[5px] rounded-full bg-accent ${resolved ? "" : "pulse-dot"}`} />
            {resolved ? "Complete" : execution.status}
          </span>
        </div>

        <div className="mt-9 grid grid-cols-1 items-center gap-3 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr_1.35fr]">
          {/* Request */}
          <div className="flex min-h-[232px] flex-col justify-between rounded-2xl bg-cream p-6 text-ink">
            <div>
              <p className="text-[10px] leading-3 tracking-[0.1em] text-muted uppercase">{execution.request.label}</p>
              <p className="mt-9 text-[30px] leading-[0.98] tracking-[-0.055em] lg:text-[34px]">
                {execution.request.text.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
            </div>
            <p className="mt-6 flex items-center gap-2 text-[10px] tracking-[0.1em] text-muted">
              <span className="size-[5px] rounded-full bg-muted" />
              {execution.request.note}
            </p>
          </div>

          {/* Steps */}
          {execution.steps.map((step, i) => {
            const state = phase > i + 1 ? "done" : phase === i + 1 ? "running" : "idle";
            return (
              <div
                key={step.title}
                className={`flex min-h-[190px] flex-col justify-between rounded-2xl border p-5 transition-all duration-500 ${
                  state === "idle"
                    ? "border-white/10 bg-ink opacity-60"
                    : state === "running"
                      ? "-translate-y-1 border-accent/60 bg-[#1a1a18]"
                      : "border-white/15 bg-ink"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] leading-3 tracking-[0.1em]">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={`size-[5px] rounded-full ${
                      state === "running" ? "pulse-dot bg-accent" : state === "done" ? "bg-accent" : "bg-white/25"
                    }`}
                  />
                </div>
                <div>
                  <p
                    className={`font-display text-[16px] leading-none tracking-[-0.035em] transition-all duration-500 ${
                      state === "idle" ? "translate-y-1 opacity-0" : "opacity-100"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="mt-2.5 text-[10px] leading-3 tracking-[0.1em] text-muted uppercase">{step.tag}</p>
                  <div className="mt-2 h-px bg-white/10">
                    <div
                      className="h-px bg-cream transition-all ease-linear"
                      style={{
                        width: state === "idle" ? "0%" : "100%",
                        transitionDuration: state === "running" ? `${STEP_MS}ms` : "300ms",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Outcome */}
          <div
            className={`flex min-h-[226px] flex-col justify-between rounded-2xl p-6 transition-all duration-700 ${
              resolved ? "bg-accent text-ink" : "bg-[#2c2f38] text-ink/40"
            }`}
          >
            <div>
              <p className="text-[10px] leading-3 tracking-[0.1em] uppercase opacity-60">{execution.outcome.label}</p>
              <p className="mt-9 text-[30px] leading-[0.98] tracking-[-0.055em] lg:text-[34px]">
                {execution.outcome.title}
              </p>
              <p className="mt-3 text-[14px] leading-[1.55]">{execution.outcome.body}</p>
            </div>
            <p className="mt-6 text-[10px] tracking-[0.1em] opacity-60">{execution.outcome.meta}</p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-7">
          {execution.log.map((entry, i) => (
            <span
              key={entry}
              className={`flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[10px] leading-3 font-semibold tracking-[0.06em] text-cream/60 transition-all duration-500 ${
                phase > i + 1 ? "opacity-100" : "translate-y-1 opacity-0"
              }`}
            >
              <span className="size-1 rounded-full bg-accent" />
              {entry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

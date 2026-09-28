"use client";

import { useEffect, useState } from "react";
import { metrics, metricsNote } from "@/content/site";
import { useInView } from "./ui";

function CountUp({ value, decimals, run }: { value: number; decimals: number; run: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1600);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);

  return <>{n.toFixed(decimals)}</>;
}

export function Metrics() {
  const [ref, inView] = useInView<HTMLDivElement>(0.4);

  return (
    <section className="px-4 pt-[190px] md:px-16">
      <div ref={ref} className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`px-4 pt-[38px] pb-10 md:px-8 ${i % 2 === 0 ? "border-r" : "lg:border-r"} ${
              i < 2 ? "border-b lg:border-b-0" : ""
            } border-line last:border-r-0`}
          >
            <p className="text-[10px] leading-3 tracking-[0.1em] text-muted">{String(i + 1).padStart(2, "0")}</p>
            <p className="mt-9 font-mono text-[44px] leading-[0.9] tracking-[-0.075em] md:text-[72px]">
              {m.prefix}
              <CountUp value={m.value} decimals={m.decimals} run={inView} />
              {m.suffix}
            </p>
            <p className="mt-3 text-[11px] leading-[1.4] text-muted">{m.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-[640px] text-[10px] leading-[1.5] tracking-[0.08em] text-muted">{metricsNote}</p>
    </section>
  );
}

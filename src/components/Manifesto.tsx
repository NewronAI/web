"use client";

import { useEffect, useRef, useState } from "react";
import { manifesto } from "@/content/site";
import { Reveal } from "./ui";

type ManifestoData = { eyebrow: string; statement: string; rail?: { label: string; value: string }[] };

export function Manifesto({ data = manifesto }: { data?: ManifestoData }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const words = data.statement.split(" ");
  const total = data.statement.replace(/ /g, "").length;

  // Characters darken one by one as the statement scrolls through the viewport.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.85 - r.top) / (vh * 0.5);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  let index = 0;
  const lit = progress * total;

  return (
    <section className="px-4 pt-[140px] pb-[120px] md:px-16 md:pt-[200px]">
      <div className="grid gap-8 md:grid-cols-[396px_1fr]">
        <p className="eyebrow text-muted">{data.eyebrow}</p>
        <p
          ref={ref}
          className="max-w-[780px] text-[32px] leading-[1] tracking-[-0.055em] md:text-[48px]"
          aria-label={data.statement}
        >
          {words.map((word, w) => (
            <span key={w} className="inline-block whitespace-nowrap" aria-hidden>
              {word.split("").map((ch) => {
                const i = index++;
                return (
                  <span
                    key={i}
                    className="transition-colors duration-200"
                    style={{ color: i < lit ? "var(--ink)" : "rgba(17,17,15,0.18)" }}
                  >
                    {ch}
                  </span>
                );
              })}
              {w < words.length - 1 && " "}
            </span>
          ))}
        </p>
      </div>

      {data.rail && (
      <Reveal className="mt-[100px]">
        <div className="grid border-y border-line md:grid-cols-3">
          {data.rail.map((item, i) => (
            <div
              key={item.label}
              className={`px-4 pt-[22px] pb-6 ${i < 2 ? "border-b border-line md:border-r md:border-b-0" : ""}`}
            >
              <p className="text-[10px] leading-3 tracking-[0.1em] text-muted uppercase">{item.label}</p>
              <p className="mt-12 text-[15px] leading-[1.35] tracking-[-0.02em]">{item.value}</p>
            </div>
          ))}
        </div>
      </Reveal>
      )}
    </section>
  );
}

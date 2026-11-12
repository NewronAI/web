"use client";

import { useEffect, useRef } from "react";

const DURATION = 1600;
const easeOut = (t: number) => 1 - (1 - t) ** 3;

/**
  Counts a stat like "66%", "230k+" or "< 60s" up from 0 when it scrolls into view;
  the text around the number stays as written. Server HTML and screen readers get the
  final value; reduced-motion visitors see it without the count.
*/
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const m = value.match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/);

  useEffect(() => {
    const el = ref.current;
    if (!el || !m || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, pre, num, post] = m;
    const target = parseFloat(num);
    const decimals = num.split(".")[1]?.length ?? 0;
    const show = (n: number) => (el.textContent = `${pre}${n.toFixed(decimals)}${post}`);

    show(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          show(target * easeOut(t));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [m?.[0]]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!m) return <>{value}</>;
  return (
    // The final value sits invisibly underneath to hold the width, so nothing shifts while counting.
    <span className="inline-grid" aria-label={value} role="text">
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {value}
      </span>
      <span ref={ref} aria-hidden className="col-start-1 row-start-1">
        {value}
      </span>
    </span>
  );
}

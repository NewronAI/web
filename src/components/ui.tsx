export function Frame({ title, meta, children }: { title: string; meta?: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line-2 bg-bg shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]">
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-2.5 font-mono text-[11px] text-muted">
        <span className="truncate text-fg-2">{title}</span>
        {meta && <span className="shrink-0">{meta}</span>}
      </div>
      {children}
    </div>
  );
}

export function Dot({ tone = "ok" }: { tone?: "ok" | "warn" | "open" }) {
  const cls = tone === "ok" ? "bg-ok" : tone === "warn" ? "bg-warn" : "border border-warn";
  return <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${cls}`} aria-hidden />;
}

/** "≈1/8" set in the current font; the ⅛ glyph isn't in Geist and falls back to a mismatched face. */
export function Eighth() {
  return (
    <span role="img" className="inline-flex items-start tabular-nums" aria-label="about one eighth">
      <span aria-hidden>≈</span>
      <span aria-hidden className="mt-[0.1em] text-[0.52em] leading-none">
        1
      </span>
      <span aria-hidden className="mx-[0.02em]">
        /
      </span>
      <span aria-hidden className="self-end mb-[0.12em] text-[0.52em] leading-none">
        8
      </span>
    </span>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 shrink-0 text-ok ${className}`} aria-hidden>
      <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.16" />
      <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

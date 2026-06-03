/* global React */
const { useState, useEffect, useRef } = React;

// ============ Logo ============
function Mark({ size = 28, color = "currentColor" }) {
  // Geometric "N" — two angled strokes inside a circle
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-label="Newron">
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="1.2" />
      <path
        d="M10 22 V10 L22 22 V10"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
  );
}

function Wordmark({ height = 22 }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Mark size={height + 6} />
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: height + 4,
          letterSpacing: "-0.01em",
          lineHeight: 1,
          fontStyle: "italic",
        }}
      >
        Newron
      </span>
    </div>
  );
}

// ============ Animated number ============
function AnimatedNumber({ value, prefix = "", suffix = "", duration = 1400, decimals = 0 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular">
      {prefix}
      {decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

// ============ Section header ============
function SectionHeader({ eyebrow, title, kicker, align = "left", children }) {
  return (
    <header style={{
      maxWidth: align === "center" ? 760 : 920,
      margin: align === "center" ? "0 auto" : "0",
      textAlign: align,
      marginBottom: "calc(48px * var(--density))",
    }}>
      {eyebrow && (
        <div className="eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</div>
      )}
      <h2 className="display" style={{
        margin: 0,
        fontSize: "clamp(40px, 5.4vw, 72px)",
        lineHeight: 1.02,
        color: "var(--ink)",
      }}>
        {title}
      </h2>
      {kicker && (
        <p style={{
          marginTop: 22,
          maxWidth: 620,
          fontSize: 17,
          lineHeight: 1.55,
          color: "var(--ink-soft)",
          marginInline: align === "center" ? "auto" : 0,
        }}>
          {kicker}
        </p>
      )}
      {children}
    </header>
  );
}

// ============ Tiny icon set ============
const Icon = {
  arrow: (p) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
      <path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  ),
  check: (p) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
      <path d="M2.5 7.5 L5.5 10.5 L11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" fill="none" />
    </svg>
  ),
  dot: (p) => (
    <svg width="8" height="8" viewBox="0 0 8 8" {...p}>
      <circle cx="4" cy="4" r="3" fill="currentColor" />
    </svg>
  ),
  spark: (p) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
      <path d="M7 1 L8.2 5.8 L13 7 L8.2 8.2 L7 13 L5.8 8.2 L1 7 L5.8 5.8 Z" fill="currentColor" />
    </svg>
  ),
  shield: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <path d="M8 1.5 L13.5 3.5 V8 C13.5 11 11 13.4 8 14.5 C5 13.4 2.5 11 2.5 8 V3.5 Z" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </svg>
  ),
  cube: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <path d="M8 2 L13.5 5 V11 L8 14 L2.5 11 V5 Z M8 2 V8 M8 8 L13.5 5 M8 8 L2.5 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  cpu: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <rect x="3" y="3" width="10" height="10" stroke="currentColor" strokeWidth="1.2" />
      <rect x="6" y="6" width="4" height="4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 1 V3 M10 1 V3 M6 13 V15 M10 13 V15 M1 6 H3 M1 10 H3 M13 6 H15 M13 10 H15" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
};

Object.assign(window, { Mark, Wordmark, AnimatedNumber, SectionHeader, Icon });

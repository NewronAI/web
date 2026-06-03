/* global React, ReactDOM, TweaksPanel, TweakSection, TweakRadio, TweakSelect, TweakColor, TweakToggle, TweakText, useTweaks,
   Nav, Hero, MetricsStrip, Lending, Insurance, Governance, Services, WhyNewron, Customers, CTA, Footer */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "institutional",
  "accent": "#1d6f5a",
  "type": "editorial",
  "mode": "light",
  "density": "regular",
  "heroVariant": "editorial",
  "heroHeadline": "The intelligence layer for India's lenders.",
  "heroSub": "Newron builds the AI systems banks and NBFCs deploy to underwrite faster, settle claims sooner, and serve citizens in their own language — privately, on your infrastructure."
}/*EDITMODE-END*/;

// Accent presets — curated harmonious set
const ACCENT_OPTIONS = [
  "#1d6f5a", // refined emerald (banking + modern)
  "#163c5f", // deep navy
  "#7a3320", // oxblood
  "#1a1a1a", // monochrome (no accent — pure ink)
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to root
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-direction", t.direction === "sharp" ? "sharp" : "inst");
    root.setAttribute("data-mode", t.mode);
    root.setAttribute("data-density", t.density);
    root.style.setProperty("--accent", t.accent);
    // accent-soft mix
    root.style.setProperty("--accent-soft", `color-mix(in oklab, ${t.accent} 14%, transparent)`);
    if (t.type === "all-sans") {
      root.style.setProperty("--font-display", "'IBM Plex Sans', system-ui, sans-serif");
    } else if (t.type === "editorial") {
      root.style.setProperty("--font-display", "'Instrument Serif', 'Times New Roman', serif");
    } else if (t.type === "mono-display") {
      root.style.setProperty("--font-display", "'IBM Plex Mono', ui-monospace, monospace");
    }
  }, [t]);

  return (
    <>
      <Nav />
      <Hero
        variant={t.heroVariant}
        copy={{ headline: t.heroHeadline, sub: t.heroSub }}
      />
      <MetricsStrip />
      <Lending />
      <Insurance />
      <Governance />
      <Services />
      <WhyNewron />
      <Customers />
      <CTA />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Direction" />
        <TweakRadio
          label="Style"
          value={t.direction}
          options={["institutional", "sharp"]}
          onChange={(v) => {
            // Apply sensible defaults per direction
            if (v === "sharp") {
              setTweak({ direction: v, accent: "#163c5f", type: "all-sans" });
            } else {
              setTweak({ direction: v, accent: "#1d6f5a", type: "editorial" });
            }
          }}
        />

        <TweakSection label="Theme" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakRadio
          label="Mode"
          value={t.mode}
          options={["light", "dark"]}
          onChange={(v) => setTweak("mode", v)}
        />

        <TweakSection label="Type & density" />
        <TweakSelect
          label="Type pairing"
          value={t.type}
          options={[
            { value: "editorial", label: "Editorial serif + sans" },
            { value: "all-sans", label: "All sans (modern)" },
            { value: "mono-display", label: "Mono display (technical)" },
          ]}
          onChange={(v) => setTweak("type", v)}
        />
        <TweakRadio
          label="Density"
          value={t.density}
          options={["compact", "regular", "roomy"]}
          onChange={(v) => setTweak("density", v)}
        />

        <TweakSection label="Hero" />
        <TweakSelect
          label="Layout"
          value={t.heroVariant}
          options={[
            { value: "editorial", label: "Editorial wall" },
            { value: "split", label: "Split + product peek" },
            { value: "stat", label: "Big-stat headline" },
          ]}
          onChange={(v) => setTweak("heroVariant", v)}
        />
        <TweakText
          label="Headline"
          value={t.heroHeadline}
          onChange={(v) => setTweak("heroHeadline", v)}
        />
        <TweakText
          label="Subhead"
          value={t.heroSub}
          onChange={(v) => setTweak("heroSub", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

"use client";

import { useSyncExternalStore } from "react";

/*
  Temporary review aid: switches between the current design and the previous one
  (globals.css, html[data-design="classic"]). The choice lives on <html> and in
  localStorage; DESIGN_SCRIPT applies it before first paint, and ?design=classic|new in
  the URL sets it (shareable link). Remove once a design is chosen.
*/
const KEY = "newron-design";

export const DESIGN_SCRIPT = `try{var q=new URLSearchParams(location.search).get("design");if(q==="classic"||q==="new")localStorage.setItem("${KEY}",q);if((q||localStorage.getItem("${KEY}"))==="classic")document.documentElement.dataset.design="classic"}catch(e){}`;

type Design = "new" | "classic";

function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-design"] });
  return () => mo.disconnect();
}

const read = (): Design => (document.documentElement.dataset.design === "classic" ? "classic" : "new");

function set(design: Design) {
  const root = document.documentElement;
  if (design === "classic") root.dataset.design = "classic";
  else delete root.dataset.design;
  try {
    localStorage.setItem(KEY, design);
  } catch {}
}

const OPTIONS: { v: Design; label: string }[] = [
  { v: "new", label: "New design" },
  { v: "classic", label: "Previous design" },
];

export function DesignToggle() {
  const design = useSyncExternalStore(subscribe, read, () => "new" as Design);

  return (
    <div className="flex items-center justify-center gap-3 border-b border-line bg-s1 px-4 py-2 text-xs text-fg-2">
      <span className="hidden sm:inline">Design preview</span>
      <div role="radiogroup" aria-label="Design preview" className="inline-flex rounded-full border border-line-2 bg-bg p-0.5">
        {OPTIONS.map((o) => (
          <button
            key={o.v}
            type="button"
            role="radio"
            aria-checked={design === o.v}
            onClick={() => set(o.v)}
            className={`rounded-full px-3 py-1 font-medium transition ${
              design === o.v ? "bg-fg text-bg" : "text-fg-2 hover:text-fg"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

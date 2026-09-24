"use client";
import { useEffect, useState } from "react";
import { prefersReducedMotion, refreshScenes } from "./scene-runtime";
import { MOTION_KEY } from "./motion-bootstrap";

/* The system preference decides by default. The control below lets someone
   override it either way for this site; the answer is stored on the document
   element so the stylesheet and the scene runtime read the same value. */

const listeners = new Set<() => void>();

export function setMotionPreference(value: "reduced" | "full") {
  document.documentElement.dataset.motion = value;
  try { localStorage.setItem(MOTION_KEY, value); } catch { /* storage unavailable */ }
  listeners.forEach(listener => listener());
  refreshScenes();
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const read = () => setReduced(prefersReducedMotion());
    read();
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    /* Without a stored choice the attribute follows the system setting. */
    const follow = () => {
      let stored: string | null = null;
      try { stored = localStorage.getItem(MOTION_KEY); } catch { /* storage unavailable */ }
      if (stored !== "reduced" && stored !== "full") {
        document.documentElement.dataset.motion = media.matches ? "reduced" : "full";
        refreshScenes();
      }
      read();
    };
    media.addEventListener("change", follow);
    listeners.add(read);
    return () => { media.removeEventListener("change", follow); listeners.delete(read); };
  }, []);
  return reduced;
}

export function MotionToggle() {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return null;
  return <button
    type="button"
    className="motion-toggle"
    aria-pressed={reduced}
    onClick={() => setMotionPreference(reduced ? "full" : "reduced")}
  >
    <i aria-hidden="true" />{reduced ? "Motion reduced" : "Reduce motion"}
  </button>;
}

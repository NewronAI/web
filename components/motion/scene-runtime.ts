"use client";
import type { CueMap, Easing, SceneMode } from "./scene-types";

/* One scheduler for every scene on the page.
   Each frame reads every registered section's position first and only then
   writes, so the whole page costs a single layout flush however many scenes are
   registered. Positions are deliberately not cached: anything above a scene —
   a disclosure opening, an image arriving, a font swapping — moves it, and a
   stale offset shows the wrong part of the story. Progress is published as
   custom properties on the scene stage, so illustrations re-render in CSS
   rather than in React. */

export type SceneRegistration = {
  section: HTMLElement;
  stage: HTMLElement;
  mode: SceneMode;
  /** Fraction of the section's height used as travel in `enter` / `cross`. */
  span?: number;
  cues?: CueMap;
  /** Progress at which each narrative step becomes active; must be ascending. */
  beats?: number[];
  onStep?: (index: number) => void;
  onProgress?: (progress: number) => void;
};

type Entry = Omit<SceneRegistration, "cues" | "beats" | "span"> & {
  cues: [string, number, number, Easing][];
  beats: number[];
  span: number;
  resolved: SceneMode;
  baseSpan: number;
  stageHeight: number;
  lastProgress: number;
  lastStep: number;
};

const scenes = new Set<Entry>();
const readings: number[] = [];
let frame = 0;
let bound = false;
let sceneTop = 76;
let reduced = false;

const clamp01 = (value: number) => (value < 0 ? 0 : value > 1 ? 1 : value);

const shape = (t: number, easing: Easing) =>
  easing === "linear" ? t
  : easing === "in" ? t * t
  : easing === "out" ? 1 - (1 - t) * (1 - t)
  : t * t * (3 - 2 * t);

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  const preference = document.documentElement.dataset.motion;
  if (preference === "reduced") return true;
  if (preference === "full") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* A scene that cannot pin still tells its story — it runs it over its own
   travel instead, starting where the stage would have parked. The stylesheet
   owns that decision, and can retune the travel with --scene-span, because the
   viewport rules that force it live there too. */
function measure(entry: Entry) {
  const styles = getComputedStyle(entry.section);
  entry.resolved = entry.mode !== "pin" ? entry.mode
    : styles.getPropertyValue("--scene-pinned").trim() === "0" ? "enter" : "pin";
  const span = parseFloat(styles.getPropertyValue("--scene-span"));
  entry.span = Number.isFinite(span) ? span : entry.baseSpan;
  entry.stageHeight = entry.stage.offsetHeight;
  entry.lastProgress = -1;
}

function travelOf(entry: Entry, height: number) {
  return entry.resolved === "pin"
    ? Math.max(120, height - entry.stageHeight)
    : Math.max(120, height * entry.span);
}

function measureAll() {
  const root = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scene-top"));
  if (Number.isFinite(root)) sceneTop = root;
  reduced = prefersReducedMotion();
  scenes.forEach(measure);
  update();
}

function progressOf(entry: Entry, viewport: number) {
  const rect = entry.section.getBoundingClientRect();
  /* A pinned stage starts moving the moment it reaches its sticky offset; a
     crossing section starts a little after its top edge enters the viewport. */
  const anchor = entry.resolved === "cross" ? viewport * 0.82 : sceneTop;
  return clamp01((anchor - rect.top) / travelOf(entry, rect.height));
}

function update() {
  frame = 0;
  const viewport = window.innerHeight;

  let index = 0;
  for (const entry of scenes) readings[index++] = reduced ? 1 : progressOf(entry, viewport);

  index = 0;
  for (const entry of scenes) {
    const progress = readings[index++];
    if (Math.abs(progress - entry.lastProgress) < 0.0004) continue;
    entry.lastProgress = progress;

    const style = entry.stage.style;
    style.setProperty("--p", progress.toFixed(4));
    for (const [name, start, end, easing] of entry.cues)
      style.setProperty(`--c-${name}`, shape(clamp01((progress - start) / (end - start)), easing).toFixed(4));

    entry.onProgress?.(progress);

    if (entry.beats.length) {
      let step = 0;
      for (let i = 0; i < entry.beats.length; i += 1) if (progress >= entry.beats[i]) step = i;
      if (step !== entry.lastStep) { entry.lastStep = step; entry.onStep?.(step); }
    }
  }
}

const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

function bind() {
  if (bound) return;
  bound = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", measureAll);
  window.addEventListener("orientationchange", measureAll);
  /* A disclosure opening inside a section changes every scene below it. */
  document.addEventListener("toggle", schedule, true);
  document.fonts?.ready.then(measureAll).catch(() => {});
}

export function registerScene(registration: SceneRegistration) {
  const entry: Entry = {
    ...registration,
    span: registration.span ?? 0.62,
    baseSpan: registration.span ?? 0.62,
    beats: registration.beats ?? [],
    cues: Object.entries(registration.cues ?? {}).map(([name, cue]) => [name, cue[0], cue[1], cue[2] ?? "ease"]),
    resolved: registration.mode,
    stageHeight: 0,
    lastProgress: -1,
    lastStep: -1,
  };
  scenes.add(entry);
  bind();
  reduced = prefersReducedMotion();
  measure(entry);
  /* Catches a stage that changes height after first paint, such as one whose
     illustration only settles once its webfont has loaded. */
  const observer = new ResizeObserver(() => { measure(entry); schedule(); });
  observer.observe(entry.stage);
  schedule();
  return () => {
    observer.disconnect();
    scenes.delete(entry);
    entry.stage.removeAttribute("style");
  };
}

/** Where the page must sit for `progress` to be showing in this section. */
export function scrollOffsetFor(section: HTMLElement, progress: number) {
  for (const entry of scenes) {
    if (entry.section !== section) continue;
    const rect = section.getBoundingClientRect();
    const anchor = entry.resolved === "cross" ? window.innerHeight * 0.82 : sceneTop;
    return rect.top + window.scrollY - anchor + progress * travelOf(entry, rect.height);
  }
  return null;
}

export function refreshScenes() {
  if (typeof window !== "undefined") measureAll();
}

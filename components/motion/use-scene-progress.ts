"use client";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { registerScene, scrollOffsetFor } from "./scene-runtime";
import { useReducedMotion } from "./motion-preferences";
import type { CueMap, SceneBeat, SceneMode } from "./scene-types";

/* Measuring after paint would show one frame of the finished composition before
   the scene snapped back to its opening state, so registration is a layout
   effect on the client and a no-op on the server. */
const useSceneEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export type SceneProgressOptions = {
  mode?: SceneMode;
  span?: number;
  cues?: CueMap;
  beats?: readonly SceneBeat[];
  onProgress?: (progress: number) => void;
};

export function useSceneProgress({ mode = "pin", span, cues, beats = [], onProgress }: SceneProgressOptions) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const latest = useRef({ beats, onProgress });
  latest.current = { beats, onProgress };
  const [step, setStep] = useState(0);
  const reduced = useReducedMotion();

  useSceneEffect(() => {
    const section = sectionRef.current, stage = stageRef.current;
    if (!section || !stage) return;
    return registerScene({
      section, stage, mode, span,
      cues,
      beats: latest.current.beats.map(beat => beat.at),
      onStep: setStep,
      onProgress: value => latest.current.onProgress?.(value),
    });
    // `cues` and `beats` are module-level constants in every caller.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, span, reduced]);

  /** Put the page where the given beat is on screen and settled. */
  const goToBeat = useCallback((index: number) => {
    const section = sectionRef.current;
    const list = latest.current.beats;
    const beat = list[index];
    if (!section || !beat) return;
    if (reduced) { setStep(index); return; }
    const next = list[index + 1];
    /* Land on the beat's result, never on its opening frame — and never so far
       that the next beat's heading has already taken over. */
    const ceiling = next ? next.at - 0.01 : 0.98;
    const settled = Math.min(beat.show ?? Math.min(beat.at + 0.06, next ? (beat.at + next.at) / 2 : 0.97), ceiling);
    const target = scrollOffsetFor(section, settled);
    if (target === null) return;
    window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
  }, [reduced]);

  return { sectionRef, stageRef, step, goToBeat, reduced };
}

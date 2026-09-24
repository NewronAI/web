"use client";
import type React from "react";
import type { CSSProperties, ReactNode } from "react";
import { useSceneProgress } from "./use-scene-progress";
import type { CueMap, SceneBeat, SceneMode } from "./scene-types";

export type SceneRender = (state: {
  step: number;
  goToBeat: (index: number) => void;
  reduced: boolean;
}) => ReactNode;

/* The section owns the scroll distance; the stage owns the composition. Nothing
   below this component reads the scroll position — the illustrations read the
   custom properties the runtime writes onto the stage. */
export default function ScrollScene({
  as: Tag = "section", id, className = "", travel = "200svh", mode = "pin", span, cues, beats, labelledBy, onProgress, children,
}: {
  /** `div` when the scene wraps markup that already carries its own landmark. */
  as?: "section" | "div";
  id?: string;
  className?: string;
  /** Total height of the section, stage included. */
  travel?: string;
  mode?: SceneMode;
  span?: number;
  cues?: CueMap;
  beats?: readonly SceneBeat[];
  labelledBy?: string;
  /** For illustrations that draw themselves, such as the canvas field. */
  onProgress?: (progress: number) => void;
  children: SceneRender;
}) {
  const { sectionRef, stageRef, step, goToBeat, reduced } = useSceneProgress({ mode, span, cues, beats, onProgress });
  return <Tag
    ref={sectionRef as React.Ref<HTMLElement & HTMLDivElement>}
    id={id}
    aria-labelledby={labelledBy}
    className={`scroll-scene ${className}`}
    style={{ "--travel": travel } as CSSProperties}
  >
    <div className="scene-track">
      <div className="scene-stage" ref={stageRef} data-step={step} data-reduced={reduced ? "" : undefined}>
        {children({ step, goToBeat, reduced })}
      </div>
    </div>
  </Tag>;
}

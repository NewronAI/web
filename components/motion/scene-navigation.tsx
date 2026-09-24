"use client";
import type { SceneBeat } from "./scene-types";

/* These are not tabs: nothing is switched by pressing them. They report which
   part of the story is on screen and move the page to another part of it, so
   they are a list of links-by-scroll marked with aria-current. */
export default function SceneNavigation({
  beats, step, goToBeat, reduced, label, className = "",
}: {
  beats: readonly SceneBeat[];
  step: number;
  goToBeat: (index: number) => void;
  reduced: boolean;
  label: string;
  className?: string;
}) {
  return <ol className={`scene-steps ${className}`} aria-label={label}>
    {beats.map((beat, index) => {
      const current = !reduced && index === step;
      return <li key={beat.title} className="scene-step" data-active={current ? "" : undefined}>
        <button type="button" onClick={() => goToBeat(index)} aria-current={current ? "step" : undefined}>
          <span className="scene-step-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="scene-step-body">
            <strong>{beat.title}</strong>
            <small>{beat.summary}</small>
            {beat.copy && <em hidden={!reduced && !current}>{beat.copy}</em>}
          </span>
          <span className="scene-step-mark" aria-hidden="true">↗</span>
        </button>
      </li>;
    })}
  </ol>;
}

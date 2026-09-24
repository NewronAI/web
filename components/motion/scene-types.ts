/* The shared vocabulary every scroll scene is described in. A scene is a section
   of the page whose illustration is a function of one normalised progress value. */

export type Easing = "ease" | "linear" | "in" | "out";

/** A cue maps a slice of the scene's 0–1 progress onto its own 0–1 value.
    It reaches the illustration as the custom property `--c-<name>`. */
export type Cue = readonly [start: number, end: number, easing?: Easing];
export type CueMap = Readonly<Record<string, Cue>>;

/** pin   — the stage sticks to the viewport while the section scrolls past it.
    enter — progress runs over the first slice of the section's own travel.
    cross — progress runs as the section crosses the viewport, with no pinning.
    Scenes ask for `pin`; narrow or short viewports demote them to `cross`
    through CSS (`--scene-pinned: 0`), which the runtime reads when measuring. */
export type SceneMode = "pin" | "enter" | "cross";

/** One narrative step. `at` is the progress where it becomes the active beat. */
export type SceneBeat = {
  at: number;
  /** Progress a step control navigates to: the beat's result, visibly complete.
      Defaults to just inside the beat, which is right for a plain timeline. */
  show?: number;
  title: string;
  summary: string;
  copy?: string;
};

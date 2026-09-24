"use client";
import type { CSSProperties, ReactNode } from "react";

/* Depth lives on its own element so a layer's parallax never fights the
   transform an illustration puts on its own contents. `depth` is a multiplier:
   0 sits on the stage, 1 drifts a full step against the scroll. */
export default function SceneLayer({
  depth = 0, lift = 0, className = "", children, hidden,
}: {
  depth?: number;
  /** Extra vertical settle applied as the scene completes, in stage pixels. */
  lift?: number;
  className?: string;
  children?: ReactNode;
  hidden?: boolean;
}) {
  return <div
    className={`scene-layer ${className}`}
    aria-hidden={hidden ? "true" : undefined}
    style={{ "--depth": depth, "--lift": `${lift}px` } as CSSProperties}
  >{children}</div>;
}

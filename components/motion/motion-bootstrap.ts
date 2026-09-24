/* Shared by the server-rendered <head> and the client control, so both agree on
   where the stored preference lives. No "use client": the layout needs the
   literal string, not a client reference. */
export const MOTION_KEY = "newron-motion";

/** Runs before first paint. A stored choice wins; otherwise the system
    preference is written to the same attribute, so every stylesheet rule can
    key off `data-motion` alone and a "full motion" override actually overrides. */
export const MOTION_BOOTSTRAP =
  `try{var m=localStorage.getItem("${MOTION_KEY}")}catch(e){}` +
  `document.documentElement.dataset.motion=m==="reduced"||m==="full"?m:` +
  `(matchMedia("(prefers-reduced-motion: reduce)").matches?"reduced":"full")`;

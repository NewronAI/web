/* Single external destination for every "Talk to Us" CTA. route() passes
   http(s) hrefs through untouched, so this can be used as an href directly. */
export const BOOKING_URL = "https://calendar.app.google/LfJBqnSonqgrP6GUA";

/* Map a design-bundle href (e.g. "foo.html#x") to a Next route ("/foo#x").
   Plain util (no "use client") so it can be called from server components too. */
export function route(href: string): string {
  if (href.startsWith("#") || href.startsWith("http")) return href;
  const [file, hash] = href.split("#");
  const base = file === "v4.html" ? "/" : "/" + file.replace(/\.html$/, "");
  return hash ? `${base}#${hash}` : base;
}

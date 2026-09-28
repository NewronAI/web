# Newron — web (v3)

Marketing site for [newron.ai](https://www.newron.ai): the applied-AI partner to India's banks, NBFCs, insurers and Government.

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**. Typography is Geist with Instrument Serif italic accents; the visual system is a warm cream base with dark, teal and lavender stacked sheets.

## Run

The lockfile is `bun.lock`, so Bun is the expected package manager:

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # production build
bun run start    # serve the production build
bun run lint
```

`npm install && npm run dev` also works (npm resolves from `package.json`; there is no `package-lock.json`).

## Pages

17 routes, all statically prerendered:

| Group | Routes |
| --- | --- |
| Home | `/` |
| Solutions | `/lending-intelligence`, `/insurance-ai`, `/governance-ai`, `/custom-ai-engineering` |
| Industries | `/banks`, `/nbfcs`, `/industry-insurance`, `/public-sector` |
| Company | `/about`, `/careers`, `/press`, `/open-source` |
| Trust & legal | `/security`, `/responsible-ai`, `/privacy`, `/terms` |

Plus a branded 404, `sitemap.xml`, `robots.txt` and a generated Open Graph image.

## Where things live

- `src/content/pages/*.json` — **all inner-page copy**, captured verbatim from newron.ai. Edit text, stats, FAQs, roles, press items and legal clauses here; no component changes needed. Each page's hero proof point is its `hero.fact`.
- `src/components/content-page.tsx` — the shared template that renders every inner page from its content file.
- `src/components/sections.tsx` — the homepage sections and product fragments.
- `src/lib/site.ts` — nav, footer links, the booking link (`CONTACT_HREF`) and homepage data.
- `src/assets/photos/` — optimised photography, including the About page team photos.
- `src/app/globals.css` — design tokens, sheet themes and global styles.

## Content rules

Copy must match what Newron can stand behind: ISO 27001 is **aligned, not certified**; SOC 2 Type II is **in progress**; production figures are the published ones (66% TAT reduction, 200% productivity uplift, 230k+ hours saved). Check new claims before adding them.

## Other folders

- `design/` — design-source bundle and notes from the previous site (not used by the build).
- `other issues.md` — content review notes on the previous site.

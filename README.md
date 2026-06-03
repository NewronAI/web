# Newron — web

Marketing site for Newron, built on the **Newron v4 design system** (Poppins,
indigo→orange brand gradients, light page + dark Newron-black slabs).

Implemented in **Next.js 16 (App Router) + TypeScript**.

## Run

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /lending-intelligence
npm run build    # production build
npm run start    # serve production build
```

## Routes

| Route                     | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| `/`                       | Redirects to `/lending-intelligence`                               |
| `/lending-intelligence`   | Lending intelligence solution page (implemented)                   |

Nav and footer link to the other site pages (Insurance, Governance, Banks,
About, etc.); those routes are not built yet.

## Structure

```
app/
  globals.css                  Newron v4 design system + editorial layer; self-hosted Poppins
  layout.tsx                   Root layout + metadata
  page.tsx                     / → redirect to /lending-intelligence
  lending-intelligence/page.tsx
components/
  site-chrome.tsx              Shared chrome + toolkit (Nav, Footer, PageHero, Band, Head,
                               FeatureGrid, StatBand, Timeline, FAQ, CTABand, Quote, …)
  illustrations.tsx            IlloLending schematic SVG
public/
  fonts/                       Poppins (self-hosted)
  newron-logo.png
design/                        Original Claude Design handoff bundle (reference only)
  project/                     HTML/JSX prototypes, assets
  chats/                       Design conversation transcripts
  README.md                    Handoff notes
```

The `design/` folder is the source-of-truth handoff the app was built from; it is
reference material and is not part of the build.

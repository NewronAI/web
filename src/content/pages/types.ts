// Schema for every inner page. Each page is a hero, a list of blocks, and a closing CTA.
// Blocks are drawn by src/components/inner/InnerBlocks.tsx, a design separate from the home page.

export type Link = { label: string; href: string };

type Header = {
  /** Small uppercase label above the title, e.g. "In the suite". */
  eyebrow: string;
  /** Title lines. Each entry renders on its own line. */
  title: string[];
  /** Optional supporting paragraph shown on the right. */
  body?: string;
};

export type Block =
  /** Paper section: large statement that darkens as you scroll, with an optional 3-up rail. */
  | { type: "statement"; eyebrow: string; text: string; rail?: { label: string; value: string }[] }
  /** Stacked sticky cards with gradient art (home "Capabilities" design). */
  | (Header & {
      type: "features";
      items: { tags?: string; title: string; body: string; points?: string[] }[];
    })
  /** Columns of labelled lists (e.g. product coverage). 2–4 groups. */
  | (Header & { type: "groups"; groups: { label: string; meta?: string; items: string[] }[] })
  /** Big mono numbers in a bordered grid (home "Metrics" design). 2–4 stats. */
  | { type: "stats"; eyebrow?: string; title?: string[]; stats: { value: string; label: string }[]; note?: string }
  /** Dark numbered bands (home "Process" design). */
  | (Header & { type: "steps"; steps: { word: string; label: string; body: string }[] })
  /** A customer quote. */
  | { type: "quote"; quote: string; name: string; role: string }
  /** Accordion rows of questions and answers. */
  | (Header & { type: "faq"; items: { q: string; a: string }[] })
  /** Row list (home "Work" design) for press items, roles, repositories, deployment options, etc. */
  | (Header & {
      type: "rows";
      items: {
        title: string;
        meta?: string;
        detail?: string;
        body?: string;
        href?: string;
        /** Single-colour SVG in /public, previewed on a light and a dark tile (e.g. a logo). */
        preview?: string;
        /** Text shown in full under the row with a Copy button (e.g. a company boilerplate). */
        copy?: string;
      }[];
    })
  /** Long-form text for legal pages. */
  | { type: "prose"; updated?: string; sections: { heading: string; paragraphs: string[]; bullets?: string[] }[] };

export type PageContent = {
  slug: string;
  /** Breadcrumb group, e.g. "Solutions", "Industries", "Company", "Legal". */
  group: string;
  /** Page name used in the breadcrumb and <title>. */
  name: string;
  metaDescription: string;
  hero: {
    /** 1–2 lines, keep each line ≤ 18 characters. Rendered in the big mono face. */
    title: string[];
    body: string;
    primary: Link;
    secondary?: Link;
    /** Optional step rail under the hero: 3–5 items, word ≤ 12 characters. */
    steps?: { tag: string; word: string }[];
  };
  blocks: Block[];
  cta: {
    status: string;
    /** 1–3 lines, keep each line ≤ 16 characters. */
    title: string[];
    body: string;
    primary: Link;
    secondary?: Link;
  };
};

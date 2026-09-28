// Shape of page content in src/content/pages/*.json.
// Generated from verbatim captures of newron.ai; `*x*` marks italic accents, `**x**` bold, `[t](href)` links.

export type Cta = { label: string; href: string; variant: "primary" | "ghost" };

export type Section = {
  id: string | null;
  n?: string;
  kicker?: string;
  title?: string;
  line?: string;
  /** Plain paragraphs under the heading. */
  prose?: string[];
  cards?: { tag?: string; n?: string; t: string; d?: string; bullets: string[] }[];
  groups?: { h: string; sub: string; items: string[] }[];
  stats?: { kicker: string; caption?: string; items: { n: string; l: string }[] };
  steps?: { label: string; t: string; d?: string }[];
  quote?: { text: string; name: string; role: string };
  faq?: { q: string; a: string }[];
  /** Open roles grouped by team. */
  roles?: { team: string; items: { t: string; meta: string; href: string }[] }[];
  /** Dated announcements. */
  dated?: { date: string; t: string; d: string }[];
  repos?: { name: string; lang: string; license: string; activity: string; d: string; href: string }[];
  /** Bullet list; items may use inline markup. */
  list?: string[];
  /** Certification / programme status cards. */
  status?: { label: string; t: string; d: string }[];
  kit?: { items: { t: string; d: string; href?: string }[]; boilerplate: string };
  /** Long-form prose with a table of contents (legal, policy). */
  longform?: {
    intro?: string;
    date?: { label: string; value: string };
    items: { id: string; toc: string; h: string; body: string[] }[];
  };
};

export type ContentPage = {
  slug: string;
  title: string;
  /** `fact`: one short, verified proof point shown next to the page name above the headline. */
  hero: { group: string; kicker: string; fact?: string; title: string; line: string; ctas: Cta[] };
  sections: Section[];
  cta?: { kicker?: string; title?: string; line?: string; ctas: Cta[] };
};

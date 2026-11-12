import { Accent, SmartLink } from "@/components/kit";

/**
 * Renders the light inline markup used in content files:
 * `**bold**` → <strong>, `*italic*` → the headline accent (or <em> in body copy), `[text](href)` → link.
 */
export function Rich({ text, accent = false }: { text: string; accent?: boolean }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => {
        const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link)
          return (
            <SmartLink key={i} href={link[2]} className="underline decoration-line-2 underline-offset-4 hover:decoration-fg">
              {link[1]}
            </SmartLink>
          );
        if (p.startsWith("**")) return <strong key={i}>{p.slice(2, -2)}</strong>;
        if (p.startsWith("*")) {
          const inner = p.slice(1, -1);
          return accent ? <Accent key={i}>{inner}</Accent> : <em key={i}>{inner}</em>;
        }
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

/** Paragraphs and "- " bullet runs from a long-form body. */
export function Blocks({ lines }: { lines: string[] }) {
  const out: React.ReactNode[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) items.push(lines[i++].slice(2));
      i--;
      out.push(
        <ul key={i}>
          {items.map((it) => (
            <li key={it}>
              <Rich text={it} />
            </li>
          ))}
        </ul>,
      );
    } else {
      out.push(
        <p key={i}>
          <Rich text={lines[i]} />
        </p>,
      );
    }
  }
  return <>{out}</>;
}

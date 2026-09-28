import Link from "next/link";
import { Reveal } from "@/components/reveal";

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);

/** Internal routes use <Link>; external links open in a new tab. */
export function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (isExternal(href)) {
    const blank = href.startsWith("http");
    return (
      <a href={href} className={className} {...(blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function PrimaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <SmartLink
      href={href}
      className="inline-flex items-center rounded-xl border border-fg bg-cta px-5 py-3 text-sm font-medium text-cta-fg shadow-[inset_0_1px_0_rgb(255_255_255/0.7),0_1px_2px_rgb(0_0_0/0.08)] transition duration-200 hover:-translate-y-px hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.7),0_8px_20px_-8px_rgb(0_0_0/0.35)] active:translate-y-0"
    >
      {children}
    </SmartLink>
  );
}

export function SecondaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <SmartLink
      href={href}
      className="inline-flex items-center rounded-xl border border-line-2 px-5 py-3 text-sm text-fg transition duration-200 hover:-translate-y-px hover:border-fg/40 hover:bg-s2 active:translate-y-0"
    >
      {children}
    </SmartLink>
  );
}

export const Accent = ({ children }: { children: React.ReactNode }) => <em className="accent">{children}</em>;

export const H2 = "font-serif text-5xl leading-[1] tracking-[-0.045em] md:text-[4.25rem]";

/** Section head: kicker, headline and one short line. Centered by default. */
export function Head({
  kicker,
  title,
  line,
  more,
  align = "center",
}: {
  kicker: React.ReactNode;
  title: React.ReactNode;
  line?: React.ReactNode;
  /** Optional link to the section's full page. */
  more?: { href: string; label: string };
  align?: "center" | "left";
}) {
  const c = align === "center";
  return (
    <Reveal className={c ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="label text-muted">{kicker}</p>
      <h2 className={`mt-5 text-balance ${H2}`}>{title}</h2>
      {line && <p className={`mt-5 text-balance text-lg text-fg-2 ${c ? "mx-auto max-w-xl" : "max-w-xl"}`}>{line}</p>}
      {more && (
        <SmartLink
          href={more.href}
          className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-fg underline decoration-line-2 underline-offset-[6px] hover:decoration-fg"
        >
          {more.label}
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </SmartLink>
      )}
    </Reveal>
  );
}

export const Num = ({ n, name }: { n: string; name: string }) => (
  <>
    <span className="text-accent">{n}</span> · {name}
  </>
);

/** Standard section wrapper: a stacked sheet with consistent padding. */
export function Sheet({
  id,
  tone = "",
  className = "",
  children,
}: {
  id?: string;
  tone?: "" | "sheet-dark" | "sheet-teal" | "sheet-dawn";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`sheet ${tone} scroll-mt-24`}>
      <div className={`mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52 ${className}`}>{children}</div>
    </section>
  );
}

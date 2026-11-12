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

/** The label twice, stacked: on hover the first slides up and the copy takes its place (.roll in globals.css). */
export function Roll({ children }: { children: React.ReactNode }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  );
}

export function PrimaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <SmartLink
      href={href}
      className="group inline-flex items-center rounded-full bg-cta px-5 py-3.5 text-[15px] font-medium tracking-tight text-cta-fg transition-[filter] duration-300 hover:brightness-110"
    >
      <Roll>{children}</Roll>
    </SmartLink>
  );
}

export function SecondaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <SmartLink
      href={href}
      className="group inline-flex items-center rounded-full bg-s2 px-5 py-3.5 text-[15px] font-medium tracking-tight text-fg transition-colors duration-300 hover:bg-s3"
    >
      <Roll>{children}</Roll>
    </SmartLink>
  );
}

export const Accent = ({ children }: { children: React.ReactNode }) => <em className="accent">{children}</em>;

export const H2 = "font-serif text-5xl leading-[1] tracking-[-0.045em] md:text-[4.25rem]";

/** Section head: headline and one short line. Centered by default. */
export function Head({
  title,
  line,
  more,
  align = "center",
}: {
  title: React.ReactNode;
  line?: React.ReactNode;
  /** Optional link to the section's full page. */
  more?: { href: string; label: string };
  align?: "center" | "left";
}) {
  const c = align === "center";
  return (
    <Reveal className={c ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className={`text-balance ${H2}`}>{title}</h2>
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

/** Standard section wrapper: a stacked sheet with consistent padding. */
export function Sheet({
  id,
  tone = "",
  className = "",
  children,
}: {
  id?: string;
  tone?: "" | "sheet-dark" | "sheet-brand" | "sheet-tint";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`sheet ${tone}`}>
      <div className={`mx-auto max-w-7xl px-5 pt-20 pb-36 md:px-8 md:pt-28 md:pb-52 ${className}`}>{children}</div>
    </section>
  );
}

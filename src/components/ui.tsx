"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Internal pages use client-side navigation; external URLs and files (e.g. /artha.svg) open in a new tab. */
export function SmartLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const isFile = /^\/[^?#]*\.[a-z0-9]+$/i.test(href);
  if (href.startsWith("/") && !isFile) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  const external = /^https?:\/\//.test(href) || isFile;
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function useInView<T extends Element>(threshold = 0.2, once = true) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return [ref, inView] as const;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** The Artha mark from /public/artha.svg, used as a mask so it takes the current text colour. */
export function LogoMark({ className = "" }: { className?: string }) {
  const mask = "url(/artha.svg) center / contain no-repeat";
  return (
    <span
      aria-hidden
      className={`inline-block aspect-[1106/714] shrink-0 bg-current ${className}`}
      style={{ mask, WebkitMask: mask }}
    />
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={className} aria-hidden>
      <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function PillButton({
  children,
  href,
  tone = "light",
  type,
}: {
  children: ReactNode;
  href?: string;
  tone?: "light" | "dark";
  type?: "submit" | "button";
}) {
  const cls = `group inline-flex h-12 items-center gap-3 rounded-full px-[22px] text-[12px] leading-none tracking-[-0.01em] transition-transform duration-300 hover:scale-[1.03] ${
    tone === "light" ? "bg-cream text-ink" : "bg-ink text-cream"
  }`;
  const inner = (
    <>
      {/* Label rolls up on hover */}
      <span className="relative block h-[13px] overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          {children}
        </span>
      </span>
      <ArrowIcon className="transition-transform duration-500 group-hover:rotate-45" />
    </>
  );
  if (href) {
    return (
      <SmartLink href={href} className={cls}>
        {inner}
      </SmartLink>
    );
  }
  return (
    <button type={type ?? "button"} className={cls}>
      {inner}
    </button>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string;
  title: readonly string[];
  body?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <Reveal>
        <p className={`eyebrow mb-4 ${dark ? "text-cream/70" : "text-muted"}`}>{eyebrow}</p>
        <h2 className="text-[40px] leading-[0.9] tracking-[-0.07em] md:text-[56px]">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={120} className="max-w-[400px]">
          <p className={`text-[14px] leading-[1.55] ${dark ? "text-cream/60" : "text-muted"}`}>{body}</p>
        </Reveal>
      )}
    </div>
  );
}

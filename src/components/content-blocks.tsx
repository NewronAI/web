import Image from "next/image";
import { SmartLink } from "@/components/kit";
import { Reveal } from "@/components/reveal";
import type { Section } from "@/content/types";

export function Roles({ roles }: { roles: NonNullable<Section["roles"]> }) {
  return (
    <div className="mx-auto max-w-5xl space-y-10">
      {roles.map((r) => (
        <Reveal key={r.team}>
          <p className="label flex items-center justify-between text-muted">
            <span>{r.team}</span>
            <span>
              {r.items.length} {r.items.length === 1 ? "role" : "roles"}
            </span>
          </p>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {r.items.map((it) => (
              <li key={it.t}>
                <SmartLink
                  href={it.href}
                  className="group flex flex-col gap-1 py-5 transition-colors hover:bg-s1 sm:flex-row sm:items-center sm:justify-between sm:px-3"
                >
                  <span className="text-lg font-medium">{it.t}</span>
                  <span className="flex items-center gap-4 text-sm text-muted">
                    {it.meta}
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

export function Dated({ items }: { items: NonNullable<Section["dated"]> }) {
  return (
    <ol className="mx-auto max-w-5xl divide-y divide-line border-y border-line">
      {items.map((it) => (
        <li key={it.t} className="grid gap-2 py-7 md:grid-cols-[9rem_1fr] md:gap-8">
          <span className="font-mono text-xs uppercase text-accent md:pt-1.5">{it.date}</span>
          <span>
            <span className="block font-serif text-2xl leading-snug tracking-[-0.03em] md:text-[1.7rem]">{it.t}</span>
            <span className="mt-2 block text-fg-2">{it.d}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function Repos({ repos }: { repos: NonNullable<Section["repos"]> }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {repos.map((r, i) => (
        <Reveal key={r.name} delay={i * 80}>
          <SmartLink
            href={r.href}
            className="flex h-full flex-col gap-10 rounded-3xl border border-line bg-s1 p-7 transition-colors hover:border-line-2 hover:bg-s2"
          >
            <span className="flex items-center justify-between font-mono text-xs text-muted">
              <span>NewronAI /</span>
              <span aria-hidden>↗</span>
            </span>
            <span className="mt-auto">
              <span className="block font-mono text-2xl tracking-tight">{r.name}</span>
              <span className="mt-2 block text-sm text-fg-2">{r.d}</span>
              <span className="mt-5 flex flex-wrap gap-1.5 text-xs">
                {[r.lang, r.license, `Last activity ${r.activity}`].map((t) => (
                  <span key={t} className="rounded-full border border-line-2 px-2.5 py-1 text-fg-2">
                    {t}
                  </span>
                ))}
              </span>
            </span>
          </SmartLink>
        </Reveal>
      ))}
    </div>
  );
}

export function Status({ items }: { items: NonNullable<Section["status"]> }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((it, i) => (
        <Reveal key={it.t} delay={i * 80}>
          <div className="h-full rounded-3xl border border-line bg-s1 p-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-line-2 px-3 py-1 text-xs">
              <span
                aria-hidden
                className={`h-1.5 w-1.5 rounded-full ${it.label === "In progress" ? "border border-warn" : "bg-ok"}`}
              />
              {it.label}
            </span>
            <h3 className="mt-8 font-serif text-3xl tracking-[-0.03em]">{it.t}</h3>
            <p className="mt-2 text-sm text-fg-2">{it.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Kit({ kit }: { kit: NonNullable<Section["kit"]> }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
      <ul className="grid gap-3">
        {kit.items.map((it) => {
          const body = (
            <>
              <span className="block text-lg font-medium">{it.t}</span>
              <span className="mt-1 block text-sm text-fg-2">{it.d}</span>
            </>
          );
          return (
            <li key={it.t}>
              {it.href ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-6 rounded-2xl border border-line bg-s1 px-6 py-5 transition-colors hover:border-line-2 hover:bg-s2"
                >
                  <span>{body}</span>
                  <Image src="/newron-logo.svg" alt="Newron logo" width={40} height={40} className="h-10 w-10" />
                </a>
              ) : (
                <div className="rounded-2xl border border-line bg-s1 px-6 py-5">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
      <Reveal>
        <figure className="h-full rounded-3xl border border-line-2 bg-bg p-8">
          <figcaption className="label text-muted">Boilerplate</figcaption>
          <p className="mt-5 font-serif text-2xl leading-snug tracking-[-0.02em]">{kit.boilerplate}</p>
        </figure>
      </Reveal>
    </div>
  );
}

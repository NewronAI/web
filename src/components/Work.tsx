"use client";

import { useState } from "react";
import { work } from "@/content/site";
import { SectionHeader } from "./ui";

export function Work() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="work" className="px-4 pt-[160px] md:px-16">
      <SectionHeader eyebrow={work.eyebrow} title={work.title} body={work.hint} />

      <ul className="mt-[100px] border-b border-line" onMouseLeave={() => setOpen(null)}>
        {work.projects.map((project, i) => {
          const isOpen = open === i;
          return (
            <li key={project.name} className="border-t border-line" onMouseEnter={() => setOpen(i)}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="grid w-full grid-cols-[44px_1fr_auto] items-center px-4 py-4 text-left md:grid-cols-[84px_508px_307px_1fr_auto]"
              >
                <span className="text-[12px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[24px] leading-none tracking-[-0.035em] md:text-[28px]">{project.name}</span>
                <span className="hidden text-[12px] text-muted md:block">{project.sector}</span>
                <span className="hidden text-[12px] md:block">{project.result}</span>
                <span
                  className={`text-[20px] leading-none font-light transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-6 px-4 pt-2 pb-6 md:grid-cols-[742px_1fr] md:items-end">
                    <div className="grid grid-cols-3 gap-2 rounded-2xl bg-ink p-4">
                      {project.tiles.map((tile, t) => (
                        <div
                          key={tile.label}
                          className={`flex h-[160px] flex-col justify-between rounded-xl border p-4 text-cream md:h-[230px] ${
                            t === 1 ? "border-accent/80" : "border-white/10"
                          }`}
                        >
                          <span className="text-[9px] font-semibold tracking-[0.1em] text-cream/50 uppercase">
                            {tile.label}
                          </span>
                          <span className="text-[22px] tracking-[-0.05em] md:text-[30px]">{tile.value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="max-w-[440px] text-[15px] leading-[1.55] text-muted">{project.body}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

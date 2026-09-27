"use client";

import { useState } from "react";
import { agents, type Agent, type Team } from "@/lib/site";

const teams: ("All" | Team)[] = ["All", "Credit", "Insurance", "Public sector", "Documents", "Compliance"];

export function Catalog() {
  const [team, setTeam] = useState<(typeof teams)[number]>("All");
  const list = team === "All" ? agents : agents.filter((a) => a.team === team);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-s1">
      {/* Toolbar */}
      <div className="flex flex-col gap-4 border-b border-line p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3 rounded-lg border border-line-2 bg-bg px-3 py-2 text-sm text-muted lg:w-80">
          <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" aria-hidden>
            <circle cx="9" cy="9" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="truncate">Find an agent for… “bank statement analysis”</span>
        </div>
        <div role="tablist" aria-label="Filter by team" className="-mx-1 flex gap-1 overflow-x-auto px-1">
          {teams.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={team === t}
              onClick={() => setTeam(t)}
              className={`shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors ${
                team === t ? "bg-fg text-bg" : "text-fg-2 hover:bg-s3 hover:text-fg"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <li key={a.id} className="-mb-px -mr-px border-b border-r border-line">
            <AgentCard a={a} />
          </li>
        ))}
        <li className="-mb-px -mr-px border-b border-r border-line">
          <PublishCard />
        </li>
      </ul>
    </div>
  );
}

function AgentCard({ a }: { a: Agent }) {
  return (
    <article className="group flex h-full flex-col p-5 transition-colors hover:bg-s2">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg border border-line-2 bg-s3 font-mono text-xs text-fg">
          {a.mark}
        </span>
        <span className="label rounded border border-line px-1.5 py-0.5 text-muted">{a.team}</span>
      </div>
      <h3 className="mt-4 font-medium text-fg">{a.name}</h3>
      <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted">
        <svg viewBox="0 0 12 12" className="h-3 w-3 text-ok" aria-hidden>
          <path d="M6 .8l1.5 1.1 1.9-.1.6 1.8 1.5 1.1-.6 1.8.6 1.8-1.5 1.1-.6 1.8-1.9-.1L6 11.2 4.5 10l-1.9.1L2 8.3.5 7.2 1.1 5.4.5 3.6 2 2.5l.6-1.8 1.9.1z" fill="currentColor" fillOpacity=".25" />
          <path d="M3.9 6.1l1.4 1.4 2.8-2.8" fill="none" stroke="currentColor" strokeWidth="1.1" />
        </svg>
        Newron · first-party
      </p>
      <p className="mt-3 text-sm leading-relaxed text-fg-2">{a.job}</p>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap gap-1.5">
          {a.scopes.map((s) => (
            <span key={s} className="rounded border border-line-2 px-1.5 py-0.5 font-mono text-[11px] text-fg-2">
              {s}
            </span>
          ))}
        </div>
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 border-t border-line pt-4 text-xs">
          <dt className="text-muted">Connects</dt>
          <dd className="truncate text-right text-fg-2">{a.tools.join(" · ")}</dd>
          <dt className="text-muted">Approval</dt>
          <dd className="truncate text-right text-fg-2">{a.approval}</dd>
        </dl>
        {a.proof && <p className="mt-3 font-mono text-[11px] text-accent">{a.proof}</p>}
      </div>
    </article>
  );
}

function PublishCard() {
  return (
    <a
      href="#builders"
      className="group flex h-full min-h-64 flex-col justify-between p-5 transition-colors hover:bg-s2"
    >
      <span className="grid h-10 w-10 place-items-center rounded-lg border border-dashed border-line-2 text-lg text-muted group-hover:text-accent">
        +
      </span>
      <div>
        <p className="label text-muted">Built by your org</p>
        <h3 className="mt-2 font-medium text-fg">Publish your own agent</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-2">
          List internal agents next to Newron&apos;s, under the same review and permissions.
        </p>
        <p className="mt-4 text-sm text-accent">
          For builders <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </p>
      </div>
    </a>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BOOKING_URL } from "@/lib/route";

const groups = [
  { label: "Solutions", links: [["Lending intelligence", "/lending-intelligence"], ["Insurance AI", "/insurance-ai"], ["Governance AI", "/governance-ai"], ["Custom AI engineering", "/custom-ai-engineering"]] },
  { label: "Industries", links: [["Banks", "/banks"], ["NBFCs", "/nbfcs"], ["Insurance", "/industry-insurance"], ["Public sector", "/public-sector"]] },
  { label: "Company", links: [["About us", "/about"], ["Careers", "/careers"], ["Press", "/press"], ["Open source", "/open-source"]] },
];
/* Every route is statically prerendered, so a runtime year would be baked into
   the HTML at build time and then mismatch on hydration once the year turns. */
const COPYRIGHT_YEAR = 2026;
const legal = [["Privacy", "/privacy"], ["Terms", "/terms"], ["Security", "/security"], ["Responsible AI", "/responsible-ai"]];
function SiteLogo() {
  return <a className="n-logo" href="/" aria-label="Newron home"><img src="/newron-logo.png" width="30" height="30" alt="" />newron<span>®</span></a>;
}
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const path = usePathname();
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if(e.key !== "Escape") return;
      if(group) ref.current?.querySelector<HTMLButtonElement>(`[data-group="${group}"]`)?.focus();
      else if(open) ref.current?.querySelector<HTMLButtonElement>(".n-menu")?.focus();
      setOpen(false); setGroup(null);
    };
    const outside = (e: PointerEvent) => { if(!ref.current?.contains(e.target as Node)) { setGroup(null); setOpen(false); } };
    document.addEventListener("keydown", close); document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); };
  }, [group, open]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="n-header" ref={ref} onBlur={e => { if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) setGroup(null); }}>
      <SiteLogo />
      <nav className="n-desktop-nav" aria-label="Main navigation">
        {groups.slice(0,2).map(g => <div className="site-nav-group" key={g.label}><button data-group={g.label} aria-expanded={group === g.label} aria-controls={`nav-${g.label}`} onClick={() => setGroup(group === g.label ? null : g.label)}>{g.label}<span aria-hidden="true">⌄</span></button>{group === g.label && <div className="site-nav-dropdown" id={`nav-${g.label}`}>{g.links.map(([label,href]) => <a key={href} href={href} aria-current={path === href ? "page" : undefined}>{label}<span aria-hidden="true">↗</span></a>)}</div>}</div>)}
        <a href="/#artha">ArthaLM</a>
        <a href="/#customers">Customers</a>
        <div className="site-nav-group"><button data-group="Company" aria-expanded={group === "Company"} aria-controls="nav-Company" onClick={() => setGroup(group === "Company" ? null : "Company")}>Company<span aria-hidden="true">⌄</span></button>{group === "Company" && <div className="site-nav-dropdown" id="nav-Company">{groups[2].links.map(([label,href]) => <a key={href} href={href} aria-current={path === href ? "page" : undefined}>{label}<span aria-hidden="true">↗</span></a>)}</div>}</div>
      </nav>
      <a className="n-contact" href={BOOKING_URL}>Let’s talk <span aria-hidden="true">↗</span></a>
      <button className="n-menu" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { setOpen(!open); setGroup(null); }}>{open ? "✕" : "☰"}</button>
      {open && <nav id="mobile-navigation" className="n-mobile-nav site-mobile" aria-label="Mobile navigation">{groups.map(g => <div key={g.label}><span>{g.label}</span>{g.links.map(([label,href]) => <a key={href} href={href} aria-current={path === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}<span aria-hidden="true">↗</span></a>)}</div>)}<a href="/#artha" onClick={() => setOpen(false)}>ArthaLM ↗</a><a href="/#customers" onClick={() => setOpen(false)}>Customers ↗</a></nav>}
    </header>
  </>;
}
export function SiteFooter() {
  return <footer className="n-footer"><div className="n-footer-top"><div><SiteLogo /><p>Intelligence for a world<br />of possibility.</p><span className="site-location">BENGALURU, INDIA</span></div>{groups.map(g => <div key={g.label}><h3>{g.label}</h3>{g.links.map(([label,href]) => <a key={href} href={href}>{label}</a>)}</div>)}</div><div className="n-footer-bottom"><span>© {COPYRIGHT_YEAR} Newron. All rights reserved.</span><div>{legal.map(([label,href]) => <a href={href} key={href}>{label}</a>)}</div><span>BUILT WITH PURPOSE</span></div></footer>;
}

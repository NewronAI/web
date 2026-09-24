"use client";
import { useEffect, useRef, useState } from "react";

// Selected deployments and collaborators.
const customers = [
  ["IISc", "Research", "iisc"],
  ["Government of Karnataka", "Public sector", "karnataka"],
  ["Aditya Birla Capital", "Financial services", "abcl"], ["HDFC Credila", "Education finance", "credila"],
  ["Sattva", "Collaborator", "sattva"], ["Fusion", "Microfinance", "fusion"],
  ["ARTPARK", "Research & innovation", "artpark"], ["Fedbank", "Banking", "fedbank"], ["Niwas", "Housing finance", "niwas"],
];
export default function CustomerCarousel() {
  const ref=useRef<HTMLDivElement>(null);
  const [paused,setPaused]=useState(false);
  useEffect(()=>{
    const track=ref.current;
    if(!track || paused)return;
    const timer=setInterval(()=>{
      if(document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches || track.closest("section")?.matches(":hover, :focus-within"))return;
      const rect=track.getBoundingClientRect();
      if(rect.bottom<0 || rect.top>window.innerHeight)return;
      const end=track.scrollWidth-track.clientWidth;
      track.scrollTo({left:track.scrollLeft>=end-2?0:Math.min(end,track.scrollLeft+track.clientWidth*.7),behavior:"smooth"});
    },3500);
    return()=>clearInterval(timer);
  },[paused]);
  const shift=(direction:number)=>{
    const track=ref.current;
    if(!track)return;
    const end=track.scrollWidth-track.clientWidth;
    const next=direction>0 && track.scrollLeft>=end-2 ? 0
      : direction<0 && track.scrollLeft<=2 ? end
      : Math.max(0,Math.min(end,track.scrollLeft+direction*track.clientWidth*.7));
    track.scrollTo({left:next,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});
  };
  return <section className="customer-carousel" aria-label="Selected customers and collaborators" aria-roledescription="carousel">
    <div className="customer-carousel-head"><div><span className="n-eyebrow">INTELLIGENCE DEPLOYED ACROSS</span><p>Selected customers & collaborators</p></div><div className="carousel-controls"><button aria-label={paused?"Resume automatic scrolling":"Pause automatic scrolling"} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?"▶":"Ⅱ"}</button><button aria-label="Previous customers" onClick={()=>shift(-1)}>←</button><button aria-label="Next customers" onClick={()=>shift(1)}>→</button></div></div>
    <div className="customer-track" ref={ref} tabIndex={0} aria-label="Customer wordmarks; scroll to explore" onKeyDown={e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();shift(e.key==="ArrowRight"?1:-1);}}}>
      {customers.map(([name,type,style],i)=><div className="customer-slide" key={name} role="group" aria-roledescription="slide" aria-label={`${i+1} of ${customers.length}: ${name}`}><span className={`customer-wordmark wordmark-${style}`}>{name}{style==="walmart"&&<b aria-hidden="true">✳</b>}</span><small>{type}</small></div>)}
    </div><div className="carousel-caption"><span>SWIPE OR USE THE ARROWS TO EXPLORE</span><span>{customers.length} CUSTOMERS &amp; COLLABORATORS</span></div>
  </section>;
}

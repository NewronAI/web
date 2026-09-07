"use client";
import { useRef } from "react";

// The complete roster from the original homepage, retaining its text wordmarks.
const customers = [
  ["Walmart", "Technology", "walmart"], ["IISc", "Research", "iisc"],
  ["Government of Karnataka", "Public sector", "karnataka"], ["Google", "Technology", "google"],
  ["Aditya Birla Capital", "Financial services", "abcl"], ["HDFC Credila", "Education finance", "credila"],
  ["Sattva", "Collaborator", "sattva"], ["Fusion", "Microfinance", "fusion"],
  ["ARTPARK", "Research & innovation", "artpark"], ["Fedbank", "Banking", "fedbank"], ["Niwas", "Housing finance", "niwas"],
];
export default function CustomerCarousel() {
  const ref=useRef<HTMLDivElement>(null);
  const shift=(direction:number)=>{
    if(!ref.current)return;
    ref.current.scrollBy({left:direction*ref.current.clientWidth*.7,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});
  };
  return <section className="customer-carousel" aria-label="Selected customers and collaborators" aria-roledescription="carousel">
    <div className="customer-carousel-head"><div><span className="n-eyebrow">BUILT IN GOOD COMPANY</span><p>Selected customers & collaborators</p></div><div className="carousel-controls"><button aria-label="Previous customers" onClick={()=>shift(-1)}>←</button><button aria-label="Next customers" onClick={()=>shift(1)}>→</button></div></div>
    <div className="customer-track" ref={ref} tabIndex={0} aria-label="Customer wordmarks; scroll to explore" onKeyDown={e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();shift(e.key==="ArrowRight"?1:-1);}}}>
      {customers.map(([name,type,style],i)=><div className="customer-slide" key={name} role="group" aria-roledescription="slide" aria-label={`${i+1} of ${customers.length}: ${name}`}><span className={`customer-wordmark wordmark-${style}`}>{name}{style==="walmart"&&<b aria-hidden="true">✳</b>}</span><small>{type}</small></div>)}
    </div><div className="carousel-caption"><span>SWIPE OR USE THE ARROWS TO EXPLORE</span><span>{customers.length} CUSTOMERS &amp; COLLABORATORS</span></div>
  </section>;
}

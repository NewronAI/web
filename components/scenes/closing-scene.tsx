"use client";
import ScrollScene from "../motion/scroll-scene";
import type { CueMap } from "../motion/scene-types";
import { BOOKING_URL } from "@/lib/route";

/* One short reveal of the background word, then a composition that stays
   still while the contact action is used. */

const cues: CueMap = {
  reveal: [0.05, 0.5],
};

export default function ClosingScene() {
  return <ScrollScene id="contact" className="scene-closing" travel="auto" mode="cross" span={0.5} cues={cues} labelledBy="closing-title">
    {() => <div className="scene-inner artha-contact-inner">
      <div className="n-eyebrow">YOUR DATA. YOUR INFRA. YOUR MODEL. YOUR NEXT CHAPTER.</div>
      <h2 id="closing-title">Let’s see what<br /><em>ArthaLM can unlock.</em></h2>
      <p>Start with a sandboxed evaluation on a slice of your historical data. Get the evidence your team needs before a production rollout.</p>
      <a className="n-button" href={BOOKING_URL}>Evaluate on your documents <span aria-hidden="true">↗</span></a>
      <span className="artha-contact-word" aria-hidden="true">ArthaLM</span>
    </div>}
  </ScrollScene>;
}

import Image, { type StaticImageData } from "next/image";
import { CamRun } from "@/components/cam-run";
import { PhotoStage } from "@/components/photo-stage";
import { ClaimFragment, ClassifyFragment, GrievanceFragment } from "@/components/sections";
import { Frame } from "@/components/ui";
import arthaPhoto from "@/assets/photos/artha.jpg";
import governancePhoto from "@/assets/photos/governance.jpg";
import heroBackdrop from "@/assets/photos/hero-backdrop.jpg";
import insurancePhoto from "@/assets/photos/insurance.jpg";
import team1 from "@/assets/photos/team-1.jpg";
import team2 from "@/assets/photos/team-2.jpg";
import team3 from "@/assets/photos/team-3.jpg";

export const LendingVisual = () => (
  <PhotoStage src={heroBackdrop} priority>
    <CamRun />
  </PhotoStage>
);

export const InsuranceVisual = () => (
  <PhotoStage src={insurancePhoto} position="50% 40%" priority>
    <ClaimFragment />
  </PhotoStage>
);

export const GovernanceVisual = () => (
  <PhotoStage src={governancePhoto} position="60% 45%" priority>
    <GrievanceFragment />
  </PhotoStage>
);

export const ArthaVisual = () => (
  <PhotoStage src={arthaPhoto}>
    <ClassifyFragment />
  </PhotoStage>
);

// Mirrors the week ranges in the "How we engage" section of the Custom AI engineering page.
const plan = [
  { t: "Discovery & scoping", from: 1, to: 2 },
  { t: "Data & eval pipeline", from: 3, to: 6 },
  { t: "Model & inference path", from: 6, to: 10 },
  { t: "Hardening & handover", from: 10, to: 12 },
];

export const EngagementVisual = () => (
  <PhotoStage src={arthaPhoto} priority>
    <Frame title="Engagement plan" meta="12 weeks · kickoff to production">
      <div className="overflow-x-auto p-5">
        <div className="min-w-[36rem]">
          <div className="grid grid-cols-[11rem_repeat(12,minmax(0,1fr))] gap-1 font-mono text-[10px] text-muted">
            <span />
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i} className="text-center">
                W{i + 1}
              </span>
            ))}
          </div>
          <ul className="mt-3 space-y-2">
            {plan.map((p, i) => (
              <li key={p.t} className="grid grid-cols-[11rem_repeat(12,minmax(0,1fr))] items-center gap-1">
                <span className="truncate pr-3 text-sm">{p.t}</span>
                <span
                  className={`h-7 rounded-lg ${i === plan.length - 1 ? "bg-accent/80" : "bg-accent/35"}`}
                  style={{ gridColumn: `${p.from + 1} / ${p.to + 2}` }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-5 py-3 font-mono text-[11px] text-muted">
        Handover · code, weights and documentation to your team
      </p>
    </Frame>
  </PhotoStage>
);

const team = [
  { src: team1, alt: "Newron engineers at work at their desks" },
  { src: team2, alt: "The Newron team together outside the office" },
  { src: team3, alt: "The Newron team working in the office" },
];

/** About page: three real team photos in a row (first spans full width on phones). */
export function TeamStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {team.map((p, i) => (
        <figure
          key={p.alt}
          className={`group relative aspect-[4/3] overflow-hidden rounded-3xl bg-s2 ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1280px) 384px, (min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </figure>
      ))}
    </div>
  );
}

/** Industry pages: a wide editorial photo under the hero. */
export function PhotoBanner({ src, position = "50% 50%" }: { src: StaticImageData; position?: string }) {
  return (
    <div className="stage relative isolate aspect-[16/9] overflow-hidden rounded-[2rem] md:aspect-[21/9]">
      <Image
        src={src}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="(min-width: 1280px) 1152px, 100vw"
        className="stage-photo -z-10 object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}

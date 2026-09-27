import Image, { type StaticImageData } from "next/image";

/** A product UI floating on an editorial photo. The photo is decorative. */
export function PhotoStage({
  src,
  position = "50% 50%",
  priority = false,
  className = "",
  children,
}: {
  src: StaticImageData;
  position?: string;
  priority?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`stage relative isolate overflow-hidden rounded-[2rem] p-3 sm:p-8 md:p-12 ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        placeholder="blur"
        sizes="(min-width: 1280px) 1152px, 100vw"
        className="stage-photo -z-10 object-cover"
        style={{ objectPosition: position }}
      />
      <div className="stage-ui relative rounded-[1.5rem] shadow-[0_40px_90px_-35px_rgb(0_0_0/0.55),0_12px_24px_-12px_rgb(0_0_0/0.25)]">
        {children}
      </div>
    </div>
  );
}

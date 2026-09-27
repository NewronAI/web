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
    <div className={`relative overflow-hidden rounded-[2rem] p-3 sm:p-8 md:p-12 ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        placeholder="blur"
        sizes="(min-width: 1280px) 1152px, 100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="relative shadow-[0_30px_80px_-30px_rgb(0_0_0/0.5)] [border-radius:1.5rem]">{children}</div>
    </div>
  );
}

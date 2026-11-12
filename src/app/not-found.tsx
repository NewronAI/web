import { Accent, PrimaryCTA, SecondaryCTA } from "@/components/kit";
import { CONTACT_HREF } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="px-5 pt-24 pb-44 text-center md:pt-32 md:pb-56">
      <p className="label text-muted">404</p>
      <h1 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-[1] tracking-[-0.045em] md:text-7xl">
        This page <Accent>isn&apos;t in the file.</Accent>
      </h1>
      <p className="mx-auto mt-6 max-w-md text-lg text-fg-2">The link may be old, or the page may have moved.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <PrimaryCTA href="/">Back to home</PrimaryCTA>
        <SecondaryCTA href={CONTACT_HREF}>Talk to Us</SecondaryCTA>
      </div>
    </section>
  );
}

import { capabilities } from "@/content/site";
import { SectionHeader } from "./ui";

// Soft gradient artworks, generated in CSS (no image assets).
export const art: Record<string, string> = {
  sun: "radial-gradient(120% 90% at 20% 15%, #f4f7fb 0%, #f4f7fb 30%, transparent 60%), radial-gradient(90% 80% at 85% 85%, #fde68a 0%, #facc15 35%, transparent 70%), linear-gradient(135deg, #eef3fa 0%, #fdf1dc 45%, #fcd34d 75%, #fde68a 100%)",
  blush:
    "radial-gradient(70% 90% at 0% 30%, #f1fbfb 0%, transparent 60%), radial-gradient(60% 120% at 65% 40%, #ffc2c7 0%, transparent 60%), linear-gradient(100deg, #f5fbfd 0%, #fbd5e2 35%, #ffbdc3 60%, #5aa3b8 100%)",
  tide: "radial-gradient(45% 45% at 55% 50%, #4d62a0 0%, transparent 100%), radial-gradient(60% 70% at 80% 15%, #b8d2ee 0%, transparent 70%), radial-gradient(70% 60% at 10% 95%, #e8ecf6 0%, transparent 70%), linear-gradient(150deg, #8aa4d6 0%, #6d86c4 45%, #aac4e6 100%)",
  mint: "radial-gradient(80% 80% at 5% 10%, #c8f3ef 0%, transparent 60%), radial-gradient(70% 70% at 100% 0%, #db8aa3 0%, transparent 60%), radial-gradient(60% 60% at 90% 55%, #ffb7a8 0%, transparent 70%), radial-gradient(70% 60% at 30% 100%, #eef8e6 0%, transparent 70%), linear-gradient(135deg, #dcefe8, #f2e3dc)",
};

export function Capabilities() {
  return (
    <section id="capabilities" className="px-4 pt-[100px] md:px-14">
      <SectionHeader eyebrow={capabilities.eyebrow} title={capabilities.title} body={capabilities.body} />

      <div className="mt-[100px] pb-[160px]">
        {capabilities.items.map((item, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={item.title}
              className="mb-6 border border-line bg-paper px-5 py-8 md:sticky md:mb-12 md:px-8"
              style={{ top: 24 + i * 16 }}
            >
              <div className="flex justify-between text-[10px] leading-3 tracking-[0.1em] text-muted uppercase">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{item.tags}</span>
              </div>
              <div className="mt-8 grid gap-8 md:mt-[54px] md:grid-cols-2 md:gap-20">
                <div className={`flex min-h-[200px] flex-col justify-between md:min-h-[360px] ${flip ? "md:order-2" : ""}`}>
                  <h3 className="font-display text-[48px] leading-[1.06] tracking-[-0.072em] md:text-[76px]">
                    {item.title}
                  </h3>
                  <p className="mt-6 max-w-[336px] text-[15px] leading-[1.55] text-muted">{item.body}</p>
                </div>
                <div className={`flex ${flip ? "md:order-1 md:justify-start" : "md:justify-end"}`}>
                  <div
                    className="grain relative h-[280px] w-full overflow-hidden rounded-2xl md:h-[360px] md:max-w-[420px]"
                    style={{ background: art[item.art] }}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

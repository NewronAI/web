import type { MetadataRoute } from "next";
import { footer } from "@/lib/site";

const BASE = "https://www.newron.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...footer.flatMap((c) => c.l.map((l) => l.href))];
  return paths.map((p) => ({
    url: `${BASE}${p === "/" ? "" : p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.startsWith("/privacy") || p.startsWith("/terms") ? 0.3 : 0.7,
  }));
}

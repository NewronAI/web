import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Newron — The enterprise AI partner of choice for regulated industries";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Headline is set here rather than baked into the photo, so it stays sharp and correctly spelled.
// ImageResponse's bundled default font is Geist.
export default async function Image() {
  const [photo, logo] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/photos/og-image.jpg"), "base64"),
    readFile(join(process.cwd(), "public/newron_logo.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div style={{ position: "relative", width: "100%", height: "100%", display: "flex" }}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={`data:image/jpeg;base64,${photo}`} width={1200} height={630} style={{ position: "absolute", inset: 0 }} />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: 720,
            height: "100%",
            color: "#1a1a1a",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img src={`data:image/png;base64,${logo}`} width={56} height={56} />
            <span style={{ fontSize: 36, letterSpacing: -1 }}>Newron</span>
          </div>
          <div style={{ fontSize: 72, lineHeight: 1, letterSpacing: -3 }}>
            The enterprise AI partner for regulated industries.
          </div>
          <div style={{ fontSize: 24, color: "#454540" }}>Banks · NBFCs · Insurers · Government</div>
        </div>
      </div>
    ),
    size,
  );
}

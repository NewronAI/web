import type { Metadata } from "next";
import "./globals.css";
import "@/components/immersive.css";
import "@/components/interior.css";
import "@/components/artha-experience.css";
import "@/components/styles/scroll-scenes.css";
import { MOTION_BOOTSTRAP } from "@/components/motion/motion-bootstrap";

export const metadata: Metadata = {
  title: "Newron — Intelligence with purpose",
  description: "Enterprise AI for the decisions that matter. Explore Newron's lending, insurance, governance and document intelligence solutions.",
  icons: { icon: "/newron-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOTSTRAP }} />
        {/* Without scripting a scene shows its finished composition in normal flow. */}
        <noscript><style>{`.scroll-scene .scene-track{height:auto}.scroll-scene .scene-stage{position:static;height:auto;overflow:visible}`}</style></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}

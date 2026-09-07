import type { Metadata } from "next";
import "./globals.css";
import "@/components/immersive.css";
import "@/components/interior.css";
import "@/components/artha-experience.css";

export const metadata: Metadata = {
  title: "Newron — Intelligence with purpose",
  description: "Enterprise AI for the decisions that matter. Explore Newron's lending, insurance, governance and document intelligence solutions.",
  icons: { icon: "/newron-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lending intelligence — Newron",
  icons: { icon: "/newron-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

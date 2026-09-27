import type { Metadata } from "next";
import { EB_Garamond, Figtree, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Newron — The Enterprise AI Partner for Regulated Industries",
  description:
    "The applied-AI partner to India's banks, NBFCs, insurers and Government. Lending Intelligence, Artha models, Insurance AI and Governance AI — self-hostable on your VPC, on-prem or fully air-gapped.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${garamond.variable} ${figtree.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

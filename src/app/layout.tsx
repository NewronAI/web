import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "ArthaLM by Newron — The model of choice for BFSI & regulated industries";
const description = "From fragmented data to actionable frontier intelligence which you can self host.";

export const metadata: Metadata = {
  // Share previews (WhatsApp, LinkedIn, X) need absolute image URLs.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.newron.ai"),
  title,
  description,
  // The image itself comes from app/opengraph-image.jpg.
  openGraph: { type: "website", siteName: "ArthaLM by Newron", title, description, url: "/", locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import "./globals.css";

// globals.css appends Arial, sans-serif → Geist, "Geist Fallback", Arial, sans-serif
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Only used for small data labels; not preloaded so it doesn't compete with the headline fonts.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

// Italic accent words in headlines — a high-contrast serif italic that pairs with Geist's neutral roman.
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  // Absolute base for the generated Open Graph image URL.
  metadataBase: new URL("https://www.newron.ai"),
  title: {
    default: "Newron — The Enterprise AI Partner for Regulated Industries",
    template: "%s — Newron",
  },
  description:
    "The applied-AI partner to India's banks, NBFCs, insurers and Government. Lending Intelligence, Artha models, Insurance AI and Governance AI — self-hostable on your VPC, on-prem or fully air-gapped.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior: Next disables smooth scrolling during route changes, so new pages open at the top instantly.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-xl bg-fg px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

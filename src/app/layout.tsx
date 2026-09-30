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

// A plain file, not app/opengraph-image.jpg: on Vercel preview deployments Next points
// file-convention images at the *.vercel.app URL, and arthalm.com is served as a preview.
const shareImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "ArthaLM by Newron: the model of choice for BFSI and regulated industries. A stack of loan documents resting on warm paper in soft daylight.",
};

export const metadata: Metadata = {
  // Share previews (WhatsApp, LinkedIn, X) need absolute URLs, and og:url must be this
  // site: WhatsApp re-scrapes whatever page og:url names.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arthalm.com"),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "ArthaLM by Newron",
    title,
    description,
    url: "/",
    locale: "en_IN",
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", title, description, images: [shareImage] },
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

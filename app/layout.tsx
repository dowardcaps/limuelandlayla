import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted fonts (rather than next/font/google) so the invitation has no
// runtime dependency on fonts.googleapis.com and renders identically offline.
const displaySerif = localFont({
  variable: "--font-display",
  src: [
    { path: "../fonts/CormorantGaramond.ttf", style: "normal" },
    { path: "../fonts/CormorantGaramond-Italic.ttf", style: "italic" },
  ],
});

const bodySerif = localFont({
  variable: "--font-body",
  src: [
    { path: "../fonts/EBGaramond.ttf", style: "normal" },
    { path: "../fonts/EBGaramond-Italic.ttf", style: "italic" },
  ],
});

const script = localFont({
  variable: "--font-script",
  src: [{ path: "../fonts/GreatVibes-Regular.ttf", style: "normal" }],
});

export const metadata: Metadata = {
  title: "Limuel & Layla — December 14, 2026",
  description: "You are invited to the wedding of Limuel & Layla.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth" // <-- Add this attribute
      className={`${displaySerif.variable} ${bodySerif.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        {children}
      </body>
    </html>
  );
}
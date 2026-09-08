import type { Metadata } from "next";
import PageShell from "../../components/wedding/PageShell";
import HeroSection from "../../components/wedding/HeroSection";

export const metadata: Metadata = {
  title: "Home — Limuel & Layla",
};

/**
 * The persistent home page: the collage of photos and section tiles,
 * reachable from every other page via the header. Opening the envelope on
 * "/" redirects here; "/" itself never renders this content directly.
 */
export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
    </PageShell>
  );
}

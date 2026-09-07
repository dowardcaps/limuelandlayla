import type { Metadata } from "next";
import HeroSection from "../../components/wedding/HeroSection";

export const metadata: Metadata = {
  title: "Home — Limuel & Layla",
};

/**
 * The "always available" home page: the same collage of photos and section
 * tiles shown at "/" once the envelope is opened, but reachable directly
 * (via the Home link in PageShell's nav) without replaying the envelope
 * animation every time. "/" itself is unchanged and still opens with the
 * sealed envelope.
 */
export default function HomePage() {
  return <HeroSection />;
}

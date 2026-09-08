"use client";

import { useRouter } from "next/navigation";
import EnvelopeIntro from "./EnvelopeIntro";

/**
 * "/" is the envelope intro only. Opening the envelope now navigates to
 * "/home" (the persistent home page) instead of swapping in HeroSection
 * in place — so "/" is a one-time entrance, and "/home" is the actual,
 * always-reachable home page used by every other page's "Home" link.
 */
export default function WeddingInvitation() {
  const router = useRouter();

  return <EnvelopeIntro onOpened={() => router.push("/home")} />;
}

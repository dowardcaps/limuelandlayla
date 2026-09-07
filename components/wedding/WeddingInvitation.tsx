"use client";

import { useState, useEffect } from "react";
import EnvelopeIntro from "./EnvelopeIntro";
import HeroSection from "./HeroSection";
import AOS from "aos";

export default function WeddingInvitation() {
  const [opened, setOpened] = useState(false);

  // Re-initialize AOS when content changes
  useEffect(() => {
    if (opened) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        AOS.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [opened]);

  if (!opened) {
    return <EnvelopeIntro onOpened={() => setOpened(true)} />;
  }

  return <HeroSection />;
}
"use client";

import { useState } from "react";
import EnvelopeIntro from "./EnvelopeIntro";
import HeroSection from "./HeroSection";

export default function WeddingInvitation() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return <EnvelopeIntro onOpened={() => setOpened(true)} />;
  }

  return <HeroSection />;
}

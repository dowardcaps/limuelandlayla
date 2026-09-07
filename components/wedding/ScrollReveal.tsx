"use client";

import { useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section" | "li";
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "flip-up" | "flip-down" | "flip-left" | "flip-right";
};

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
  animation = "fade-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as;

  // AOS is initialized once, globally, by <AOSProvider /> in the root
  // layout, which also re-scans the DOM on every route change — so this
  // component only needs to render the data-aos attributes themselves.

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={className}
      data-aos={animation}
      data-aos-delay={delayMs}
    >
      {children}
    </Tag>
  );
}
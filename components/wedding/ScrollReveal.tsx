"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";

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

  useEffect(() => {
    // Initialize AOS if not already initialized
    if (typeof window !== "undefined" && !document.querySelector("[data-aos]")) {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 50,
        disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
    }
  }, []);

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
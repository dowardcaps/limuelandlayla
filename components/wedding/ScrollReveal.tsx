"use client";

import { useInView } from "../../hooks/useInView";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger multiple ScrollReveals in sequence (e.g. index * 80). */
  delayMs?: number;
  /** Element tag to render as — a section wrapper vs. an inline span, etc. */
  as?: "div" | "section" | "li";
};

/**
 * Fades + lifts its children into place the first time they scroll into
 * view. A thin wrapper around useInView so every section can opt into
 * the same on-scroll animation with one line, instead of each section
 * re-implementing observer/state logic.
 */
export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
}: ScrollRevealProps) {
  const { ref, isInView } = useInView<HTMLElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${isInView ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: isInView ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

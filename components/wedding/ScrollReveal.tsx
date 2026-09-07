"use client";

import { useInView } from "../../hooks/useInView";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section" | "li";
};

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
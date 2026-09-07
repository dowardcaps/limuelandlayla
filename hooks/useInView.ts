"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  /** Fraction of the element that must be visible before it counts. */
  threshold?: number;
  /** Shrinks/grows the viewport box used for the intersection check. */
  rootMargin?: string;
  /** Once true, keep the element marked "in view" even after it scrolls away. */
  once?: boolean;
};

/**
 * Tracks whether an element has scrolled into the viewport, for driving
 * scroll-triggered reveal animations. Kept as a standalone hook (rather
 * than inlined per-component) so any section can opt into the same
 * on-scroll behavior without duplicating observer setup/teardown.
 */
export function useInView<T extends HTMLElement>({
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Users with reduced-motion preferences see content immediately,
    // with no scroll-triggered transition at all.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsInView(true);
      return;
    }

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === "undefined") {
      // Fallback for older browsers - show content immediately
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { 
        threshold: threshold, 
        rootMargin: rootMargin,
        // Safari compatibility
        root: null
      }
    );

    observer.observe(node);
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}
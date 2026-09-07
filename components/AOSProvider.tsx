"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") return;

    // Check if requestIdleCallback exists (for Safari/older browsers)
    const hasRequestIdleCallback = "requestIdleCallback" in window;

    // Only initialize if not already initialized
    if (!document.querySelector("[data-aos]")) {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 50,
        // Disable if the browser doesn't support it properly
        disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        // Use requestAnimationFrame fallback for browsers without requestIdleCallback
        useClassNames: false,
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
      });
    }

    // Cleanup
    return () => {
      AOS.refresh();
    };
  }, []);

  return null;
}
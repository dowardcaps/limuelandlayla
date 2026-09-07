"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Initializes AOS (Animate On Scroll) once for the whole app.
 *
 * This must live in the root layout, not on an individual page: the root
 * layout persists across client-side navigations in the App Router, while
 * a page-level component gets unmounted/remounted on every route change.
 * When this previously lived on `app/page.tsx` only, every other route
 * (`/home`, `/details`, `/attire`, `/faqs`, `/entourage`) rendered elements
 * with `data-aos` attributes but AOS was never initialized for them, so
 * their `[data-aos]` content stayed at `opacity: 0` forever (AOS's stylesheet
 * hides elements until it adds the `.aos-animate` class itself). That was
 * the root cause of the "scroll animation" bug: content on those pages
 * simply never appeared.
 *
 * We also re-scan the DOM (`AOS.refreshHard()`) on every pathname change,
 * because AOS only discovers `[data-aos]` elements that exist at init time.
 * Without a refresh, elements rendered by a newly-navigated-to page would
 * never be picked up either.
 */
export default function AOSProvider() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 50,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    // Let the new route's content commit to the DOM first, then let AOS
    // rediscover it. AOS.refreshHard() re-scans document.querySelectorAll
    // for [data-aos] elements and recalculates their trigger offsets.
    const id = window.setTimeout(() => AOS.refreshHard(), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}

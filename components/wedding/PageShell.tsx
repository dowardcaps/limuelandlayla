"use client"

import Link from "next/link";
import Monogram from "./Monogram";
import SiteFooter from "./SiteFooter";
import { couple } from "../../data/content";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/details", label: "Details" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/entourage", label: "Entourage" },
  { href: "/attire", label: "Attire" },
  { href: "/faqs", label: "FAQs" },
];

/**
 * Shared chrome for every route below the home page: a small header that
 * links back to Home plus the other sections, and the site footer.
 * Keeps each app/<route>/page.tsx focused on just its own content.
 */
export default function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3 border-b border-hairline px-4 py-4 sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-6 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-navy sm:gap-4"
        >
          <Monogram size="md" />
          <span className="font-script text-2xl text-navy">
            {couple.first} &amp; {couple.second}
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-3 gap-y-2 sm:gap-x-6">
          {navLinks.map((link) => {
            const isActive = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`tracked text-md text-navy transition-colors duration-300 hover:text-navy focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-navy sm:text-xs ${
                  isActive ? "underline font-bold underline-offset-4 text-navy" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}
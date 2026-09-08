"use client";

import Link from "next/link";
import Monogram from "./Monogram";
import SiteFooter from "./SiteFooter";
import { couple } from "../../data/content";

type PageShellProps = {
  children: React.ReactNode;
  /**
   * The current page's name, shown as "‹ Back | {currentLabel}" in the
   * header. Omit this on the Home page itself — Home is the hub everything
   * else backs out to, so it has nothing to "go back" to.
   */
  currentLabel?: string;
};

/**
 * Shared chrome for every page in the app, including Home: a header with
 * the couple's monogram (always linking to "/home") and, on every page
 * except Home, a "‹ Back | PageName" indicator — plus the site footer.
 */
export default function PageShell({ children, currentLabel }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3 border-b border-hairline px-4 py-4 sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-6 md:px-10">
        <Link
          href="/home"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-navy sm:gap-4"
        >
          <Monogram size="md" />
          <span className="font-script text-xl text-navy sm:text-2xl">
            {couple.first} &amp; {couple.second}
          </span>
        </Link>

        {currentLabel && (
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <Link
              href="/home"
              className="tracked flex items-center gap-1 font-medium text-navy/70 transition-colors duration-300 hover:text-navy focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              <span aria-hidden="true">&lsaquo;</span> Back
            </Link>
            <span aria-hidden="true" className="text-navy/30">
              |
            </span>
            <span aria-current="page" className="tracked font-semibold text-navy">
              {currentLabel}
            </span>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}

import Link from "next/link";

type NavTileProps = {
  href: string;
  eyebrow?: string;
  label: string;
  rotate?: string;
  shape?: "card" | "circle";
  className?: string;
};

/**
 * A tappable piece of "stationery" that links to a section's own page
 * (RSVP, DETAILS, FAQs, ATTIRE). Styled as printed card stock rather
 * than a conventional web button.
 */
export default function NavTile({
  href,
  eyebrow,
  label,
  rotate = "rotate-0",
  shape = "card",
  className = "",
}: NavTileProps) {
  if (shape === "circle") {
    return (
      <Link
        href={href}
        className={`group flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-full border border-navy/25 bg-white text-center paper-shadow-soft transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] focus-visible:-translate-y-0.5 focus-visible:scale-[1.03] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-navy active:scale-[0.98] sm:h-32 sm:w-32 md:h-36 md:w-36 ${rotate} ${className}`}
      >
        <span className="font-display text-base italic text-navy sm:text-lg">
          {label}
        </span>
        {eyebrow && (
          <span className="tracked text-[0.55rem] text-navy/70">{eyebrow}</span>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group flex flex-col items-center justify-center gap-1.5 border border-navy/20 bg-white px-4 py-6 text-center paper-shadow-soft transition-transform duration-300 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-navy active:scale-[0.98] sm:px-6 sm:py-8 ${rotate} ${className}`}
    >
      {eyebrow && (
        <span className="tracked text-[0.6rem] text-navy/70">{eyebrow}</span>
      )}
      <span className="font-display text-lg italic text-navy sm:text-xl md:text-2xl">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="mt-1 h-px w-6 bg-navy/30 transition-all duration-300 group-hover:w-10 sm:w-8 sm:group-hover:w-14"
      />
    </Link>
  );
}
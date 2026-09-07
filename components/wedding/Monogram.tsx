type MonogramProps = {
  size?: "sm" | "md" | "lg";
  tone?: "navy" | "paper";
  className?: string;
};

const sizeMap = {
  sm: "h-8 w-8 text-[0.6rem] sm:h-10 sm:w-10 sm:text-[0.65rem]",
  md: "h-14 w-14 text-sm sm:h-16 sm:w-16",
  lg: "h-20 w-20 text-base sm:h-24 sm:w-24 sm:text-lg",
};

/**
 * The couple's circular monogram badge ("L & L"), used on the wax seal,
 * the header, and the footer. Kept as a single reusable primitive so the
 * mark stays consistent everywhere it appears.
 */
export default function Monogram({
  size = "md",
  tone = "navy",
  className = "",
}: MonogramProps) {
  const toneClasses =
    tone === "navy"
      ? "bg-navy text-paper border-brass/70"
      : "bg-paper text-navy border-navy/40";

  return (
    <div
      className={`relative flex items-center justify-center rounded-full border ${toneClasses} ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      <span className="absolute inset-0.75 rounded-full border border-current/25" />
      <span className="font-display tracked-wide text-md">
        L&nbsp;&amp;&nbsp;L
      </span>
    </div>
  );
}
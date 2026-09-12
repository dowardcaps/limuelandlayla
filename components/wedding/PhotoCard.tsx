type PhotoCardProps = {
  src?: string;
  alt: string;
  caption?: string;
  rotate?: string;
  aspect?: string;
  className?: string;
  /** Bento-style rounded corners, used on the Home grid. Other pages keep the sharp-cornered stationery look by default. */
  rounded?: boolean;
};

/**
 * A photograph presented as a printed photo card within the collage.
 * When no image is supplied yet, a quiet placeholder holds its place
 * without pretending to be a real photo.
 */
export default function PhotoCard({
  src,
  alt,
  caption,
  rotate = "rotate-0",
  aspect = "aspect-[4/5]",
  className = "",
  rounded = false,
}: PhotoCardProps) {
  return (
    <figure
      className={`border border-hairline bg-white p-1.5 paper-shadow sm:p-2 ${
        rounded ? "rounded-2xl overflow-hidden" : ""
      } ${rotate} ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden bg-paper-dim ${aspect} ${
          rounded ? "rounded-xl" : ""
        }`}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-navy/40 sm:gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              aria-hidden="true"
              className="sm:w-7 sm:h-7"
            >
              <rect x="3" y="4" width="18" height="16" rx="0.5" />
              <circle cx="9" cy="10" r="1.6" />
              <path d="M3 17l5.5-5.5a1.5 1.5 0 0 1 2.1 0L15 16" />
              <path d="M13 17l2.9-2.9a1.5 1.5 0 0 1 2.1 0L21 17" />
            </svg>
            <span className="tracked text-[0.5rem] sm:text-[0.55rem]">PHOTO</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="pt-1.5 text-center font-display text-xs italic text-navy/60 sm:pt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
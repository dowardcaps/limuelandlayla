import { saveTheDate, weddingDate } from "../../data/content";

export default function SaveTheDate({
  rotate = "rotate-0",
  className = "",
  rounded = false,
}: {
  rotate?: string;
  className?: string;
  /** Bento-style rounded corners, used on the Home grid. */
  rounded?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center gap-2 border border-navy/25 bg-white px-4 py-6 text-center sm:px-6 sm:py-8 ${
        rounded ? "rounded-2xl" : ""
      } ${rotate} ${className}`}
    >
      <p className="tracked-wide text-[0.65rem] text-navy/70">Save the Date</p>
      <div className="flex flex-col items-center">
        <p className="tracked text-xs text-navy/70">{weddingDate.weekday}</p>
        <p className="font-display text-3xl leading-none text-navy sm:text-4xl md:text-5xl">
          {weddingDate.month} {weddingDate.day}
        </p>
        <p className="tracked text-sm text-navy/70">{weddingDate.year}</p>
      </div>
      <span aria-hidden="true" className="h-px w-8 bg-navy/30 sm:w-10" />
      <p className="font-display text-base italic text-navy sm:text-lg">
        {saveTheDate.venue}
      </p>
      <p className="tracked text-[0.6rem] text-navy/70">{saveTheDate.city}</p>
    </div>
  );
}
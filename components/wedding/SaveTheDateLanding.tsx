"use client";

import { couple, saveTheDate, weddingDate } from "../../data/content";

/**
 * The very first screen a guest sees — a bold, poster-style "Save the
 * Date" card (oversized date numerals, tracked labels) rather than the
 * softer stationery look used further into the site. Tapping/entering
 * advances into the envelope-opening sequence.
 */
export default function SaveTheDateLanding({
  onContinue,
}: {
  onContinue: () => void;
}) {
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onContinue();
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onContinue}
      onKeyDown={handleKeyDown}
      aria-label="Continue to the wedding invitation"
      className="landing-fade flex min-h-screen w-full cursor-pointer flex-col justify-between bg-paper px-4 py-8 outline-none sm:px-6 sm:py-10 md:px-14 md:py-14"
    >
      {/* Top: eyebrow + oversized date */}
      <div className="flex flex-col items-end text-right">
        <p className="tracked-wide text-[0.7rem] text-navy/70 sm:text-[0.65rem]">
          Save the Date
        </p>

        <div className="mt-3 flex items-baseline gap-1.5 sm:mt-4 sm:gap-2 md:gap-3">
          <span className="font-display text-[3.5rem] italic leading-[0.8] text-navy sm:text-[4.6rem] md:text-[7.5rem]">
            {weddingDate.day}
          </span>
          <div className="flex flex-col items-start gap-0.5 pb-0.5 sm:gap-1 sm:pb-1 md:pb-2">
            <span className="tracked text-sm text-brass sm:text-base md:text-lg">
              {weddingDate.month}
            </span>
            <span className="tracked text-xs text-navy/60 sm:text-sm">
              {weddingDate.year}
            </span>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="mt-3 h-px w-12 bg-navy/25 sm:mt-4 sm:w-16 md:w-24"
        />
      </div>

      {/* Middle: couple names */}
      <div className="flex flex-1 flex-col items-center justify-center gap-3 py-8 text-center sm:gap-4 sm:py-10">
        <p className="tracked text-[0.7rem] text-navy/50 sm:text-[0.65rem]">
          for the wedding of
        </p>
        <h1 className="font-script text-4xl leading-none text-navy sm:text-6xl md:text-8xl">
          {couple.first}
          <span className="mx-2 align-middle font-display text-2xl not-italic text-brass sm:mx-3 sm:text-3xl md:text-5xl">
            &amp;
          </span>
          {couple.second}
        </h1>
        {saveTheDate.venue !== "[VENUE NAME]" && (
          <p className="tracked text-xs text-navy/60 sm:text-sm">
            {saveTheDate.venue}
            {saveTheDate.city !== "[CITY, PROVINCE]" && (
              <> &middot; {saveTheDate.city}</>
            )}
          </p>
        )}
      </div>

      {/* Bottom: tap hint */}
      <div className="flex flex-col items-center gap-2 text-navy/45">
        <span aria-hidden="true" className="h-6 w-px bg-navy/20 sm:h-8" />
        <p className="tap-hint tracked text-[0.6rem] sm:text-[0.65rem]">
          Tap anywhere to open your invitation
        </p>
      </div>
    </div>
  );
}
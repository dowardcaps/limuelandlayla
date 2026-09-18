"use client";

import Image from "next/image";
// import { couple, weddingDate } from "../../data/content";

export default function EnvelopeIntro({ onOpened }: { onOpened: () => void }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden px-4 py-12 text-center sm:gap-10 sm:px-6 sm:py-16">
      {/* Background image */}
      <Image
        src="/assets/save-the-date.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Scrim for text legibility – adjust opacity or remove to taste */}
      <div className="absolute inset-0 bg-white/40" />

      {/* Full-screen click target */}
      <button
        type="button"
        onClick={onOpened}
        aria-label="Save the Date — open the wedding invitation"
        className="absolute inset-0 z-20 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy"
      />

      {/* Content */}
      <div className="pointer-events-none relative z-10 flex flex-col mt-auto gap-8 sm:gap-10">
        {/* <div
          className="flex flex-col items-center gap-2 sm:gap-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="tracked-wide text-md">
            Together with their families
          </p>
          <h1 className="font-script text-6xl leading-none text-navy sm:text-5xl">
            {couple.first}{" "}
            <span className="align-middle text-2xl sm:text-3xl md:text-4xl">
              &amp;
            </span>{" "}
            {couple.second}
          </h1>
          <p className="tracked text-xs text-md">
            {weddingDate.month} {weddingDate.day}, {weddingDate.year}
          </p>
        </div> */}

        <span
          className="font-display italic text-2xl text-white"
        >
          Tap anywhere to open
        </span>
      </div>
    </div>
  );
}
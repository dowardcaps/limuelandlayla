"use client";

import Image from "next/image";
import { couple, weddingDate } from "../../data/content";

export default function EnvelopeIntro({ onOpened }: { onOpened: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12 text-center sm:gap-10 sm:px-6 sm:py-16">
      <div 
        className="flex flex-col items-center gap-2 sm:gap-3"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p className="tracked-wide text-md">
          Together with their families
        </p>
        <h1 className="font-script text-6xl leading-none text-navy sm:text-5xl">
          {couple.first} <span className="text-2xl align-middle sm:text-3xl md:text-4xl">&amp;</span>{" "}
          {couple.second}
        </h1>
        <p className="tracked text-xs text-md">
          {weddingDate.month} {weddingDate.day}, {weddingDate.year}
        </p>
      </div>

      {/* Save the Date Image */}
      <button
        type="button"
        onClick={onOpened}
        aria-label="Open the wedding invitation"
        className="group relative cursor-pointer outline-none transition-transform active:scale-98"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <Image
          src="/assets/save-the-date.png"
          alt="Save the Date - Katte & Berry"
          width={400}
          height={500}
          className="rounded-lg shadow-xl"
          priority
        />
      </button>

      <p 
        className="font-display italic text-lg"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Tap the image to open
      </p>
    </div>
  );
}
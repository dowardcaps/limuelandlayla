"use client";

import { useState, useEffect } from "react";
import Monogram from "./Monogram";
import { couple, weddingDate } from "../../data/content";

type Stage = "idle" | "sealBreak" | "flapOpen" | "cardRise" | "expand";

const STAGE_TIMELINE: { stage: Stage; delay: number }[] = [
  { stage: "sealBreak", delay: 0 },
  { stage: "flapOpen", delay: 320 },
  { stage: "cardRise", delay: 780 },
  { stage: "expand", delay: 1500 },
];

export default function EnvelopeIntro({ onOpened }: { onOpened: () => void }) {
  const [stage, setStage] = useState<Stage>("idle");
  const [isOpening, setIsOpening] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleOpen() {
    if (isOpening || !isMounted) return;
    setIsOpening(true);
    STAGE_TIMELINE.forEach(({ stage: s, delay }) => {
      window.setTimeout(() => setStage(s), delay);
    });
    window.setTimeout(onOpened, 1900);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen();
    }
  }

  // Ensure envelope starts in correct state on Safari
  const stageClass = `stage-${stage}`;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12 text-center sm:gap-10 sm:px-6 sm:py-16">
      <div className={`intro-fade ${stageClass} flex flex-col items-center gap-2 sm:gap-3`}>
        <p className="tracked-wide text-[0.7rem] text-navy/70 sm:text-md">
          Together with their families
        </p>
        <h1 className="font-script text-3xl leading-none text-navy sm:text-5xl md:text-6xl">
          {couple.first} <span className="text-2xl align-middle sm:text-3xl md:text-4xl">&amp;</span>{" "}
          {couple.second}
        </h1>
        <p className="tracked text-xs text-navy/70 sm:text-sm">
          {weddingDate.month} {weddingDate.day}, {weddingDate.year}
        </p>
      </div>

      <button
        type="button"
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
        aria-label="Open the wedding invitation"
        className={`envelope-scene ${stageClass} group relative h-[170px] w-[250px] cursor-pointer outline-none sm:h-[190px] sm:w-[280px] md:h-[210px] md:w-[310px] touch-manipulation`}
        style={{ 
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d'
        }}
      >
        {/* Invitation card, hidden inside the envelope until opened */}
        <div 
          className="envelope-card absolute left-1/2 top-[10%] z-10 h-[80%] w-[88%] -translate-x-1/2 border border-hairline bg-white paper-shadow"
          style={{
            transform: 'translate(-50%, 0%)',
            WebkitTransform: 'translate(-50%, 0%)',
            transition: 'transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.35s, opacity 0.7s ease 0.35s',
            WebkitTransition: '-webkit-transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.35s, opacity 0.7s ease 0.35s'
          }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-1.5 px-3 sm:gap-2 sm:px-4">
            <Monogram size="sm" tone="paper" />
            <p className="font-display text-base text-navy sm:text-lg">
              {couple.first} &amp; {couple.second}
            </p>
            <p className="tracked text-[0.5rem] text-navy/60 sm:text-[0.6rem]">
              {weddingDate.display}
            </p>
          </div>
        </div>

        {/* Envelope shell: pocket + flap + seal */}
        <div className="envelope-body absolute inset-0 z-20">
          <div className="absolute inset-x-0 bottom-0 h-[62%] bg-navy paper-shadow" />
          <div
            className="envelope-flap absolute inset-x-0 top-0 h-[46%] bg-navy-deep"
            style={{ 
              clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
              WebkitClipPath: "polygon(0% 0%, 100% 0%, 50% 100%)"
            }}
          />
          <div className="envelope-seal absolute left-1/2 top-[38%] z-30 -translate-x-1/2 -translate-y-1/2">
            <Monogram size="sm" tone="navy" />
          </div>
        </div>
      </button>

      <p
        className={`intro-fade ${stageClass} tap-hint font-display text-base italic sm:text-lg`}
      >
        {isOpening ? "Opening…" : "Tap the envelope to open"}
      </p>
    </div>
  );
}
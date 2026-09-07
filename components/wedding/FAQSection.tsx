"use client";

import { useState } from "react";
import { faqs } from "../../data/content";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div 
      className="border-b border-white/30 last:border-b-0"
      data-aos="fade-up"
      data-aos-delay={index * 60 + 100}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-3 py-5 text-left transition-colors duration-200 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:gap-4 sm:py-6"
        >
          <span className="font-body text-base font-bold text-white sm:text-lg md:text-xl">
            {question}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`shrink-0 text-white transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-6 text-base leading-relaxed text-white sm:pb-6 sm:pr-8 sm:text-lg">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-navy py-16 sm:py-24">
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center gap-3 text-center" data-aos="fade-up">
          <p className="tracked-wide text-sm text-white/90">Good to Know</p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-2 h-px w-16 bg-white/50" />
        </div>

        <div className="mt-10 sm:mt-12">
          {faqs.map((item, index) => (
            <FAQItem
              key={item.question}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
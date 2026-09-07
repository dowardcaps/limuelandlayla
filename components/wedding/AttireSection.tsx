import { attire } from "../../data/content";

// Note: this section previously wrapped its <section> in <RevealOnScroll>
// (a separate IntersectionObserver-based fade-in) *and* used data-aos on
// its children (AOS-driven fade-in). Two independent scroll-reveal systems
// were fighting over the same elements' opacity/transform, which caused
// inconsistent or stuck animations. Standardized on data-aos here, matching
// every other section in the app.

export default function AttireSection() {
  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-12 text-center sm:px-6 sm:py-20 md:px-10">
      <div data-aos="fade-up">
        <p className="tracked-wide text-md text-navy">Dress Code</p>
        <h2 className="mt-2 font-display text-2xl text-navy sm:text-3xl md:text-4xl">
          {attire.heading}
        </h2>
        <p className="mt-1 font-display text-lg italic text-navy/80 sm:text-xl">
          {attire.subheading}
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm text-navy/70 sm:mt-4">
          {attire.note}
        </p>
      </div>

      <ul className="mt-8 flex flex-wrap items-start justify-center gap-3 sm:mt-10 sm:gap-4">
        {attire.palette.map((color, index) => (
          <li
            key={color.hex}
            className="flex flex-col items-center gap-1.5 sm:gap-2"
            data-aos="fade-up"
            data-aos-delay={index * 50 + 100}
          >
            <span
              className="h-12 w-12 border border-navy/15 sm:h-14 sm:w-14 md:h-16 md:w-16"
              style={{
                backgroundColor: color.hex,
                borderRadius: "50% 50% 4px 4px",
              }}
              aria-hidden="true"
            />
            <span className="text-[0.6rem] tracked text-navy sm:text-[0.65rem]">
              {color.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

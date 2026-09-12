import Monogram from "./Monogram";
import PhotoCard from "./PhotoCard";
import SaveTheDate from "./SaveTheDate";
import NavTile from "./NavTile";
import { couple, weddingDate } from "../../data/content";
import Image from "next/image";

/**
 * Home page content: a bento grid rather than the scattered/rotated
 * "flat lay" collage used elsewhere. Every tile is grid-aligned (no
 * rotation), shares the same rounded-corner + shadow language, and the
 * grid is explicitly placed (col-start/row-start) so the desktop layout
 * — a tall feature photo, a row of four equal nav tiles, two supporting
 * photos — stays intentional rather than falling out of auto-placement.
 * On mobile it collapses to a clean 2-column stack in the same order.
 */
export default function HeroSection() {
  return (
    <div className="collage-enter">
      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16">
        {/* Envelope banner, sitting above the grid as its own element (not
            an absolutely-positioned overlay, so it can't collide with or
            hide any grid content). Uses a fixed aspect-ratio container +
            `fill` so it scales cleanly at every breakpoint. */}
       <div className="absolute left-1/2 flex-center w-100 -translate-x-1/2">
    <Image
      src="/assets/envelope.png"
      alt="Wedding envelope"
      height={500}
      width={500}
      className="w-full"
      priority
    />
  </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:gap-5 mt-80">
          {/* Header / monogram card */}
          <div
            className="col-span-2 sm:col-start-1 sm:col-span-2 sm:row-start-1"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-navy/10 bg-white px-4 py-8 text-center paper-shadow-soft sm:items-start sm:px-6 sm:py-10 sm:text-left md:gap-3">
              <Monogram size="md" />
              <div>
                <p className="font-script text-3xl leading-none text-navy sm:text-4xl md:text-5xl">
                  {couple.first} &amp; {couple.second}
                </p>
                <div className="mt-3 flex flex-col items-center sm:items-start">
                  <p className="text-[0.7rem] uppercase tracking-[0.15em] text-navy/70 sm:text-[0.75rem]">
                    You&apos;re Invited
                  </p>
                  <p className="mt-1 font-display text-sm italic text-navy/60">
                    {weddingDate.display}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary photo — tall feature tile */}
          <div
            className="col-span-2 row-span-1 sm:col-start-3 sm:col-span-2 sm:row-start-1 sm:row-span-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <PhotoCard
              alt={`${couple.first} and ${couple.second}`}
              aspect="aspect-[4/5] sm:aspect-auto sm:h-full"
              rounded
              className="h-full"
            />
          </div>

          {/* Save the date */}
          <div
            className="col-span-2 sm:col-start-1 sm:col-span-2 sm:row-start-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <SaveTheDate rounded />
          </div>

          {/* Four equal nav tiles */}
          <div
            className="col-span-1 sm:col-start-1 sm:row-start-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NavTile href="/details" label="Details" rounded />
          </div>
          <div
            className="col-span-1 sm:col-start-2 sm:row-start-3"
            data-aos="fade-up"
            data-aos-delay="230"
          >
            <NavTile href="/entourage" label="Entourage" rounded />
          </div>
          <div
            className="col-span-1 sm:col-start-3 sm:row-start-3"
            data-aos="fade-up"
            data-aos-delay="260"
          >
            <NavTile href="/attire" label="Attire" rounded />
          </div>
          <div
            className="col-span-1 sm:col-start-4 sm:row-start-3 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="290"
          >
            <NavTile href="/faqs" label="FAQs" shape="circle" circleSize="md" />
          </div>

          {/* Two supporting photos */}
          <div
            className="col-span-1 sm:col-start-1 sm:col-span-2 sm:row-start-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <PhotoCard alt="A quiet moment" aspect="aspect-square" rounded />
          </div>
          <div
            className="col-span-1 sm:col-start-3 sm:col-span-2 sm:row-start-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <PhotoCard alt="A quiet moment" aspect="aspect-square" rounded />
          </div>
        </div>

        {/* Footer with social and branding */}
        <div className="mt-12 flex flex-col items-center gap-3 text-navy/40 sm:mt-16">
          <span aria-hidden="true" className="h-8 w-px bg-navy/20 sm:h-10" />
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="tracked text-[0.6rem] text-navy/50">{couple.hashtag}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

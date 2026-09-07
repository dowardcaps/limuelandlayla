import Monogram from "./Monogram";
import PhotoCard from "./PhotoCard";
import SaveTheDate from "./SaveTheDate";
import NavTile from "./NavTile";
import ScrollReveal from "./ScrollReveal";
import SiteFooter from "./SiteFooter";
import { couple, weddingDate } from "../../data/content";

export default function HeroSection() {
  return (
    <main className="collage-enter">
      <section className="mx-auto w-full max-w-4xl px-4 pb-12 pt-10 sm:px-5 sm:pb-16 sm:pt-14 md:px-10 md:pt-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-6">
          {/* Header / monogram card */}
          <div className="sm:col-start-1 sm:col-span-3 sm:row-start-1">
            <div 
              className="flex h-full flex-col items-center justify-center gap-2 border border-navy/15 bg-white px-4 py-6 text-center paper-shadow-soft sm:items-start sm:px-6 sm:py-8 sm:text-left md:gap-3"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Monogram size="md" />
              <div>
                <p className="font-script text-2xl leading-none text-navy sm:text-3xl md:text-4xl">
                  {couple.first} &amp; {couple.second}
                </p>
                <p className="tracked mt-1.5 text-[0.65rem] text-navy/70 sm:text-md">
                  You&apos;re Invited &middot; {weddingDate.display}
                </p>
              </div>
            </div>
          </div>

          {/* Primary photo */}
          <div className="sm:col-start-4 sm:col-span-3 sm:row-start-1" data-aos="fade-up" data-aos-delay="100">
            <PhotoCard
              alt={`${couple.first} and ${couple.second}`}
              rotate="-rotate-1"
              aspect="aspect-[4/5]"
            />
          </div>

          {/* Save the date */}
          <div className="sm:col-start-1 sm:col-span-2 sm:row-start-2" data-aos="fade-up" data-aos-delay="150">
            <SaveTheDate rotate="rotate-1" />
          </div>

          {/* Nav tiles */}
          <div className="sm:col-start-3 sm:col-span-2 sm:row-start-2" data-aos="fade-up" data-aos-delay="200">
            <NavTile href="/rsvp" eyebrow="Kindly" label="RSVP here" rotate="-rotate-1" />
          </div>
          <div className="sm:col-start-5 sm:col-span-2 sm:row-start-2" data-aos="fade-up" data-aos-delay="250">
            <NavTile href="/details" label="Click for the DETAILS" rotate="rotate-1" />
          </div>

          {/* Small photo pair + FAQ circle */}
          <div className="sm:col-start-1 sm:col-span-2 sm:row-start-3" data-aos="fade-up" data-aos-delay="100">
            <PhotoCard alt="A quiet moment" rotate="rotate-1" aspect="aspect-square" />
          </div>
          <div 
            className="flex items-center justify-center sm:col-start-3 sm:col-span-2 sm:row-start-3"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <NavTile href="/faqs" label="FAQs" shape="circle" />
          </div>
          <div className="sm:col-start-5 sm:col-span-2 sm:row-start-3" data-aos="fade-up" data-aos-delay="200">
            <PhotoCard alt="A quiet moment" rotate="-rotate-1" aspect="aspect-square" />
          </div>

          {/* Full-width row with Entourage and Attire */}
          <div className="sm:col-start-1 sm:col-span-3" data-aos="fade-up" data-aos-delay="100">
            <NavTile href="/entourage" label="Our ENTOURAGE" />
          </div>
          <div className="sm:col-start-4 sm:col-span-3" data-aos="fade-up" data-aos-delay="150">
            <NavTile href="/attire" label="Dress Code &middot; ATTIRE" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-navy/45 sm:mt-16">
          <span aria-hidden="true" className="h-8 w-px bg-navy/20 sm:h-10" />
          <p className="tracked text-[0.6rem]" data-aos="fade-up" data-aos-delay="200">
            Browse the sections above
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
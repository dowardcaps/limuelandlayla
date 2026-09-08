import Monogram from "./Monogram";
import PhotoCard from "./PhotoCard";
import SaveTheDate from "./SaveTheDate";
import NavTile from "./NavTile";
import DetailsSection from "./DetailsSection";
import AttireSection from "./AttireSection";
import FAQSection from "./FAQSection";
import { couple, weddingDate } from "../../data/content";

export default function InvitationCollage() {
  return (
    <main className="collage-enter">
      {/* ---------------- Hero collage: the "flat lay" of stationery ---------------- */}
      <section className="mx-auto w-full max-w-4xl px-5 pb-16 pt-14 sm:px-10 sm:pt-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
          {/* Header / monogram card */}
          <div className="flex flex-col items-center justify-center gap-3 border border-navy/15 bg-white px-6 py-8 text-center paper-shadow-soft sm:col-start-1 sm:col-span-3 sm:row-start-1 sm:items-start sm:text-left">
            <Monogram size="md" />
            <div>
              <p className="font-script text-3xl leading-none text-navy sm:text-4xl">
                {couple.first} &amp; {couple.second}
              </p>
              <p className="tracked mt-2 text-[0.65rem] text-navy/55">
                You&apos;re Invited &middot; {weddingDate.display}
              </p>
            </div>
          </div>

          {/* Primary photo */}
          <PhotoCard
            alt={`${couple.first} and ${couple.second}`}
            rotate="-rotate-1"
            aspect="aspect-[4/5]"
            className="sm:col-start-4 sm:col-span-3 sm:row-start-1"
          />

          {/* Save the date */}
          <SaveTheDate rotate="rotate-1" className="sm:col-start-1 sm:col-span-2 sm:row-start-2" />

          {/* Nav tiles */}
          <NavTile
            href="#rsvp"
            eyebrow="Kindly"
            label="RSVP here"
            rotate="-rotate-1"
            className="sm:col-start-3 sm:col-span-2 sm:row-start-2"
          />
          <NavTile
            href="#details"
            label="Click for the DETAILS"
            rotate="rotate-1"
            className="sm:col-start-5 sm:col-span-2 sm:row-start-2"
          />

          {/* Small photo pair + FAQ circle */}
          <PhotoCard
            alt="A quiet moment"
            rotate="rotate-1"
            aspect="aspect-square"
            className="sm:col-start-1 sm:col-span-2 sm:row-start-3"
          />
          <div className="flex items-center justify-center sm:col-start-3 sm:col-span-2 sm:row-start-3">
            <NavTile href="#faqs" label="FAQs" shape="circle" circleSize="lg" />
          </div>
          <PhotoCard
            alt="A quiet moment"
            rotate="-rotate-1"
            aspect="aspect-square"
            className="sm:col-start-5 sm:col-span-2 sm:row-start-3"
          />
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-navy/45">
          <span aria-hidden="true" className="h-10 w-px bg-navy/20" />
          <p className="tracked text-[0.6rem]">Scroll for the full invitation</p>
        </div>
      </section>

      {/* ---------------- Full sections ---------------- */}
      <div className="border-t border-hairline">
        <DetailsSection />
      </div>
      <div className="border-t border-hairline">
        <AttireSection />
      </div>
      <FAQSection />

      <footer className="flex flex-col items-center gap-4 bg-paper px-6 py-14 text-center">
        <Monogram size="sm" />
        <p className="font-script text-2xl text-navy">
          {couple.first} &amp; {couple.second}
        </p>
        <p className="tracked text-[0.6rem] text-navy/50">
          {weddingDate.display} &middot; {couple.hashtag}
        </p>
      </footer>
    </main>
  );
}

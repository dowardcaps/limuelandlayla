import { rsvp } from "../../data/content";
import ScrollReveal from "./ScrollReveal";

export default function RSVPSection() {
  return (
    <section className="mx-auto w-full max-w-xl px-4 py-12 text-center sm:px-6 sm:py-20 md:px-10">
      <ScrollReveal>
        <p className="tracked-wide text-md text-navy/70">Kindly Respond</p>
        <h2 className="mt-2 font-display text-2xl text-navy sm:text-3xl md:text-4xl">RSVP</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-navy/70 sm:mt-4">{rsvp.note}</p>

        <a
          href={rsvp.formUrl}
          className="tracked mt-6 inline-block border border-navy bg-navy px-6 py-2.5 text-xs text-white transition-colors duration-300 hover:bg-navy-deep focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-navy sm:mt-8 sm:px-8 sm:py-3"
        >
          Respond Now
        </a>
      </ScrollReveal>
    </section>
  );
}
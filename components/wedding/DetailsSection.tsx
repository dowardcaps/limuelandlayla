import { details } from "../../data/content";
import PhotoCard from "./PhotoCard";
import ScrollReveal from "./ScrollReveal";

function VenueBlock({
  label,
  time,
  venue,
  address,
}: {
  label: string;
  time: string;
  venue: string;
  address: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 px-2 text-center sm:items-start sm:px-4 sm:text-left">
      <p className="tracked-wide text-[0.65rem] text-navy/70">{label}</p>
      <p className="font-display text-xl italic text-navy sm:text-2xl">{venue}</p>
      <p className="text-sm text-navy/70">{time}</p>
      <p className="text-sm text-navy/70">{address}</p>
    </div>
  );
}

export default function DetailsSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-20 md:px-10">
      <ScrollReveal className="mb-8 flex flex-col items-center gap-2 text-center sm:mb-10">
        <p className="tracked-wide text-md text-navy/70">The Celebration</p>
        <h2 className="font-display text-2xl text-navy sm:text-3xl md:text-4xl">Details</h2>
      </ScrollReveal>

      <ScrollReveal delayMs={80} className="grid gap-8 border-t border-hairline pt-8 sm:grid-cols-2 sm:gap-10 sm:pt-10">
        <VenueBlock
          label={details.ceremony.label}
          time={details.ceremony.time}
          venue={details.ceremony.venue}
          address={details.ceremony.address}
        />
        <VenueBlock
          label={details.reception.label}
          venue={details.reception.venue}
          time={details.reception.time}
          address={details.reception.address}
        />
      </ScrollReveal>

      <ScrollReveal delayMs={140} className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
        <PhotoCard alt="Ceremony venue" aspect="aspect-[16/10]" />
        <PhotoCard alt="Reception venue" aspect="aspect-[16/10]" />
      </ScrollReveal>

      <ScrollReveal
        delayMs={80}
        className="mt-8 flex flex-col items-center gap-4 border-t border-hairline pt-6 text-center sm:mt-10 sm:pt-8"
      >
        <a
          href={details.mapUrl}
          className="tracked border border-navy/30 px-6 py-3 text-xs text-navy transition-colors duration-300 hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          View Map &amp; Directions
        </a>
        <p className="text-sm text-navy/70">
          Questions? Reach {details.contact.name} at{" "}
          <a className="underline decoration-navy/30 underline-offset-4" href={`tel:${details.contact.phone}`}>
            {details.contact.phone}
          </a>{" "}
          or{" "}
          <a className="underline decoration-navy/30 underline-offset-4" href={`mailto:${details.contact.email}`}>
            {details.contact.email}
          </a>
        </p>
      </ScrollReveal>
    </section>
  );
}
import { details } from "../../data/content";
import PhotoCard from "./PhotoCard";

function VenueBlock({
  label,
  time,
  venue,
  address,
  mapUrl,
}: {
  label: string;
  time: string;
  venue: string;
  address: string;
  mapUrl?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 px-2 text-center sm:items-start sm:px-4 sm:text-left">
      <p className="tracked-wide text-[0.65rem] text-navy/70">{label}</p>
      <p className="font-display text-xl italic text-navy sm:text-2xl">{venue}</p>
      <p className="text-sm text-navy/70">{time}</p>
      <p className="text-sm text-navy/70">{address}</p>
      {mapUrl && (
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tracked mt-1 text-[0.65rem] text-navy underline decoration-navy/30 underline-offset-4 transition-colors duration-300 hover:text-navy/70 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          View Map
        </a>
      )}
    </div>
  );
}

export default function DetailsSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-20 md:px-10">
      <div className="mb-8 flex flex-col items-center gap-2 text-center sm:mb-10" data-aos="fade-up">
        <p className="tracked-wide text-[0.65rem] text-navy/70">The Celebration</p>
        <h2 className="font-display text-2xl text-navy sm:text-3xl md:text-4xl">Details</h2>
      </div>

      <div className="grid gap-8 border-t border-hairline pt-8 sm:grid-cols-2 sm:gap-10 sm:pt-10">
        <div data-aos="fade-up" data-aos-delay="100">
          <VenueBlock
            label={details.ceremony.label}
            time={details.ceremony.time}
            venue={details.ceremony.venue}
            address={details.ceremony.address}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <VenueBlock
            label={details.reception.label}
            venue={details.reception.venue}
            time={details.reception.time}
            address={details.reception.address}
            mapUrl={details.reception.mapUrl}
          />
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
        <div data-aos="fade-up" data-aos-delay="100">
          <PhotoCard alt="Ceremony venue" aspect="aspect-[16/10]" />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <PhotoCard alt="Reception venue" aspect="aspect-[16/10]" src="./assets/shakeys.png"/>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 border-t border-hairline pt-6 text-center sm:mt-10 sm:pt-8" data-aos="fade-up" data-aos-delay="100">
        <a
          href={details.mapUrl}
          className="tracked border border-navy/30 px-6 py-3 text-xs text-navy transition-colors duration-300 hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-navy"
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
      </div>
    </section>
  );
}
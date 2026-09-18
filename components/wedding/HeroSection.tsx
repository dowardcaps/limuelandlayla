import Monogram from "./Monogram";
import NavTile from "./NavTile";

import { couple, weddingDate } from "../../data/content";
import LightboxImage from "../ui/LightboxImage";

export default function HeroSection(): React.ReactElement {
  return (
    <div className="collage-enter">
      <section className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16">

        {/* Envelope banner — now zoomable */}
        <div
          className="mx-auto mb-6 w-full max-w-xs sm:mb-8 sm:max-w-sm md:max-w-md"
          data-aos="fade-down"
          data-aos-delay="0"
        >
          <LightboxImage
            src="/assets/envelope.png"
            alt="Wedding envelope"
            width={500}
            height={500}
            className="h-auto w-full object-contain drop-shadow-md"
            wrapperClassName="!rounded-none bg-transparent"
            priority
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:gap-5">

          {/* Monogram / invite card */}
          <div
            className="col-span-2 sm:col-start-1 sm:col-span-2 sm:row-start-1"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-navy/10 bg-white px-5 py-8 text-center paper-shadow-soft sm:items-start sm:px-6 sm:py-10 sm:text-left md:gap-4">
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

          {/* Tall feature photo + note */}
          <div
            className="col-span-2 sm:col-start-3 sm:col-span-2 sm:row-start-1 sm:row-span-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex h-full flex-col gap-4">
              <LightboxImage
                src="/assets/nakaupo.jpg"
                alt="Boy and girl sitting on the grass"
                width={1000}
                height={1000}
                className="h-auto w-full object-cover"
                wrapperClassName="rounded-2xl shadow-lg"
                caption={`${couple.first} & ${couple.second}`}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <p className="text-sm leading-relaxed text-navy/70 sm:text-[0.9rem]">
                We&apos;re getting married! 🤍 We&apos;d love for you to be there as we
                celebrate this special moment with the people closest to our
                hearts. After the ceremony, let&apos;s enjoy a simple lunch and
                spend some time together—talking, laughing, and making memories.
                No program, no big celebration—just a simple and intimate day
                with the people we love. We hope you can celebrate with us!
              </p>
            </div>
          </div>

          {/* Nav row */}
          <div className="col-span-1 sm:col-start-1 sm:row-start-3" data-aos="fade-up" data-aos-delay="200">
            <NavTile href="/details" label="Details" rounded />
          </div>
          <div
            className="col-span-1 flex items-center justify-center sm:col-start-4 sm:row-start-3"
            data-aos="fade-up"
            data-aos-delay="290"
          >
            <NavTile href="/faqs-attire" label="Click for FAQs" shape="circle" circleSize="lg" />
          </div>

          {/* Supporting photos — now zoomable */}
          <div
            className="col-span-1 sm:col-start-1 sm:col-span-2 sm:row-start-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <LightboxImage
              src="/assets/holdinghands.jpg"
              alt="Holding hands"
              width={1000}
              height={1000}
              className="aspect-square w-full object-cover"
              wrapperClassName="rounded-xl shadow-md"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
          <div
            className="col-span-1 sm:col-start-3 sm:row-start-4"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            <LightboxImage
              src="/assets/eye.jpg"
              alt="A quiet moment"
              width={1000}
              height={1000}
              className="aspect-square w-full object-cover"
              wrapperClassName="rounded-xl shadow-md"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
          <div
            className="col-span-2 sm:col-start-4 sm:col-span-1 sm:row-start-4"
            data-aos="fade-up"
            data-aos-delay="220"
          >
            <LightboxImage
              src="/assets/far.jpg"
              alt="A quiet moment"
              width={1000}
              height={1000}
              className="aspect-square w-full object-cover"
              wrapperClassName="rounded-xl shadow-md"
              sizes="(max-width: 640px) 100vw, 25vw"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col items-center gap-3 text-navy/40 sm:mt-16">
          <span aria-hidden="true" className="h-8 w-px bg-navy/20 sm:h-10" />
          <p className="tracked text-[0.6rem] text-navy/50">{couple.hashtag}</p>
        </div>
      </section>
    </div>
  );
}
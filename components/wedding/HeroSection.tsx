import Monogram from "./Monogram";
import PhotoCard from "./PhotoCard";
import SaveTheDate from "./SaveTheDate";
import NavTile from "./NavTile";
import { couple, weddingDate } from "../../data/content";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="collage-enter">
      <section className="mx-auto w-full max-w-4xl px-4 pb-12 pt-10 sm:px-5 sm:pb-16 sm:pt-14 md:px-10 md:pt-20">
        
        {/* Envelope - Full width top banner */}
        <div className="mb-6 flex justify-center sm:mb-8" data-aos="fade-down" data-aos-delay="0">
          <div className="absolute w-full max-w-md overflow-hidden rounded-lg transition-transform">
            <Image 
              src="/assets/envelope.png" 
              width={600} 
              height={200} 
              className="w-full object-contain" 
              alt="envelope wedding"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-6 sm:gap-5 mt-100">
          
          {/* Header / monogram card - Enhanced */}
          <div className="sm:col-start-1 sm:col-span-3 sm:row-start-1">
            <div 
              className="flex h-full flex-col items-center justify-center gap-2 border border-navy/10 bg-white px-4 py-8 text-center backdrop-blur-sm sm:items-start sm:px-6 sm:py-10 sm:text-left md:gap-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Monogram size="md" />
              <div>
                <p className="font-script text-3xl leading-none text-navy sm:text-4xl md:text-5xl">
                  {couple.first} &amp; {couple.second}
                </p>
                <div className="mt-3 flex flex-col items-center sm:items-start">
                  <p className="text-[0.7rem] uppercase tracking-[0.15em] text-navy/60 sm:text-[0.75rem]">
                    You&apos;re Invited
                  </p>
                  <p className="mt-1 font-serif text-sm italic text-navy/50">
                    {weddingDate.display}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary photo*/}
          <div className="sm:col-start-4 sm:col-span-3 sm:row-start-1" data-aos="fade-up" data-aos-delay="150">
            <div className="transform transition-transform -rotate-1">
              <PhotoCard
                alt={`${couple.first} and ${couple.second}`}
                rotate="-rotate-1"
                aspect="aspect-[4/5]"
              />
            </div>
          </div>

          {/* Save the date - Enhanced with date prominently displayed */}
          <div className="sm:col-start-1 sm:col-span-3 sm:row-start-2" data-aos="fade-up" data-aos-delay="200">
            <div className="transform transition-transform hover:scale-[1.02] rotate-1">
              <SaveTheDate rotate="rotate-1" />
            </div>
          </div>

          {/* Nav tile - RSVP */}
          <div className="sm:col-start-4 sm:col-span-3 sm:row-start-2" data-aos="fade-up" data-aos-delay="300">
            <NavTile href="/details" label="Details" rotate="rotate-1" />
          </div>

          {/* Small photo pair */}
          <div className="sm:col-start-1 sm:col-span-2 sm:row-start-3" data-aos="fade-up" data-aos-delay="150">
            <div className="transform transition-transform rotate-1">
              <PhotoCard alt="A quiet moment" rotate="rotate-1" aspect="aspect-square" />
            </div>
          </div>
          
          <div className="sm:col-start-5 sm:col-span-2 sm:row-start-3" data-aos="fade-up" data-aos-delay="250">
            <div className="transform transition-transform -rotate-1">
              <PhotoCard alt="A quiet moment" rotate="-rotate-1" aspect="aspect-square" />
            </div>
          </div>

          {/* Entourage */}
          <div className="sm:col-start-1 sm:col-span-2 sm:row-start-4" data-aos="fade-up" data-aos-delay="150">
            <NavTile href="/entourage" label="ENTOURAGE" />
          </div>

          {/* FAQ Circle */}
          <div 
            className="flex items-center justify-center sm:col-start-3 sm:col-span-2 sm:row-start-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NavTile href="/faqs" label="Click for FAQs" shape="circle" circleSize="lg" />
          </div>

          {/* Attire */}
          <div className="sm:col-start-5 sm:col-span-2 sm:row-start-4" data-aos="fade-up" data-aos-delay="200">
            <NavTile href="/attire" label="ATTIRE" />
          </div>
        </div>

        {/* Footer with social and branding - Enhanced to match screenshot */}
        <div className="mt-12 flex flex-col items-center gap-3 text-navy/40 sm:mt-16">
          <span aria-hidden="true" className="h-8 w-px bg-navy/20 sm:h-10" />
          
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="font-serif text-xs tracking-wider" data-aos="fade-up" data-aos-delay="250">
              theinvitada.com
            </p>
            <p className="font-serif text-[0.55rem] tracking-[0.2em]" data-aos="fade-up" data-aos-delay="300">
              1788746608
            </p>
            <div className="mt-2 flex items-center gap-4">
              <span className="text-[0.55rem] tracking-[0.15em]">TikTok</span>
              <span className="text-[0.55rem] tracking-[0.15em] text-navy/30">@ theinvitada</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
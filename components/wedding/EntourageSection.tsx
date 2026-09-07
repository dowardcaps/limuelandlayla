
// Entourage data
const entourageData = {
  ninong: [
    "CAPT HERNANE DC LANES PN (GSC)",
    "CDR DENNISON E ESPERANZA PN (GSC)",
    "LCDR CARLO M MADRID PN",
    "CAPT ARVIN ANGON SARMIENTO PN (Ret)",
    "HON. PINBOY ANGELES",
    "MR. SEVERINO B DILAO JR",
  ],
  ninang: [
    "MS. JACQUELINE YOUNG LEGASPI",
    "MS. ROSALIE OLIVAR DAYLUSAN",
    "MS. GLADYS ORDOÑEZ MANANSALA",
    "MS. EVANGELINE ANGUE",
    "MS. ANA PATRICIA AYON ORDOÑEZ",
    "MS. RACHEL BINAUHAN",
  ],
  parentsGroom: {
    father: "Mr. Roderick Andaya",
    mother: "Mrs. Chona Fe Andaya",
  },
  parentsBride: {
    mother: "Raquel Justiza",
    father: "In Loving Memory of Mr. Dennis Justiza",
  },
  reception: "SHAKEY'S NAIC",
};

export default function EntourageSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-20 md:px-10">
      <div className="mb-10 flex flex-col items-center gap-2 text-center sm:mb-12" data-aos="fade-up">
        <p className="tracked-wide text-[0.65rem] text-navy/70">Our Special People</p>
        <h2 className="font-display text-3xl text-navy sm:text-4xl">Entourage</h2>
        <div className="mt-1 h-px w-16 bg-navy/20" />
      </div>
      

      <div className="flex flex-col gap-12 sm:gap-16">
                {/* Parents */}
        <div className="grid gap-10 sm:grid-cols-2">
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-col items-center gap-3">
              <h3 className="font-display text-2xl italic text-navy sm:text-3xl">Parents of the Groom</h3>
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-sm text-navy/80 sm:text-base">{entourageData.parentsGroom.mother}</p>
                <p className="text-sm text-navy/80 sm:text-base">{entourageData.parentsGroom.father}</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="350">
            <div className="flex flex-col items-center gap-3">
              <h3 className="font-display text-2xl italic text-navy sm:text-3xl">Parents of the Bride</h3>
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-sm text-navy/80 sm:text-base">{entourageData.parentsBride.mother}</p>
                <p className="text-sm italic text-navy/60 sm:text-base">{entourageData.parentsBride.father}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ninongs */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-display text-2xl italic text-navy sm:text-3xl">Ninongs</h3>
            <ul className="flex w-full max-w-md flex-col items-center gap-2">
              {entourageData.ninong.map((item, index) => (
                <li 
                  key={item} 
                  className="w-full text-center text-sm text-navy/80 sm:text-base"
                  data-aos="fade-up"
                  data-aos-delay={index * 30 + 150}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ninangs */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-display text-2xl italic text-navy sm:text-3xl">Ninangs</h3>
            <ul className="flex w-full max-w-md flex-col items-center gap-2">
              {entourageData.ninang.map((item, index) => (
                <li 
                  key={item} 
                  className="w-full text-center text-sm text-navy/80 sm:text-base"
                  data-aos="fade-up"
                  data-aos-delay={index * 30 + 250}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reception */}
        <div data-aos="fade-up" data-aos-delay="400">
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-display text-2xl italic text-navy sm:text-3xl">Reception</h3>
            <p className="text-sm text-navy/80 sm:text-base">{entourageData.reception}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
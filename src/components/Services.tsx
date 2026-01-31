import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Agencja Celna",
    description:
      "Reprezentacja przed KAS, zgłoszenia celne, klasyfikacja taryfowa i procedury specjalne. Pełna obsługa importu i eksportu.",
    image: "/images/Grupa-Maestro-z-drona.webp",
    features: [
      "Zgłoszenia PUESC i AES",
      "Klasyfikacja taryfowa",
      "Reprezentacja przed KAS",
      "Procedury uszlachetniania",
    ],
    link: "/uslugi/agencja-celna",
  },
  {
    number: "02",
    title: "Skład Celny",
    description:
      "Legalne przechowywanie towarów nieunijnych pod dozorem celnym bez natychmiastowego oclenia. Elastyczne procedury specjalne.",
    image: "/images/Grupa-Maestro-sklad-celny.webp",
    features: [
      "Dozór celny KAS",
      "Bez natychmiastowego oclenia",
      "Pełna dokumentacja",
      "Procedury specjalne",
    ],
    link: "/uslugi/sklad-celny",
  },
  {
    number: "03",
    title: "Magazyn DSK",
    description:
      "3000 m² nowoczesnej powierzchni magazynowej z pełnym wyposażeniem. 1500 miejsc paletowych, monitoring 24/7 i zgodność z normami BHP.",
    image: "/images/Grupa-Maestro-Magazyn-20250325_12435.webp",
    features: [
      "3000 m² powierzchni",
      "1500 miejsc paletowych",
      "Monitoring i ochrona",
      "Elastyczne warunki",
    ],
    link: "/uslugi/magazyn-czasowego-skladowania",
  },
];

export default function Services() {
  return (
    <section
      id="uslugi"
      className="py-20 lg:py-32 bg-almost-black relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-orange/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-navy/30 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-orange" />
            <span className="text-concrete-light font-bold text-sm tracking-widest uppercase">
              Nasze usługi
            </span>
          </div>
          <h2 className="display-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white max-w-4xl leading-none">
            KOMPLEKSOWA
            <br />
            <span className="text-orange">OBSŁUGA CELNA</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative h-full bg-navy-light border-l-4 border-orange overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-navy-light/60 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-orange flex items-center justify-center">
                    <span className="display-font text-white text-3xl">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="display-font text-4xl text-white mb-4 leading-none">
                    {service.title}
                  </h3>

                  <p className="text-steel text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange mt-2 flex-shrink-0" />
                        <span className="text-concrete-light text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-orange hover:text-yellow font-bold uppercase text-sm tracking-wide transition-colors duration-200 group/link"
                  >
                    Dowiedz się więcej
                    <svg
                      className="w-5 h-5 transition-transform duration-200 group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-steel text-lg mb-6">
            Nie jesteś pewien której usługi potrzebujesz?
          </p>
          <a
            href="#kontakt"
            className="inline-block bg-orange hover:bg-orange-dark text-white px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
}

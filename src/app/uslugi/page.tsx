import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Usługi Celne i Magazynowe - Grupa Maestro | Tomaszów Lubelski',
  description:
    'Agencja celna, skład celny, magazyn DSK - kompleksowa obsługa celna i magazynowa na granicy UE-Ukraina. Dowiedz się więcej o naszych usługach.',
};

export default function ServicesPage() {
  const services = [
    {
      number: '01',
      title: 'Agencja Celna',
      subtitle: 'Reprezentacja przed KAS',
      description:
        'Pełna obsługa celna importu i eksportu. Reprezentujemy Twoją firmę przed Krajową Administracją Skarbową, przygotowujemy zgłoszenia celne i dokumentację, zapewniając zgodność z Unijnym Kodeksem Celnym.',
      image: '/images/Grupa-Maestro-z-drona.webp',
      features: [
        {
          icon: '📋',
          title: 'Zgłoszenia celne PUESC i AES',
          description:
            'Profesjonalne przygotowanie zgłoszeń przywozowych (PUESC) i wywozowych (AES) zgodnie z wymogami KAS.',
        },
        {
          icon: '🏷️',
          title: 'Klasyfikacja taryfowa towarów',
          description:
            'Prawidłowe oznaczenie towarów kodami CN i określenie stawek celnych oraz wymogów formalno-prawnych.',
        },
        {
          icon: '⚖️',
          title: 'Reprezentacja przed organami celnymi',
          description:
            'Działamy w Twoim imieniu, komunikujemy się z KAS i załatwiamy wszelkie formalności celne.',
        },
        {
          icon: '🔄',
          title: 'Procedury specjalne',
          description:
            'Obsługa procedur uszlachetniania, dopuszczenia do obrotu, tranzytu i innych procedur celnych.',
        },
      ],
      benefits: [
        'Oszczędność czasu - zajmujemy się całą obsługą celną',
        'Minimalizacja ryzyka błędów i kar celnych',
        'Doświadczony zespół znający przepisy UKC',
        'Szybka komunikacja z KAS',
        'Przejrzyste koszty bez ukrytych opłat',
      ],
      link: '/uslugi/agencja-celna',
    },
    {
      number: '02',
      title: 'Skład Celny',
      subtitle: 'Przechowywanie pod dozorem KAS',
      description:
        'Legalny skład celny działający pod dozorem Krajowej Administracji Skarbowej. Przechowuj towary nieunijne bez natychmiastowego oclenia i płacenia należności celno-podatkowych.',
      image: '/images/Grupa-Maestro-sklad-celny.webp',
      features: [
        {
          icon: '🏛️',
          title: 'Pełna zgodność z prawem celnym',
          description:
            'Skład celny prowadzony zgodnie z art. 237-246 UKC pod stałym dozorem organów celnych.',
        },
        {
          icon: '⏰',
          title: 'Odroczenie płatności ceł i VAT',
          description:
            'Przechowuj towary bez natychmiastowego odprowadzania należności celno-podatkowych.',
        },
        {
          icon: '📦',
          title: 'Elastyczne procedury specjalne',
          description:
            'Możliwość wykonywania czynności uszlachetniających, sortowania i pakowania towarów.',
        },
        {
          icon: '📊',
          title: 'Pełna dokumentacja i ewidencja',
          description:
            'Prowadzenie dokumentacji przyjęć, wydań i stanów magazynowych zgodnie z wymogami KAS.',
        },
      ],
      benefits: [
        'Legalne przechowywanie towarów spoza UE',
        'Odroczenie płatności ceł, VAT i akcyzy',
        'Możliwość wykonywania operacji na towarach',
        'Bezpieczeństwo prawne pod dozorem KAS',
        'Elastyczność w planowaniu importu',
      ],
      link: '/uslugi/sklad-celny',
    },
    {
      number: '03',
      title: 'Magazyn DSK',
      subtitle: 'Czasowe składowanie towarów',
      description:
        'Nowoczesny magazyn o powierzchni 3000 m² z 1500 miejscami paletowymi. Profesjonalna obsługa, monitoring 24/7, pełne wyposażenie magazynowe zgodne z normami BHP i przeciwpożarowymi.',
      image: '/images/Grupa-Maestro-Magazyn-20250325_12435.webp',
      features: [
        {
          icon: '🏭',
          title: '3000 m² powierzchni magazynowej',
          description:
            'Przestronna hala magazynowa z nowoczesną infrastrukturą i systemem regałów paletowych.',
        },
        {
          icon: '📐',
          title: '1500 miejsc paletowych',
          description:
            'Wysoka pojemność magazynowa pozwalająca na składowanie dużych partii towarów.',
        },
        {
          icon: '📹',
          title: 'Monitoring i ochrona 24/7',
          description:
            'Całodobowy monitoring wizyjny i system zabezpieczeń zapewniający bezpieczeństwo towarów.',
        },
        {
          icon: '✅',
          title: 'Zgodność z normami BHP i p.poż',
          description:
            'Pełne wyposażenie przeciwpożarowe, odpowiednia wentylacja i oświetlenie magazynu.',
        },
      ],
      benefits: [
        'Elastyczne warunki składowania',
        'Profesjonalna obsługa wózkami widłowymi',
        'Możliwość krótko i długoterminowego składowania',
        'Bezpieczeństwo towarów pod nadzorem',
        'Strategiczna lokalizacja przy granicy',
      ],
      link: '/uslugi/magazyn-czasowego-skladowania',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Kontakt i konsultacja',
      description:
        'Skontaktuj się z nami telefonicznie lub mailowo. Omówimy Twoje potrzeby i zaproponujemy optymalne rozwiązanie.',
    },
    {
      step: '02',
      title: 'Przygotowanie dokumentacji',
      description:
        'Zbieramy niezbędne dokumenty i przygotowujemy zgłoszenia celne zgodnie z wymogami KAS i UKC.',
    },
    {
      step: '03',
      title: 'Obsługa celna i składowanie',
      description:
        'Reprezentujemy Cię przed organami celnymi i zapewniamy bezpieczne przechowywanie towarów w naszym magazynie.',
    },
    {
      step: '04',
      title: 'Wydanie towaru',
      description:
        'Po zakończeniu procedur celnych wydajemy towar lub organizujemy transport do wskazanego miejsca.',
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-almost-black overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(var(--orange) 1px, transparent 1px),
                  linear-gradient(90deg, var(--orange) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          {/* Diagonal Accent */}
          <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-bl from-orange/10 to-transparent" />

          <div className="container-custom relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-orange" />
                <span className="text-steel font-bold text-sm tracking-widest uppercase">
                  Nasze usługi
                </span>
              </div>

              <h1 className="display-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-8 leading-none">
                KOMPLEKSOWA
                <br />
                <span className="text-orange">OBSŁUGA CELNA</span>
              </h1>

              <p className="text-steel text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mb-12">
                Od <span className="text-orange font-bold">zgłoszeń celnych</span> przez{' '}
                <span className="text-orange font-bold">przechowywanie w składzie celnym</span> po{' '}
                <span className="text-orange font-bold">magazynowanie</span> - wszystko w jednym
                miejscu.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-2">01</div>
                  <div className="text-steel text-sm uppercase mb-1">Agencja Celna</div>
                  <div className="text-white font-semibold">Reprezentacja przed KAS</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-2">02</div>
                  <div className="text-steel text-sm uppercase mb-1">Skład Celny</div>
                  <div className="text-white font-semibold">Dozór celny KAS</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-2">03</div>
                  <div className="text-steel text-sm uppercase mb-1">Magazyn DSK</div>
                  <div className="text-white font-semibold">3000 m² powierzchni</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        {services.map((service, index) => (
          <section
            key={service.number}
            className={`py-20 lg:py-32 ${index % 2 === 0 ? 'bg-off-white' : 'bg-almost-black'}`}
          >
            <div className="container-custom">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-1 bg-orange" />
                    <span
                      className={`font-bold text-sm tracking-widest uppercase ${
                        index % 2 === 0 ? 'text-concrete' : 'text-steel'
                      }`}
                    >
                      {service.subtitle}
                    </span>
                  </div>

                  <h2
                    className={`display-font text-5xl sm:text-6xl md:text-7xl mb-6 leading-none ${
                      index % 2 === 0 ? 'text-navy' : 'text-white'
                    }`}
                  >
                    <span className="text-orange">{service.number}</span>
                    <br />
                    {service.title}
                  </h2>

                  <p
                    className={`text-lg leading-relaxed mb-8 ${
                      index % 2 === 0 ? 'text-concrete-light' : 'text-steel'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature.title}>
                        <div className="text-4xl mb-2">{feature.icon}</div>
                        <h3
                          className={`font-bold text-lg mb-2 ${
                            index % 2 === 0 ? 'text-navy' : 'text-white'
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed ${
                            index % 2 === 0 ? 'text-concrete-light' : 'text-steel'
                          }`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div
                    className={`p-6 border-l-4 border-orange mb-8 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-navy-light'
                    }`}
                  >
                    <h3
                      className={`font-bold text-xl mb-4 ${
                        index % 2 === 0 ? 'text-navy' : 'text-white'
                      }`}
                    >
                      Korzyści:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-orange mt-2 flex-shrink-0" />
                          <span
                            className={index % 2 === 0 ? 'text-concrete-light' : 'text-steel'}
                          >
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                  >
                    Dowiedz się więcej
                    <svg
                      className="w-5 h-5"
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

                {/* Image */}
                <div className={index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="relative h-[500px] lg:h-[700px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      quality={75}
                    />
                    <div className="absolute inset-0 border-8 border-orange/20" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Process Section */}
        <section className="py-20 lg:py-32 bg-navy">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-orange" />
                <span className="text-steel font-bold text-sm tracking-widest uppercase">
                  Jak to działa
                </span>
                <div className="w-12 h-1 bg-orange" />
              </div>
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-none">
                PROCES
                <br />
                <span className="text-orange">WSPÓŁPRACY</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-navy-light p-8 h-full border-t-4 border-orange hover:-translate-y-2 transition-all duration-300">
                    <div className="display-font text-6xl text-orange mb-4">{item.step}</div>
                    <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                    <p className="text-steel leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-32 bg-off-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy mb-8 leading-none">
                  DLACZEGO
                  <br />
                  <span className="text-orange">GRUPA MAESTRO?</span>
                </h2>

                <div className="space-y-6 text-concrete-light text-lg leading-relaxed">
                  <p>
                    <strong className="text-navy">Strategiczna lokalizacja</strong> - działamy w
                    Tomaszowie Lubelskim, w bezpośrednim sąsiedztwie przejść granicznych w{' '}
                    <strong className="text-orange">Hrebennem i Dołhobyczowie</strong>. To
                    oznacza oszczędność czasu i kosztów dla Twojej firmy.
                  </p>

                  <p>
                    <strong className="text-navy">Kompleksowość</strong> - nie musisz szukać
                    wielu podwykonawców. Agencja celna, skład celny i magazyn czasowego
                    składowania w jednym miejscu. Wszystko{' '}
                    <strong className="text-orange">pod jednym dachem</strong>.
                  </p>

                  <p>
                    <strong className="text-navy">Doświadczenie i wiedza</strong> - nasz zespół
                    zna przepisy UKC i polskiego prawa celnego na wylot. Minimalizujemy ryzyko
                    błędów i kar celnych.
                  </p>

                  <p>
                    <strong className="text-navy">Transparentność</strong> - jasna komunikacja,
                    przejrzyste ceny, brak ukrytych kosztów. Wiesz dokładnie za co płacisz i
                    na jakim etapie jest Twoja przesyłka.
                  </p>

                  <p className="text-navy font-semibold text-xl">
                    Ponad 500 firm zaufało Grupie Maestro. Zostań kolejnym!
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 border-l-4 border-orange hover:-translate-y-2 transition-all duration-300 shadow-lg">
                  <div className="text-5xl mb-4">📍</div>
                  <h3 className="font-bold text-navy text-2xl mb-3">Blisko granicy</h3>
                  <p className="text-concrete-light leading-relaxed">
                    Kilka kilometrów od przejść granicznych w Hrebennem i Dołhobyczowie. Twoje
                    towary nie muszą czekać.
                  </p>
                </div>

                <div className="bg-white p-8 border-l-4 border-orange hover:-translate-y-2 transition-all duration-300 shadow-lg">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="font-bold text-navy text-2xl mb-3">Szybka obsługa</h3>
                  <p className="text-concrete-light leading-relaxed">
                    Minimalizujemy czas odpraw celnych. Sprawna komunikacja z KAS i
                    profesjonalne przygotowanie dokumentacji.
                  </p>
                </div>

                <div className="bg-white p-8 border-l-4 border-orange hover:-translate-y-2 transition-all duration-300 shadow-lg">
                  <div className="text-5xl mb-4">🛡️</div>
                  <h3 className="font-bold text-navy text-2xl mb-3">
                    Bezpieczeństwo i zgodność
                  </h3>
                  <p className="text-concrete-light leading-relaxed">
                    100% zgodność z Unijnym Kodeksem Celnym. Skład celny pod dozorem KAS.
                    Monitoring 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-orange">
          <div className="container-custom text-center">
            <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-none">
              GOTOWY NA
              <br />
              WSPÓŁPRACĘ?
            </h2>

            <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
              Skontaktuj się z nami już dziś i dowiedz się, jak możemy pomóc Twojej firmie w
              obsłudze celnej i magazynowej.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#kontakt"
                className="bg-navy hover:bg-navy-light text-white px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Skontaktuj się z nami
              </a>
              <a
                href="tel:+48570690008"
                className="border-2 border-white text-white hover:bg-white hover:text-orange px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200"
              >
                Zadzwoń: +48 570 690 008
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

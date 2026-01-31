import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magazyn Czasowego Składowania DSK - 3000 m² | Grupa Maestro',
  description:
    'Nowoczesny magazyn DSK o powierzchni 3000 m² w Tomaszowie Lubelskim. 1500 miejsc paletowych, monitoring 24/7, pełne wyposażenie magazynowe.',
};

export default function MagazynDSKPage() {
  const features = [
    {
      icon: '🏭',
      title: '3000 m² powierzchni',
      description:
        'Przestronna hala magazynowa z wysokimi regałami paletowymi, odpowiednią wentylacją i oświetleniem naturalnym oraz sztucznym.',
    },
    {
      icon: '📐',
      title: '1500 miejsc paletowych',
      description:
        'Wysoka pojemność magazynowa pozwalająca na składowanie dużych partii towarów na paletach EUR i innych standardach.',
    },
    {
      icon: '📹',
      title: 'Monitoring 24/7',
      description:
        'Całodobowy monitoring wizyjny CCTV obejmujący cały teren magazynu, rampę załadunkową i dojazd. Nagrania archiwizowane.',
    },
    {
      icon: '✅',
      title: 'Normy BHP i p.poż',
      description:
        'Pełne wyposażenie przeciwpożarowe, gaśnice, hydranty, system alarmowy. Zgodność z wymogami BHP i przepisami p.poż.',
    },
    {
      icon: '🚛',
      title: 'Rampa załadunkowa',
      description:
        'Profesjonalna rampa do załadunku i rozładunku z dockiem dla ciężarówek. Sprawna obsługa pojazdów dostawczych.',
    },
    {
      icon: '🔐',
      title: 'Ochrona i bezpieczeństwo',
      description:
        'Teren ogrodzony, ochrona fizyczna, system kontroli dostępu. Tylko upoważnione osoby mają dostęp do magazynu.',
    },
  ];

  const equipment = [
    {
      title: 'Wózki widłowe',
      items: [
        'Wózki widłowe gazowe i elektryczne',
        'Udźwig do 3 ton',
        'Obsługa palet o różnych wymiarach',
        'Certyfikowani operatorzy',
      ],
    },
    {
      title: 'System regałowy',
      items: [
        'Regały paletowe o dużej nośności',
        'Wysokość składowania do 8 metrów',
        'Optymalne wykorzystanie przestrzeni',
        'Łatwy dostęp do każdej palety',
      ],
    },
    {
      title: 'Infrastruktura',
      items: [
        'Oświetlenie LED energooszczędne',
        'Wentylacja mechaniczna',
        'Ogrzewanie w sezonie zimowym',
        'Posadzka przemysłowa wzmocniona',
      ],
    },
    {
      title: 'Dodatkowe usługi',
      items: [
        'Przyjęcie i wydanie towaru',
        'Ewidencja stanów magazynowych',
        'Raportowanie on-line',
        'Przepakowywanie i etykietowanie',
      ],
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Rezerwacja miejsca',
      description:
        'Skontaktuj się z nami i zarezerwuj odpowiednią ilość miejsc paletowych. Ustalamy warunki składowania i cenę.',
    },
    {
      number: '02',
      title: 'Dostawa towaru',
      description:
        'Towar przyjeżdża do naszego magazynu. Przyjmujemy go na rampie, weryfikujemy ilość i stan przesyłki.',
    },
    {
      number: '03',
      title: 'Przyjęcie do magazynu',
      description:
        'Sporządzamy protokół przyjęcia, nadajemy numery paletom i umieszczamy towar w wyznaczonych lokalizacjach magazynowych.',
    },
    {
      number: '04',
      title: 'Składowanie i opieka',
      description:
        'Towar przechowywany w optymalnych warunkach. Regularnie kontrolujemy stan przesyłek. Dostęp do raportów online.',
    },
    {
      number: '05',
      title: 'Operacje magazynowe',
      description:
        'Na życzenie wykonujemy dodatkowe usługi: przepakowywanie, etykietowanie, przygotowanie do wysyłki, kontrola jakości.',
    },
    {
      number: '06',
      title: 'Wydanie towaru',
      description:
        'Wydajemy towar zgodnie z Twoim zleceniem. Możliwa organizacja transportu do wskazanego miejsca docelowego.',
    },
  ];

  const pricing = [
    {
      icon: '📦',
      title: 'Miejsce paletowe',
      description: 'Opłata za każde zajęte miejsce paletowe',
      note: 'Rozliczenie miesięczne lub dzienna stawka',
    },
    {
      icon: '🔄',
      title: 'Operacje magazynowe',
      description: 'Przyjęcie, wydanie, przepakowywanie',
      note: 'Przejrzysta cennik za każdą operację',
    },
    {
      icon: '📊',
      title: 'Usługi dodatkowe',
      description: 'Etykietowanie, kontrola jakości, raporty',
      note: 'Opcjonalne usługi na życzenie klienta',
    },
    {
      icon: '💼',
      title: 'Elastyczne pakiety',
      description: 'Indywidualne warunki dla stałych klientów',
      note: 'Rabaty przy długoterminowej współpracy',
    },
  ];

  const faq = [
    {
      question: 'Co to jest magazyn czasowego składowania (DSK)?',
      answer:
        'Magazyn czasowego składowania to magazyn dozorowany przez organy celne (DSK - Dozór Składu Celnego), gdzie można przechowywać towary nieunijne przez określony czas bez natychmiastowego oclenia. Po upływie czasu lub na żądanie klienta towar jest dopuszczany do obrotu lub ponownie wywożony.',
    },
    {
      question: 'Jaka jest minimalna i maksymalna ilość palet do składowania?',
      answer:
        'Nie ma minimalnej ilości palet - możesz składować nawet jedną paletę. Maksymalnie dysponujemy 1500 miejscami paletowymi. Dla większych potrzeb skontaktuj się z nami, aby omówić indywidualne rozwiązanie.',
    },
    {
      question: 'Jak długo można przechowywać towar w magazynie?',
      answer:
        'Okres przechowywania jest elastyczny - od kilku dni po wiele miesięcy. Dla długoterminowego składowania oferujemy atrakcyjne warunki cenowe. Nie ma sztywnych limitów czasowych.',
    },
    {
      question: 'Jakie towary można składować w magazynie?',
      answer:
        'Możemy składować większość towarów handlowych na paletach: produkty spożywcze (bez wymogu chłodzenia), przemysłowe, budowlane, tekstylia, elektronikę, AGD i inne. Nie przyjmujemy materiałów niebezpiecznych i łatwopalnych bez specjalnych uzgodnień.',
    },
    {
      question: 'Czy mogę mieć dostęp do swoich towarów w magazynie?',
      answer:
        'Tak, jako klient masz możliwość wglądu do swoich towarów po wcześniejszym uzgodnieniu terminu. Ze względów bezpieczeństwa i organizacji pracy wymagamy uprzedniego zgłoszenia wizyty.',
    },
    {
      question: 'Jak wygląda ubezpieczenie towaru?',
      answer:
        'Magazyn jest objęty podstawowym ubezpieczeniem odpowiedzialności cywilnej. Dla wartościowych przesyłek rekomendujemy dodatkowe ubezpieczenie cargo, które możemy pomóc zorganizować. Szczegóły w umowie składowania.',
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-navy overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Grupa-Maestro-Magazyn-20250325_12435.webp"
              alt="Magazyn DSK - Grupa Maestro"
              fill
              className="object-cover opacity-20"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-orange" />
                <span className="text-steel font-bold text-sm tracking-widest uppercase">
                  Usługa 03
                </span>
              </div>

              <h1 className="display-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-8 leading-none">
                MAGAZYN
                <br />
                <span className="text-orange">DSK</span>
              </h1>

              <p className="text-steel text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mb-12">
                Nowoczesny magazyn <span className="text-white font-bold">3000 m²</span> z 1500
                miejscami paletowymi. Monitoring 24/7, profesjonalna obsługa i{' '}
                <span className="text-orange font-bold">pełne bezpieczeństwo</span> towarów.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">3000</div>
                  <div className="text-steel text-sm uppercase">m² powierzchni</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">1500</div>
                  <div className="text-steel text-sm uppercase">Miejsc paletowych</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">24/7</div>
                  <div className="text-steel text-sm uppercase">Monitoring</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">100%</div>
                  <div className="text-steel text-sm uppercase">Bezpieczeństwo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Magazyn DSK */}
        <section className="py-20 lg:py-32 bg-off-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative h-[500px] lg:h-[600px]">
                <Image
                  src="/images/Grupa-Maestro-DJI_20240611151251_0031_V-1024x768-1.webp"
                  alt="Widok z lotu ptaka na magazyn"
                  fill
                  className="object-cover"
                  quality={75}
                />
                <div className="absolute inset-0 border-8 border-orange/20" />

                {/* Floating Stats */}
                <div className="absolute -bottom-8 -left-8 bg-navy p-8 max-w-xs shadow-2xl">
                  <div className="display-font text-5xl text-orange mb-2">8m</div>
                  <p className="text-steel text-sm leading-relaxed">
                    Wysokość składowania na regałach paletowych
                  </p>
                </div>
              </div>

              <div>
                <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy mb-8 leading-none">
                  PROFESJONALNY
                  <br />
                  <span className="text-orange">MAGAZYN</span>
                </h2>

                <div className="space-y-6 text-concrete-light text-lg leading-relaxed">
                  <p>
                    <strong className="text-navy">Magazyn czasowego składowania (DSK)</strong> to
                    nowoczesna hala magazynowa o powierzchni{' '}
                    <strong className="text-orange">3000 m²</strong>, wyposażona w profesjonalny
                    system regałów paletowych.
                  </p>

                  <p>
                    Dysponujemy <strong className="text-navy">1500 miejscami paletowymi</strong>,
                    co pozwala na składowanie zarówno małych, jak i bardzo dużych partii towarów.
                  </p>

                  <p>
                    Magazyn wyposażony w{' '}
                    <strong className="text-orange">monitoring 24/7, system alarmowy</strong> i
                    pełne zabezpieczenia przeciwpożarowe. Teren ogrodzony, ochrona fizyczna,
                    kontrola dostępu.
                  </p>

                  <p>
                    <strong className="text-navy">Strategiczna lokalizacja</strong> w Tomaszowie
                    Lubelskim, kilka kilometrów od przejść granicznych w Hrebennem i
                    Dołhobyczowie, zapewnia szybki dostęp i niskie koszty transportu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-32 bg-almost-black">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-orange" />
                <span className="text-steel font-bold text-sm tracking-widest uppercase">
                  Infrastruktura
                </span>
                <div className="w-12 h-1 bg-orange" />
              </div>
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-none">
                WYPOSAŻENIE
                <br />
                <span className="text-orange">MAGAZYNU</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-navy-light p-8 border-t-4 border-orange hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-white text-2xl mb-3">{feature.title}</h3>
                  <p className="text-steel leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Details */}
        <section className="py-20 lg:py-32 bg-off-white">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy mb-6 leading-none">
                PEŁNE
                <br />
                <span className="text-orange">WYPOSAŻENIE</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {equipment.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white p-8 border-l-4 border-orange shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-bold text-navy text-2xl mb-6">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.items.map((subitem) => (
                      <li key={subitem} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
                        <span className="text-concrete-light text-lg">{subitem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                <span className="text-orange">SKŁADOWANIA</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {process.map((item, index) => (
                <div
                  key={item.number}
                  className="relative pl-12 pb-12 last:pb-0 border-l-2 border-orange/30 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-orange border-4 border-navy" />

                  <div className="bg-navy-light p-8 ml-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="display-font text-5xl text-orange">{item.number}</div>
                      <div className="h-0.5 flex-1 bg-orange/30" />
                    </div>

                    <h3 className="font-bold text-white text-2xl mb-3">{item.title}</h3>
                    <p className="text-steel text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 lg:py-32 bg-off-white">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy mb-6 leading-none">
                PRZEJRZYSTA
                <br />
                <span className="text-orange">WYCENA</span>
              </h2>
              <p className="text-concrete-light text-xl max-w-3xl mx-auto">
                Płacisz tylko za to, czego rzeczywiście używasz. Brak ukrytych kosztów.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricing.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white p-8 text-center border-t-4 border-orange shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-navy text-xl mb-3">{item.title}</h3>
                  <p className="text-concrete-light mb-4">{item.description}</p>
                  <p className="text-sm text-steel italic">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/#kontakt"
                className="inline-block bg-orange hover:bg-orange-dark text-white px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Zapytaj o wycenę
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-32 bg-almost-black">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-orange" />
                <span className="text-steel font-bold text-sm tracking-widest uppercase">
                  Najczęściej zadawane pytania
                </span>
                <div className="w-12 h-1 bg-orange" />
              </div>
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-none">
                MASZ
                <br />
                <span className="text-orange">PYTANIA?</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faq.map((item, index) => (
                <div
                  key={item.question}
                  className="bg-navy-light p-8 border-l-4 border-orange shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h3 className="font-bold text-white text-xl mb-4">{item.question}</h3>
                  <p className="text-steel leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-orange">
          <div className="container-custom text-center">
            <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-none">
              POTRZEBUJESZ
              <br />
              MIEJSCA MAGAZYNOWEGO?
            </h2>

            <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
              Skontaktuj się z nami i zarezerwuj miejsce w naszym magazynie. Elastyczne warunki,
              profesjonalna obsługa.
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

            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-white/80 mb-4">Zobacz również nasze inne usługi:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/uslugi/agencja-celna"
                  className="text-white hover:text-yellow transition-colors font-medium underline"
                >
                  Agencja Celna
                </a>
                <span className="text-white/40">•</span>
                <a
                  href="/uslugi/sklad-celny"
                  className="text-white hover:text-yellow transition-colors font-medium underline"
                >
                  Skład Celny
                </a>
                <span className="text-white/40">•</span>
                <a
                  href="/uslugi"
                  className="text-white hover:text-yellow transition-colors font-medium underline"
                >
                  Wszystkie usługi
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

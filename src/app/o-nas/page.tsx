import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Grupie Maestro - Agencja Celna w Tomaszowie Lubelskim | Od 2021',
  description:
    'Poznaj Grupę Maestro - ekspertów od obsługi celnej na wschodniej granicy UE. Od 2021 roku wspieramy import i eksport z kompleksowym podejściem.',
};

export default function AboutPage() {
  const timeline = [
    {
      year: '2021',
      title: 'Założenie firmy',
      description:
        'Grupa Maestro powstaje w Tomaszowie Lubelskim jako odpowiedź na rosnące potrzeby obsługi celnej na granicy UE-Ukraina.',
    },
    {
      year: '2022',
      title: 'Rozbudowa infrastruktury',
      description:
        'Uruchomienie magazynu czasowego składowania o powierzchni 3000 m² z 1500 miejscami paletowymi.',
    },
    {
      year: '2023',
      title: 'Skład celny pod dozorem KAS',
      description:
        'Uzyskanie pełnych uprawnień do prowadzenia składu celnego. Rozszerzenie usług o procedury specjalne.',
    },
    {
      year: '2024',
      title: 'Wzrost i rozwój',
      description:
        'Ponad 500 zadowolonych klientów. Wzrost obrotów o 150%. Rozbudowa zespołu ekspertów celnych.',
    },
    {
      year: '2025+',
      title: 'Przyszłość',
      description:
        'Dalsza cyfryzacja procesów, rozwój usług logistycznych i umacnianie pozycji lidera w regionie.',
    },
  ];

  const values = [
    {
      icon: '⚖️',
      title: 'Zgodność z prawem',
      description:
        'Działamy w pełnej zgodności z Unijnym Kodeksem Celnym (UKC) i polskim prawem celnym. Zero kompromisów w kwestii legalności.',
    },
    {
      icon: '⚡',
      title: 'Szybkość i efektywność',
      description:
        'Minimalizujemy czas odpraw celnych. Twoje towary przekraczają granicę bez zbędnych opóźnień.',
    },
    {
      icon: '🤝',
      title: 'Indywidualne podejście',
      description:
        'Każdy klient to osobna historia. Dostosowujemy rozwiązania do Twoich unikalnych potrzeb biznesowych.',
    },
    {
      icon: '🎯',
      title: 'Transparentność',
      description:
        'Jasna komunikacja, przejrzyste ceny, brak ukrytych kosztów. Wiesz dokładnie za co płacisz.',
    },
    {
      icon: '💼',
      title: 'Profesjonalizm',
      description:
        'Wykwalifikowany zespół z wieloletnim doświadczeniem w obsłudze celnej i logistyce międzynarodowej.',
    },
    {
      icon: '📍',
      title: 'Strategiczna lokalizacja',
      description:
        'Tuż przy przejściach granicznych w Hrebennem i Dołhobyczowie - w sercu korytarza transportowego UE-Ukraina.',
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

          <div className="container-custom relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-orange" />
                <span className="text-steel font-bold text-sm tracking-widest uppercase">
                  O firmie
                </span>
              </div>

              <h1 className="display-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-8 leading-none">
                GRUPA
                <br />
                <span className="text-orange">MAESTRO</span>
              </h1>

              <p className="text-steel text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mb-12">
                Od <span className="text-orange font-bold">2021 roku</span> jesteśmy liderem w
                obsłudze celnej i logistyce magazynowej na wschodniej granicy Unii Europejskiej.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">2021</div>
                  <div className="text-steel text-sm uppercase">Rok założenia</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">500+</div>
                  <div className="text-steel text-sm uppercase">Klientów</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">3000</div>
                  <div className="text-steel text-sm uppercase">M² magazynu</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">24/7</div>
                  <div className="text-steel text-sm uppercase">Wsparcie</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 lg:py-32 bg-off-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy mb-8 leading-none">
                  NASZA
                  <br />
                  <span className="text-orange">MISJA</span>
                </h2>

                <div className="space-y-6 text-concrete-light text-lg leading-relaxed">
                  <p>
                    <strong className="text-navy">Grupa Maestro</strong> powstała z przekonania, że
                    obsługa celna i logistyka magazynowa mogą być{' '}
                    <strong className="text-orange">prostsze, szybsze i bardziej przejrzyste</strong>
                    .
                  </p>

                  <p>
                    Działamy w <strong className="text-navy">Tomaszowie Lubelskim</strong>, w
                    strategicznej lokalizacji przy przejściach granicznych w{' '}
                    <strong className="text-navy">Hrebennem i Dołhobyczowie</strong>. To miejsce, w
                    którym łączą się korytarze transportowe między Unią Europejską a Europą Wschodnią.
                  </p>

                  <p>
                    Naszym celem jest{' '}
                    <strong className="text-orange">
                      eliminacja barier w międzynarodowym handlu
                    </strong>
                    . Pomagamy firmom importującym i eksportującym skupić się na rozwoju biznesu,
                    podczas gdy my zajmujemy się całą obsługą celną i magazynową.
                  </p>

                  <p className="text-navy font-semibold text-xl">
                    Logistyka bez granic. Obsługa bez stresu.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[500px] lg:h-[600px]">
                  <Image
                    src="/images/Grupa-Maestro-z-drona.webp"
                    alt="Grupa Maestro - widok z lotu ptaka"
                    fill
                    className="object-cover"
                    quality={75}
                  />
                  <div className="absolute inset-0 border-8 border-orange/20" />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -left-8 bg-navy p-8 max-w-xs">
                  <div className="display-font text-5xl text-orange mb-2">100%</div>
                  <p className="text-steel text-sm leading-relaxed">
                    Zgodność z Unijnym Kodeksem Celnym i polskim prawem celnym
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-32 bg-almost-black">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-orange" />
                <span className="text-steel font-bold text-sm tracking-widest uppercase">
                  Nasza historia
                </span>
                <div className="w-12 h-1 bg-orange" />
              </div>
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-4 leading-none">
                DROGA DO
                <br />
                <span className="text-orange">SUKCESU</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="relative pl-12 pb-12 last:pb-0 border-l-2 border-orange/30 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-orange border-4 border-almost-black" />

                  <div className="bg-navy-light p-8 ml-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="display-font text-5xl text-orange">{item.year}</div>
                      <div className="h-0.5 flex-1 bg-orange/30" />
                    </div>

                    <h3 className="display-font text-3xl text-white mb-3">{item.title}</h3>
                    <p className="text-steel text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-32 bg-off-white">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-orange" />
                <span className="text-concrete font-bold text-sm tracking-widest uppercase">
                  Nasze wartości
                </span>
                <div className="w-12 h-1 bg-orange" />
              </div>
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy mb-6 leading-none">
                CO NAS
                <br />
                <span className="text-orange">WYRÓŻNIA</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-white p-8 border-l-4 border-orange hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="font-bold text-navy text-2xl mb-3">{value.title}</h3>
                  <p className="text-concrete-light leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 lg:py-32 bg-navy">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-8 leading-none">
                  LOKALIZACJA
                  <br />
                  <span className="text-orange">TO KLUCZ</span>
                </h2>

                <div className="space-y-6 text-steel text-lg leading-relaxed mb-8">
                  <p>
                    <strong className="text-white">Tomaszów Lubelski</strong> to strategiczny punkt
                    na mapie handlu międzynarodowego. Położony w{' '}
                    <strong className="text-orange">pobliżu granicy z Ukrainą</strong>, oferuje
                    najkrótszą drogę między Unią Europejską a rynkami wschodnimi.
                  </p>

                  <p>
                    Bliskość przejść granicznych w{' '}
                    <strong className="text-white">Hrebennem i Dołhobyczowie</strong> to{' '}
                    <strong className="text-orange">oszczędność czasu i kosztów</strong> dla
                    naszych klientów.
                  </p>

                  <div className="bg-navy-light p-6 border-l-4 border-orange">
                    <p className="text-white font-bold mb-2">📍 Nasz adres:</p>
                    <p className="text-steel">
                      ul. Rolnicza 10
                      <br />
                      22-600 Tomaszów Lubelski
                      <br />
                      Polska
                    </p>
                  </div>
                </div>

                <a
                  href="#kontakt"
                  className="inline-block bg-orange hover:bg-orange-dark text-white px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Odwiedź nas
                </a>
              </div>

              <div className="relative h-[500px]">
                <Image
                  src="/images/Grupa-Maestro-Magazyn-20250325_12435.webp"
                  alt="Magazyn Grupa Maestro"
                  fill
                  className="object-cover"
                  quality={75}
                />
                <div className="absolute inset-0 border-8 border-orange/20" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-orange">
          <div className="container-custom text-center">
            <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-none">
              DOŁĄCZ DO NASZYCH
              <br />
              ZADOWOLONYCH KLIENTÓW
            </h2>

            <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
              Ponad 500 firm zaufało Grupie Maestro. Zostań kolejnym i przekonaj się, że obsługa
              celna może być prosta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
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

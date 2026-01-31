import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skład Celny pod Dozorem KAS | Grupa Maestro Tomaszów Lubelski',
  description:
    'Legalny skład celny w Tomaszowie Lubelskim. Przechowywanie towarów nieunijnych pod dozorem KAS bez natychmiastowego oclenia. Odroczenie VAT i ceł.',
};

export default function SkladCelnyPage() {
  const features = [
    {
      icon: '🏛️',
      title: 'Pełna zgodność z UKC',
      description:
        'Skład celny prowadzony zgodnie z art. 237-246 Unijnego Kodeksu Celnego pod stałym dozorem Krajowej Administracji Skarbowej.',
    },
    {
      icon: '⏰',
      title: 'Odroczenie płatności',
      description:
        'Przechowuj towary nieunijne bez natychmiastowego odprowadzania należności celnych, VAT i akcyzy. Płacisz dopiero przy dopuszczeniu do obrotu.',
    },
    {
      icon: '📦',
      title: 'Procedury specjalne',
      description:
        'Możliwość wykonywania na towarach zwykłych form obsługi: sortowanie, pakowanie, oznaczanie, kontrola jakości zgodnie z przepisami.',
    },
    {
      icon: '🔐',
      title: 'Bezpieczeństwo prawne',
      description:
        'Pełna zgodność z przepisami celnymi. Regularne kontrole KAS zapewniają transparentność i legalność przechowywania towarów.',
    },
    {
      icon: '📊',
      title: 'Pełna ewidencja',
      description:
        'Prowadzenie szczegółowej dokumentacji przyjęć, wydań i stanów magazynowych zgodnie z wymogami organów celnych.',
    },
    {
      icon: '🌍',
      title: 'Import z krajów trzecich',
      description:
        'Idealne rozwiązanie dla towarów sprowadzanych spoza UE, szczególnie z Ukrainy, Białorusi i innych krajów Europy Wschodniej.',
    },
  ];

  const advantages = [
    {
      title: 'Elastyczność finansowa',
      description:
        'Odkładasz moment zapłaty należności celno-podatkowych. Płacisz dopiero gdy wprowadzasz towar do obrotu na terenie UE.',
    },
    {
      title: 'Optymalizacja kosztów',
      description:
        'Możliwość konsolidacji przesyłek, podziału partii towarów i wyboru najkorzystniejszego momentu na dopuszczenie do obrotu.',
    },
    {
      title: 'Legalne przechowywanie',
      description:
        'Towary nieunijne przechowywane legalnie pod dozorem KAS. Bez ryzyka kar za nielegalny import.',
    },
    {
      title: 'Operacje na towarach',
      description:
        'Możliwość wykonywania zwykłych form obsługi - sortowanie, pakowanie, etykietowanie w trakcie składowania.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Przyjęcie towaru do składu',
      description:
        'Towar przyjeżdża do naszego składu celnego. Dokonujemy przyjęcia na podstawie dokumentów przewozowych i zgłoszenia celnego.',
    },
    {
      number: '02',
      title: 'Umieszczenie w procedurze',
      description:
        'Składamy zgłoszenie do umieszczenia towaru w procedurze składu celnego. Towar znajduje się pod dozorem organów celnych.',
    },
    {
      number: '03',
      title: 'Przechowywanie pod dozorem KAS',
      description:
        'Towar składowany w naszym magazynie pod pełnym nadzorem celnym. Prowadzimy szczegółową ewidencję stanów magazynowych.',
    },
    {
      number: '04',
      title: 'Operacje dozwolone',
      description:
        'Na życzenie klienta wykonujemy zwykłe formy obsługi: sortowanie, przepakowywanie, etykietowanie, kontrola jakości.',
    },
    {
      number: '05',
      title: 'Zakończenie procedury',
      description:
        'Gdy jesteś gotowy, dopuszczamy towar do obrotu lub kierujemy do innej procedury celnej. Wtedy następuje zapłata należności.',
    },
    {
      number: '06',
      title: 'Wydanie towaru',
      description:
        'Po zakończeniu procedury i uregulowaniu należności celno-podatkowych wydajemy towar lub organizujemy transport.',
    },
  ];

  const allowedOperations = [
    'Sortowanie i klasyfikowanie towarów',
    'Przepakowywanie i pakowanie',
    'Znakowanie i etykietowanie',
    'Kontrola jakości i ilości',
    'Pobieranie próbek',
    'Podział na mniejsze partie',
    'Łączenie przesyłek',
    'Przechowywanie w odpowiednich warunkach',
  ];

  const faq = [
    {
      question: 'Czym jest skład celny?',
      answer:
        'Skład celny to miejsce dozorowane przez organy celne, gdzie można składować towary nieunijne (spoza UE) bez natychmiastowego odprowadzania należności celnych, VAT i akcyzy. Procedura regulowana jest art. 237-246 Unijnego Kodeksu Celnego.',
    },
    {
      question: 'Jak długo można przechowywać towary w składzie celnym?',
      answer:
        'Zgodnie z UKC nie ma ograniczenia czasowego przechowywania towarów w składzie celnym. Towar może pozostawać w procedurze tak długo, jak jest to potrzebne, aż do momentu wprowadzenia go do obrotu lub skierowania do innej procedury celnej.',
    },
    {
      question: 'Jakie towary mogą być składowane w składzie celnym?',
      answer:
        'W składzie celnym można przechowywać towary nieunijne (pochodzące spoza UE), które nie zostały jeszcze dopuszczone do swobodnego obrotu. Wyjątkiem są towary objęte zakazami lub ograniczeniami wymagającymi specjalnych pozwoleń.',
    },
    {
      question: 'Czy w składzie celnym można wykonywać operacje na towarach?',
      answer:
        'Tak, w składzie celnym można wykonywać zwykłe formy obsługi, które mają na celu zachowanie towaru, poprawę jego wyglądu lub jakości handlowej, przygotowanie do dystrybucji lub odsprzedaży. Obejmuje to m.in. sortowanie, pakowanie, etykietowanie.',
    },
    {
      question: 'Kiedy płaci się cło i VAT przy składzie celnym?',
      answer:
        'Należności celne i VAT płaci się dopiero w momencie dopuszczenia towaru do swobodnego obrotu, czyli wyjęcia go z procedury składu celnego. To pozwala na odroczenie płatności i lepsze zarządzanie cash flow.',
    },
    {
      question: 'Czy skład celny wymaga specjalnego zezwolenia?',
      answer:
        'Tak, prowadzenie składu celnego wymaga zezwolenia wydanego przez dyrektora izby administracji skarbowej. Grupa Maestro posiada wszystkie wymagane zezwolenia i działa pod stałym dozorem KAS.',
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
              src="/images/Grupa-Maestro-sklad-celny.webp"
              alt="Skład Celny - Grupa Maestro"
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
                  Usługa 02
                </span>
              </div>

              <h1 className="display-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-8 leading-none">
                SKŁAD
                <br />
                <span className="text-orange">CELNY</span>
              </h1>

              <p className="text-steel text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mb-12">
                Legalne przechowywanie towarów{' '}
                <span className="text-white font-bold">pod dozorem KAS</span> bez
                natychmiastowego oclenia. Odroczenie płatności{' '}
                <span className="text-orange font-bold">ceł, VAT i akcyzy</span>.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">UKC</div>
                  <div className="text-steel text-sm uppercase">Art. 237-246</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">KAS</div>
                  <div className="text-steel text-sm uppercase">Dozór celny</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">0%</div>
                  <div className="text-steel text-sm uppercase">VAT przy składowaniu</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">∞</div>
                  <div className="text-steel text-sm uppercase">Bez limitu czasu</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Sklad Celny */}
        <section className="py-20 lg:py-32 bg-off-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy mb-8 leading-none">
                  CZYM JEST
                  <br />
                  <span className="text-orange">SKŁAD CELNY?</span>
                </h2>

                <div className="space-y-6 text-concrete-light text-lg leading-relaxed">
                  <p>
                    <strong className="text-navy">Skład celny</strong> to specjalne miejsce
                    dozorowane przez{' '}
                    <strong className="text-orange">Krajową Administrację Skarbową</strong>, gdzie
                    można legalnie przechowywać towary nieunijne (sprowadzone spoza UE).
                  </p>

                  <p>
                    Kluczowa korzyść? <strong className="text-navy">Nie płacisz od razu</strong>{' '}
                    należności celnych, VAT i akcyzy. Płatności następują dopiero w momencie{' '}
                    <strong className="text-orange">dopuszczenia towaru do obrotu</strong>.
                  </p>

                  <p>
                    To rozwiązanie idealne dla firm importujących, które chcą odsunąć w czasie
                    moment zapłaty podatków, podzielić dużą partię towaru na mniejsze lub
                    poczekać na najlepszy moment sprzedaży.
                  </p>

                  <p>
                    <strong className="text-navy">Grupa Maestro</strong> prowadzi skład celny
                    zgodnie z art. 237-246 UKC, pod stałym dozorem organów celnych, zapewniając
                    pełne bezpieczeństwo prawne i zgodność z przepisami.
                  </p>
                </div>
              </div>

              <div className="relative h-[500px] lg:h-[600px]">
                <Image
                  src="/images/Grupa-Maestro-Magazyn-20250325_12435.webp"
                  alt="Magazyn pod dozorem celnym"
                  fill
                  className="object-cover"
                  quality={75}
                />
                <div className="absolute inset-0 border-8 border-orange/20" />

                {/* Floating Badge */}
                <div className="absolute -bottom-8 -right-8 bg-orange p-8 max-w-xs shadow-2xl">
                  <div className="display-font text-5xl text-white mb-2">24/7</div>
                  <p className="text-white/90 text-sm leading-relaxed font-medium">
                    Stały dozór celny i monitoring dla pełnego bezpieczeństwa Twoich towarów
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
                  Cechy składu celnego
                </span>
                <div className="w-12 h-1 bg-orange" />
              </div>
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-none">
                CO
                <br />
                <span className="text-orange">OFERUJEMY?</span>
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

        {/* Allowed Operations */}
        <section className="py-20 lg:py-32 bg-navy">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-8 leading-none">
                  DOZWOLONE
                  <br />
                  <span className="text-orange">OPERACJE</span>
                </h2>

                <p className="text-steel text-lg leading-relaxed mb-8">
                  W składzie celnym możesz wykonywać tzw. <strong className="text-white">zwykłe formy obsługi</strong> -
                  operacje mające na celu zachowanie towaru, poprawę jego wyglądu lub przygotowanie do dystrybucji:
                </p>

                <div className="space-y-3">
                  {allowedOperations.map((operation, index) => (
                    <div
                      key={operation}
                      className="flex items-start gap-3 animate-slide-in-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
                      <span className="text-white text-lg">{operation}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy-light p-10 border-l-4 border-orange">
                <div className="text-6xl mb-6">📦</div>
                <h3 className="display-font text-4xl text-white mb-4">
                  Pełna elastyczność operacyjna
                </h3>
                <p className="text-steel text-lg leading-relaxed mb-6">
                  Nie musisz od razu wprowadzać całej partii towaru do obrotu. Możesz:
                </p>
                <ul className="space-y-3 text-steel">
                  <li className="flex items-start gap-3">
                    <span className="text-orange font-bold">→</span>
                    Podzielić dużą partię na mniejsze
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange font-bold">→</span>
                    Łączyć przesyłki od różnych dostawców
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange font-bold">→</span>
                    Wybierać najlepszy moment na dopuszczenie do obrotu
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange font-bold">→</span>
                    Oczekiwać na wzrost cen lub lepsze warunki rynkowe
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-32 bg-off-white">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-orange" />
                <span className="text-concrete font-bold text-sm tracking-widest uppercase">
                  Jak to działa
                </span>
                <div className="w-12 h-1 bg-orange" />
              </div>
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy mb-6 leading-none">
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
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-orange border-4 border-off-white" />

                  <div className="bg-white p-8 ml-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="display-font text-5xl text-orange">{item.number}</div>
                      <div className="h-0.5 flex-1 bg-orange/30" />
                    </div>

                    <h3 className="font-bold text-navy text-2xl mb-3">{item.title}</h3>
                    <p className="text-concrete-light text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 lg:py-32 bg-almost-black">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-none">
                KORZYŚCI
                <br />
                <span className="text-orange">SKŁADU CELNEGO</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={advantage.title}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-1 bg-orange mx-auto mb-6" />
                  <h3 className="font-bold text-white text-xl mb-4">{advantage.title}</h3>
                  <p className="text-steel leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-32 bg-off-white">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-orange" />
                <span className="text-concrete font-bold text-sm tracking-widest uppercase">
                  Najczęściej zadawane pytania
                </span>
                <div className="w-12 h-1 bg-orange" />
              </div>
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy mb-6 leading-none">
                MASZ
                <br />
                <span className="text-orange">PYTANIA?</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faq.map((item, index) => (
                <div
                  key={item.question}
                  className="bg-white p-8 border-l-4 border-orange shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h3 className="font-bold text-navy text-xl mb-4">{item.question}</h3>
                  <p className="text-concrete-light leading-relaxed">{item.answer}</p>
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
              SKŁADU CELNEGO?
            </h2>

            <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
              Skontaktuj się z nami i dowiedz się, jak skład celny może pomóc Twojej firmie w
              optymalizacji kosztów importu.
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
                  href="/uslugi/magazyn-czasowego-skladowania"
                  className="text-white hover:text-yellow transition-colors font-medium underline"
                >
                  Magazyn DSK
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

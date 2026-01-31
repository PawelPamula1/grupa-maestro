import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agencja Celna - Reprezentacja przed KAS | Grupa Maestro Tomaszów Lubelski',
  description:
    'Profesjonalna agencja celna w Tomaszowie Lubelskim. Zgłoszenia PUESC i AES, klasyfikacja taryfowa, reprezentacja przed KAS. Kompleksowa obsługa importu i eksportu.',
};

export default function AgencjaCelnaPage() {
  const services = [
    {
      icon: '📋',
      title: 'Zgłoszenia celne PUESC',
      description:
        'Przygotowanie i złożenie zgłoszeń przywozowych (PUESC) - Pojedyncze Upoważnienie do Wniesienia Suma Celnego. Pełna dokumentacja, obliczenie należności celnych i VAT.',
    },
    {
      icon: '🚚',
      title: 'Zgłoszenia wywozowe AES',
      description:
        'Obsługa zgłoszeń wywozowych (AES) - Automated Export System. Reprezentacja przed organami celnymi przy eksporcie towarów poza Unię Europejską.',
    },
    {
      icon: '🏷️',
      title: 'Klasyfikacja taryfowa',
      description:
        'Profesjonalne oznaczenie towarów kodami CN (Combined Nomenclature). Określenie stawek celnych, wymagań formalno-prawnych i dokumentów dodatkowych.',
    },
    {
      icon: '📑',
      title: 'Procedury specjalne',
      description:
        'Obsługa procedur uszlachetniania czynnego i biernego, procedur uproszczonych, tranzytu celnego i innych procedur zgodnych z UKC.',
    },
    {
      icon: '⚖️',
      title: 'Reprezentacja przed KAS',
      description:
        'Działamy w Twoim imieniu przed Krajową Administracją Skarbową. Komunikacja z organami celnymi, wyjaśnienia, odwołania.',
    },
    {
      icon: '💼',
      title: 'Doradztwo celne',
      description:
        'Kompleksowe doradztwo w zakresie prawa celnego UE, optymalizacji procesów celnych i minimalizacji kosztów importu/eksportu.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Kontakt i umowa',
      description:
        'Skontaktuj się z nami telefonicznie lub mailowo. Omówimy zakres współpracy i podpiszemy umowę o reprezentację celną.',
    },
    {
      number: '02',
      title: 'Przesłanie dokumentów',
      description:
        'Przekaż nam niezbędne dokumenty: fakturę, CMR/konwersament, certyfikaty pochodzenia, dokumenty transportowe.',
    },
    {
      number: '03',
      title: 'Klasyfikacja i obliczenia',
      description:
        'Dokonujemy klasyfikacji taryfowej towarów, obliczamy należności celne, VAT i akcyzę. Sprawdzamy wymagania formalno-prawne.',
    },
    {
      number: '04',
      title: 'Zgłoszenie celne',
      description:
        'Przygotowujemy i składamy zgłoszenie celne w systemie PUESC/AES. Reprezentujemy Cię przed organami KAS.',
    },
    {
      number: '05',
      title: 'Odprawa i zwolnienie',
      description:
        'Po pozytywnej decyzji organów celnych towar zostaje dopuszczony do obrotu. Otrzymujesz wszystkie dokumenty celne.',
    },
    {
      number: '06',
      title: 'Wsparcie poodprawowe',
      description:
        'Jesteśmy do dyspozycji w razie kontroli celnych, wyjaśnień lub innych kwestii związanych z odprawą.',
    },
  ];

  const benefits = [
    {
      title: 'Oszczędność czasu',
      description:
        'Nie musisz tracić czasu na naukę skomplikowanych przepisów celnych. My załatwiamy wszystko za Ciebie.',
    },
    {
      title: 'Minimalizacja ryzyka',
      description:
        'Unikasz błędów w zgłoszeniach celnych, kar finansowych i opóźnień w odprawach.',
    },
    {
      title: 'Zgodność z prawem',
      description:
        'Gwarantujemy pełną zgodność z Unijnym Kodeksem Celnym i polskimi przepisami podatkowymi.',
    },
    {
      title: 'Przejrzyste koszty',
      description:
        'Jasna wycena usług, brak ukrytych opłat. Wiesz dokładnie ile zapłacisz za obsługę celną.',
    },
  ];

  const faq = [
    {
      question: 'Czym jest agencja celna?',
      answer:
        'Agencja celna to podmiot upoważniony przez klienta do reprezentowania go przed organami celnymi. Agencja działa w imieniu importera lub eksportera, przygotowując dokumentację celną i składając zgłoszenia w systemach PUESC/AES.',
    },
    {
      question: 'Jakie dokumenty są potrzebne do odprawy celnej?',
      answer:
        'Podstawowe dokumenty to: faktura handlowa, dokument przewozowy (CMR/konwersament), packing list, certyfikat pochodzenia (jeśli wymagany), pozwolenia/licencje (dla towarów objętych ograniczeniami). W niektórych przypadkach mogą być wymagane dodatkowe dokumenty.',
    },
    {
      question: 'Ile trwa odprawa celna?',
      answer:
        'Przy kompletnej dokumentacji standardowa odprawa celna trwa od kilku godzin do 1-2 dni roboczych. Czas może się wydłużyć w przypadku kontroli celnej lub braków w dokumentacji.',
    },
    {
      question: 'Ile kosztuje obsługa agencji celnej?',
      answer:
        'Koszt zależy od rodzaju towaru, wartości przesyłki i złożoności odprawy. Skontaktuj się z nami, aby otrzymać indywidualną wycenę dostosowaną do Twoich potrzeb.',
    },
    {
      question: 'Czy obsługujecie import z Ukrainy?',
      answer:
        'Tak, specjalizujemy się w obsłudze celnej na granicy UE-Ukraina. Nasza lokalizacja w Tomaszowie Lubelskim (blisko przejść w Hrebennem i Dołhobyczowie) to optymalne miejsce dla importu z Ukrainy.',
    },
    {
      question: 'Co to jest kod CN i jak go ustalić?',
      answer:
        'Kod CN (Combined Nomenclature) to 8-cyfrowy kod klasyfikacji taryfowej towarów w UE. Określa stawkę cła, wymagania formalne i dokumenty dodatkowe. Nasz zespół profesjonalnie dokonuje klasyfikacji taryfowej zgodnie z przepisami UE.',
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
              src="/images/Grupa-Maestro-z-drona.webp"
              alt="Agencja Celna - Grupa Maestro"
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
                  Usługa 01
                </span>
              </div>

              <h1 className="display-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-8 leading-none">
                AGENCJA
                <br />
                <span className="text-orange">CELNA</span>
              </h1>

              <p className="text-steel text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mb-12">
                Profesjonalna <span className="text-white font-bold">reprezentacja przed KAS</span>
                . Zgłoszenia celne, klasyfikacja taryfowa i pełna obsługa{' '}
                <span className="text-orange font-bold">importu i eksportu</span>.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">100%</div>
                  <div className="text-steel text-sm uppercase">Zgodność z UKC</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">24h</div>
                  <div className="text-steel text-sm uppercase">Średni czas odprawy</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">PUESC</div>
                  <div className="text-steel text-sm uppercase">Import</div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <div className="display-font text-4xl text-white mb-1">AES</div>
                  <div className="text-steel text-sm uppercase">Eksport</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Agencja Celna */}
        <section className="py-20 lg:py-32 bg-off-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy mb-8 leading-none">
                  CZYM JEST
                  <br />
                  <span className="text-orange">AGENCJA CELNA?</span>
                </h2>

                <div className="space-y-6 text-concrete-light text-lg leading-relaxed">
                  <p>
                    <strong className="text-navy">Agencja celna</strong> to profesjonalny partner
                    biznesowy, który reprezentuje Twoją firmę przed{' '}
                    <strong className="text-orange">Krajową Administracją Skarbową</strong>.
                  </p>

                  <p>
                    Kiedy importujesz lub eksportujesz towary, ktoś musi przygotować dokumentację
                    celną, dokonać klasyfikacji taryfowej, obliczyć należności celno-podatkowe i
                    złożyć zgłoszenie celne w systemie PUESC lub AES.
                  </p>

                  <p>
                    <strong className="text-navy">Grupa Maestro</strong> przejmuje te
                    skomplikowane obowiązki, działając w Twoim imieniu zgodnie z{' '}
                    <strong className="text-orange">Unijnym Kodeksem Celnym (UKC)</strong>.
                  </p>

                  <p>
                    Dzięki temu Ty możesz skupić się na rozwijaniu biznesu, podczas gdy my
                    zajmujemy się formalnościami celnymi.
                  </p>
                </div>
              </div>

              <div className="relative h-[500px] lg:h-[600px]">
                <Image
                  src="/images/Grupa-Maestro-sklad-celny.webp"
                  alt="Skład celny pod dozorem KAS"
                  fill
                  className="object-cover"
                  quality={75}
                />
                <div className="absolute inset-0 border-8 border-orange/20" />

                {/* Floating Badge */}
                <div className="absolute -bottom-8 -left-8 bg-orange p-8 max-w-xs shadow-2xl">
                  <div className="display-font text-5xl text-white mb-2">KAS</div>
                  <p className="text-white/90 text-sm leading-relaxed font-medium">
                    Upoważnieni do reprezentacji przed Krajową Administracją Skarbową
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32 bg-almost-black">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-orange" />
                <span className="text-steel font-bold text-sm tracking-widest uppercase">
                  Zakres usług
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
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-navy-light p-8 border-t-4 border-orange hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="font-bold text-white text-2xl mb-3">{service.title}</h3>
                  <p className="text-steel leading-relaxed">{service.description}</p>
                </div>
              ))}
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
                <span className="text-orange">ODPRAWY CELNEJ</span>
              </h2>
              <p className="text-concrete-light text-xl max-w-3xl mx-auto">
                Krok po kroku przez cały proces - od pierwszego kontaktu do wydania towaru
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {process.map((item, index) => (
                <div
                  key={item.number}
                  className="relative pl-12 pb-12 last:pb-0 border-l-2 border-orange/30 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
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

        {/* Benefits Section */}
        <section className="py-20 lg:py-32 bg-navy">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-none">
                KORZYŚCI DLA
                <br />
                <span className="text-orange">TWOJEJ FIRMY</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-1 bg-orange mx-auto mb-6" />
                  <h3 className="font-bold text-white text-xl mb-4">{benefit.title}</h3>
                  <p className="text-steel leading-relaxed">{benefit.description}</p>
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
              AGENCJI CELNEJ?
            </h2>

            <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
              Skontaktuj się z nami już dziś. Przejmujemy całą obsługę celną, abyś mógł skupić się
              na rozwijaniu swojego biznesu.
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
                  href="/uslugi/sklad-celny"
                  className="text-white hover:text-yellow transition-colors font-medium underline"
                >
                  Skład Celny
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

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka Prywatności | Grupa Maestro',
  description:
    'Polityka prywatności strony internetowej Grupa Maestro. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.',
};

export default function PolitykaPrywatnosciPage() {
  const sections = [
    {
      id: 'administrator',
      title: '1. Administrator danych osobowych',
      content: (
        <>
          <p className="mb-4">
            Administratorem danych osobowych jest{' '}
            <strong className="text-navy">Grupa Maestro Damian Harbuz</strong> z siedzibą w
            Tomaszowie Lubelskim, ul. Rolnicza 10, 22-600 Tomaszów Lubelski.
          </p>
          <div className="bg-off-white p-6 border-l-4 border-orange">
            <p className="mb-2">
              <strong className="text-navy">NIP:</strong> 9211985032
            </p>
            <p className="mb-2">
              <strong className="text-navy">REGON:</strong> 060756234
            </p>
            <p className="mb-2">
              <strong className="text-navy">Wpis:</strong> Rejestr CEIDG
            </p>
            <p className="mb-2">
              <strong className="text-navy">Email:</strong>{' '}
              <a
                href="mailto:grupamaestro.sc.mcs@gmail.com"
                className="text-orange hover:underline"
              >
                grupamaestro.sc.mcs@gmail.com
              </a>
            </p>
            <p>
              <strong className="text-navy">Telefon:</strong>{' '}
              <a href="tel:+48570690008" className="text-orange hover:underline">
                +48 570 690 008
              </a>
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'zakres',
      title: '2. Zakres i cele przetwarzania danych',
      content: (
        <>
          <p className="mb-4">
            Dane osobowe zbierane za pośrednictwem formularzy kontaktowych na stronie internetowej{' '}
            <strong className="text-orange">www.grupa-maestro.com</strong> obejmują:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>imię i nazwisko,</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>adres e-mail,</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>numer telefonu,</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>dane firmowe (jeśli dotyczy),</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>treść zapytania.</span>
            </li>
          </ul>

          <p className="mb-4">
            <strong className="text-navy">Dane przetwarzane są w celu:</strong>
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                udzielenia odpowiedzi na zapytanie (art. 6 ust. 1 lit. f RODO – uzasadniony
                interes Administratora),
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                realizacji usług (art. 6 ust. 1 lit. b RODO – wykonanie umowy),
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                archiwizacji korespondencji (art. 6 ust. 1 lit. c RODO – obowiązek prawny),
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                marketingu bezpośredniego własnych usług (art. 6 ust. 1 lit. f RODO).
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'hosting',
      title: '3. Hosting i logi serwera',
      content: (
        <>
          <p className="mb-4">
            Strona korzysta z usług hostingowych firmy{' '}
            <strong className="text-navy">home.pl</strong> Spółka Akcyjna z siedzibą w Szczecinie,
            zarejestrowana pod adresem ul. Zbożowa 4, 70-653 Szczecin.
          </p>
          <p className="mb-4">
            Firma home.pl przetwarza dane techniczne (adres IP, czas połączenia, typ
            przeglądarki) w logach serwera w celu zapewnienia bezpieczeństwa oraz ciągłości
            działania strony (art. 6 ust. 1 lit. f RODO).
          </p>
          <p>
            Polityka prywatności firmy home.pl:{' '}
            <a
              href="https://regulaminy.home.pl/Polityka-prywatnosci-home.pl.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:underline"
            >
              https://regulaminy.home.pl/Polityka-prywatnosci-home.pl.pdf
            </a>
          </p>
        </>
      ),
    },
    {
      id: 'cookies',
      title: '4. Pliki cookies i narzędzia analityczne',
      content: (
        <>
          <p className="mb-4">
            Strona wykorzystuje pliki cookies oraz narzędzia analityczne (np. Google Analytics),
            aby:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>analizować ruch na stronie i optymalizować jej funkcjonowanie,</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>tworzyć statystyki odwiedzin,</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>mierzyć skuteczność działań marketingowych.</span>
            </li>
          </ul>
          <p className="mb-4">
            <strong className="text-navy">Podstawą prawną</strong> przetwarzania danych z cookies
            jest art. 6 ust. 1 lit. a RODO – zgoda użytkownika.
          </p>
          <p>
            Użytkownik może w każdej chwili zmienić ustawienia przeglądarki dotyczące plików
            cookies.
          </p>
        </>
      ),
    },
    {
      id: 'odbiorcy',
      title: '5. Odbiorcy danych',
      content: (
        <>
          <p className="mb-4">
            Dane osobowe mogą być powierzane podmiotom świadczącym usługi:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">IT i hosting</strong> – dostawcy usług
                hostingowych i infrastruktury technicznej (np. home.pl),
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">Obsługa poczty elektronicznej</strong> – dostawcy
                usług email,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">Narzędzia statystyczne</strong> – dostawcy
                narzędzi analitycznych (np. Google Analytics).
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'okres',
      title: '6. Okres przechowywania danych',
      content: (
        <>
          <p className="mb-4">Dane przechowywane są przez okres:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">niezbędny do realizacji celu</strong>, dla którego
                zostały zebrane,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">maksymalnie 5 lat</strong> w celach archiwalnych,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">do momentu wycofania zgody</strong> na przetwarzanie
                (w przypadku danych przetwarzanych na podstawie zgody).
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'prawa',
      title: '7. Prawa osób, których dane dotyczą',
      content: (
        <>
          <p className="mb-4">Osobie, której dane dotyczą, przysługuje prawo do:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">dostępu do swoich danych</strong> – możliwość
                uzyskania informacji o przetwarzanych danych,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">sprostowania danych</strong> – poprawianie
                nieprawidłowych lub niekompletnych danych,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">usunięcia danych</strong> – prawo do żądania
                usunięcia danych (tzw. prawo do bycia zapomnianym),
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">ograniczenia przetwarzania</strong> – możliwość
                ograniczenia sposobu przetwarzania danych,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">wniesienia sprzeciwu</strong> – prawo do
                sprzeciwienia się przetwarzaniu danych,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">przenoszenia danych</strong> – możliwość otrzymania
                danych w ustrukturyzowanym formacie,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>
                <strong className="text-navy">wniesienia skargi</strong> do Prezesa Urzędu
                Ochrony Danych Osobowych.
              </span>
            </li>
          </ul>
          <div className="bg-orange/10 p-6 border-l-4 border-orange">
            <p className="text-navy font-semibold mb-2">
              W celu skorzystania z powyższych praw, skontaktuj się z nami:
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:grupamaestro.sc.mcs@gmail.com"
                className="text-orange hover:underline font-medium"
              >
                grupamaestro.sc.mcs@gmail.com
              </a>
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'dobrowolnosc',
      title: '8. Dobrowolność podania danych',
      content: (
        <>
          <p className="mb-4">
            Podanie danych osobowych jest{' '}
            <strong className="text-orange">dobrowolne</strong>, ale{' '}
            <strong className="text-navy">niezbędne</strong> do:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>skorzystania z formularza kontaktowego,</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>otrzymywania odpowiedzi na zapytania,</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange mt-2 flex-shrink-0" />
              <span>realizacji umowy lub świadczenia usług.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'zmiany',
      title: '9. Zmiany w polityce prywatności',
      content: (
        <>
          <p className="mb-4">
            Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce
            prywatności.
          </p>
          <p>
            Zmiany będą publikowane na tej stronie internetowej z odpowiednim wyprzedzeniem.
            Zalecamy regularne sprawdzanie treści polityki prywatności.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-navy">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-orange" />
                <span className="text-steel font-bold text-sm tracking-widest uppercase">
                  RODO
                </span>
              </div>

              <h1 className="display-font text-6xl sm:text-7xl md:text-8xl text-white mb-6 leading-none">
                POLITYKA
                <br />
                <span className="text-orange">PRYWATNOŚCI</span>
              </h1>

              <p className="text-steel text-lg md:text-xl leading-relaxed max-w-3xl">
                Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych
                osobowych przekazanych przez użytkowników w związku z korzystaniem ze strony
                internetowej <span className="text-white font-semibold">www.grupa-maestro.com</span>.
              </p>

              <div className="mt-8 p-6 bg-navy-light border-l-4 border-orange">
                <p className="text-steel text-sm">
                  <strong className="text-white">Data ostatniej aktualizacji:</strong> Styczeń 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 lg:py-32 bg-off-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="mb-16 last:mb-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h2 className="display-font text-4xl md:text-5xl text-navy mb-6 leading-none">
                    {section.title}
                  </h2>
                  <div className="prose prose-lg max-w-none text-concrete-light leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 lg:py-32 bg-navy">
          <div className="container-custom text-center">
            <h2 className="display-font text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-none">
              MASZ PYTANIA?
            </h2>

            <p className="text-steel text-xl max-w-3xl mx-auto mb-10">
              Jeśli masz pytania dotyczące polityki prywatności lub chcesz skorzystać ze swoich
              praw, skontaktuj się z nami.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:grupamaestro.sc.mcs@gmail.com"
                className="bg-orange hover:bg-orange-dark text-white px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Wyślij Email
              </a>
              <a
                href="tel:+48570690008"
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200"
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

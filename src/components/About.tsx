export default function About() {
  const reasons = [
    {
      title: 'Bliskość granicy',
      description:
        'Działamy tuż przy przejściach granicznych w Hrebennem i Dołhobyczowie - strategiczna lokalizacja na wschodniej granicy UE.',
    },
    {
      title: 'Sprawność działania',
      description:
        'Szybkość odpraw celnych to nasza codzienność. Minimalizujemy czas przestojów i maksymalizujemy efektywność.',
    },
    {
      title: 'Zgodność z przepisami',
      description:
        'Pracujemy w oparciu o Rozporządzenie UE nr 952/2013 (Unijny Kodeks Celny) i polskie prawo celne.',
    },
    {
      title: 'Bezpośrednia komunikacja',
      description:
        'Odpowiadamy na pytania zamiast generować kolejne. Każdy klient otrzymuje dedykowane wsparcie.',
    },
    {
      title: 'Indywidualne podejście',
      description:
        'Każda odprawa to osobna historia. Każdemu klientowi poświęcamy czas i dostosowujemy rozwiązania do potrzeb.',
    },
  ];

  return (
    <section id="o-nas" className="py-20 lg:py-32 bg-almost-black relative overflow-hidden">
      {/* Decorative Grid */}
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-orange" />
              <span className="text-concrete-light font-bold text-sm tracking-widest uppercase">
                O Grupie Maestro
              </span>
            </div>

            <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-none">
              EKSPERCI OD
              <br />
              <span className="text-orange">OBSŁUGI CELNEJ</span>
            </h2>

            <div className="space-y-4 text-steel text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-white">Grupa Maestro</strong> to dynamicznie rozwijająca
                się firma, od <strong className="text-orange">2021 roku</strong> świadcząca
                kompleksowe usługi w zakresie obsługi celnej, logistyki magazynowej oraz procedur
                specjalnych.
              </p>
              <p>
                Nasza{' '}
                <strong className="text-white">
                  strategiczna lokalizacja w Tomaszowie Lubelskim
                </strong>{' '}
                przy przejściach granicznych w Hrebennem i Dołhobyczowie pozwala nam obsługiwać
                import i eksport z maksymalną efektywnością.
              </p>
              <p>
                Łączymy <strong className="text-orange">wiedzę prawną z praktyką logistyczną</strong>
                , oferując naszym klientom kompleksowe wsparcie celne i magazynowe bez zbędnych
                przestojów, niejasności i stresu.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#kontakt"
                className="bg-orange hover:bg-orange-dark text-white px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Skontaktuj się
              </a>
              <div className="flex flex-col">
                <span className="text-steel text-xs uppercase tracking-wide">Telefon</span>
                <a
                  href="tel:+48570690008"
                  className="text-white font-bold text-lg hover:text-orange transition-colors"
                >
                  +48 570 690 008
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Reasons */}
          <div className="space-y-6">
            <h3 className="display-font text-3xl text-white mb-8">
              DLACZEGO <span className="text-orange">MY?</span>
            </h3>

            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="border-l-4 border-orange bg-navy-light p-6 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-bold text-white text-xl mb-2">{reason.title}</h4>
                <p className="text-steel leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

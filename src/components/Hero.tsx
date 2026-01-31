import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Grupa-Maestro-z-drona.webp"
          alt="Grupa Maestro - widok z lotu ptaka"
          fill
          className="object-cover"
          priority
          quality={75}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />

        {/* Diagonal Accent */}
        <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-bl from-orange/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl animate-slide-in-up">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-1 bg-orange" />
            <span className="text-yellow font-bold text-sm tracking-widest uppercase">
              Od 2021 roku na granicy UE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="display-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 leading-none">
            GRUPA
            <br />
            <span className="text-orange">MAESTRO</span>
          </h1>

          {/* Subheadline */}
          <p className="text-steel text-xl md:text-2xl lg:text-3xl font-medium mb-8 max-w-2xl leading-relaxed">
            Kompleksowa obsługa celna i magazynowa na wschodniej granicy Unii
            Europejskiej.
            <span className="text-white font-semibold">
              {" "}
              Tomaszów Lubelski.
            </span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 mb-10 max-w-2xl">
            <div className="border-l-4 border-orange pl-4">
              <div className="display-font text-4xl md:text-5xl text-white mb-1">
                3000
              </div>
              <div className="text-steel text-sm md:text-base uppercase tracking-wide">
                m² magazynu
              </div>
            </div>
            <div className="border-l-4 border-orange pl-4">
              <div className="display-font text-4xl md:text-5xl text-white mb-1">
                1500
              </div>
              <div className="text-steel text-sm md:text-base uppercase tracking-wide">
                miejsc paletowych
              </div>
            </div>
            <div className="border-l-4 border-orange pl-4">
              <div className="display-font text-4xl md:text-5xl text-white mb-1">
                24/7
              </div>
              <div className="text-steel text-sm md:text-base uppercase tracking-wide">
                monitoring
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#uslugi"
              className="bg-orange hover:bg-orange-dark text-white px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-center"
            >
              Nasze Usługi
            </a>
            <a
              href="tel:+48570690008"
              className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200 text-center"
            >
              Zadzwoń: +48 570 690 008
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

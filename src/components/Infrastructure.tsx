import Image from "next/image";

const photos = [
  {
    src: "/images/Grupa-Maestro-Magazyn-20250325_12435.webp",
    alt: "Magazyn Grupa Maestro - widok główny",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/Grupa-Maestro-sklad-celny.webp",
    alt: "Skład celny Grupa Maestro",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/Grupa-Maestro-Magazyn-20250325_124359.webp",
    alt: "Magazyn czasowego składowania - wnętrze",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/Grupa-Maestro-DJI_20240611151251_0031_V-1024x768-1.webp",
    alt: "Grupa Maestro - widok z drona hala",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/telefon-zdjecie-magazynu-1.png",
    alt: "Infrastruktura magazynowa",
    span: "col-span-1 row-span-1",
  },
];

export default function Infrastructure() {
  return (
    <section id="infrastruktura" className="py-20 lg:py-32 bg-off-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-orange" />
            <span className="text-concrete font-bold text-sm tracking-widest uppercase">
              Nasza infrastruktura
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy leading-none">
              NOWOCZESNY
              <br />
              <span className="text-orange">KOMPLEKS</span>
              <br />
              LOGISTYCZNY
            </h2>
            <div className="text-concrete-light text-lg leading-relaxed max-w-xl">
              <p className="mb-4">
                <strong className="text-navy">3000 m²</strong> nowoczesnej
                powierzchni magazynowej z pełnym wyposażeniem i{" "}
                <strong className="text-navy">1500 miejscami paletowymi</strong>
                .
              </p>
              <p>
                Strategiczna lokalizacja przy przejściach granicznych w{" "}
                <strong className="text-navy">Hrebennem i Dołhobyczowie</strong>{" "}
                gwarantuje szybkie odprawy celne.
              </p>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {photos.map((photo, index) => (
            <div
              key={photo.alt}
              className={`${photo.span} relative group overflow-hidden img-overlay animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-full min-h-[200px] lg:min-h-[300px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-navy p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center lg:text-left">
              <div className="display-font text-5xl lg:text-6xl text-orange mb-2">
                3000
              </div>
              <div className="text-steel text-sm uppercase tracking-wide">
                M² powierzchni magazynowej
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="display-font text-5xl lg:text-6xl text-orange mb-2">
                1500
              </div>
              <div className="text-steel text-sm uppercase tracking-wide">
                Miejsc paletowych EURO
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="display-font text-5xl lg:text-6xl text-orange mb-2">
                24/7
              </div>
              <div className="text-steel text-sm uppercase tracking-wide">
                Monitoring i ochrona
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="display-font text-5xl lg:text-6xl text-orange mb-2">
                2021
              </div>
              <div className="text-steel text-sm uppercase tracking-wide">
                Rok założenia firmy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

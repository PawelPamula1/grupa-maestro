export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    uslugi: [
      { name: 'Agencja Celna', href: '/uslugi/agencja-celna' },
      { name: 'Skład Celny', href: '/uslugi/sklad-celny' },
      { name: 'Magazyn DSK', href: '/uslugi/magazyn-czasowego-skladowania' },
    ],
    firma: [
      { name: 'O nas', href: '/o-nas' },
      { name: 'Infrastruktura', href: '/#infrastruktura' },
      { name: 'Kontakt', href: '/#kontakt' },
    ],
    legal: [
      { name: 'Polityka prywatności', href: '/polityka-prywatnosci' },
      { name: 'Regulamin', href: '/regulamin' },
    ],
  };

  return (
    <footer className="bg-almost-black text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange flex items-center justify-center">
                <span className="display-font text-white text-2xl">GM</span>
              </div>
              <div>
                <div className="display-font text-xl text-white leading-none">GRUPA MAESTRO</div>
                <div className="text-steel text-xs tracking-wider">AGENCJA CELNA</div>
              </div>
            </div>
            <p className="text-steel leading-relaxed mb-4">
              Kompleksowa obsługa celna i magazynowa na wschodniej granicy UE od 2021 roku.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574831872734"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-light hover:bg-orange flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Usługi */}
          <div>
            <h3 className="display-font text-xl text-white mb-6">USŁUGI</h3>
            <ul className="space-y-3">
              {links.uslugi.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-steel hover:text-orange transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-orange transition-all duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Firma */}
          <div>
            <h3 className="display-font text-xl text-white mb-6">FIRMA</h3>
            <ul className="space-y-3">
              {links.firma.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-steel hover:text-orange transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-orange transition-all duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="display-font text-xl text-white mb-6">KONTAKT</h3>
            <ul className="space-y-4 text-steel">
              <li>
                <div className="font-bold text-white text-sm mb-1">Adres:</div>
                <div className="text-sm leading-relaxed">
                  ul. Rolnicza 10
                  <br />
                  22-600 Tomaszów Lubelski
                </div>
              </li>
              <li>
                <div className="font-bold text-white text-sm mb-1">Telefon:</div>
                <a
                  href="tel:+48570690008"
                  className="text-orange hover:text-yellow transition-colors text-lg font-bold"
                >
                  +48 570 690 008
                </a>
              </li>
              <li>
                <div className="font-bold text-white text-sm mb-1">Email:</div>
                <a
                  href="mailto:grupamaestro.sc.mcs@gmail.com"
                  className="text-sm hover:text-orange transition-colors break-all"
                >
                  grupamaestro.sc.mcs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-light my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-steel text-sm">
          <div>
            © {currentYear} Grupa Maestro. Wszelkie prawa zastrzeżone.
          </div>
          <div className="flex gap-6">
            {links.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-orange transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

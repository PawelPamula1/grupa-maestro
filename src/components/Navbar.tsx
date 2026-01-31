"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Usługi", href: "/uslugi" },
    { name: "O nas", href: "/o-nas" },
    { name: "Infrastruktura", href: "/#infrastruktura" },
    { name: "Kontakt", href: "/#kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-orange flex items-center justify-center">
              <span className="display-font text-white text-2xl lg:text-3xl">
                GM
              </span>
            </div>
            <div className="hidden md:block">
              <div className="display-font text-xl lg:text-2xl text-white leading-none">
                GRUPA MAESTRO
              </div>
              <div className="text-steel text-xs lg:text-sm font-medium tracking-wider">
                AGENCJA CELNA
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-orange transition-colors duration-200 font-medium text-sm tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+48570690008"
              className="bg-orange hover:bg-orange-dark text-white px-6 py-3 font-bold uppercase text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              +48 570 690 008
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-navy transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-custom py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white/90 hover:text-orange transition-colors duration-200 font-medium text-lg uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+48570690008"
            className="block bg-orange text-white px-6 py-3 font-bold uppercase text-center"
          >
            +48 570 690 008
          </a>
        </div>
      </div>
    </nav>
  );
}

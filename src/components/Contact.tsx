'use client';

import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    // Tutaj będzie integracja z backend/email service
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="kontakt" className="py-20 lg:py-32 bg-off-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-1 bg-orange" />
            <span className="text-concrete font-bold text-sm tracking-widest uppercase">
              Kontakt
            </span>
            <div className="w-12 h-1 bg-orange" />
          </div>
          <h2 className="display-font text-5xl sm:text-6xl md:text-7xl text-navy mb-6 leading-none">
            SKONTAKTUJ SIĘ
            <br />
            <span className="text-orange">Z NAMI</span>
          </h2>
          <p className="text-concrete-light text-lg max-w-2xl mx-auto">
            Odpowiemy na wszystkie pytania i pomożemy dobrać optymalne rozwiązanie dla Twojego
            biznesu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white p-8 border-l-4 border-orange">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-2">Adres</h3>
                  <p className="text-concrete-light leading-relaxed">
                    ul. Rolnicza 10
                    <br />
                    22-600 Tomaszów Lubelski
                    <br />
                    Polska
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 border-l-4 border-orange">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-2">Telefon</h3>
                  <a
                    href="tel:+48570690008"
                    className="text-orange hover:text-orange-dark font-bold text-2xl transition-colors"
                  >
                    +48 570 690 008
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-8 border-l-4 border-orange">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-2">Email</h3>
                  <a
                    href="mailto:grupamaestro.sc.mcs@gmail.com"
                    className="text-orange hover:text-orange-dark font-medium text-lg transition-colors break-all"
                  >
                    grupamaestro.sc.mcs@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-8 border-l-4 border-orange">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-2">Godziny otwarcia</h3>
                  <p className="text-concrete-light leading-relaxed">
                    <strong className="text-navy">Pon–Pt:</strong> 8:00–17:00
                    <br />
                    <strong className="text-navy">Sob:</strong> 8:00–14:00
                    <br />
                    <strong className="text-navy">Niedz:</strong> Nieczynne
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-10">
            <h3 className="display-font text-3xl text-navy mb-6">
              WYŚLIJ <span className="text-orange">WIADOMOŚĆ</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-navy font-bold mb-2 text-sm uppercase">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-concrete/30 focus:border-orange outline-none transition-colors text-almost-black"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-navy font-bold mb-2 text-sm uppercase">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-concrete/30 focus:border-orange outline-none transition-colors text-almost-black"
                  placeholder="jan@firma.pl"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-navy font-bold mb-2 text-sm uppercase">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-concrete/30 focus:border-orange outline-none transition-colors text-almost-black"
                  placeholder="+48 123 456 789"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-navy font-bold mb-2 text-sm uppercase"
                >
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-concrete/30 focus:border-orange outline-none transition-colors resize-none text-almost-black"
                  placeholder="Opisz swoją potrzebę..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-orange hover:bg-orange-dark text-white px-8 py-4 font-bold uppercase text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {formStatus === 'sending' && 'Wysyłanie...'}
                {formStatus === 'success' && '✓ Wysłano!'}
                {formStatus === 'idle' && 'Wyślij wiadomość'}
                {formStatus === 'error' && 'Błąd - spróbuj ponownie'}
              </button>

              <p className="text-concrete text-sm">
                * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
              </p>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="bg-white p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.123456789!2d23.4167!3d50.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzAwLjAiTiAyM8KwMjUnMDAuMCJF!5e0!3m2!1spl!2spl!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja Grupa Maestro"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grupa Maestro - Agencja Celna | Skład Celny | Magazyn - Tomaszów Lubelski',
  description:
    'Kompleksowa obsługa celna na granicy UE-Ukraina. Agencja celna, skład celny, magazyn 3000m². Tomaszów Lubelski. ☎️ +48 570 690 008',
  keywords: [
    'agencja celna',
    'skład celny',
    'magazyn czasowego składowania',
    'Tomaszów Lubelski',
    'granica UE Ukraina',
    'odprawy celne',
    'import eksport',
    'Grupa Maestro',
  ],
  authors: [{ name: 'Grupa Maestro' }],
  openGraph: {
    title: 'Grupa Maestro - Agencja Celna | Skład Celny | Magazyn',
    description:
      'Kompleksowa obsługa celna i magazynowa na wschodniej granicy UE. 3000m², 1500 palet, monitoring 24/7.',
    url: 'https://grupa-maestro.com',
    siteName: 'Grupa Maestro',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

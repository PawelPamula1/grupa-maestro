# Grupa Maestro - Plan Projektu

## 📋 Informacje o projekcie

**Klient:** Grupa Maestro (Agencja Celna)
**Lokalizacja:** Tomaszów Lubelski, ul. Rolnicza 10
**Branża:** Logistyka, obsługa celna, magazynowanie
**Target:** Import/Eksport PL-UA, handel międzynarodowy
**Status:** Proof of Concept (statyczna strona)

---

## 🎯 Struktura strony - Podstrony do zrobienia

### 1. **Homepage** `/`
**Priorytet:** 🔴 Wysoki
**Zawartość:**
- Hero section z CTA (telefon/formularz)
- 3 główne usługi (karty z linkami)
- Krótko "O nas" (od 2021 roku, lokalizacja przy granicy)
- Zdjęcia infrastruktury (magazyn, lokalizacja)
- Sekcja "Dlaczego my?" (5 powodów)
- Ostatnie artykuły z bloga (3-4 sztuki - hard-coded na początek)
- Kontakt (mapa, telefon, email, godziny)

**Meta:**
- Title: "Agencja Celna Grupa Maestro | Skład Celny | Magazyn - Tomaszów Lubelski"
- Description: "Kompleksowa obsługa celna na granicy UE-Ukraina. Agencja celna, skład celny, magazyn 3000m². Tomaszów Lubelski. ☎️ +48 570 690 008"

---

### 2. **O nas** `/o-nas`
**Priorytet:** 🟡 Średni
**Zawartość:**
- Historia firmy (od 2021)
- Misja i wartości
- Lokalizacja strategiczna (bliskość Hrebenne, Dołhobyczów)
- Zespół (opcjonalnie jeśli mają zdjęcia)
- Certyfikaty/zgody KAS (jeśli mają)
- Timeline rozwoju firmy

**Meta:**
- Title: "O Grupie Maestro - Agencja Celna w Tomaszowie Lubelskim"
- Description: "Poznaj Grupę Maestro - ekspertów od obsługi celnej na wschodniej granicy UE. Od 2021 roku wspieramy import i eksport."

---

### 3. **Usługi - Landing Page** `/uslugi`
**Priorytet:** 🔴 Wysoki
**Zawartość:**
- Overview wszystkich usług
- 3 główne sekcje z przyciskami do podstron
- Proces współpracy (krok po kroku)
- FAQ dotyczące usług

---

### 4. **Agencja Celna** `/uslugi/agencja-celna`
**Priorytet:** 🔴 Wysoki
**Zawartość:**
- Co to jest agencja celna?
- Nasze usługi:
  - Reprezentacja przed KAS
  - Zgłoszenia celne (PUESC, AES)
  - Klasyfikacja taryfowa
  - Uszlachetnianie (czynne/bierne)
  - Ewidencja składowa, rozliczenia VAT/cło/akcyza
  - Procedury specjalne
- Dlaczego warto?
- CTA: Skontaktuj się

**Meta:**
- Title: "Agencja Celna Tomaszów Lubelski | Import/Eksport PL-UA | Grupa Maestro"
- Description: "Profesjonalna agencja celna przy granicy z Ukrainą. Odprawy celne, PUESC, AES, reprezentacja przed KAS. Doświadczenie od 2021."

---

### 5. **Skład Celny** `/uslugi/sklad-celny`
**Priorytet:** 🔴 Wysoki
**Zawartość:**
- Definicja składu celnego (wg UKC)
- Korzyści:
  - Przechowywanie bez natychmiastowego oclenia
  - Dozór celny
  - Elastyczne procedury
- Dokumenty potrzebne
- Proces krok po kroku
- CTA: Zapytaj o dostępność

**Meta:**
- Title: "Skład Celny w Tomaszowie Lubelskim | Przechowywanie pod dozorem celnym"
- Description: "Skład celny na wschodniej granicy UE. Legalne przechowywanie towarów nieunijnych bez natychmiastowego oclenia. KAS."

---

### 6. **Magazyn Czasowego Składowania (DSK)** `/uslugi/magazyn-czasowego-skladowania`
**Priorytet:** 🔴 Wysoki
**Zawartość:**
- Co to jest magazyn DSK?
- Parametry:
  - 3000 m² powierzchni
  - 1500 miejsc paletowych
  - Monitoring, ochrona
  - BHP i PPOŻ
- Kto może skorzystać?
- Cennik (opcjonalnie - lub "Zapytaj o wycenę")
- Wyposażenie (wózki widłowe, załadunek)

**Meta:**
- Title: "Magazyn Czasowego Składowania 3000m² | 1500 palet | Grupa Maestro"
- Description: "Nowoczesny magazyn DSK przy granicy z Ukrainą. 3000m², 1500 miejsc paletowych. Monitoring, bezpieczeństwo, elastyczne warunki."

---

### 7. **Jak zacząć współpracę** `/jak-zaczac`
**Priorytet:** 🟡 Średni
**Zawartość:**
- Proces onboardingu:
  1. Kontakt (telefon/email)
  2. Analiza potrzeb
  3. Przygotowanie dokumentów
  4. Numer EORI (pomożemy)
  5. Start współpracy
- FAQ dla nowych klientów
- Formularz kontaktowy

**Meta:**
- Title: "Jak rozpocząć współpracę z Grupą Maestro | Agencja Celna"
- Description: "Sprawdź jak łatwo rozpocząć współpracę. Pomożemy z EORI, dokumentami i pierwszą odprawą celną."

---

### 8. **Blog (placeholder)** `/blog`
**Priorytet:** 🟢 Niski (na początek)
**Zawartość:**
- Lista 5-10 najlepszych artykułów (hard-coded)
- Artykuły jako osobne podstrony `/blog/[slug]`
- Najpopularniejsze:
  - Wojna celna Trumpa 2025
  - 5 powodów magazynowania przy wschodniej granicy
  - Jak skorzystać ze składu celnego (krok po kroku)
  - Globalne wstrząsy celne
  - Procedury uszlachetniania

**Uwaga:** Na początku możemy to zrobić jako statyczne MDX files

---

### 9. **Kontakt** `/kontakt`
**Priorytet:** 🔴 Wysoki
**Zawartość:**
- Formularz kontaktowy
- Dane kontaktowe:
  - 📍 ul. Rolnicza 10, 22-600 Tomaszów Lubelski
  - 📞 +48 570 690 008
  - 📧 grupamaestro.sc.mcs@gmail.com
  - 🕒 Pon–Pt: 8:00–17:00, Sob: 8:00–14:00
- Mapa Google (embed)
- CTA: "Oddzwonimy w 24h"

**Meta:**
- Title: "Kontakt - Grupa Maestro | Agencja Celna Tomaszów Lubelski"
- Description: "Skontaktuj się z nami: ☎️ +48 570 690 008 | 📧 grupamaestro.sc.mcs@gmail.com | Tomaszów Lubelski, ul. Rolnicza 10"

---

### 10. **Polityka Prywatności** `/polityka-prywatnosci`
**Priorytet:** 🟢 Niski (ale wymagane prawnie!)
**Zawartość:**
- RODO compliance
- Cookies policy
- Formularz zgód

---

## 🌍 Multilingual (opcjonalnie - Faza 2)

**Języki:** Polski (główny) + Ukraiński
**Routing:** `/pl` i `/ua` (lub `/uk`)

Ukraińskie wersje stron:
- `/ua` - Homepage po ukraińsku
- `/ua/posluhy/mytne-ahentstvo` - Agencja celna
- `/ua/kontakt` - Kontakt

**Priorytet:** 🟡 Średni (mają już treści UA, więc warto to wykorzystać!)

---

## 🎨 Design & Components - Co będzie potrzebne

### Komponenty globalne:
- [ ] **Navbar** (sticky, z menu mobilnym)
- [ ] **Footer** (linki, kontakt, social media)
- [ ] **CTA Buttons** (telefon, formularz)
- [ ] **Breadcrumbs** (nawigacja)

### Komponenty strony głównej:
- [ ] **Hero Section** (zdjęcie + CTA)
- [ ] **Services Cards** (3 usługi)
- [ ] **Stats Section** (3000m², 1500 palet, od 2021)
- [ ] **Features Grid** (dlaczego my?)
- [ ] **Blog Preview** (3 ostatnie artykuły)
- [ ] **Contact Form**
- [ ] **Google Maps Embed**

### Komponenty usług:
- [ ] **Service Header** (breadcrumbs + title)
- [ ] **Benefits List** (ikony + tekst)
- [ ] **Process Timeline** (kroki 1-2-3-4)
- [ ] **FAQ Accordion**
- [ ] **CTA Box** (sticky na dole strony?)

### Komponenty bloga:
- [ ] **Article Card** (thumbnail + tytuł + excerpt)
- [ ] **Article Layout** (MDX support)
- [ ] **Table of Contents** (sticky sidebar)
- [ ] **Share Buttons** (opcjonalnie)

---

## 📸 Assets do pobrania ze starej strony

### Zdjęcia infrastruktury (z home.json):
- ✅ Grupa Maestro z drona: `Grupa-Maestro-z-drona.png`
- ✅ Magazyn: `Grupa-Maestro-Magazyn-20250325_12435.jpg`
- ✅ Magazyn wnętrze: `Grupa-Maestro-Magazyn-20250325_124359.jpg`
- ✅ Skład celny: `Grupa-Maestro-sklad-celny.jpg`
- ✅ Zdjęcie z drona hala: `DJI_20240611151251_0031_V-1024x768-1.jpg`

### Grafiki marketingowe:
- ✅ Logo Agencji Celnej: `Agencja-Celna-sklad-celny-Grupa-Maestro.png`
- ✅ Grafika agencja celna: `grafika-agencja-celna.png`
- ✅ Grafika pingwin (Wojna celna): `grafika-pingwin.png`
- ✅ Grafika cło: `grafika-clo.png`
- ✅ Grafika obsługa logistyczna: `grafika-obsluga-logistyczna.png`

### Do pobrania:
```bash
# Wszystkie obrazy z wp-content/uploads/
grupa-maestro.com/wp-content/uploads/2026/01/*
grupa-maestro.com/wp-content/uploads/2025/*
grupa-maestro.com/wp-content/uploads/2024/*
```

---

## 🚀 Następne kroki - Plan działania

### **FAZA 1: Setup & Design (Tydzień 1)**
1. ✅ Analiza contentu (DONE)
2. [ ] Pobrać zdjęcia ze starej strony
3. [ ] Setup Next.js projektu
4. [ ] Zainstalować dependencies (Tailwind, shadcn/ui)
5. [ ] Stworzyć design system (kolory, typography)
6. [ ] Wireframes kluczowych stron (Figma/Excalidraw?)

### **FAZA 2: Development - Core Pages (Tydzień 2)**
7. [ ] Homepage (80% funkcjonalności)
8. [ ] Layout (Navbar + Footer)
9. [ ] 3 strony usług (Agencja/Skład/Magazyn)
10. [ ] Kontakt (z formularzem)

### **FAZA 3: Content & Polish (Tydzień 3)**
11. [ ] O nas
12. [ ] Jak zacząć
13. [ ] Blog (5 statycznych artykułów w MDX)
14. [ ] SEO (meta tags, sitemap)
15. [ ] Optymalizacja zdjęć (Next Image)

### **FAZA 4: Review & Deploy (Tydzień 4)**
16. [ ] Testy na różnych urządzeniach
17. [ ] Performance audit (Lighthouse)
18. [ ] Deploy na Vercel (preview)
19. [ ] Prezentacja klientowi
20. [ ] Feedback i poprawki

---

## 🛠 Tech Stack (Rekomendacja)

```
Framework: Next.js 15 (App Router)
Language: TypeScript
Styling: Tailwind CSS + shadcn/ui
Content: MDX (dla artykułów blogowych)
Forms: React Hook Form + Zod
Analytics: Google Analytics 4 (opcjonalnie)
Hosting: Vercel
```

**Proste, szybkie, łatwe do rozwoju później!**

---

## 💰 Potencjalne rozszerzenia (Faza 2 - po akceptacji)

- [ ] CMS (Sanity/Contentful) dla bloga
- [ ] Multilingual (next-intl)
- [ ] Live chat
- [ ] Dashboard dla klienta (dodawanie artykułów)
- [ ] Integracja z Google Analytics
- [ ] Newsletter (Mailchimp/SendGrid)
- [ ] Kalkulator kosztów celnych (interaktywny tool)

---

## 📝 Notatki

- Klient: Tato użytkownika pracuje dla tej agencji
- Status: Proof of concept - pokażemy co można zrobić
- Budget: TBD (prawdopodobnie niski na start)
- Timeline: ~4 tygodnie do pierwszej wersji

---

**Ostatnia aktualizacja:** 2026-01-31

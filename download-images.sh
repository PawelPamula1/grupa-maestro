#!/bin/bash

# Skrypt do pobrania wszystkich zdjęć z JSONów

# Tworzymy folder na zdjęcia
mkdir -p public/images/original

echo "🔍 Szukam obrazów w plikach JSON..."

# Wyciągamy wszystkie unikalne URLe zdjęć (tylko z grupa-maestro.com)
grep -rh '"src"' content/*.json | \
  grep -o 'https://[^"]*' | \
  grep 'grupa-maestro.com/wp-content' | \
  sed 's/?.*$//' | \
  sed 's/i0\.wp\.com\///' | \
  sort -u > image-urls.txt

echo "✅ Znaleziono $(wc -l < image-urls.txt) unikalnych obrazów"
echo ""
echo "📥 Pobieram obrazy..."

# Pobieramy każdy obrazek
while IFS= read -r url; do
  # Wyciągamy nazwę pliku z URL
  filename=$(basename "$url")

  # Sprawdzamy czy już nie mamy tego pliku
  if [ -f "public/images/original/$filename" ]; then
    echo "⏭️  Już mam: $filename"
  else
    echo "⬇️  Pobieram: $filename"
    curl -s -o "public/images/original/$filename" "$url"
  fi
done < image-urls.txt

echo ""
echo "✅ Gotowe! Zdjęcia są w: public/images/original/"
echo "📊 Łącznie pobranych plików: $(ls public/images/original/ | wc -l)"

# Cleanup
rm image-urls.txt

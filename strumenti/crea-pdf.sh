#!/usr/bin/env bash
# Converte un tema Markdown in PDF A4 nella cartella pdf/.
# Uso: strumenti/crea-pdf.sh civile/AAAA-MM-GG-titolo.md
set -euo pipefail
dir="$(cd "$(dirname "$0")" && pwd)"
root="$(dirname "$dir")"
src="$1"
name="$(basename "$src" .md)"
tmp="$(mktemp -d)"
cp "$dir/stile-pdf.css" "$tmp/style.css"
pandoc "$src" -f gfm -t html5 -s --css style.css --metadata pagetitle="$name" -o "$tmp/tema.html"
mkdir -p "$root/pdf"
node "$dir/html-a-pdf.js" "$tmp/tema.html" "$root/pdf/$name.pdf"
rm -rf "$tmp"
echo "$root/pdf/$name.pdf"

#!/usr/bin/env bash
# Crea Word e PDF (stessa impaginazione, margini stretti) da appunti Markdown.
# Uso: strumenti/crea-appunti.sh appunti/AAAA-MM-GG-titolo.md
set -euo pipefail
dir="$(cd "$(dirname "$0")" && pwd)"
root="$(dirname "$dir")"
name="$(basename "$1" .md)"
node "$dir/crea-docx.js" "$1" >/dev/null
zip -d "$root/word/$name.docx" '*/' >/dev/null 2>&1 || true
tmp="$(mktemp -d)"
cp "$root/word/$name.docx" "$tmp/"
(cd "$tmp" && soffice --headless --convert-to pdf "$name.docx" >/dev/null 2>&1)
mkdir -p "$root/pdf"
cp "$tmp/$name.pdf" "$root/pdf/$name.pdf"
rm -rf "$tmp"
echo "$root/word/$name.docx"
echo "$root/pdf/$name.pdf"

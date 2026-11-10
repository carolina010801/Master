// Converte un tema Markdown in documento Word (A4) nella cartella word/.
// Uso: node strumenti/crea-docx.js amministrativo/AAAA-MM-GG-titolo.md
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
  Footer, PageNumber, BorderStyle,
} = require('docx');

const src = process.argv[2];
const root = path.dirname(__dirname);
const lines = fs.readFileSync(src, 'utf8').split('\n');
const FONT = 'Times New Roman';

// Grassetto (**…**) e corsivo (*…*) in linea.
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const t = m[0];
    if (t.startsWith('**')) out.push(new TextRun({ text: t.slice(2, -2), bold: true, ...base }));
    else out.push(new TextRun({ text: t.slice(1, -1), italics: true, ...base }));
    last = m.index + t.length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), ...base }));
  return out;
}

const children = [];
let listRef = 0;
let inList = false;
for (const raw of lines) {
  const line = raw.trimEnd();
  if (!line) { inList = false; continue; }
  if (line.startsWith('# ')) {
    children.push(new Paragraph({ heading: 'Title', alignment: AlignmentType.CENTER, children: runs(line.slice(2)) }));
  } else if (line.startsWith('## ')) {
    children.push(new Paragraph({ heading: 'Heading1', children: runs(line.slice(3)) }));
  } else if (line === '---') {
    children.push(new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '999999', space: 1 } }, children: [] }));
  } else if (/^\d+\.\s/.test(line)) {
    if (!inList) { listRef++; inList = true; }
    children.push(new Paragraph({ numbering: { reference: `num${listRef}`, level: 0 }, alignment: AlignmentType.JUSTIFIED, children: runs(line.replace(/^\d+\.\s/, '')) }));
  } else if (/^[-*]\s/.test(line)) {
    children.push(new Paragraph({ numbering: { reference: 'bullet', level: 0 }, alignment: AlignmentType.JUSTIFIED, children: runs(line.slice(2)) }));
  } else {
    inList = false;
    children.push(new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: runs(line) }));
  }
}

const numConfigs = [{ reference: 'bullet', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 567, hanging: 283 } } } }] }];
for (let i = 1; i <= listRef; i++) {
  numConfigs.push({ reference: `num${i}`, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 567, hanging: 340 } } } }] });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: 24 }, paragraph: { spacing: { after: 120, line: 360 } } } },
    paragraphStyles: [
      { id: 'Title', name: 'Title', basedOn: 'Normal', run: { font: FONT, size: 34, bold: true }, paragraph: { spacing: { before: 0, after: 240 }, keepNext: true } },
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', run: { font: FONT, size: 28, bold: true }, paragraph: { spacing: { before: 240, after: 120 }, keepNext: true, outlineLevel: 0 } },
    ],
  },
  numbering: { config: numConfigs },
  sections: [{
    properties: { page: { margin: { top: 1418, bottom: 1418, left: 1304, right: 1304 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 18 })] })] }) },
    children,
  }],
});

fs.mkdirSync(path.join(root, 'word'), { recursive: true });
const out = path.join(root, 'word', path.basename(src, '.md') + '.docx');
Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(out, buf); console.log(out); });

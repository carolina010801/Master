const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + process.argv[2]); 
  await p.pdf({ path: process.argv[3], format: 'A4', printBackground: true, displayHeaderFooter: true, headerTemplate: '<span></span>', footerTemplate: '<div style="font-size:9pt;width:100%;text-align:center;font-family:serif"><span class="pageNumber"></span></div>', margin: { top: '2.5cm', bottom: '2.5cm', left: '2.3cm', right: '2.3cm' } });
  await b.close();
})();

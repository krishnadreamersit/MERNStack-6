const PDFDocument = require('pdfkit');
const fs = require('fs');

let pdfdoc = new PDFDocument();
pdfdoc.pipe(fs.createWriteStream('document1.pdf'));
pdfdoc.text("Hello world of PDFKit");
pdfdoc.end();

//read contents from pdf file -> OCR/Scanner/NLA
//file management (copy, rename, delete, move file)
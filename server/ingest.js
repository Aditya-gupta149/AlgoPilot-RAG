const fs = require("fs");
const pdfParse = require("pdf-parse");

async function readPDF(filePath) {
  const dataBuffer = fs.readFileSync(filePath);

  const data = await pdfParse(dataBuffer);

  const text = data.text;

  const chunkSize = 1000;

  const chunks = [];

  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }

  fs.writeFileSync(
    "./data/chunks.json",
    JSON.stringify(chunks, null, 2)
  );

  console.log("Saved", chunks.length, "chunks");
}

readPDF("./docs/DSA Practice Sheet 30 150.pdf");
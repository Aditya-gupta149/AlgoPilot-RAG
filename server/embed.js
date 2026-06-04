const fs = require("fs");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function createEmbeddings() {
  const chunks = JSON.parse(
    fs.readFileSync("./data/chunks.json", "utf8")
  );

  const embeddedChunks = [];

  for (let i = 0; i < chunks.length; i++) {
    console.log(`Embedding chunk ${i + 1}/${chunks.length}`);

    const result = await ai.models.embedContent({
      model: "gemini-embedding-001",
      contents: chunks[i],
    });

    embeddedChunks.push({
      text: chunks[i],
      embedding: result.embeddings[0].values,
    });
  }

  fs.writeFileSync(
    "./data/embeddings.json",
    JSON.stringify(embeddedChunks, null, 2)
  );

  console.log("Embeddings saved!");
}

createEmbeddings().catch(console.error);
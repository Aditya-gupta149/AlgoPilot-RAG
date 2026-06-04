const fs = require("fs");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function cosineSimilarity(a, b) {
  let dot = 0;
  let magA = 0;
  let magB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }

  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function askRAG(question) {
  const embeddedChunks = JSON.parse(
    fs.readFileSync("./data/embeddings.json", "utf8")
  );

  const queryEmbedding = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: question,
  });

  const queryVector = queryEmbedding.embeddings[0].values;

  const scoredChunks = embeddedChunks.map(chunk => ({
    text: chunk.text,
    score: cosineSimilarity(queryVector, chunk.embedding),
  }));

  scoredChunks.sort((a, b) => b.score - a.score);

  const context = scoredChunks
    .slice(0, 3)
    .map(chunk => chunk.text)
    .join("\n\n");

  const prompt = `
You are a DSA Instructor.

Use ONLY the context below.

Context:
${context}

Question:
${question}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  console.log(response.text);
}

askRAG("Explain stacks");
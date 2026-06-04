import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Roadmap() {
  const [level, setLevel] = useState("");
  const [roadmap, setRoadmap] = useState("");

  const generateRoadmap = async () => {
    try {
      const prompt = `
Create a detailed DSA roadmap for a ${level} student.
Include:
- Topics
- Order of learning
- Weekly plan
- Important problems
`;

    const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/ai/ask`,
  { prompt }
);

      setRoadmap(res.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        DSA Roadmap Generator
      </h1>

      <input
        type="text"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        placeholder="Beginner / Intermediate / Advanced"
        className="w-full p-4 bg-gray-900 border border-gray-600 rounded"
      />

      <button
        onClick={generateRoadmap}
        className="bg-cyan-500 px-6 py-3 rounded mt-4"
      >
        Generate Roadmap
      </button>

      <div className="mt-8 bg-gray-900 p-6 rounded-lg">
        <ReactMarkdown>{roadmap}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Roadmap;
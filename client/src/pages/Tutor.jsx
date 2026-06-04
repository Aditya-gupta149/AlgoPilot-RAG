import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Tutor() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

const askAI = async () => {
  try {
    setLoading(true);

    const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/ai/ask`,
  { prompt }
);

    setResponse(res.data.response);

    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        AI DSA Tutor
      </h1>

      <textarea
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  className="w-full h-40 p-4 bg-gray-900 text-white border border-gray-600 rounded"
  placeholder="Ask any DSA question..."
/>

     <button
  onClick={askAI}
  className="bg-cyan-500 px-6 py-3 rounded mt-4"
>
  {loading ? "Thinking..." : "Ask AI"}
</button>

      <div className="mt-8 bg-gray-900 p-6 rounded-lg">
  <ReactMarkdown>
    {response}
  </ReactMarkdown>
</div>
    </div>
  );
}

export default Tutor;
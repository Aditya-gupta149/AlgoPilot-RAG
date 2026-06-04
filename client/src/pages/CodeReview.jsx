import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function CodeReview() {
  const [code, setCode] = useState("");
  const [response, setResponse] = useState("");

  const reviewCode = async () => {
    try {
      const prompt = `
Review this code and provide:
1. Errors
2. Time Complexity
3. Space Complexity
4. Optimization Suggestions

${code}
`;

      const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/ai/ask`,
  { prompt }
);

      setResponse(res.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        AI Code Reviewer
      </h1>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-60 p-4 bg-gray-900 text-white border border-gray-600 rounded"
        placeholder="Paste your C++ code here..."
      />

      <button
        onClick={reviewCode}
        className="bg-cyan-500 px-6 py-3 rounded mt-4"
      >
        Review Code
      </button>

      <div className="mt-8 bg-gray-900 p-6 rounded-lg">
        <ReactMarkdown>
          {response}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default CodeReview;
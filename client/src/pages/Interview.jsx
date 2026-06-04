import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Interview() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const generateQuestion = async () => {
    try {
     const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/ai/ask`,
        {
          prompt:
            "Generate one DSA interview question with no solution."
        }
      );

      setQuestion(res.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  const evaluateAnswer = async () => {
    try {
      const prompt = `
Interview Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer.
Give:
1. Score out of 10
2. Strengths
3. Weaknesses
4. Better Answer
`;

     const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/ai/ask`,
  { prompt }
);

      setFeedback(res.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        AI Mock Interview
      </h1>

      <button
        onClick={generateQuestion}
        className="bg-cyan-500 px-6 py-3 rounded"
      >
        Generate Question
      </button>

      <div className="mt-6 bg-gray-900 p-5 rounded">
        <ReactMarkdown>{question}</ReactMarkdown>
      </div>

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full h-40 p-4 bg-gray-900 text-white border border-gray-600 rounded mt-6"
        placeholder="Write your answer..."
      />

      <button
        onClick={evaluateAnswer}
        className="bg-green-500 px-6 py-3 rounded mt-4"
      >
        Evaluate Answer
      </button>

      <div className="mt-6 bg-gray-900 p-5 rounded">
        <ReactMarkdown>{feedback}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Interview;
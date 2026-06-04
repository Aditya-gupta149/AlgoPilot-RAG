function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-32 px-6">
      <h1 className="text-6xl font-bold mb-6">
        Your AI-Powered
        <span className="text-blue-500"> DSA Mentor</span>
      </h1>

      <p className="text-gray-400 text-xl max-w-3xl">
        Learn Data Structures & Algorithms with AI-generated explanations,
        hints, mock interviews, code reviews, and personalized practice.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700">
          Start Learning
        </button>

        <button className="border border-gray-700 px-6 py-3 rounded-xl">
          Practice Problems
        </button>
      </div>
    </div>
  );
}

export default Hero;
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <div className="grid md:grid-cols-3 gap-6 px-10 mt-24">
        <FeatureCard
          icon="🧠"
          title="AI Tutor"
          description="Get AI-powered explanations for DSA concepts and problems."
        />


        <FeatureCard
          icon="💻"
          title="Code Review"
          description="Analyze your code and receive optimization suggestions."
        />

        <FeatureCard
          icon="🎤"
          title="Mock Interview"
          description="Practice coding interviews with an AI interviewer."
        />
      </div>

        <Footer />
    </div>
  );
}

export default Home;
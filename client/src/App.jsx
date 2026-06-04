import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tutor from "./pages/Tutor";
import CodeReview from "./pages/CodeReview";
import Interview from "./pages/Interview";
import Roadmap from "./pages/Roadmap";
import Footer from "./components/Footer";
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/review" element={<CodeReview />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>

    
  );
}
<Footer />

export default App;
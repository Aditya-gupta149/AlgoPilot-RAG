import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/tutor">Tutor</Link>
      <Link to="/review">Review</Link>
      <Link to="/interview">Interview</Link>
      <Link to="/roadmap">Roadmap</Link>
    </nav>
  );
}

export default Navbar;
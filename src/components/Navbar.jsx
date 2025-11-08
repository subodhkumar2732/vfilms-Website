// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-peach">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold text-dark">
          <span className="text-accent">V</span>Films
        </div>
        <span className="text-sm text-gray-600 hidden md:inline">— Stories & Craft</span>
      </div>

      <ul className="hidden md:flex gap-8 text-dark font-medium">
        <li><Link to="/" className="hover:text-accent">Home</Link></li>
        <li><Link to="/services" className="hover:text-accent">Services</Link></li>
        <li><Link to="/about-team" className="hover:text-accent">Their Stories</Link></li>
        <li><Link to="/about-us" className="hover:text-accent">Our Story</Link></li>
        <li><Link to="/portfolio" className="hover:text-accent">Portfolio</Link></li>
      </ul>

      <div className="hidden md:block">
        <button className="bg-accent text-white px-4 py-2 rounded-full hover:bg-dark transition">
          Let’s Talk
        </button>
      </div>
    </nav>
  );
}

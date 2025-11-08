// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import AboutTeam from "./components/AboutTeam";
import Services from "./components/Services";
import FilmProduction from "./components/FilmProduction";
import Branding from "./components/Branding";
import ArtCuration from "./components/ArtCuration";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio"; // ✅ new import
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* ✅ Hero as main page */}
        <Route path="/" element={<Hero />} />
        <Route path="/hero" element={<Hero />} />

        {/* ✅ Contact nested under Hero */}
        <Route path="/hero/contact" element={<Contact />} />

        {/* ✅ Portfolio page */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Other pages */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-team" element={<AboutTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/film-production" element={<FilmProduction />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/art-curation" element={<ArtCuration />} />

        {/* Standalone contact route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

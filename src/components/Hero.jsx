import { Link } from "react-router-dom";
import Mandala from "../assets/mandala.jpg";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center gap-8 px-8 py-16 max-w-7xl mx-auto">
      <div className="flex-1 flex items-center justify-center relative">
        <img src={Mandala} alt="Mandala" className="w-80 h-80 object-contain opacity-90" />
        <h1 className="absolute text-5xl md:text-6xl font-serif font-semibold text-dark">
          <span className="text-accent">V</span>Films
        </h1>
      </div>

      <div className="flex-1 space-y-6 md:pr-8">
        <h2 className="text-3xl md:text-4xl font-serif italic leading-tight text-dark">
          Varnan is where stories find <br /> their voice and form
        </h2>
        <p className="text-accent font-medium">Films · Brands · Art</p>
        <p className="text-gray-700 max-w-md">
          Since 2009, V’s been telling stories — stories of people, their journeys,
          and the places that shape them. Every project begins by listening with
          intention.
        </p>

        <div className="flex items-center gap-4">
          <Link to="/services">
            <button className="bg-accent text-white px-6 py-2 rounded-full hover:bg-dark transition">
              View Work
            </button>
          </Link>

          {/* ✅ Correct link */}
          <Link to="/contact">
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

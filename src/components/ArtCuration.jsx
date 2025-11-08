// src/components/ArtCuration.jsx
import { Link } from "react-router-dom";
import ArtImage from "../assets/art-curation.jpg"; // ✅ correct import path

export default function ArtCuration() {
  return (
    <section className="bg-peach min-h-screen flex flex-col justify-center items-center px-8 py-20">
      {/* Quote */}
      <p className="text-center text-xl md:text-2xl font-serif italic mb-10 text-dark">
        “V take art where it belongs, to the people.” – Vernita Verma
      </p>

      {/* Layout */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* ✅ Correct image reference */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={ArtImage}
            alt="Art Curation"
            className="w-80 h-96 object-cover rounded-lg shadow-lg border border-gray-200"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-800 leading-relaxed">
          <p className="mb-4">
            Art isn’t meant to sit on distant walls – it’s meant to breathe, to travel, to belong.
            Through every festival, every performance, and every gathering, we help stories find
            their stage and their people.
          </p>
          <p className="mb-2 font-semibold text-dark">V curates:</p>
          <ul className="list-disc list-inside">
            <li>Art Festivals</li>
            <li>Live Performances</li>
            <li>Community Events</li>
            <li>Cultural Storytelling</li>
          </ul>

          {/* Back Button */}
          <Link
            to="/services"
            className="inline-block mt-6 text-accent font-medium hover:underline transition"
          >
            ← Back
          </Link>
        </div>
      </div>
    </section>
  );
}

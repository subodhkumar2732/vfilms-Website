// src/components/Branding.jsx
import { Link } from "react-router-dom";
import BrandingImage from "../assets/branding-details.jpg"; // ✅ import image correctly

export default function Branding() {
  return (
    <section className="bg-peach min-h-screen flex flex-col justify-center items-center px-8 py-20">
      {/* Quote */}
      <p className="text-center text-xl md:text-2xl font-serif italic mb-10 text-dark">
        “A brand is a voice, and a product is a souvenir.” – Lisa Gansky
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* ✅ Proper imported image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={BrandingImage}
            alt="Branding"
            className="w-80 h-96 object-cover rounded-lg shadow-lg border border-gray-200"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-800 leading-relaxed">
          <p className="mb-4">
            A brand isn’t just what you see – it’s what you remember, what you
            carry home, and what you trust.
          </p>
          <p className="mb-2 font-semibold text-dark">V creates:</p>
          <ul className="list-disc list-inside">
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
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

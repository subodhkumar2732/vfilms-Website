// src/components/Services.jsx
import { Link } from "react-router-dom";
import film1 from "../assets/film1.jpg";
import branding from "../assets/branding.jpg";
import art from "../assets/art.jpg";

export default function Services() {
  const services = [
    { title: "Film Production", img: film1, link: "/services/film-production" },
    { title: "Branding", img: branding, link: "/services/branding" },
    { title: "Art Curation", img: art, link: "/services/art-curation" },
  ];

  return (
    <section className="bg-peach min-h-screen flex flex-col justify-center items-center px-8 py-20">
      <div className="text-2xl md:text-3xl font-serif italic text-center mb-12">
        The storyboard reveals the breadth of our craft.
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition w-72 relative"
          >
            <img src={s.img} alt={s.title} className="w-full h-80 object-cover" />
            <div className="p-4 text-center text-dark font-medium">{s.title}</div>
            <Link to={s.link} className="absolute inset-0 z-10" />
          </div>
        ))}
      </div>
    </section>
  );
}

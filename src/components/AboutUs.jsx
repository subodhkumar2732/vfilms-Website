// src/components/AboutUs.jsx
import tedLogo from "../assets/ted-logo.jpg";
import cocaColaLogo from "../assets/cocacola-logo.jpg";
import arionLogo from "../assets/arion-logo.jpg";

export default function AboutUs() {
  return (
    <section className="bg-peach min-h-screen flex flex-col justify-center items-center px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl">
        {/* Left */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-serif text-dark italic">
            A montage of familiar faces and names.
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-md">
            Some stories come from the biggest names. Others begin with bold,
            rising voices. We’ve been fortunate to walk alongside both –
            listening, creating, and building stories that matter.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mt-6">
            <div className="bg-[#fff9f5] shadow-md p-4 text-center w-32 rotate-[-3deg]">
              <p className="text-2xl font-bold text-dark">85+</p>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
            <div className="bg-[#fff9f5] shadow-md p-4 text-center w-32 rotate-[3deg] border-2 border-yellow-400">
              <p className="text-2xl font-bold text-dark">50+</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-[#fff9f5] shadow-md p-4 text-center w-32 rotate-[-2deg]">
              <p className="text-2xl font-bold text-dark">10+</p>
              <p className="text-sm text-gray-600">Experts Team</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 text-right">
          <p className="text-2xl italic font-serif text-dark leading-snug">
            Every project is more than just a brief – it’s a new chapter waiting
            to be written.
            <br />
            Together, we’ve crafted tales that inspire, connect, and endure.
          </p>

          {/* Logos */}
          <div className="flex justify-end mt-6 gap-4 opacity-80">
            <img src={tedLogo} alt="TED" className="h-6" />
            <img src={cocaColaLogo} alt="CocaCola" className="h-6" />
            <img src={arionLogo} alt="Arion" className="h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/AboutTeam.jsx
import teamSilhouettes from "../assets/team-silhouettes.jpg";

export default function AboutTeam() {
  return (
    <section className="bg-peach min-h-screen flex flex-col justify-center items-center px-8 py-20 relative overflow-hidden">
      {/* Logo top left */}
      <div className="absolute top-10 left-10 text-3xl font-bold text-dark">
        <span className="text-accent">V</span>Films
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Left note */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="bg-[#fff9f5] p-6 shadow-lg w-80 rotate-[-5deg] border border-gray-300">
            <p className="text-sm text-gray-800 leading-relaxed italic">
              Some craft films. Some build brands. Some curate art. We bring it
              all together – a collective of storytellers driven by one belief:
              every project deserves to be more than just a message; it should
              become a masterpiece.
              <br />
              <br />
              From first spark to final frame, from raw ideas to timeless
              visuals – we shape stories that stay with you.
            </p>
          </div>
          <div className="absolute top-0 right-8 w-6 h-6 bg-gray-400 rounded-full"></div>
        </div>

        {/* Right silhouettes */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={teamSilhouettes}
            alt="Team silhouettes"
            className="w-full max-w-md"
          />
          <p className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-dark italic text-sm">
            Film Makers
          </p>
          <p className="absolute top-[50%] left-[10%] text-dark italic text-sm">
            Branding Experts
          </p>
          <p className="absolute top-[40%] right-[5%] text-dark italic text-sm">
            Art Curators
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-16">
        <p className="text-lg text-dark font-serif italic">
          Take a closer look at the stories V bring to life.
        </p>
        <button className="mt-5 bg-accent text-white px-6 py-2 rounded-full hover:bg-dark transition">
          View Portfolio
        </button>
      </div>
    </section>
  );
}

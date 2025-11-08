import FilmImage from "../assets/film-production.jpg";

export default function FilmProduction() {
  return (
    <section className="bg-peach min-h-screen flex flex-col justify-center items-center px-8 py-20">
      <h2 className="text-2xl md:text-3xl font-serif italic text-dark mb-8 text-center">
        “Filmmaking is a chance to live many lifetimes.” – Robert Altman
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        {/* ✅ Imported image works reliably */}
        <div className="bg-white shadow-md rounded-md overflow-hidden w-80">
          <img
            src={FilmImage}
            alt="Film Production"
            className="w-full h-60 object-cover"
          />
          <p className="text-center py-2 font-medium text-dark">
            Film Production
          </p>
        </div>

        <div className="text-gray-700 max-w-md">
          <p className="mb-4">
            Who says films are just an escape? We see them as a way to live many
            lives – to feel, to explore, and to tell stories that stay.
          </p>
          <p className="font-semibold text-dark mb-2">V crafts:</p>
          <ul className="list-disc list-inside">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>

          <button
            onClick={() => window.history.back()}
            className="mt-6 text-accent hover:underline"
          >
            ← Back
          </button>
        </div>
      </div>
    </section>
  );
}

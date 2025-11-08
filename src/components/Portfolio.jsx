export default function Portfolio() {
  return (
    <section className="bg-peach min-h-screen flex flex-col justify-center items-center px-8 py-20 text-center">
      <h2 className="text-3xl font-serif italic mb-3">The Highlight Reel</h2>
      <p className="text-gray-700 mb-10">Watch the magic we’ve captured.</p>

      <div className="relative border-8 border-gray-300 rounded-xl overflow-hidden shadow-lg max-w-3xl">
        <iframe
          className="w-[560px] h-[315px]"
          src="https://www.youtube.com/embed/your-video-id"
          title="V Films Showreel"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

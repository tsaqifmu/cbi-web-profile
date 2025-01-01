// components/HeroSection.jsx
"use client";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-500`}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Multi-step Blur Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-96">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent" />
        <div className="absolute inset-0 opacity-0 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-3/4 opacity-30 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-2/4 opacity-60 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 opacity-100 backdrop-blur-sm" />
      </div>

      {/* Content Container */}
      <div className="absolute bottom-0 z-10 flex w-full flex-col items-end gap-4 p-16 pb-24 text-white md:flex-row md:justify-between">
        {/* Left Content (Welcome Text) */}
        <div>
          <h1 className="max-w-xl text-5xl font-bold leading-tight md:text-6xl">
            Solusi Bioteknologi Terintegrasi untuk Masa Depan
          </h1>
        </div>

        {/* Right Content (Description and Button) */}
        <div>
          <p className="mb-8 ml-auto max-w-xl text-lg md:text-xl">
            Temukan bagaimana solusi bioteknologi kami dapat mengatasi
            permasalahan global di industri pertanian, peternakan, dan
            perikanan.
          </p>
          <button className="rounded-lg bg-green-500 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-green-600">
            Info selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

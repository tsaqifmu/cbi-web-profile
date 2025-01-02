// components/HeroSection.jsx
"use client";

import { ArrowRight } from "lucide-react";

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
      <div className="absolute bottom-0 z-10 flex w-full flex-col items-end gap-4 px-8 pb-24 text-white md:flex-row md:justify-between md:px-16">
        {/* Left Content (Welcome Text) */}
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl">
            <span className="font-bold">Solusi</span>
            <span className="block md:mt-2">
              <span className="font-bold">Bioteknologi </span>
              Terintegrasi
            </span>
            <span className="block md:mt-2">
              untuk <span className="font-bold">Masa Depan</span>
            </span>
          </h1>
        </div>

        {/* Right Content (Description and Button) */}
        <div className="flex flex-col gap-6">
          <p className="ml-auto mt-4 max-w-2xl text-lg md:mt-0 md:text-lg">
            Temukan bagaimana solusi bioteknologi kami dapat mengatasi
            permasalahan global di industri pertanian, peternakan, dan
            perikanan.
          </p>
          <button className="flex w-fit items-center gap-4 rounded-lg bg-[#009933] px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-green-700">
            <span>Info Selengkapnya</span> <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

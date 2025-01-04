// components/HeroSection.jsx
"use client";

import DescriptionResponsive from "./DescriptionResponsive";
import LinkGreen from "./LinkGreen";

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
      <div className="absolute bottom-0 left-0 right-0 h-96 backdrop-blur-lg [mask:linear-gradient(transparent,white,white)]"></div>

      {/* Content Container */}
      <div className="absolute bottom-0 left-1/2 z-10 mx-auto flex w-full max-w-7xl -translate-x-1/2 flex-col items-end gap-4 px-6 pb-24 text-white md:flex-row md:justify-between lg:bottom-6 lg:px-8 xl:px-0">
        {/* Left Content (Welcome Text) */}
        <div className="w-full">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl">
            <span className="font-bold">Solusi</span>
            <span className="block xl:mt-2">
              <span className="font-bold">Bioteknologi </span>
              Terintegrasi
            </span>
            <span className="block xl:mt-2">
              untuk <span className="font-bold">Masa Depan</span>
            </span>
          </h1>
        </div>

        {/* Right Content (Description and Button) */}
        <div className="flex flex-col gap-6">
          <DescriptionResponsive className="ml-auto mt-4 md:mt-0 lg:max-w-3xl">
            Temukan bagaimana solusi bioteknologi kami dapat mengatasi
            permasalahan global di industri pertanian, peternakan, dan
            perikanan.
          </DescriptionResponsive>

          <LinkGreen href="/">Info Selengkapnya</LinkGreen>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

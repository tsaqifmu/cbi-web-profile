import Image from "next/image";
import React from "react";

const HeroSectionAboutUs = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src={"/hero-tentang-kami.jpg"}
        alt="hero banner cbi"
        width={1440}
        height={500}
        className="h-full w-full object-cover object-center"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-35" />

      {/* Multi-step Blur Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-96 backdrop-blur-lg [mask:linear-gradient(transparent,white,white)]" />

      <div className="absolute bottom-[30%] left-1/2 z-10 w-full -translate-x-1/2 translate-y-1/2 pt-14">
        <h1 className="text-center text-white">
          Perusahaan Bioteknologi <br /> Terkemuka di Indonesia
        </h1>
      </div>
    </section>
  );
};

export default HeroSectionAboutUs;

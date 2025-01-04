"use client";

import Image from "next/image";
import React from "react";

const HeroSectionAboutUs = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src={"/hero-about-us.png"}
        alt="hero banner cbi"
        width={1440}
        height={500}
        className="h-full w-full object-cover object-center"
      />
      <div className="font-inter absolute bottom-[40%] left-1/2 z-10 -translate-x-1/2 translate-y-1/2 pt-14 text-white lg:bottom-[35%]">
        <div className="flex h-full flex-col items-center justify-center space-y-3">
          <h1 className="w-3/4 text-center text-[56px] font-bold">
            Perusahaan Bioteknologi Terkemuka di Indonesia
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAboutUs;

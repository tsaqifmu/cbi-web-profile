import React from "react";
import HeroSectionGeneral from "../common/HeroSectionGeneral";

const HeroSection = () => {
  return (
    <HeroSectionGeneral
      imgUrl="/media-hero.jpeg"
      category="Media & Layanan"
      title={
        <h1 className="text-center text-3xl font-bold text-white lg:text-5xl xl:text-[56px]">
          Berita
        </h1>
      }
    />
  );
};

export default HeroSection;

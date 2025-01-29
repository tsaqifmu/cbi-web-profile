import React from "react";
import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";

const HeroSection = () => {
  return (
    <HeroSectionGeneral
      imgUrl="/document.jpeg"
      category={"Media & Informasi"}
      title={
        <h1 className="text-center text-3xl font-bold text-white lg:text-5xl xl:text-[56px]">
          Brosur & Dokumen
        </h1>
      }
    />
  );
};

export default HeroSection;

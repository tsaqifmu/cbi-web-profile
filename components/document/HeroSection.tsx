import React from "react";

import { Headline } from "@/types/responseTypes/headline";
import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";

const HeroSection = ({ data }: { data: Headline }) => {
  return (
    <HeroSectionGeneral
      imgUrl="/document.jpeg"
      category={data.title}
      title={
        <h1 className="text-center text-3xl font-bold text-white lg:text-5xl xl:text-[56px]">
          {data.description}
        </h1>
      }
    />
  );
};

export default HeroSection;

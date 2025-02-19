import { FC } from "react";
import HeroSectionGeneral from "../common/HeroSectionGeneral";
import { Headline } from "@/types/responseTypes/headline";
import { getImageUrl } from "@/utils/getImageUrl";

interface HeroSectionProps {
  headline: Headline;
}

const HeroSection: FC<HeroSectionProps> = ({ headline }) => {
  return (
    <HeroSectionGeneral
      imgUrl={getImageUrl(headline.image?.url)}
      category={headline.description}
      title={
        <h1 className="text-center text-3xl font-bold text-white lg:text-5xl xl:text-[56px]">
          {headline.title}
        </h1>
      }
    />
  );
};

export default HeroSection;

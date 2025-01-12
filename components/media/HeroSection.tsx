import { FC } from "react";
import HeroSectionGeneral from "../common/HeroSectionGeneral";

interface HeroSectionProps {
  category: string;
  title: string;
}

const HeroSection: FC<HeroSectionProps> = ({ category, title }) => {
  return (
    <HeroSectionGeneral
      imgUrl="/media-hero.jpeg"
      category={category}
      title={
        <h1 className="text-center text-3xl font-bold text-white lg:text-5xl xl:text-[56px]">
          {title}
        </h1>
      }
    />
  );
};

export default HeroSection;

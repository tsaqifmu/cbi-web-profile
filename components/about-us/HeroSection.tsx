import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";
import { HeadlineAboutUs } from "@/types/responseTypes/aboutUsData";

const HeroSectionAboutUs = ({ headline }: { headline: HeadlineAboutUs }) => {
  return (
    <HeroSectionGeneral
      imgUrl="/hero-tentang-kami.jpg"
      title={<h1 className="text-center text-white">{headline.Title}</h1>}
    />
  );
};

export default HeroSectionAboutUs;

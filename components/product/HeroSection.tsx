import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";
import { Headline } from "@/types/responseTypes/dashboard/headline";

const HeroSection = ({ data }: { data: Headline }) => {
  return (
    <HeroSectionGeneral
      imgUrl="/img-products-and-services-hero.jpeg"
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

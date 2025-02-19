import Image from "next/image";

import ContainerSection from "@/components/layout/container";
import { AboutUs } from "@/types/responseTypes/aboutUsData";
import { getImageUrl } from "@/utils/getImageUrl";

const AboutUsSection = ({ aboutUs }: { aboutUs: AboutUs }) => {
  return (
    <section>
      <ContainerSection className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-x-52">
          <h2 className="text-nowrap">{aboutUs.Title}</h2>
          <p>{aboutUs.description}</p>
        </div>
        <Image
          src={getImageUrl(aboutUs?.image?.url)}
          alt={aboutUs.image.alternativeText ?? "about us"}
          width={aboutUs?.image?.width ?? 400}
          height={aboutUs?.image?.height ?? 400}
          className="h-60 rounded-2xl object-cover object-center lg:h-[25rem]"
        />
      </ContainerSection>
    </section>
  );
};

export default AboutUsSection;

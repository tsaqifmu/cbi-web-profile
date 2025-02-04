import Image from "next/image";

import { getImageUrl } from "@/utils/image";
import { WhySection as WhySectionProps } from "@/types/responseTypes/dashboard/whySection";

import ContainerSection from "@/components/layout/container";

const WhySection = async ({ data }: { data: WhySectionProps }) => {
  try {
    return (
      <section className="w-full bg-[#eee]">
        <ContainerSection className="flex flex-col items-center justify-between gap-8 md:flex-row xl:gap-16">
          {/* Text */}
          <div className="flex flex-1 flex-col gap-y-6">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src={getImageUrl(data?.image?.url)}
              alt={
                data?.image.alternativeText ??
                "image of farmers and rice fields"
              }
              width={data.image.width}
              height={data.image.height}
              className="h-44 flex-1 rounded-3xl object-cover md:h-[22.25rem] lg:h-[28.5rem] xl:h-96"
            />
          </div>
        </ContainerSection>
      </section>
    );
  } catch (e) {
    console.error(e);
  }
};

export default WhySection;

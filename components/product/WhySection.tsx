import Image from "next/image";

import ContainerSection from "@/components/layout/container";
import { WhySection as WhySectionType } from "@/types/responseTypes/dashboard/whySection";

const WhySection = ({ data }: { data: WhySectionType }) => {
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
            src={process.env.NEXT_PUBLIC_URL_API + data.image.url}
            alt="Petani dan sawah"
            width={626}
            height={406}
            className="h-44 rounded-3xl object-cover md:h-[356px] lg:h-[456px] xl:h-96"
          />
        </div>
      </ContainerSection>
    </section>
  );
};

export default WhySection;

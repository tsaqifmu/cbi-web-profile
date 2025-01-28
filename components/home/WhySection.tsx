import Image from "next/image";

import { ApiPath, apiRequest } from "@/utils/apiClient";

import ContainerSection from "@/components/layout/container";

const WhySection = async () => {
  const { data } = await apiRequest({
    path: ApiPath.DASHBOARD,
    queryParams: { "populate[whySection][populate]": "image" },
  });

  const imageUrl = `${process.env.NEXT_PUBLIC_URL_API}${data.whySection.image.url}`;

  return (
    <section className="w-full bg-[#eee]">
      <ContainerSection className="flex flex-col items-center justify-between gap-8 md:flex-row xl:gap-16">
        {/* Text */}
        <div className="flex flex-1 flex-col gap-y-6">
          <h2>{data.whySection.title}</h2>
          <p>{data.whySection.description}</p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src={imageUrl}
            alt="Petani dan sawah"
            width={626}
            height={406}
            className="h-44 flex-1 rounded-3xl object-cover md:h-[22.25rem] lg:h-[28.5rem] xl:h-96"
          />
        </div>
      </ContainerSection>
    </section>
  );
};

export default WhySection;

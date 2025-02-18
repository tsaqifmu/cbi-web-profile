import Image from "next/image";

import LinkGreen from "../home/LinkGreen";
import ContainerSection from "../layout/container";
import { BannerCTA } from "@/types/responseTypes/bannerCTA";

const BannerContactSection = ({ data }: { data: BannerCTA }) => {
  return (
    <section className="bg-[#EEE]">
      <ContainerSection>
        <div className="relative min-h-[20rem] w-full overflow-hidden rounded-3xl lg:min-h-[22rem] xl:min-h-[25rem]">
          {/* Background image */}
          <Image
            src={process.env.NEXT_PUBLIC_URL_API + data.image.url}
            alt={data.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            priority
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-[#171717]/80" />

          {/* Content */}
          <div className="absolute z-20 flex h-full w-full flex-col items-start justify-between px-10 py-10 lg:flex-row lg:items-center lg:px-24">
            <div className="flex flex-1 items-center">
              <h1 className="text-3xl leading-snug text-white lg:max-w-xl lg:text-4xl">
                {data.title}
              </h1>
            </div>
            <div className="mt-4 flex items-center justify-end md:me-24 md:mt-0">
              <LinkGreen href="/contact" withArrow={false}>
                {data.ctaText}
              </LinkGreen>
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default BannerContactSection;

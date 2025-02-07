import { getImageUrl } from "@/utils/image";

import CTASection from "@/components/common/CTA";
import ContainerSection from "@/components/layout/container";

import { BannerContactSection } from "@/types/responseTypes/bannerContact";

const CTAContent = ({ title }: { title: string }) => (
  <div className="max-w-[820px] space-y-6">
    <h1 className="text-[#FDFDFD] lg:text-[40px] lg:leading-[50px] xl:text-5xl/[60px]">
      {title}
    </h1>
  </div>
);

const CTAMediaSection = ({ data }: { data: BannerContactSection }) => {
  return (
    <section className="h-full w-full bg-[#EEE]">
      <ContainerSection className="h-full">
        <CTASection
          backgroundImage={getImageUrl(data.image.url)}
          content={<CTAContent title={data.title} />}
          buttonText={data.ctaText}
          buttonHref="/contact"
        />
      </ContainerSection>
    </section>
  );
};

export default CTAMediaSection;

import CTASection from "@/components/common/CTA";
import ContainerSection from "@/components/layout/container";
import { BannerCTA } from "@/types/responseTypes/bannerCTA";
import { getImageUrl } from "@/utils/getImageUrl";

const CTAContent = ({
  title,
  description,
}: {
  title: string;
  description: string | undefined;
}) => (
  <div className="space-y-6 md:w-2/3">
    <h1 className="text-[2rem] font-bold text-[#FDFDFD] lg:text-[2.5rem] xl:text-[3rem]">
      {title}
    </h1>
    <p className="text-[#FDFDFD] lg:text-[1.125rem]">{description}</p>
  </div>
);

const BannerCareerSection = ({ bannerCTA }: { bannerCTA: BannerCTA }) => {
  return (
    <section className="h-full w-full bg-[#EEE]">
      <ContainerSection className="h-full">
        <CTASection
          backgroundImage={getImageUrl(bannerCTA.image?.url)}
          content={
            <CTAContent
              title={bannerCTA.title}
              description={bannerCTA.description}
            />
          }
          buttonText={bannerCTA.ctaText}
          buttonHref="/career"
        />
      </ContainerSection>
    </section>
  );
};

export default BannerCareerSection;

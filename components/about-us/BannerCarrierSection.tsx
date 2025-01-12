import CTASection from "@/components/common/CTA";
import ContainerSection from "@/components/layout/container";

const CTAContent = () => (
  <div className="space-y-6 md:w-2/3">
    <h1 className="text-[2rem] font-bold text-[#FDFDFD] lg:text-[2.5rem] xl:text-[3rem]">
      Meniti Karir Bersama Kami
    </h1>
    <p className="text-[#FDFDFD] lg:text-[1.125rem]">
      PT Centra Biotech Indonesia berkomitmen membangun Indonesia melalui
      inovasi bioteknologi. Bergabung dengan tim profesional dan andal, bersama
      memberi dampak positif untuk masa depan.
    </p>
  </div>
);

const BannerCareerSection = () => {
  return (
    <section className="h-full w-full bg-[#EEE]">
      <ContainerSection className="h-full">
        <CTASection
          backgroundImage="/CTA-tentang-kami.png"
          content={<CTAContent />}
          buttonText="Hubungi Kami"
          buttonHref="/career"
        />
      </ContainerSection>
    </section>
  );
};

export default BannerCareerSection;

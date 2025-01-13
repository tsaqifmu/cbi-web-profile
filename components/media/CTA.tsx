import ContainerSection from "../layout/container";
import CTASection from "../common/CTA";

const CTAContent = () => (
  <div className="space-y-6 md:w-2/3">
    <h1 className="text-[2rem] font-normal text-[#FDFDFD] lg:text-[2.5rem] xl:text-[3rem]">
      Siap{" "}
      <span className="font-bold">
        Tingkatkan Kualitas Anda dengan Produk Bioteknologi Kami?
      </span>
    </h1>
  </div>
);

const CTAMediaSection = () => {
  return (
    <section className="h-full w-full bg-[#EEE]">
      <ContainerSection className="h-full">
        <CTASection
          backgroundImage="/cta-media.jpeg"
          content={<CTAContent />}
          buttonText="Hubungi Kami"
          buttonHref="/karir"
        />
      </ContainerSection>
    </section>
  );
};

export default CTAMediaSection;

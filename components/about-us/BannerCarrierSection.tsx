import Image from "next/image";

import LinkGreen from "@/components/home/LinkGreen";
import ContainerSection from "@/components/layout/container";

const CTAImage = () => (
  <Image
    src={"/img-contact-banner-bg.png"}
    alt="CTA image"
    width={1312}
    height={400}
    className="h-[327px] w-full overflow-hidden rounded-lg object-cover object-center brightness-50"
  />
);

const CTAContent = () => (
  <div className="z-10 bg-red-300">
    <div className="space-y-6">
      <h2 className="text-[#FDFDFD]">Meniti Karir Bersama Kami</h2>
      <p className="text-[#FDFDFD]">
        PT Centra Biotech Indonesia berkomitmen membangun Indonesia melalui
        inovasi bioteknologi. Bergabung dengan tim profesional dan andal,
        bersama memberi dampak positif untuk masa depan.
      </p>
    </div>
    <div className="mt-6">
      <LinkGreen href="/career" withArrow={false}>
        Hubungi Kami
      </LinkGreen>
    </div>
  </div>
);

const BannerCareerSection = () => {
  return (
    <section className="h-full w-full bg-[#EEE]">
      <ContainerSection className="h-full">
        <div className="relative flex h-[25rem] w-full items-center justify-center overflow-hidden rounded-3xl bg-cover bg-bottom bg-no-repeat md:h-[22.5rem] xl:h-[25rem]">
          {/* Background mage */}
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-right-top bg-no-repeat"
            style={{
              backgroundImage: "url(CTA-tentang-kami.png)",
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 z-10 bg-[#171717]/80" />

          {/* Content */}
          <div className="absolute z-20 xl:p-12">
            <div className="h-full items-center justify-between p-12 md:flex">
              <div className="space-y-6 md:w-2/3">
                <h1 className="text-[2rem] font-bold text-[#FDFDFD] lg:text-[2.5rem] xl:text-[3rem]">
                  Meniti Karir Bersama Kami
                </h1>
                <p className="text-[#FDFDFD] lg:text-[1.125rem]">
                  PT Centra Biotech Indonesia berkomitmen membangun Indonesia
                  melalui inovasi bioteknologi. Bergabung dengan tim profesional
                  dan andal, bersama memberi dampak positif untuk masa depan.
                </p>
              </div>
              <div className="mt-6">
                <LinkGreen href="/career" withArrow={false}>
                  Hubungi Kami
                </LinkGreen>
              </div>
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default BannerCareerSection;

import LinkGreen from "@/components/home/LinkGreen";
import ContainerSection from "@/components/layout/container";

const BannerContactSection = () => {
  return (
    <section className="bg-[#EEE]">
      <ContainerSection>
        <div className="relative min-h-[22rem] w-full overflow-hidden rounded-3xl bg-cover bg-bottom bg-no-repeat xl:min-h-[25rem]">
          {/* Background dengan filter */}
          <div
            className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
            style={{
              backgroundImage: "url(/img-product-agriculture-banner.png)",
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-[#171717]/80" />

          {/* Konten */}
          <div className="absolute z-20 flex h-full w-full flex-col items-start justify-between p-8 md:flex-row md:items-center lg:px-24 lg:py-10">
            <div className="flex flex-1 items-center">
              <h1 className="max-w-[16rem] text-[32px] font-normal !leading-tight text-white md:max-w-sm lg:text-[40px] xl:max-w-4xl xl:text-5xl">
                Siap
                <span className="font-bold">
                  {" "}
                  Tingkatkan Hasil Panen
                </span> Anda <br className="lg:hidden" />
                dengan
                <span className="font-bold"> Produk Bioteknologi kami?</span>
              </h1>
            </div>
            <div className="mt-4 flex items-center justify-end md:mt-0">
              <LinkGreen href="/" withArrow={false}>
                Hubungi Kami
              </LinkGreen>
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default BannerContactSection;

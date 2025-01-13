import ContainerSection from "../layout/container";
import LinkGreen from "./LinkGreen";

const BannerContactSection = () => {
  return (
    <section className="bg-[#EEE]">
      <ContainerSection>
        <div className="relative min-h-[20rem] w-full overflow-hidden rounded-3xl bg-cover bg-bottom bg-no-repeat lg:min-h-[22rem] xl:min-h-[25rem]">
          {/* Background dengan filter */}
          <div
            className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
            style={{
              backgroundImage: "url(img-contact-banner-bg.png)",
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-[#171717]/80" />

          {/* Konten */}
          <div className="absolute z-20 flex h-full w-full flex-col items-start justify-between px-10 py-10 lg:flex-row lg:items-center lg:px-24">
            <div className="flex flex-1 items-center">
              <h1 className="text-3xl leading-snug text-white lg:text-4xl">
                Dapatkan
                <br />
                <span className="font-bold">solusi Bioteknologi</span>
                <br />
                sesuai
                <span className="font-bold"> kebutuhan Anda</span>
              </h1>
            </div>
            <div className="mt-4 flex items-center justify-end md:me-24 md:mt-0">
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

import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";
import ContainerSection from "@/components/layout/container";
import AgricultureProductsSection from "@/components/product/agriculture/AgricultureProductsSection";
import BannerContactSection from "@/components/product/agriculture/BannerContactSection";

const Agriculture = () => {
  return (
    <>
      <HeroSectionGeneral
        imgUrl="/img-agriculture-hero.png"
        category="Pertanian"
        title={
          <h1 className="p-4 text-center text-3xl font-bold !leading-tight text-white lg:text-5xl xl:text-[56px]">
            Tingkatkan <br className="md:hidden" />
            Hasil Panen{" "}
            <span className="font-normal">
              Anda dengan <br className="md:hidden" />
            </span>
            Produk Bioteknologi Berkualitas Tinggi
          </h1>
        }
      />

      <section className="bg-[#F4F4F4]">
        <ContainerSection>
          <div className="flex flex-col gap-6 rounded-3xl bg-[#00802B] p-8 lg:flex-row lg:items-center lg:gap-12 lg:p-16">
            <h1 className="text-3xl text-white lg:text-[40px] xl:w-[46rem] xl:text-5xl">
              Tentang <br />
              Produk Pertanian
            </h1>
            <p className="w-fit text-white">
              Produk Pertanian merupakan salah satu solusi yang kami hadirkan
              untuk membantu industri pertanian dalam meningkatkan kualitas dan
              kuantitas hasil panen. Dengan dukungan riset yang berkelanjutan
              oleh tim profesional di bidang pertanian, banyak produk-produk
              berkualitas yang kami hasilkan dan terbukti dapat membantu dalam
              mengatasi berbagai tantangan.
            </p>
          </div>
        </ContainerSection>
      </section>

      <section>
        <ContainerSection>
          <div>
            <h1>
              Mengapa memilih <br />
              Produk Pertanian kami?
            </h1>
            <div className="mt-8 flex flex-col gap-8 lg:mt-24 lg:flex-row">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group flex flex-col rounded-lg px-8 py-12 shadow-md transition duration-300 hover:bg-[#C46617]"
                >
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#C46617] group-hover:text-white lg:h-12 lg:w-12"
                  >
                    <path
                      d="M40 26V16H30"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40 16L30 26C28.234 27.766 27.352 28.648 26.27 28.746C26.09 28.762 25.91 28.762 25.73 28.746C24.648 28.646 23.766 27.766 22 26C20.234 24.234 19.352 23.352 18.27 23.254C18.0904 23.2378 17.9096 23.2378 17.73 23.254C16.648 23.354 15.766 24.234 14 26L8 32"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mt-8 text-sm text-[#666] !transition-none group-hover:text-white lg:text-base">
                    Berpengalaman lebih dari 14 tahun menyediakan berbagai
                    solusi pertanian ramah lingkungan, salah satunya adalah
                    pupuk hayati.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ContainerSection>
      </section>

      <AgricultureProductsSection />

      <BannerContactSection />
    </>
  );
};

export default Agriculture;

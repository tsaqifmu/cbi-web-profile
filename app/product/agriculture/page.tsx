import CustomSvgIcon from "@/components/common/CustomSvgIcon";
import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";
import ContainerSection from "@/components/layout/container";
import AgricultureProductsSection from "@/components/product/agriculture/AgricultureProductsSection";
import BannerContactSection from "@/components/product/agriculture/BannerContactSection";
import { ApiPath, apiRequest } from "@/utils/apiClient";
import { getImageUrl } from "@/utils/image";
import { ProductAgricultureResponse } from "@/utils/types";

const Agriculture = async () => {
  try {
    const { data } = await apiRequest<ProductAgricultureResponse>({
      path: ApiPath.PRODUCT_AGRICULTURE,
    });

    return (
      <>
        <HeroSectionGeneral
          imgUrl="/img-agriculture-hero.png"
          category={data.headline.title}
          title={
            <h1 className="p-4 text-center text-3xl font-bold !leading-tight text-white lg:text-5xl xl:text-[56px]">
              {data.headline.description}
            </h1>
          }
        />

        <section className="bg-[#F4F4F4]">
          <ContainerSection>
            <div className="flex flex-col gap-6 rounded-3xl bg-[#00802B] p-8 md:flex-row md:items-center lg:gap-12 lg:p-16">
              <h1 className="max-w-[10rem] text-3xl text-white lg:max-w-none lg:text-[40px]/[48px] xl:w-[46rem] xl:text-5xl/[58px]">
                {data.aboutSection.title}
              </h1>
              <p className="w-fit text-white">
                {data.aboutSection.description}
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
              <div className="mt-8 flex flex-col gap-8 md:flex-row lg:mt-24">
                <div className="group flex flex-1 flex-col rounded-lg px-8 py-6 shadow-md transition duration-300 hover:bg-[#C46617] lg:py-12">
                  <CustomSvgIcon
                    url={getImageUrl(data?.whySection?.why1?.image?.url)}
                  />
                  <p className="mt-6 text-sm text-[#666] group-hover:text-white lg:mt-8 lg:text-base">
                    {data.whySection.why1.description}
                  </p>
                </div>

                <div className="group flex flex-1 flex-col rounded-lg px-8 py-6 shadow-md transition-all duration-300 hover:bg-[#C46617] lg:py-12">
                  <CustomSvgIcon
                    url={
                      process.env.NEXT_PUBLIC_URL_API +
                      data.whySection.why2.image.url
                    }
                  />
                  <p className="mt-6 text-sm text-neutral-600 transition-colors duration-300 group-hover:text-white lg:mt-8 lg:text-base">
                    {data.whySection.why2.description}
                  </p>
                </div>

                <div className="group flex flex-1 flex-col rounded-lg px-8 py-6 shadow-md transition-all duration-300 hover:bg-[#C46617] lg:py-12">
                  <CustomSvgIcon
                    url={
                      process.env.NEXT_PUBLIC_URL_API +
                      data.whySection.why3.image.url
                    }
                  />
                  <p className="mt-6 text-sm text-neutral-600 transition-colors duration-300 group-hover:text-white lg:mt-8 lg:text-base">
                    {data.whySection.why3.description}
                  </p>
                </div>
              </div>
            </div>
          </ContainerSection>
        </section>

        <AgricultureProductsSection
          productCategories={data.productCategoriesSection}
        />

        <BannerContactSection />
      </>
    );
  } catch (e) {
    console.error(e);
  }
};

export default Agriculture;

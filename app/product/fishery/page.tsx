import { ProductFisheryResponse } from "@/types/responseTypes";
import { Metadata } from "next";

import { getImageUrl } from "@/utils/getImageUrl";
import { ApiPath, apiRequest } from "@/utils/apiClient";
import { getServicesQuery } from "@/utils/queries/product/servicesQuery";

import Breadcrumb from "@/components/common/BreadScrumb";
import ContainerSection from "@/components/layout/container";
import CustomSvgIcon from "@/components/common/CustomSvgIcon";
import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";
import BannerContactSection from "@/components/product/fishery/BannerContactSection";
import FisheryProductsSection from "@/components/product/fishery/FisheryProductsSection";

// Fungsi untuk mengambil data perikanan
async function getFisheryData() {
  try {
    const query = getServicesQuery();
    const { data } = await apiRequest<ProductFisheryResponse>({
      path: ApiPath.PRODUCT_FISHERY,
      queryParams: query,
    });
    return data;
  } catch (e) {
    console.error("Error fetching fishery data:", e);
    return null;
  }
}

// Fungsi untuk generate metadata dinamis
export async function generateMetadata(): Promise<Metadata> {
  const data = await getFisheryData();

  if (!data || !data.metadata) {
    // Metadata default jika data tidak tersedia
    return {
      title: "Produk Perikanan | Centra Biotech Indonesia",
      description:
        "Solusi bioteknologi untuk perikanan. Tingkatkan produktivitas budidaya perikanan Anda dengan produk inovatif kami.",
    };
  }

  // Buat URL gambar absolute
  const imageUrl = data.headline?.image?.url
    ? new URL(
        getImageUrl(data.headline.image.url),
        process.env.NEXT_PUBLIC_SITE_URL || "https://centrabiotech.com",
      ).toString()
    : `${process.env.NEXT_PUBLIC_SITE_URL || "https://centrabiotech.com"}/images/fishery-default.jpg`;

  // Return metadata dinamis
  return {
    title:
      data.metadata.titleTag || "Produk Perikanan | Centra Biotech Indonesia",
    description:
      data.metadata.metaDesc ||
      "Solusi bioteknologi untuk perikanan dari Centra Biotech Indonesia",
    openGraph: {
      title:
        data.metadata.titleTag || "Produk Perikanan | Centra Biotech Indonesia",
      description:
        data.metadata.metaDesc ||
        "Solusi bioteknologi untuk perikanan dari Centra Biotech Indonesia",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: data.headline?.title || "Produk Perikanan Centra Biotech",
        },
      ],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        data.metadata.titleTag || "Produk Perikanan | Centra Biotech Indonesia",
      description:
        data.metadata.metaDesc ||
        "Solusi bioteknologi untuk perikanan dari Centra Biotech Indonesia",
      images: [imageUrl],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://centrabiotech.com"}/fishery`,
    },
    keywords: [
      "bioteknologi perikanan",
      "produk perikanan",
      "budidaya udang",
      "budidaya ikan",
      "akuakultur berkelanjutan",
    ],
  };
}

const Fishery = async () => {
  const data = await getFisheryData();

  if (!data) {
    // Handle error case
    return <div>Gagal memuat data produk perikanan</div>;
  }

  return (
    <>
      <HeroSectionGeneral
        imgUrl={getImageUrl(data?.headline?.image?.url)}
        category={data?.headline?.description}
        title={
          <h1 className="p-4 text-center text-3xl font-bold !leading-tight text-white lg:text-5xl xl:text-[56px]">
            {data?.headline?.title}
          </h1>
        }
      />

      <Breadcrumb className="bg-[#F4F4F4]" />

      <section className="bg-[#F4F4F4]">
        <ContainerSection>
          <div className="flex flex-col gap-6 rounded-3xl bg-[#00802B] p-8 md:flex-row md:items-center lg:gap-12 lg:p-16">
            <h2 className="max-w-[10rem] text-3xl text-white lg:max-w-none lg:text-[40px]/[48px] xl:w-[46rem] xl:text-5xl/[60px]">
              {data.aboutSection.title}
            </h2>
            <p className="w-fit text-white">{data.aboutSection.description}</p>
          </div>
        </ContainerSection>
      </section>

      <section>
        <ContainerSection>
          <div>
            <h2 className="leading-[50px] lg:leading-[80px]">
              Mengapa memilih <br />
              Produk Perikanan kami?
            </h2>
            <div className="mt-8 flex flex-col gap-8 md:flex-row lg:mt-24">
              <div className="group flex flex-1 flex-col rounded-lg bg-[#FDFDFD] px-8 py-6 drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] transition duration-300 hover:bg-[#C46617] lg:py-12">
                <CustomSvgIcon
                  url={getImageUrl(data?.whySection?.why1?.image?.url)}
                />
                <p className="mt-6 text-sm text-[#666] group-hover:text-white lg:mt-8 lg:text-base">
                  {data.whySection.why1.description}
                </p>
              </div>

              <div className="group flex flex-1 flex-col rounded-lg bg-[#FDFDFD] px-8 py-6 drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[#C46617] lg:py-12">
                <CustomSvgIcon
                  url={getImageUrl(data?.whySection?.why2?.image?.url)}
                />
                <p className="mt-6 text-sm text-neutral-600 transition-colors duration-300 group-hover:text-white lg:mt-8 lg:text-base">
                  {data.whySection.why2.description}
                </p>
              </div>

              <div className="group flex flex-1 flex-col rounded-lg bg-[#FDFDFD] px-8 py-6 drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[#C46617] lg:py-12">
                <CustomSvgIcon
                  url={getImageUrl(data?.whySection?.why3?.image?.url)}
                />
                <p className="mt-6 text-sm text-neutral-600 transition-colors duration-300 group-hover:text-white lg:mt-8 lg:text-base">
                  {data?.whySection?.why3?.description}
                </p>
              </div>
            </div>
          </div>
        </ContainerSection>
      </section>

      <FisheryProductsSection
        productCategories={data.productCategoriesSection}
      />

      <BannerContactSection data={data.bannerCTA} />
    </>
  );
};

// Ubah nama komponen untuk konsistensi
export default Fishery;

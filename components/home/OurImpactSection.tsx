import Image from "next/image";

import { OurImpact } from "@/types/responseTypes/dashboard/ourImpact";
import { getImageUrl } from "@/utils/getImageUrl";

import ContainerSection from "../layout/container";

const OurImpactSection = ({ data }: { data: OurImpact }) => {
  return (
    <section className="relative overflow-hidden bg-[#EEE]">
      <div className="absolute left-0 top-0 h-[64rem] w-[64rem] -translate-x-[17rem] -translate-y-[26rem]">
        <Image
          draggable={false}
          src="/logo-only.png"
          alt="logo cbi"
          width={600}
          height={600}
          className="h-full w-full object-cover opacity-40 brightness-0 invert"
        />
      </div>

      <ContainerSection className="relative z-20">
        {/* Title */}
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="flex-1">
            <h1>{data.title}</h1>
          </div>
          <p className="flex-1 text-[#666]">{data.description}</p>
        </div>

        {/* Banners */}
        <div className="mt-12 flex flex-col gap-10">
          {/* Banner 1 */}
          <div className="relative min-h-[35rem] w-full overflow-hidden rounded-3xl bg-cover bg-bottom bg-no-repeat md:min-h-[25rem]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={getImageUrl(data.product1bgimage?.url)}
                alt="Background image 1"
                fill
                className="object-cover object-bottom contrast-50"
                priority
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-[#952C1F] to-60% md:bg-gradient-to-r" />

            {/* Content */}
            <div className="absolute z-20 flex h-full w-full flex-col-reverse pt-8 md:flex-row md:pt-0">
              <div className="flex flex-1 items-end justify-center">
                <Image
                  draggable={false}
                  src={getImageUrl(data.product1image?.url)}
                  alt={data.product1image.alternativeText ?? "image product 1"}
                  width={700}
                  height={397}
                  className="h-full w-80 object-cover lg:w-fit"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-6 px-6 leading-6 text-white">
                <div>
                  <span className="block text-sm lg:text-base">
                    Pelopor Insektisida Hayati Cair di Indonesia
                  </span>
                  <h1 className="text-2xl font-bold text-[rgba(253,253,253,1)] md:text-4xl">
                    BIOKILLER
                  </h1>
                </div>
                <div className="flex max-w-lg flex-col gap-6">
                  <p className="text-sm text-[rgba(253,253,253,1)] lg:text-base">
                    Biokiller merupakan insektisida hayati yang dikembangkan
                    oleh PT Centra Biotech Indonesia yang sudah memiliki izin
                    dari Kementerian Pertanian Indonesia.
                  </p>
                  <p className="text-sm text-[rgba(253,253,253,1)] lg:text-base">
                    Produk ini telah terbukti ampuh untuk membunuh hama yang
                    menjadi permasalahan di industri pertanian.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="relative min-h-[35rem] w-full overflow-hidden rounded-3xl bg-cover bg-bottom bg-no-repeat md:min-h-[25rem]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={getImageUrl(data.product1bgimage?.url)}
                alt="Background image 2"
                fill
                className="object-cover object-bottom contrast-50"
                priority
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-[#98AF1D] to-40% md:bg-gradient-to-l" />

            {/* Konten */}
            <div className="absolute z-20 flex h-full w-full flex-col pt-8 md:flex-row md:pt-0">
              {/* teks */}
              <div className="flex flex-1 flex-col justify-center gap-6 px-6 leading-6 text-white md:ms-16">
                <div>
                  <span className="block text-sm lg:text-base">
                    Pupuk Hayati Cair No.1 di Indonesia
                  </span>
                  <h1 className="text-2xl font-bold text-[rgba(253,253,253,1)] md:text-4xl">
                    FLORAONE
                  </h1>
                </div>
                <div className="flex max-w-lg flex-col gap-6 text-sm lg:text-base">
                  <p className="text-sm text-[rgba(253,253,253,1)] lg:text-base">
                    Pupuk cair pilihan petani Indonesia untuk menjadikan
                    pertanian yang sehat dan produktif. Dipercaya oleh jutaan
                    petani di seluruh Indonesia untuk berbagai jenis tanaman.
                  </p>
                  <p className="text-sm text-[rgba(253,253,253,1)] lg:text-base">
                    FloraOne telah terbukti dapat meningkatkan produktivitas
                    tanaman hingga 50% walaupun dengan pengurangan pupuk kimia
                    sebesar 50%
                  </p>
                </div>
              </div>

              {/* gambar */}
              <div className="flex flex-1 items-end justify-center">
                <Image
                  draggable={false}
                  src={getImageUrl(data?.product2image?.url)}
                  alt="floraone"
                  width={480}
                  height={397}
                  className="h-full w-80 object-cover lg:w-fit"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 mt-14 flex flex-col justify-between md:flex-row">
          <p className="max-w-[20rem] font-semibold text-[#222]">
            Produk kami telah memiliki perizinan <br /> dan beberapa sertifikat
          </p>
          <div className="mt-6 flex flex-wrap items-center space-x-12 space-y-6 md:mt-0 md:space-y-0">
            <Image
              src="/certificate/img-product-cert-1.png"
              alt="Sertifikat KAN"
              width={100}
              height={40}
              className="h-12 w-24"
            />
            <Image
              src="/certificate/img-product-cert-2.png"
              alt="Sertifikat TKDN"
              width={100}
              height={40}
              className="h-12 w-auto"
            />
            <Image
              src="/certificate/img-product-cert-3.png"
              alt="Sertifikat Kementrian Pertanian"
              width={100}
              height={40}
              className="h-12 w-auto"
            />
            <Image
              src="/certificate/img-product-cert-4.png"
              alt="Sertifikat Organik Indonesia"
              width={100}
              height={40}
              className="h-12 w-auto"
            />
            <Image
              src="/certificate/img-product-cert-5.png"
              alt="Sertifikat IAF"
              width={100}
              height={40}
              className="h-12 w-auto"
            />
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default OurImpactSection;

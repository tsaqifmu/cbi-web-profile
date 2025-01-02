import Image from "next/image";

import HomeTitle from "./HomeTitle";

const OurImpactSection = () => {
  return (
    <section className="bg-[#EEE]">
      <div className="mx-auto min-h-[40rem] max-w-7xl px-6 py-16 md:px-0 md:py-24">
        {/* Title */}
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="flex-1">
            <HomeTitle>Dampak Kami</HomeTitle>
          </div>
          <p className="flex-1 text-lg text-[#666]">
            Melalui riset berkelanjutan, kami terus berusaha untuk menjadi
            pelopor pengembangan inovasi bioteknologi terkini yang berkualitas.
          </p>
        </div>

        {/* Banners */}
        <div className="mt-12 flex flex-col gap-10">
          {/* Banner 1 */}
          <div className="relative min-h-[35rem] w-full overflow-hidden rounded-3xl bg-cover bg-bottom bg-no-repeat md:min-h-[25rem]">
            {/* Background dengan filter */}
            <div
              className="absolute inset-0 bg-cover bg-bottom bg-no-repeat contrast-50"
              style={{
                backgroundImage: "url(img-our-impact-banner-bg.png)",
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-[#952C1F] to-60% md:bg-gradient-to-r" />

            {/* Konten */}
            <div className="absolute z-20 flex h-full w-full flex-col-reverse pt-8 md:flex-row md:pt-0">
              <div className="flex flex-1 items-end">
                <Image
                  draggable={false}
                  src="/img-product-biokiller.png"
                  alt="biokiller"
                  width={700}
                  height={600}
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-6 px-6 leading-6 text-white">
                <div>
                  <span className="block">
                    Pelopor Insektisida Hayati Cair di Indonesia
                  </span>
                  <h1 className="text-2xl font-bold md:text-4xl">BIOKILLER</h1>
                </div>
                <div className="flex max-w-lg flex-col gap-6">
                  <p>
                    Biokiller merupakan insektisida hayati yang dikembangkan
                    oleh PT Centra Biotech Indonesia yang sudah memiliki izin
                    dari Kementerian Pertanian Indonesia.
                  </p>
                  <p>
                    Produk ini telah terbukti ampuh untuk membunuh hama yang
                    menjadi permasalahan di industri pertanian.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="relative min-h-[35rem] w-full overflow-hidden rounded-3xl bg-cover bg-bottom bg-no-repeat md:min-h-[25rem]">
            {/* Background dengan filter */}
            <div
              className="absolute inset-0 bg-cover bg-bottom bg-no-repeat contrast-50"
              style={{
                backgroundImage: "url(img-our-impact-banner-bg.png)",
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-[#98AF1D] to-40% md:bg-gradient-to-l" />

            {/* Konten */}
            <div className="absolute z-20 flex h-full w-full flex-col pt-8 md:flex-row md:pt-0">
              {/* teks */}
              <div className="flex flex-1 flex-col justify-center gap-6 px-6 leading-6 text-white md:ms-16">
                <div>
                  <span className="block">
                    Pupuk Hayati Cair No.1 di Indonesia
                  </span>
                  <h1 className="text-2xl font-bold md:text-4xl">FLORAONE</h1>
                </div>
                <div className="flex max-w-lg flex-col gap-6">
                  <p>
                    Pupuk cair pilihan petani Indonesia untuk menjadikan
                    pertanian yang sehat dan produktif. Dipercaya oleh jutaan
                    petani di seluruh Indonesia untuk berbagai jenis tanaman.
                  </p>
                  <p>
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
                  src="/img-product-floraone.png"
                  alt="floraone"
                  width={480}
                  height={540}
                  className="w-64 md:w-fit"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 mt-14 flex flex-col justify-between md:flex-row">
          <p className="max-w-[13rem] font-semibold">
            Produk kami telah meraih beberapa Sertifikasi
          </p>
          <div className="mt-6 flex flex-wrap items-center space-x-12 space-y-6 md:mt-0 md:space-y-0">
            <Image
              src="/img-product-cert-1.png"
              alt="Sertifikat KAN"
              width={100}
              height={40}
              className="h-12 w-24"
            />
            <Image
              src="/img-product-cert-2.png"
              alt="Sertifikat TKDN"
              width={100}
              height={40}
              className="h-12 w-auto"
            />
            <Image
              src="/img-product-cert-3.png"
              alt="Sertifikat Kementrian Pertanian"
              width={100}
              height={40}
              className="h-12 w-auto"
            />
            <Image
              src="/img-product-cert-4.png"
              alt="Sertifikat Organik Indonesia"
              width={100}
              height={40}
              className="h-12 w-auto"
            />
            <Image
              src="/img-product-cert-5.png"
              alt="Sertifikat IAF"
              width={100}
              height={40}
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;

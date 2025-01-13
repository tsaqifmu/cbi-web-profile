"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ContainerSection from "@/components/layout/container";
import { cn } from "@/lib/utils";

import LinkGreen from "../home/LinkGreen";

const productData = [
  {
    id: 1,
    name: "FloraOne",
    description:
      "Pupuk hayati inovatif yang tidak hanya meningkatkan pertumbuhan tanaman, tetapi juga dilengkapi perlindungan ganda dari serangan penyakit tanaman. Dengan formulasi unik yang kaya akan mikroorganisme bermanfaat, FloraOne menjaga tanaman Anda tetap sehat dan produktif.",
  },
  {
    id: 2,
    name: "Produk 2",
    description: "Deskripsi produk kedua.",
  },
];

const AgricultureProductsSection = () => {
  const [activeMenu, setActiveMenu] = useState("pupuk-hayati");
  const [swiper, setSwiper] = useState<SwiperType>();

  return (
    <section>
      <ContainerSection className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-4 lg:gap-12">
          {/* buttons */}
          <div className="flex gap-2">
            <button
              className={cn(
                "rounded-[1.5rem] px-3 py-2 text-xs lg:text-sm",
                activeMenu === "pupuk-hayati"
                  ? "bg-[#009933] text-white"
                  : "border border-gray-200 text-[#666]",
              )}
              onClick={() => setActiveMenu("pupuk-hayati")}
            >
              Pupuk Hayati
            </button>
            <button
              className={cn(
                "rounded-[1.5rem] px-3 py-2 text-xs lg:text-sm",
                activeMenu === "pupuk-organik"
                  ? "bg-[#009933] text-white"
                  : "border border-gray-200 text-[#666]",
              )}
              onClick={() => setActiveMenu("pupuk-organik")}
            >
              Pupuk Organik
            </button>
            <button
              className={cn(
                "rounded-[1.5rem] px-3 py-2 text-xs lg:text-sm",
                activeMenu === "insektisida-hayati"
                  ? "bg-[#009933] text-white"
                  : "border border-gray-200 text-[#666]",
              )}
              onClick={() => setActiveMenu("insektisida-hayati")}
            >
              Insektisida Hayati
            </button>
          </div>

          <p className="text-sm lg:text-base">
            Di Indonesia, produk kami telah digunakan oleh para petani di 19
            provinsi dan terbukti efektif meningkatkan hasil panen dan kualitas
            produk pertanian, serta mendukung pertanian berkelanjutan.
          </p>
        </div>

        <div className="box-border h-[20rem] flex-1 rounded-3xl bg-[#99AC33] lg:h-[25rem]">
          <Image
            className="h-full w-full scale-75 object-contain"
            src="/img-product-floraone-full.png"
            width={280}
            height={315}
            alt="floraone"
          />
        </div>

        <div className="flex h-full flex-1 justify-center gap-2 bg-red-500 lg:gap-6">
          <Swiper
            className="pb-16"
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={setSwiper}
            navigation={false} // Disable default navigation
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active bg-green-600",
              el: ".pagination-bullets",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {productData.map((item) => (
              <SwiperSlide key={item.id}>
                <h1 className="text-xl text-[#222] lg:text-2xl">FloraOne</h1>
                <p className="text-sm text-[#666] lg:text-lg">
                  Pupuk hayati inovatif yang tidak hanya meningkatkan
                  pertumbuhan tanaman, tetapi juga dilengkapi perlindungan ganda
                  dari serangan penyakit tanaman. Dengan formulasi unik yang
                  kaya akan mikroorganisme bermanfaat, FloraOne menjaga tanaman
                  Anda tetap sehat dan produktif.
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContainerSection>
    </section>
  );
};

export default AgricultureProductsSection;

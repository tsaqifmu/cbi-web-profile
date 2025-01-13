"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import ContainerSection from "@/components/layout/container";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const managementData = [
  {
    id: 1,
    image: "/management-photo-profile/pak-luhur.png",
    name: "drh. Luhur Sediyoadi",
    title: "Owner",
    description:
      "Drh. H. Luhur Sediyoadi, S.KH., merupakan alumni Fakultas Kesehatan Hewan Universitas Airlangga (1986). Berbekal pengalaman kerja sebelumnya di dua perusahaan, pada 2010 beliau mendirikan PT Centra Biotech Indonesia, di mana kini ia menjabat sebagai Owner.",
  },
  {
    id: 2,
    image: "/management-photo-profile/pak-luhur.png",
    name: "drh. Luhur Sediyoadi",
    title: "Owner",
    description:
      "Drh. H. Luhur Sediyoadi, S.KH., merupakan alumni Fakultas Kesehatan Hewan Universitas Airlangga (1986). Berbekal pengalaman kerja sebelumnya di dua perusahaan, pada 2010 beliau mendirikan PT Centra Biotech Indonesia, di mana kini ia menjabat sebagai Owner.",
  },
  {
    id: 3,
    image: "/management-photo-profile/pak-luhur.png",
    name: "drh. Luhur Sediyoadi",
    title: "Owner",
    description:
      "Drh. H. Luhur Sediyoadi, S.KH., merupakan alumni Fakultas Kesehatan Hewan Universitas Airlangga (1986). Berbekal pengalaman kerja sebelumnya di dua perusahaan, pada 2010 beliau mendirikan PT Centra Biotech Indonesia, di mana kini ia menjabat sebagai Owner.",
  },
  {
    id: 4,
    image: "/management-photo-profile/pak-luhur.png",
    name: "drh. Luhur Sediyoadi",
    title: "Owner",
    description:
      "Drh. H. Luhur Sediyoadi, S.KH., merupakan alumni Fakultas Kesehatan Hewan Universitas Airlangga (1986). Berbekal pengalaman kerja sebelumnya di dua perusahaan, pada 2010 beliau mendirikan PT Centra Biotech Indonesia, di mana kini ia menjabat sebagai Owner.",
  },
  {
    id: 5,
    image: "/management-photo-profile/pak-luhur.png",
    name: "drh. Luhur Sediyoadi",
    title: "Owner",
    description:
      "Drh. H. Luhur Sediyoadi, S.KH., merupakan alumni Fakultas Kesehatan Hewan Universitas Airlangga (1986). Berbekal pengalaman kerja sebelumnya di dua perusahaan, pada 2010 beliau mendirikan PT Centra Biotech Indonesia, di mana kini ia menjabat sebagai Owner.",
  },
];

const ManagementSection = () => {
  const [swiper, setSwiper] = useState<SwiperType>();

  return (
    <section className="py-16">
      <ContainerSection>
        <h1 className="mb-8 text-3xl font-bold">Manajemen</h1>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active bg-green-600",
            el: ".pagination-bullets",
          }}
          onSwiper={setSwiper}
          navigation={false} // Disable default navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          className="pb-16"
        >
          {managementData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex w-[18.75rem] flex-col gap-y-5">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={`${item.name} photo`}
                    width={400}
                    height={400}
                    className="h-[18.75rem] w-[18.75rem] rounded-[1.125rem] object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-4 z-10">
                    <h4 className="text-base font-bold text-[#FDFDFD] lg:text-xl">
                      {item.name}
                    </h4>
                    <p className="text-[#FDFDFD]">{item.title}</p>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="mt-8 flex items-center justify-between lg:mt-16">
          <div>
            <div className="pagination-bullets" />
          </div>
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => swiper?.slidePrev()}
              className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#009933] shadow-lg backdrop-blur-sm transition-colors hover:bg-[#009933]/80 disabled:cursor-not-allowed disabled:opacity-50 xl:h-10 xl:w-10"
            >
              <ArrowLeft size={16} className="text-white" />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#009933] shadow-lg backdrop-blur-sm transition-colors hover:bg-[#009933]/80 disabled:cursor-not-allowed disabled:opacity-50 xl:h-10 xl:w-10"
            >
              <ArrowRight size={16} className="text-white" />
            </button>
          </div>
        </div>
      </ContainerSection>

      <style jsx global>{`
        .pagination-bullets {
          text-align: left;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background: #059669 !important;
        }
        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default ManagementSection;

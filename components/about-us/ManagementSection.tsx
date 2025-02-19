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
import { Management } from "@/types/responseTypes/aboutUsData";
import { getImageUrl } from "@/utils/getImageUrl";

const ManagementSection = ({ managements }: { managements: Management[] }) => {
  const [swiper, setSwiper] = useState<SwiperType>();

  return (
    <section className="py-16">
      <ContainerSection>
        <h2 className="mb-8">Manajemen</h2>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
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
              slidesPerView: 3,
            },
          }}
          className="mt-16 pb-16"
        >
          {managements.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex w-[18.75rem] flex-col gap-y-5 lg:w-[25rem]">
                <div className="relative">
                  <Image
                    src={getImageUrl(item.image.url)}
                    alt={item.image.alternativeText ?? "management"}
                    width={item.image.width}
                    height={item.image.height}
                    className="h-[18.75rem] w-[18.75rem] rounded-[1.125rem] object-cover object-center lg:h-[25rem] lg:w-[25rem]"
                  />
                  <div className="absolute bottom-2 left-4 z-10">
                    <h4 className="text-base font-bold text-[#FDFDFD] lg:text-xl">
                      {item.name}
                    </h4>
                    <p className="text-[#FDFDFD]">{item.position}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 lg:text-base">
                    {item.description}
                  </p>
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

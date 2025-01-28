"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LinkGreen from "../home/LinkGreen";
import ContainerSection from "../layout/container";

import type { Swiper as SwiperType } from "swiper";

const serviceData = [
  {
    id: 1,
    image: "/management-photo-profile/pak-luhur.png",
  },
  {
    id: 2,
    image: "/management-photo-profile/pak-luhur.png",
  },
  {
    id: 3,
    image: "/management-photo-profile/pak-luhur.png",
  },
  {
    id: 4,
    image: "/management-photo-profile/pak-luhur.png",
  },
  {
    id: 5,
    image: "/management-photo-profile/pak-luhur.png",
  },
];

const OurServiceSection = () => {
  const [swiper, setSwiper] = useState<SwiperType>();

  return (
    <section>
      <ContainerSection>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:gap-24">
          <div className="flex-shrink">
            <h1>Layanan Kami</h1>
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-[#666]">
              Dokter Tani adalah Klinik yang menyediakan layanan konsultasi,
              diagnosis, dan resep obat untuk meningkatkan produktivitas
              pertanian, peternakan, dan perikanan. Konsultasikan berbagai
              kebutuhan solusi pertanian, peternakan dan perikanan dengan tim
              ahli kami.
            </p>
            <LinkGreen className="mt-2" href="/" withArrow={false}>
              Selengkapnya
            </LinkGreen>
          </div>
        </div>

        {/* Images */}
        <div className="py-16">
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
                slidesPerView: 4,
              },
            }}
            className="pb-16"
          >
            {serviceData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex w-[18.75rem] flex-col gap-y-5">
                  <Image
                    src={item.image}
                    alt={`photo`}
                    width={400}
                    height={400}
                    className="h-[18.75rem] w-[18.75rem] rounded-[1.125rem] object-cover object-center"
                  />
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
                <span className="text-white">
                  <ArrowLeft size={16} />
                </span>
              </button>
              <button
                onClick={() => swiper?.slideNext()}
                className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#009933] shadow-lg backdrop-blur-sm transition-colors hover:bg-[#009933]/80 disabled:cursor-not-allowed disabled:opacity-50 xl:h-10 xl:w-10"
              >
                <span className="text-white">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default OurServiceSection;

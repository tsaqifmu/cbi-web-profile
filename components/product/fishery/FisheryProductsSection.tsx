"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ContainerSection from "@/components/layout/container";
import { cn } from "@/lib/utils";

import type { Swiper as SwiperType } from "swiper";

const productData = [
  {
    id: "kesehatan-air",
    name: "Kesehatan Air",
    description:
      "Probiotik Ruminansia adalah produk suplemen pakan yang mengandung mikroorganisme hidup bermanfaat, seperti bakteri asam laktat, ragi, dan jamur. Mikroorganisme ini secara khusus diformulasikan untuk mendukung kesehatan sistem pencernaan ternak ruminansia (sapi, kerbau, kambing, domba).",
    products: [
      {
        id: 1,
        name: "FloraOne",
        description:
          "Pupuk hayati inovatif yang tidak hanya meningkatkan pertumbuhan tanaman, tetapi juga dilengkapi perlindungan ganda dari serangan penyakit tanaman. Dengan formulasi unik yang kaya akan mikroorganisme bermanfaat, FloraOne menjaga tanaman Anda tetap sehat dan produktif.",
        url: "/img-product-floraone-full.png",
      },
      {
        id: 2,
        name: "FloraOne Plus",
        description:
          "Varian premium dari FloraOne dengan tambahan nutrisi dan mineral yang optimal untuk hasil panen maksimal. Cocok untuk berbagai jenis tanaman pertanian dan perkebunan.",
        url: "/img-product-biokiller.png",
      },
    ],
  },
  {
    id: "pengendali-penyakit",
    name: "Pengendali Penyakit",
    description:
      "Pupuk organik berkualitas tinggi yang terbuat dari bahan alami untuk mendukung pertanian berkelanjutan dan ramah lingkungan.",
    products: [
      {
        id: 1,
        name: "OrganicPro",
        description:
          "Pupuk organik premium yang kaya akan unsur hara makro dan mikro. Meningkatkan struktur tanah dan mendukung pertumbuhan akar yang kuat.",
        url: "/blog-detail.jpeg",
      },
      {
        id: 2,
        name: "EcoGrow",
        description:
          "Pupuk organik dengan formula khusus untuk meningkatkan hasil panen dan kualitas produk pertanian. Aman untuk lingkungan dan berkelanjutan.",
        url: "/hero-about-us.png",
      },
    ],
  },
  {
    id: "pemacu-produktivitas",
    name: "Pemacu Produktivitas",
    description:
      "Pupuk organik berkualitas tinggi yang terbuat dari bahan alami untuk mendukung pertanian berkelanjutan dan ramah lingkungan.",
    products: [
      {
        id: 1,
        name: "OrganicPro",
        description:
          "Pupuk organik premium yang kaya akan unsur hara makro dan mikro. Meningkatkan struktur tanah dan mendukung pertumbuhan akar yang kuat.",
        url: "/blog-detail.jpeg",
      },
      {
        id: 2,
        name: "EcoGrow",
        description:
          "Pupuk organik dengan formula khusus untuk meningkatkan hasil panen dan kualitas produk pertanian. Aman untuk lingkungan dan berkelanjutan.",
        url: "/hero-about-us.png",
      },
    ],
  },
];

const FisheryProductsSection = () => {
  const [activeMenu, setActiveMenu] = useState(productData[0]?.id);
  const [swiper, setSwiper] = useState<SwiperType>();
  const [activeProduct, setActiveProduct] = useState(
    productData[0].products[0],
  );
  const [activeSlide, setActiveSlide] = useState(1);

  const activeCategory = productData.find(
    (category) => category.id === activeMenu,
  );

  // Reset swiper and active product when menu changes
  useEffect(() => {
    if (activeCategory) {
      setActiveProduct(activeCategory.products[0]);
      setActiveSlide(1);
      swiper?.slideTo(0);
    }
  }, [activeCategory, activeMenu, swiper]);

  return (
    <section>
      <ContainerSection className="flex flex-col items-stretch gap-4 overflow-hidden lg:gap-10 xl:flex-row">
        {/* Button and texts */}
        <div className="flex flex-col gap-4 lg:gap-12 xl:w-1/3">
          {/* buttons */}
          <div className="flex gap-2">
            {productData.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "rounded-[1.5rem] px-3 py-2 text-xs lg:text-sm",
                  activeMenu === category.id
                    ? "bg-[#009933] text-white"
                    : "border border-gray-200 text-[#666]",
                )}
                onClick={() => setActiveMenu(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <p className="text-sm lg:text-base">{activeCategory?.description}</p>
        </div>

        {/* Swiper Image and Texts */}
        <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:gap-16">
          <div className="h-[20rem] flex-1 rounded-3xl bg-[#99AC33] lg:h-[25rem]">
            <Image
              className="h-[20rem] w-full scale-75 object-contain lg:h-[25rem]"
              src={activeProduct.url}
              width={280}
              height={315}
              alt={activeProduct.name}
            />
          </div>

          {/* title, description, and swiper button previous and next */}
          <div className="flex flex-1 flex-col justify-center gap-6">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              onSwiper={setSwiper}
              direction="vertical"
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="h-[12rem] w-full"
              onSlideChange={(swiper) => {
                const currentIndex = swiper.realIndex;
                setActiveProduct(activeCategory!.products[currentIndex]);
                setActiveSlide(currentIndex + 1);
              }}
            >
              {activeCategory?.products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="flex h-full flex-col gap-4 lg:justify-center">
                    <h3 className="text-xl font-semibold text-[#222] lg:text-2xl">
                      {product.name}
                    </h3>
                    <p className="text-ellipsis text-sm text-[#666]">
                      {product.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <div className="flex items-center justify-end gap-4">
              <span className="text-sm text-[#666]">
                {activeSlide}/{activeCategory?.products?.length}
              </span>
              <button
                onClick={() => swiper?.slidePrev()}
                className="flex h-12 w-fit items-center gap-2 rounded-[0.5rem] bg-[#009933] px-4 text-sm text-white transition-colors duration-300 hover:bg-green-700 lg:text-base xl:text-xl"
              >
                <ArrowLeft className="h-4 w-4 text-white" />
              </button>
              <button
                onClick={() => swiper?.slideNext()}
                className="flex h-12 w-fit items-center gap-2 rounded-[0.5rem] bg-[#009933] px-4 text-sm text-white transition-colors duration-300 hover:bg-green-700 lg:text-base xl:text-xl"
              >
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default FisheryProductsSection;

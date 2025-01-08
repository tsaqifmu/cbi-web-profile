import React from "react";

import HeroSectionGeneral from "@/components/HeroSectionGeneral";
import ProductServiceSection from "@/components/home/ProductServiceSection";
import WhySection from "@/components/product/WhySection";

const ProductsAndServices = () => {
  return (
    <>
      <HeroSectionGeneral
        imgUrl="/img-products-and-services-hero.jpeg"
        category="Produk & Layanan"
        title={
          <h1 className="text-center text-3xl font-bold text-white lg:text-5xl xl:text-[56px]">
            Tingkatkan Produktivitas{" "}
            <span className="font-normal">Anda dengan Produk</span> Bioteknologi
            Berkualitas Tinggi
          </h1>
        }
      />

      <WhySection />
      <ProductServiceSection />
    </>
  );
};

export default ProductsAndServices;

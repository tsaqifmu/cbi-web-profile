import React from "react";

import BannerContactSection from "@/components/product/BannerContactSection";
import HeroSection from "@/components/product/HeroSection";
import OurProductSection from "@/components/product/OurProduct";
import OurServiceSection from "@/components/product/OurService";
import WhySection from "@/components/product/WhySection";

const ProductsAndServices = () => {
  return (
    <>
      <HeroSection />
      <WhySection />
      <OurProductSection />
      <OurServiceSection />
      <BannerContactSection />
    </>
  );
};

export default ProductsAndServices;

import React from 'react';

import BannerContactSection from '@/components/product/BannerContactSection';
import HeroSection from '@/components/product/HeroSection';
import OurProductSection from '@/components/product/OurProduct';
import OurServiceSection from '@/components/product/OurService';
import WhySection from '@/components/product/WhySection';
import { ApiPath, apiRequest } from '@/utils/apiClient';
import { ProductAndServiceResponse } from '@/utils/types';

const ProductsAndServices = async () => {
  try {
    const { data } = await apiRequest<ProductAndServiceResponse>({
      path: ApiPath.PRODUCTS_AND_SERVICES,
    });

    return (
      <>
        <HeroSection data={data.headline} />
        <WhySection data={data.whySection} />
        <OurProductSection data={data.productsSection} />
        <OurServiceSection data={data.servicesSection} />
        <BannerContactSection data={data.bannerContactSection} />
      </>
    );
  } catch (e) {
    console.error(e);
  }
};

export default ProductsAndServices;

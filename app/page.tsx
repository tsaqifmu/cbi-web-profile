import { ApiPath, apiRequest } from "@/utils/apiClient";
import { getDashboardQuery } from "@/utils/queries/dashboardQuery";

import { DashboardResponse } from "@/types/responseTypes";

import WhySection from "@/components/home/WhySection";
import HeroSection from "@/components/home/HeroSection";
import OurImpactSection from "@/components/home/OurImpactSection";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import ProductServiceSection from "@/components/home/ProductServiceSection";
import BannerContactSection from "@/components/home/BannerContactSection";

const Home = async () => {
  try {
    const query = getDashboardQuery();
    const { data } = await apiRequest<DashboardResponse>({
      path: ApiPath.DASHBOARD,
      queryParams: query,
    });

    return (
      <>
        <HeroSection data={data.headline} />
        <WhySection data={data.whySection} />
        <ProductServiceSection data={data.productService} />
        <OurImpactSection data={data.ourImpact} />
        <LatestNewsSection data={data.latestNews} />
        <BannerContactSection data={data.bannerContact} />
      </>
    );
  } catch (e) {
    console.error(e);
  }
};

export default Home;

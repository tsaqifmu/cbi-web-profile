import BannerContactSection from "@/components/home/BannerContactSection";
import HeroSection from "@/components/home/HeroSection";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import OurImpactSection from "@/components/home/OurImpactSection";
import ProductServiceSection from "@/components/home/ProductServiceSection";
import WhySection from "@/components/home/WhySection";
import { ApiPath, apiRequest } from "@/utils/apiClient";
import { DashboardResponse } from "@/utils/types";

const Home = async () => {
  try {
    const { data } = await apiRequest<DashboardResponse>({
      path: ApiPath.DASHBOARD,
    });

    return (
      <>
        <HeroSection data={data.headline} />
        <WhySection data={data.whySection} />
        <ProductServiceSection data={data.productService} />
        <OurImpactSection data={data.ourImpact} />
        <LatestNewsSection />
        <BannerContactSection data={data.bannerContact} />
      </>
    );
  } catch (e) {
    console.error(e);
  }
};

export default Home;

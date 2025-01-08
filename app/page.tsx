import BannerContactSection from "@/components/home/BannerContactSection";
import HeroSection from "@/components/home/HeroSection";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import OurImpactSection from "@/components/home/OurImpactSection";
import ProductServiceSection from "@/components/home/ProductServiceSection";
import WhySection from "@/components/home/WhySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ProductServiceSection />
      <OurImpactSection />
      <LatestNewsSection />
      <BannerContactSection />
    </>
  );
}

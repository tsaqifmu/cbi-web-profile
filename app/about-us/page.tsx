import AboutUsSection from "@/components/about-us/AboutUs";
import HeroSectionAboutUs from "@/components/about-us/HeroSection";
import VisionMissionSection from "@/components/about-us/vision&misson";
import ManagementSection from "@/components/about-us/ManagementSection";
import BannerCareerSection from "@/components/about-us/BannerCarrierSection";

const AboutUs = () => {
  return (
    <section>
      <HeroSectionAboutUs />
      <AboutUsSection />
      <VisionMissionSection />
      <ManagementSection />
      <BannerCareerSection />
    </section>
  );
};

export default AboutUs;

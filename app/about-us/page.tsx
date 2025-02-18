import AboutUsSection from "@/components/about-us/AboutUs";
import HeroSectionAboutUs from "@/components/about-us/HeroSection";
import VisionMissionSection from "@/components/about-us/vision&misson";
import ManagementSection from "@/components/about-us/ManagementSection";
import BannerCareerSection from "@/components/about-us/BannerCarrierSection";
import Breadcrumb from "@/components/common/BreadScrumb";
import { ApiPath, apiRequest } from "@/utils/apiClient";
import { AboutUsResponse } from "@/types/responseTypes";
import { getAboutUsQuery } from "@/utils/queries/aboutUs";

const AboutUs = async () => {
  try {
    const query = getAboutUsQuery();

    const { data } = await apiRequest<AboutUsResponse>({
      path: ApiPath.ABOUT_US,
      queryParams: query,
    });

    return (
      <section>
        <HeroSectionAboutUs headline={data.headline} />
        <Breadcrumb />
        <AboutUsSection aboutUs={data.aboutUs} />
        <VisionMissionSection visionMission={data.visionMission} />
        <ManagementSection managements={data.managements} />
        <BannerCareerSection />
      </section>
    );
  } catch (e) {
    console.error(e);
  }
};

export default AboutUs;

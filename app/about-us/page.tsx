import React from "react";

import AboutUsSection from "@/components/about-us/AboutUs";
import HeroSectionAboutUs from "@/components/about-us/HeroSection";
import VisionMissionSection from "@/components/about-us/vision&misson";

const AboutUs = () => {
  return (
    <section>
      <HeroSectionAboutUs />
      <AboutUsSection />
      <VisionMissionSection />
    </section>
  );
};

export default AboutUs;

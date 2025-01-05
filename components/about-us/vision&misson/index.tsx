import React from "react";

import ContainerSection from "@/components/layout/container";
import VisionMission from "./VisionMission";
import CorporateValue from "./CorporateValue";

const VisionMissionSection = () => {
  return (
    <section className="w-full bg-[#eee]">
      <ContainerSection>
        <VisionMission />
        <CorporateValue />
      </ContainerSection>
    </section>
  );
};

export default VisionMissionSection;

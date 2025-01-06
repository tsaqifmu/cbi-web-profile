import React from "react";

import ContainerSection from "@/components/layout/container";
import VisionMission from "./VisionMission";
import CorporateValue from "./CorporateValue";

const VisionMissionSection = () => {
  return (
    <section className="w-full bg-[#eee]">
      <VisionMission />
      <CorporateValue />
    </section>
  );
};

export default VisionMissionSection;

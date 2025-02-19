import Image from "next/image";

import VisionMission from "./VisionMission";
import CorporateValue from "./CorporateValue";
import { VisionMission as VisionMissionProps } from "@/types/responseTypes/aboutUsData";

const VisionMissionSection = ({
  visionMission,
}: {
  visionMission: VisionMissionProps;
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#eee]">
      <div className="absolute bottom-1/3 left-1/4 h-[64rem] w-[64rem] -translate-x-1/2 translate-y-1/3 xl:left-[15%]">
        <Image
          draggable={false}
          src="/logo-only.png"
          alt="logo cbi"
          width={600}
          height={600}
          className="h-full w-full object-cover opacity-40 brightness-0 invert"
        />
      </div>
      <div className="relative z-10">
        <VisionMission
          title={visionMission.Title}
          description={visionMission.description}
        />
        <CorporateValue />
      </div>
    </section>
  );
};

export default VisionMissionSection;

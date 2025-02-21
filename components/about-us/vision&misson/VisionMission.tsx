import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { getImageUrl } from "@/utils/getImageUrl";

import ContainerSection from "@/components/layout/container";
import { VisionMission as VisionMissionProps } from "@/types/responseTypes/aboutUsData";

const VisionMission = ({
  visionMissionData,
}: {
  visionMissionData: VisionMissionProps;
}) => {
  return (
    <ContainerSection>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="space-y-6 md:w-[40%]">
          <h2>{visionMissionData.title}</h2>
          <p className="max-w-96">{visionMissionData.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:w-[60%] xl:grid-cols-2">
          {visionMissionData?.visionItem?.map((content, index) => (
            <div
              key={content.id}
              className={cn(
                "rounded-sm bg-[#FDFDFD] p-6 drop-shadow-sm md:rounded-lg",
                index === visionMissionData?.visionItem.length - 1 &&
                  "xl:col-span-2",
              )}
            >
              <Image
                src={getImageUrl(content.image.url)}
                alt={content.image.alternativeText ?? "icon"}
                width={32}
                height={32}
                className="h-8 w-8 md:h-12 md:w-12"
              />
              <p className="mt-2">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ContainerSection>
  );
};

export default VisionMission;

import React from "react";
import HeroSection from "@/components/document/HeroSection";
import DocumentBrochure from "@/components/document/DocumentBrochure";
import { getDocumentsQuery } from "@/utils/queries/documentsQuery";
import { ApiPath, apiRequest } from "@/utils/apiClient";
import { MediaInformationResponse } from "@/types/responseTypes";
import Breadcrumb from "@/components/common/BreadScrumb";

const MediaInformation = async () => {
  try {
    const query = getDocumentsQuery();
    const { data } = await apiRequest<MediaInformationResponse>({
      path: ApiPath.DOCUMENTS,
      queryParams: query,
    });

    return (
      <section>
        <HeroSection data={data.headline} />
        <Breadcrumb />
        <DocumentBrochure
          certificates={data.certificates}
          brochures={data.brochures}
        />
      </section>
    );
  } catch (e) {
    console.error(e);
  }
};

export default MediaInformation;

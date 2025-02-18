import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";
import FormSection from "@/components/contact/FormSection";
import ContactAddress from "@/components/contact/ContactAddress";
import ContainerSection from "@/components/layout/container";
import { getContactQuery } from "@/utils/queries/contactQuery";
import { ApiPath, apiRequest } from "@/utils/apiClient";
import { ContactResponse } from "@/types/responseTypes";
import Breadcrumb from "@/components/common/BreadScrumb";
import { getImageUrl } from "@/utils/getImageUrl";

const Contact = async () => {
  try {
    const query = getContactQuery();
    const { data } = await apiRequest<ContactResponse>({
      path: ApiPath.CONTACT,
      queryParams: query,
    });
    return (
      <>
        <HeroSectionGeneral
          imgUrl={getImageUrl(data.headline.image?.url)}
          title={<h1 className="text-white">{data.headline.title}</h1>}
        />
        <Breadcrumb />
        <ContainerSection className="flex flex-col gap-12 lg:flex-row">
          <ContactAddress
            title={data.title}
            description={data.description}
            contactInfo={data.addressAndContact}
          />
          <FormSection />
        </ContainerSection>
      </>
    );
  } catch (error) {
    console.error(error);
  }
};

export default Contact;

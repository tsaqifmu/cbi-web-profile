import HeroSection from "@/components/media/HeroSection";
import MainNews from "@/components/media/MainNews";
import ListNews from "@/components/media/ListNews";
import CTASection from "@/components/media/CTA";
import { getNewsSectionQuery } from "@/utils/newsSectionQuery";
import { ApiPath, apiRequest } from "@/utils/apiClient";
import { NewsSectionResponse } from "@/types/responseTypes";

const Media = async () => {
  try {
    const query = getNewsSectionQuery();
    const { data } = await apiRequest<NewsSectionResponse>({
      path: ApiPath.NEWS_SECTION,
      queryParams: query,
    });

    console.log("ini data news", data);

    return (
      <section>
        <HeroSection title="Berita" category="Media & Informasi" />
        <MainNews data={data.headlineNews} />
        <ListNews />
        <CTASection />
      </section>
    );
  } catch (e) {
    console.error(e);
  }
};

export default Media;

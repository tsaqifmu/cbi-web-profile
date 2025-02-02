import HeroSection from "@/components/media/HeroSection";
import MainArticle from "@/components/media/MainArticle";
import ListArticle from "@/components/media/ListArticle";
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

    return (
      <section>
        <HeroSection title="Berita" category="Media & Informasi" />
        <MainArticle data={data.headlineNews} />
        <ListArticle news1={data.news1} news2={data.news2} />
        <CTASection />
      </section>
    );
  } catch (e) {
    console.error(e);
  }
};

export default Media;

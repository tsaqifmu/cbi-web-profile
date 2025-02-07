import { NewsSectionResponse } from "@/types/responseTypes";

import { ApiPath, apiRequest } from "@/utils/apiClient";
import { getNewsSectionQuery } from "@/utils/newsSectionQuery";

import CTASection from "@/components/media/CTA";
import HeroSection from "@/components/media/HeroSection";
import MainArticle from "@/components/media/MainArticle";
import ListArticle from "@/components/media/ListArticle";

const Media = async () => {
  try {
    const query = getNewsSectionQuery();
    const { data } = await apiRequest<NewsSectionResponse>({
      path: ApiPath.NEWS_SECTION,
      queryParams: query,
    });

    return (
      <section>
        <HeroSection
          title={data.headline.description}
          category={data.headline.title}
        />
        <MainArticle data={data.headlineNews} />
        <ListArticle news1={data.news1} news2={data.news2} />
        <CTASection data={data.bannerContactSection} />
      </section>
    );
  } catch (e) {
    console.error(e);
  }
};

export default Media;

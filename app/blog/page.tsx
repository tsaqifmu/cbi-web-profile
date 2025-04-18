import { BlogSectionResponse } from "@/types/responseTypes";

import { ApiPath, apiRequest } from "@/utils/apiClient";
import { getBlogSectionQuery } from "@/utils/queries/blogSectionQuery";

import CTASection from "@/components/media/CTA";
import HeroSection from "@/components/media/HeroSection";
import MainArticle from "@/components/media/MainArticle";
import ListArticle from "@/components/media/ListArticle";
import Breadcrumb from "@/components/common/BreadScrumb";

const Blog = async () => {
  try {
    const query = getBlogSectionQuery();
    const { data } = await apiRequest<BlogSectionResponse>({
      path: ApiPath.BLOG_SECTION,
      queryParams: query,
    });

    return (
      <section>
        <HeroSection headline={data.headline} />
        <Breadcrumb />
        <MainArticle data={data.headlineBlog} />
        <ListArticle news1={data.blog1} news2={data.blog2} />
        <CTASection data={data.bannerCTA} />
      </section>
    );
  } catch (e) {
    console.error(e);
  }
};

export default Blog;

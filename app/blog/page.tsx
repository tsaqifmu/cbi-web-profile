import HeroSection from "@/components/media/HeroSection";
import MainArticle from "@/components/media/MainArticle";
import ListArticle from "@/components/media/ListArticle";
import CTASection from "@/components/media/CTA";
import { getBlogSectionQuery } from "@/utils/blogSectionQuery";
import { ApiPath, apiRequest } from "@/utils/apiClient";
import { BlogSectionResponse } from "@/types/responseTypes";

const Blog = async () => {
  try {
    const query = getBlogSectionQuery();
    const { data } = await apiRequest<BlogSectionResponse>({
      path: ApiPath.BLOG_SECTION,
      queryParams: query,
    });
    return (
      <section>
        <HeroSection title="Blog" category="Media & Informasi" />
        <MainArticle data={data.headlineBlog} />
        <ListArticle news1={data.blog1} news2={data.blog2} />
        <CTASection />
      </section>
    );
  } catch (e) {
    console.error(e);
  }
};

export default Blog;

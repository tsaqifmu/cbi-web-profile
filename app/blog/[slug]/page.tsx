import { notFound } from "next/navigation";
import { ApiPath, apiRequest } from "@/utils/apiClient";
import { ArticleDetailResponse } from "@/types/responseTypes";
import HeroSection from "@/components/media/article-detail/HeroSection";
import ArticleDetail from "@/components/media/article-detail/ArticleDetail";
import { getArticleDetailQuery } from "@/utils/queries/articlesDetailQuery";
import Breadcrumb from "@/components/common/BreadScrumb";

// Menandai komponen sebagai async component
const BlogDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  try {
    const query = getArticleDetailQuery((await params).slug);
    const { data } = await apiRequest<ArticleDetailResponse>({
      path: ApiPath.BLOGS,
      queryParams: query,
    });

    if (!data.length) {
      notFound();
    }

    const blogDetailData = data[0];

    return (
      <section>
        <HeroSection data={blogDetailData} />
        <Breadcrumb />
        <ArticleDetail
          content={blogDetailData.content}
          type={blogDetailData.type}
        />
      </section>
    );
  } catch (error) {
    console.error("Error fetching blog detail:", error);
    notFound();
  }
};

export default BlogDetail;

import { notFound } from "next/navigation";

import { ApiPath, apiRequest } from "@/utils/apiClient";
import { ArticleDetailResponse } from "@/types/responseTypes";

import HeroSection from "@/components/media/article-detail/HeroSection";
import ArticleDetail from "@/components/media/article-detail/ArticleDetail";
import { getArticleDetailQuery } from "@/utils/blogDetailQuery";

interface blogDetailParams {
  params: {
    slug: string;
  };
}

const BlogDetail = async ({ params }: blogDetailParams) => {
  const resolvedParams = await Promise.resolve(params);
  const query = getArticleDetailQuery(resolvedParams.slug);
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
      <ArticleDetail content={blogDetailData.content} />
    </section>
  );
};

export default BlogDetail;

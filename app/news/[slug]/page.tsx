import { notFound } from "next/navigation";

import { ApiPath, apiRequest } from "@/utils/apiClient";
import { ArticleDetailResponse } from "@/types/responseTypes";
import { getArticleDetailQuery } from "@/utils/blogDetailQuery";

import HeroSection from "@/components/media/article-detail/HeroSection";
import ArticleDetail from "@/components/media/article-detail/ArticleDetail";

interface newsDetailParams {
  params: {
    slug: string;
  };
}

const NewsDetail = async ({ params }: newsDetailParams) => {
  const resolvedParams = await Promise.resolve(params);
  const query = getArticleDetailQuery(resolvedParams.slug);
  const { data } = await apiRequest<ArticleDetailResponse>({
    path: ApiPath.NEWS,
    queryParams: query,
  });

  if (!data.length) {
    notFound();
  }

  const newsDetailData = data[0];

  console.log("ini params", newsDetailData);
  return (
    <section>
      <HeroSection data={newsDetailData} />
      <ArticleDetail content={newsDetailData.content} />
    </section>
  );
};

export default NewsDetail;

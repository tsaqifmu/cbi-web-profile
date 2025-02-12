import { notFound } from "next/navigation";

import { ApiPath, apiRequest } from "@/utils/apiClient";
import { ArticleDetailResponse } from "@/types/responseTypes";
import { getArticleDetailQuery } from "@/utils/queries/articlesDetailQuery";

import HeroSection from "@/components/media/article-detail/HeroSection";
import ArticleDetail from "@/components/media/article-detail/ArticleDetail";
import Breadcrumb from "@/components/common/BreadScrumb";

const NewsDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const query = getArticleDetailQuery((await params).slug);
  const { data } = await apiRequest<ArticleDetailResponse>({
    path: ApiPath.NEWS,
    queryParams: query,
  });

  if (!data.length) {
    notFound();
  }

  const newsDetailData = data[0];

  return (
    <section>
      <HeroSection data={newsDetailData} />
      <Breadcrumb />

      <ArticleDetail
        content={newsDetailData.content}
        type={newsDetailData.type}
      />
    </section>
  );
};

export default NewsDetail;

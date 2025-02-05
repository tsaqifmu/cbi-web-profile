import { BlocksContent } from "@strapi/blocks-react-renderer";

import { ApiPath, apiRequest } from "@/utils/apiClient";
import { getArticlesCollectionQuery } from "@/utils/articlesCollectionQuery";

import { ArticlesCollectionResponse } from "@/types/responseTypes";

import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/media/ArticleCard";
import ContainerSection from "@/components/layout/container";
import ContainerBlog from "@/components/layout/ContainerBlog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import BlocksRendererClient from "@/components/common/BlockRendererClient";

const getApiPathByType = (type: string): ApiPath => {
  return type === "news" ? ApiPath.NEWS : ApiPath.BLOGS;
};

const OtherArticle = async ({ type }: { type: string }) => {
  try {
    const query = getArticlesCollectionQuery();
    const { data } = await apiRequest<ArticlesCollectionResponse>({
      path: getApiPathByType(type),
      queryParams: query,
    });

    return (
      <>
        <div className="mt-20 flex flex-col gap-y-6">
          <h2>Blog Lainnya</h2>
          {/* Ini buat component Link */}
          <Button className="w-fit bg-[#009933] text-sm">Lihat Semua</Button>
        </div>
        <ScrollArea>
          <div className="mt-12 flex gap-x-4 lg:gap-x-6">
            {data.map((item) => (
              <ArticleCard key={item.id} articleItemData={item} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </>
    );
  } catch (e) {
    console.error(e);
  }
};

const ArticleDetail = ({
  content,
  type,
}: {
  content: BlocksContent;
  type: string;
}) => {
  return (
    <section>
      <ContainerBlog>
        <BlocksRendererClient content={content} />
      </ContainerBlog>
      <ContainerSection>
        <OtherArticle type={type} />
      </ContainerSection>
    </section>
  );
};

export default ArticleDetail;

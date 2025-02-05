import { BlocksContent } from "@strapi/blocks-react-renderer";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { ApiPath, apiRequest } from "@/utils/apiClient";
import { getBlogCollectionQuery } from "@/utils/blogCollectionQuery";

import { BlogCollectionResponse } from "@/types/responseTypes";

import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/media/ArticleCard";
import ContainerSection from "@/components/layout/container";
import ContainerBlog from "@/components/layout/ContainerBlog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const OtherArticle = async () => {
  try {
    const query = getBlogCollectionQuery();
    const { data } = await apiRequest<BlogCollectionResponse>({
      path: ApiPath.BLOGS,
      queryParams: query,
    });

    return (
      <>
        <div className="mt-20 flex flex-col gap-y-6">
          <h2>Blog Lainnya</h2>
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

const ArticleDetail = ({ content }: { content: BlocksContent }) => {
  return (
    <section>
      <ContainerBlog>
        <BlocksRenderer content={content} />
      </ContainerBlog>
      <ContainerSection>
        <OtherArticle />
      </ContainerSection>
    </section>
  );
};

export default ArticleDetail;

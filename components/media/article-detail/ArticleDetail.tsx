// import ArticleDetailContent from "./ArticleDetailContent";

import { Button } from "@/components/ui/button";
// import ArticleCard from "@/components/media/ArticleCard";
import ContainerSection from "@/components/layout/container";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ContainerBlog from "@/components/layout/ContainerBlog";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { BlocksContent } from "@strapi/blocks-react-renderer";

const OtherArticle = () => (
  <>
    <div className="mt-20 flex flex-col gap-y-6">
      <h2>Blog Lainnya</h2>
      <Button className="w-fit bg-[#009933] text-sm">Lihat Semua</Button>
    </div>
    <ScrollArea>
      {/* <div className="mt-12 flex gap-x-4 lg:gap-x-6">
        {news.map((item) => (
          <ArticleCard key={item.id} articleItemData={item} />
        ))}
      </div> */}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </>
);

const ArticleDetail = ({ content }: { content: BlocksContent }) => {
  return (
    <section>
      <ContainerBlog>
        <BlocksRenderer content={content} />
        {/* <ArticleDetailContent /> */}
      </ContainerBlog>
      <ContainerSection>
        <OtherArticle />
      </ContainerSection>
    </section>
  );
};

export default ArticleDetail;

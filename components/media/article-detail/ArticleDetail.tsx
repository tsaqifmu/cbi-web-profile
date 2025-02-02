import ArticleDetailContent from "./ArticleDetailContent";

import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/media/ArticleCard";
import ContainerSection from "@/components/layout/container";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ContainerBlog from "@/components/layout/ContainerBlog";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const news = [
  {
    id: 1,
    title: "News Title",
    date: "12 Desember 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl: "/img-news-1.png",
  },
  {
    id: 2,
    title: "News Title",
    date: "12 Desember 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl: "/img-news-1.png",
  },
  {
    id: 3,
    title: "News Title",
    date: "12 Desember 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl: "/img-news-1.png",
  },
  {
    id: 4,
    title: "News Title",
    date: "12 Desember 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl: "/img-news-1.png",
  },
  {
    id: 5,
    title: "News Title",
    date: "12 Desember 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl: "/img-news-1.png",
  },
];

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

const ArticleDetail = ({ content }: any) => {
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

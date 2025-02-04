import ContainerSection from "@/components/layout/container";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArticleItem } from "@/types/responseTypes/dashboard/latestNews";

import ArticleCard from "./ArticleCard";

const ListArticle = ({
  news1,
  news2,
}: {
  news1: ArticleItem[];
  news2: ArticleItem[];
}) => {
  return (
    <section>
      <ContainerSection>
        <h3>Berita Lainnya</h3>

        {/* News Card */}
        <ScrollArea>
          <div className="mt-12 flex gap-x-4 pb-7 lg:gap-x-6">
            {news1.map((item) => (
              <ArticleCard key={item.id} articleItemData={item} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <ScrollArea>
          <div className="mt-12 flex gap-x-4 pb-7 md:mt-16 lg:gap-x-6">
            {news2.map((item) => (
              <ArticleCard key={item.id} articleItemData={item} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </ContainerSection>
    </section>
  );
};

export default ListArticle;

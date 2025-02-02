import NewsCard from "./NewsCard";

import ContainerSection from "@/components/layout/container";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { NewsItem } from "@/types/responseTypes/dashboard/latestNews";

const ListNews = ({
  news1,
  news2,
}: {
  news1: NewsItem[];
  news2: NewsItem[];
}) => {
  return (
    <section>
      <ContainerSection>
        <h3>Berita Lainnya</h3>

        {/* News Card */}
        <ScrollArea>
          <div className="mt-12 flex gap-x-4 pb-7 lg:gap-x-6">
            {news1.map((item) => (
              <NewsCard
                key={item.id}
                slug={item.slug}
                title={item.title}
                date={item.publishedAt}
                description={item.shortDescription}
                imageData={item.image}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <ScrollArea>
          <div className="mt-12 flex gap-x-4 pb-7 md:mt-16 lg:gap-x-6">
            {news2.map((item) => (
              <NewsCard
                key={item.id}
                slug={item.slug}
                title={item.title}
                date={item.publishedAt}
                description={item.shortDescription}
                imageData={item.image}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </ContainerSection>
    </section>
  );
};

export default ListNews;

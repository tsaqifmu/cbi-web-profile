import NewsCard from "./NewsCard";

import ContainerSection from "@/components/layout/container";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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

const ListNews = () => {
  return (
    <section>
      <ContainerSection>
        <h3>Berita Lainnya</h3>

        {/* News Card */}
        <ScrollArea>
          <div className="mt-12 flex gap-x-4 pb-7 lg:gap-x-6">
            {news.map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                date={item.date}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <ScrollArea>
          <div className="mt-12 flex gap-x-4 pb-7 md:mt-16 lg:gap-x-6">
            {news.map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                date={item.date}
                description={item.description}
                imageUrl={item.imageUrl}
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

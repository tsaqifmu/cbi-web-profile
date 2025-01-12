import Image from "next/image";
import React, { FC } from "react";

import ContainerSection from "@/components/layout/container";
import ReadMoreButton from "./ReadMoreButton";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface NewsCardProps {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
}

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

const NewsCard: FC<NewsCardProps> = ({
  imageUrl,
  title,
  date,
  description,
}) => {
  return (
    <div className="w-[280px] flex-none snap-center lg:w-[306px] xl:w-[421px]">
      <Image
        src={imageUrl}
        alt={`${title} image`}
        width={421}
        height={300}
        className="rounded-lg object-cover object-center lg:rounded-3xl"
      />

      {/* News Content */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-[#222222]">{title}</h4>
          <p>{date}</p>
        </div>
        <p>{description}</p>
      </div>

      {/* Read More Button */}
      <ReadMoreButton />
    </div>
  );
};

const ListNews = () => {
  return (
    <section>
      <ContainerSection>
        <h3>Berita Lainnya</h3>

        {/* News Card */}
        <ScrollArea>
          <div className="mt-12 flex gap-x-4 lg:gap-x-6">
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
          <div className="mt-12 flex gap-x-4 md:mt-16 lg:gap-x-6">
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

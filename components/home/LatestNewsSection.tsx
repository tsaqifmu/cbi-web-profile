"use client";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import NewsItem from "./NewsItem";
import TitleResponsive from "./TitleResponsive";

const dummyNews = [
  {
    title: "Judul berita 1",
    slug: "judul-berita-1",
    imgUrl: "/img-news-1.png",
    type: "news",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enigmatic sigma boy mannn chill dong",
  },
  {
    title: "Judul berita 2",
    slug: "judul-berita-2",
    imgUrl: "/img-news-2.png",
    type: "article",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enigmatic sigma boy mannn chill dong",
  },
  {
    title: "Judul berita 3",
    slug: "judul-berita-3",
    imgUrl: "/img-news-3.png",
    type: "news",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enigmatic sigma boy mannn chill dong",
  },
  {
    title: "Judul berita 4",
    slug: "judul-berita-4",
    imgUrl: "/img-news-4.png",
    type: "article",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enigmatic sigma boy mannn chill dong",
  },
];

const LatestNewsSection = () => {
  const [activeState, setActiveState] = useState("all");
  const news = useMemo(() => {
    if (activeState === "all") return dummyNews;
    return dummyNews.filter((item) => item.type === activeState);
  }, [activeState]);

  return (
    <>
      <section>
        <div className="mx-auto min-h-[40rem] max-w-7xl py-16 md:py-24">
          {/* Title */}
          <div className="flex flex-col justify-between gap-6 px-6 md:flex-row md:items-center lg:px-8 xl:px-0">
            <div className="flex-1">
              <TitleResponsive>Kabar Terbaru</TitleResponsive>
            </div>
            <div className="flex gap-1 text-xs lg:gap-2 lg:text-sm">
              <button
                className={cn(
                  "rounded-[1.5rem] px-3 py-2",
                  activeState === "all"
                    ? "bg-[#009933] text-white"
                    : "border border-gray-200 text-[#666]",
                )}
                onClick={() => setActiveState("all")}
              >
                Semua
              </button>
              <button
                className={cn(
                  "rounded-[1.5rem] px-3 py-2",
                  activeState === "news"
                    ? "bg-[#009933] text-white"
                    : "border border-gray-200 text-[#666]",
                )}
                onClick={() => setActiveState("news")}
              >
                Berita
              </button>
              <button
                className={cn(
                  "rounded-[1.5rem] px-3 py-2",
                  activeState === "article"
                    ? "bg-[#009933] text-white"
                    : "border border-gray-200 text-[#666]",
                )}
                onClick={() => setActiveState("article")}
              >
                Artikel
              </button>
            </div>
          </div>

          {/* News */}
          <div className="justify mt-12 flex gap-4 overflow-x-scroll ps-6 lg:overflow-hidden lg:ps-8 xl:ps-0">
            {news.map((item) => (
              <NewsItem key={item.slug} news={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNewsSection;

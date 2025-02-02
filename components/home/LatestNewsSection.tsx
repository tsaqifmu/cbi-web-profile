"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { LatestNews } from "@/types/responseTypes/dashboard/latestNews";

import NewsItem from "./NewsItem";
import ContainerSection from "../layout/container";

enum NewsType {
  ALL = "all",
  ARTICLE = "article",
  NEWS = "news",
}

const LatestNewsSection = ({ data }: { data: LatestNews }) => {
  const [activeState, setActiveState] = useState<NewsType>(NewsType.ALL);

  // Menggunakan useMemo untuk memfilter data
  const filteredNews = useMemo(() => {
    const allItems = [...data?.blogs, ...data?.news];

    switch (activeState) {
      case NewsType.ARTICLE:
        return data?.blogs;
      case NewsType.NEWS:
        return data?.news;
      default:
        return allItems;
    }
  }, [data, activeState]);

  return (
    <>
      <section>
        <ContainerSection>
          {/* Title */}
          <div className="flex flex-col justify-between gap-6 px-6 md:flex-row md:items-center lg:px-8 xl:px-0">
            <div className="flex-1">
              <h1>Kabar Terbaru</h1>
            </div>
            <div className="flex gap-1 text-xs lg:gap-2 lg:text-sm">
              <button
                className={cn(
                  "rounded-[1.5rem] px-3 py-2",
                  activeState === NewsType.ALL
                    ? "bg-[#009933] text-white"
                    : "border border-gray-200 text-[#666]",
                )}
                onClick={() => setActiveState(NewsType.ALL)}
              >
                Semua
              </button>
              <button
                className={cn(
                  "rounded-[1.5rem] px-3 py-2",
                  activeState === NewsType.NEWS
                    ? "bg-[#009933] text-white"
                    : "border border-gray-200 text-[#666]",
                )}
                onClick={() => setActiveState(NewsType.NEWS)}
              >
                Berita
              </button>
              <button
                className={cn(
                  "rounded-[1.5rem] px-3 py-2",
                  activeState === NewsType.ARTICLE
                    ? "bg-[#009933] text-white"
                    : "border border-gray-200 text-[#666]",
                )}
                onClick={() => setActiveState(NewsType.ARTICLE)}
              >
                Artikel
              </button>
            </div>
          </div>

          {/* News */}
          <div className="mt-12 flex gap-4 overflow-x-scroll ps-6 lg:overflow-hidden lg:ps-8 xl:ps-0">
            {filteredNews.map((item) => (
              <NewsItem key={item.slug} news={item} />
            ))}
          </div>
        </ContainerSection>
      </section>
    </>
  );
};

export default LatestNewsSection;

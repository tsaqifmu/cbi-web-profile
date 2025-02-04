"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { LatestNews } from "@/types/responseTypes/dashboard/latestNews";
import ContainerSection from "@/components/layout/container";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import NewsItem from "./NewsItem";

// Constants
const NEWS_TYPES = {
  ALL: "all",
  ARTICLE: "article",
  NEWS: "news",
} as const;

type NewsType = (typeof NEWS_TYPES)[keyof typeof NEWS_TYPES];

interface FilterButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

// Extracted components
const FilterButton: React.FC<FilterButtonProps> = ({
  isActive,
  onClick,
  children,
}) => (
  <button
    className={cn(
      "rounded-[1.5rem] px-3 py-2 transition-colors duration-200",
      isActive
        ? "bg-[#009933] text-white"
        : "border border-gray-200 text-[#666666] hover:bg-gray-50",
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

interface NewsFilterProps {
  activeType: NewsType;
  onTypeChange: (type: NewsType) => void;
}

const NewsFilter: React.FC<NewsFilterProps> = ({
  activeType,
  onTypeChange,
}) => (
  <div className="flex gap-1 text-xs lg:gap-2 lg:text-sm">
    <FilterButton
      isActive={activeType === NEWS_TYPES.ALL}
      onClick={() => onTypeChange(NEWS_TYPES.ALL)}
    >
      Semua
    </FilterButton>
    <FilterButton
      isActive={activeType === NEWS_TYPES.NEWS}
      onClick={() => onTypeChange(NEWS_TYPES.NEWS)}
    >
      Berita
    </FilterButton>
    <FilterButton
      isActive={activeType === NEWS_TYPES.ARTICLE}
      onClick={() => onTypeChange(NEWS_TYPES.ARTICLE)}
    >
      Artikel
    </FilterButton>
  </div>
);

interface LatestNewsSectionProps {
  data: LatestNews;
}

const LatestNewsSection: React.FC<LatestNewsSectionProps> = ({ data }) => {
  const [activeType, setActiveType] = useState<NewsType>(NEWS_TYPES.ALL);

  const filteredNews = useMemo(() => {
    const { blogs, news } = data;
    const allItems = [...blogs, ...news];

    switch (activeType) {
      case NEWS_TYPES.ARTICLE:
        return blogs;
      case NEWS_TYPES.NEWS:
        return news;
      default:
        return allItems;
    }
  }, [data, activeType]);

  return (
    <section className="w-full">
      <ContainerSection>
        <div className="flex flex-col justify-between gap-6 px-6 md:flex-row md:items-center lg:px-8 xl:px-0">
          <div className="flex-1">
            <h1>Kabar Terbaru</h1>
          </div>
          <NewsFilter activeType={activeType} onTypeChange={setActiveType} />
        </div>

        <ScrollArea className="w-full">
          <div className="mt-12 flex gap-4 pb-7 ps-6 lg:ps-8 xl:ps-0">
            {filteredNews.map((item) => (
              <NewsItem key={item.slug} article={item} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </ContainerSection>
    </section>
  );
};

export default LatestNewsSection;

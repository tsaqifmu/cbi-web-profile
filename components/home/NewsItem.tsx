import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface NewsItemProps {
  news: {
    title: string;
    slug: string;
    imgUrl: string;
    type: string;
    description: string;
  };
}

const NewsItem = ({ news }: NewsItemProps) => {
  const isTypeNews = news.type === "news";

  return (
    <article className="max-w-[310px]">
      {/* Image and label */}
      <div className="relative h-[310px] w-[310px] overflow-hidden rounded-lg border border-gray-200 lg:rounded-3xl">
        <Image
          src={news.imgUrl}
          alt="berita 1"
          width={310}
          height={310}
          className="h-full w-full object-cover"
        />

        <div
          className={cn(
            "absolute left-4 top-4 rounded-lg px-4 py-2 text-white backdrop-blur-md",
            isTypeNews
              ? "bg-[rgba(235,122,28,0.4)]"
              : "bg-[rgba(28,103,173,0.4)]",
          )}
        >
          {isTypeNews ? "Berita" : "Artikel"}
        </div>
      </div>

      {/* Title */}
      <h1 className="mt-6 line-clamp-2 text-ellipsis text-xl font-bold lg:text-2xl">
        {news.title}
      </h1>

      {/* Description */}
      <p className="mt-2 line-clamp-2 text-ellipsis text-sm text-[rgba(102,102,102,1)] lg:text-base">
        {news.description}
      </p>

      {/* Link */}
      <Link
        href="/"
        className="mt-6 flex items-center gap-4 transition duration-300 hover:text-[#009933]"
      >
        Selengkapnya <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
};

export default NewsItem;

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { getImageUrl } from "@/utils/image";
import { NewsItem as NewsItemProps } from "@/types/responseTypes/dashboard/latestNews";

const NewsItem = ({ news }: { news: NewsItemProps }) => {
  const isTypeNews = news.type === "news";

  console.log("ini data news item", news);

  return (
    <article className="max-w-[19.375rem]">
      {/* Image and label */}
      <div className="relative h-[19.375rem] w-[19.375rem] overflow-hidden rounded-lg border border-gray-200 lg:rounded-3xl">
        <Image
          src={getImageUrl(news.image.url)}
          alt={news.image.alternativeText ?? "Image article"}
          width={news.image.width}
          height={news.image.height}
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
        {news.shortDescription}
      </p>

      {/* Link */}
      <Link
        href="/"
        className="mt-6 flex items-center gap-4 transition duration-300 hover:text-[#009933]"
      >
        Selengkapnya <ArrowRight size={16} />
      </Link>
    </article>
  );
};

export default NewsItem;

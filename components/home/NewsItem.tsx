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
    <article className="max-w-72">
      {/* Image and label */}
      <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-gray-200">
        <Image
          src={news.imgUrl}
          alt="berita 1"
          width={310}
          height={310}
          className="h-full w-full object-cover"
        />

        <div
          className={cn(
            "absolute left-4 top-4 rounded-lg px-4 py-2 text-white",
            isTypeNews ? "bg-orange-300" : "bg-blue-300",
          )}
        >
          {isTypeNews ? "Berita" : "Artikel"}
        </div>
      </div>

      {/* Title */}
      <h1 className="mt-6 line-clamp-2 text-ellipsis text-2xl font-bold">
        {news.title}
      </h1>

      {/* Description */}
      <p className="mt-2 line-clamp-2 text-ellipsis text-[#666]">
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

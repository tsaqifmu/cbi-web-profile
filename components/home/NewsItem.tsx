import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { getImageUrl } from "@/utils/getImageUrl";
import { ArticleItem } from "@/types/responseTypes/article/articleItem";

// Constants
const NEWS_TYPE = {
  NEWS: "news",
  ARTICLE: "article",
} as const;

const LABEL_STYLES = {
  [NEWS_TYPE.NEWS]: "bg-[rgba(235,122,28,0.4)]",
  [NEWS_TYPE.ARTICLE]: "bg-[rgba(28,103,173,0.4)]",
} as const;

interface ArticleImageProps {
  image: ArticleItem["image"];
  type: ArticleItem["type"];
}

const ArticleImage: React.FC<ArticleImageProps> = ({ image, type }) => {
  const isTypeNews = type === NEWS_TYPE.NEWS;

  return (
    <div className="relative h-[19.375rem] w-[19.375rem] overflow-hidden rounded-lg border border-gray-200 lg:rounded-3xl">
      <Image
        src={getImageUrl(image.url)}
        alt={image.alternativeText ?? "Image article"}
        width={image.width}
        height={image.height}
        className="h-full w-full object-cover"
      />

      <div
        className={cn(
          "absolute left-4 top-4 rounded-lg px-4 py-2 text-white backdrop-blur-md",
          isTypeNews
            ? LABEL_STYLES[NEWS_TYPE.NEWS]
            : LABEL_STYLES[NEWS_TYPE.ARTICLE],
        )}
      >
        {isTypeNews ? "Berita" : "Artikel"}
      </div>
    </div>
  );
};

interface ArticleContentProps {
  title: string;
  shortDescription: string;
  slug: string;
  type: ArticleItem["type"];
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  title,
  shortDescription,
  slug,
  type,
}) => {
  const isTypeNews = type === NEWS_TYPE.NEWS;
  const linkPath = isTypeNews ? `/news/${slug}` : `/blog/${slug}`;

  return (
    <>
      <h2 className="mt-6 line-clamp-2 text-ellipsis text-xl font-bold lg:text-2xl">
        {title}
      </h2>

      <p className="mt-2 line-clamp-2 text-ellipsis text-sm lg:text-base">
        {shortDescription}
      </p>

      <Link
        href={linkPath}
        className="mt-6 flex items-center gap-4 transition-colors duration-300 hover:text-[#009933]"
      >
        Selengkapnya <ArrowRight className="h-4 w-4" />
      </Link>
    </>
  );
};

interface NewsItemComponentProps {
  article: ArticleItem;
}

const NewsItem: React.FC<NewsItemComponentProps> = ({ article }) => {
  return (
    <article className="max-w-[19.375rem]">
      <ArticleImage image={article.image} type={article.type} />
      <ArticleContent
        title={article.title}
        shortDescription={article.shortDescription}
        slug={article.slug}
        type={article.type}
      />
    </article>
  );
};

export default NewsItem;

import { FC } from "react";
import Image from "next/image";

import ReadMoreButton from "./ReadMoreButton";
import { getImageUrl } from "@/utils/image";
import { formatDate } from "@/utils/formatDate";
import { ArticleItem } from "@/types/responseTypes/dashboard/latestNews";

const ArticleCard = ({ articleItemData }: { articleItemData: ArticleItem }) => {
  const linkPath =
    articleItemData.type === "news"
      ? `/news/${articleItemData.slug}`
      : `/blog/${articleItemData.slug}`;

  return (
    <div className="w-[280px] flex-none snap-center lg:w-[306px] xl:w-[421px]">
      <Image
        src={getImageUrl(articleItemData.image.url)}
        alt={articleItemData.image.alternativeText ?? "Article image"}
        width={articleItemData.image.width}
        height={articleItemData.image.height}
        className="rounded-lg object-cover object-center lg:rounded-3xl"
      />

      {/* News Content */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-[#222222]">
            {articleItemData.title}
          </h4>
          <p>{formatDate(articleItemData.publishedAt)}</p>
        </div>
        <p>{articleItemData.shortDescription}</p>
      </div>

      {/* Read More Button */}
      <ReadMoreButton link={linkPath} />
    </div>
  );
};

export default ArticleCard;

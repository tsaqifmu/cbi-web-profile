import { FC } from "react";
import Image from "next/image";

import ReadMoreButton from "./ReadMoreButton";
import { Image as ImageType } from "@/types/responseTypes/image";
import { getImageUrl } from "@/utils/image";
import { formatDate } from "@/utils/formatDate";

interface NewsCardProps {
  imageData: ImageType;
  slug: string;
  title: string;
  date: string;
  description: string;
}

const NewsCard: FC<NewsCardProps> = ({
  imageData,
  slug,
  title,
  date,
  description,
}) => {
  return (
    <div className="w-[280px] flex-none snap-center lg:w-[306px] xl:w-[421px]">
      <Image
        src={getImageUrl(imageData.url)}
        alt={imageData.alternativeText ?? "Article image"}
        width={imageData.width}
        height={imageData.height}
        className="rounded-lg object-cover object-center lg:rounded-3xl"
      />

      {/* News Content */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-[#222222]">{title}</h4>
          <p>{formatDate(date)}</p>
        </div>
        <p>{description}</p>
      </div>

      {/* Read More Button */}
      <ReadMoreButton link={`/news/${slug}`} />
    </div>
  );
};

export default NewsCard;

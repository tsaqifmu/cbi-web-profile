import { FC } from "react";
import Image from "next/image";

import ReadMoreButton from "./ReadMoreButton";

interface NewsCardProps {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
}

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

export default NewsCard;

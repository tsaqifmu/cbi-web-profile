import React from "react";
import Image from "next/image";

import { getImageUrl } from "@/utils/image";
import { formatDate } from "@/utils/formatDate";
import ContainerSection from "@/components/layout/container";
import { ArticleItem } from "@/types/responseTypes/dashboard/latestNews";

import ShareButtons from "./ShareButtons";
import ReadMoreButton from "./ReadMoreButton";

const ArticleContent = ({ content }: { content: ArticleItem }) => {
  const linkPath =
    content.type === "news" ? `/news/${content.slug}` : `/blog/${content.slug}`;
  return (
    <div className="md:w-1/2">
      <div className="mt-4 space-y-2">
        <p>{formatDate(content.publishedAt)}</p>
        <h3>{content.title}</h3>
        <p>{content.shortDescription}</p>
      </div>

      {/* Read More Button */}
      <ReadMoreButton link={linkPath} />

      {/* Share Button List */}
      <div className="mt-6">
        <p className="text-sm font-medium text-[#222222] xl:text-base">
          Bagikan Melalui
        </p>
        {/* List Socmed Icons */}
        <ShareButtons
          title={"Article"}
          url={"http://localhost:3000/" + `/${content.type}/${content.slug}`} // Jangan lupa diganti dengan url article yang mau di copy
        />
      </div>
    </div>
  );
};

const MainArticle = ({ data }: { data: ArticleItem }) => {
  return (
    <section>
      <ContainerSection className="md:flex md:gap-x-9">
        {/* Article Image */}
        <Image
          src={getImageUrl(data?.image?.url)}
          alt={data.image.alternativeText ?? "Headline image"}
          width={data.image.width}
          height={data.image.height}
          className="rounded-lg object-cover md:w-1/2 lg:rounded-3xl"
        />

        {/* Article Content */}
        <ArticleContent content={data} />
      </ContainerSection>
    </section>
  );
};

export default MainArticle;

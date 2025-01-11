import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import ShareButtons from "./ShareButtons";
import ContainerSection from "@/components/layout/container";

const ArticleContent = () => (
  <div className="md:w-1/2">
    <div className="mt-4 space-y-2">
      <p>13 Desember 2024</p>
      <h3>News Title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Suspendisse varius enim in eros.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse varius enim in eros.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
        eros....
      </p>
    </div>

    {/* Button  */}
    <button className="mt-5 flex items-center gap-x-2 text-sm font-normal text-[#009933] transition-all hover:-translate-y-1 xl:text-base">
      <span>Selengkapnya</span>
      <ArrowRight size={14} />
    </button>

    {/* Share Button List */}
    <div className="mt-6">
      <p className="text-sm font-medium text-[#222222] xl:text-base">
        Bagikan Melalui
      </p>
      {/* List Socmed Icons */}
      <ShareButtons
        title={"Article"}
        url={"https://lucide.dev/icons/arrow-right"} // Jangan lupa diganti dengan url article yang mau di copy
      />
    </div>
  </div>
);

const MainNews = () => {
  return (
    <section>
      <ContainerSection className="md:flex md:gap-x-9">
        {/* Article Image */}
        <Image
          src={"/news-1.png"}
          alt="news image"
          width={656}
          height={500}
          className="rounded-lg object-cover lg:w-1/2"
        />

        {/* Article Content */}
        <ArticleContent />
      </ContainerSection>
    </section>
  );
};

export default MainNews;

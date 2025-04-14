import { FC } from "react";
import { notFound } from "next/navigation";

import LinkGreen from "./LinkGreen";
import { Headline } from "@/types/responseTypes/headline";
import { Image } from "@/types/responseTypes/image";

const BackgroundVideo = ({ videoData }:{videoData?:Image}) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-500"
    >
      <source src={`${process.env.NEXT_PUBLIC_URL_API}${videoData?.url}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

interface HeroTitleProps {
  title: string;
}

const HeroTitle: FC<HeroTitleProps> = ({ title }) => {
  return (
    <div className="w-fit max-w-lg">
      <h1 className="text-[#FDFDFD]">{title}</h1>
    </div>
  );
};

interface HeroDescriptionProps {
  description: string;
  ctaText: string;
}

const HeroDescription: FC<HeroDescriptionProps> = ({
  description,
  ctaText,
}) => {
  return (
    <div className="flex flex-col gap-6 lg:w-[23.75rem] xl:w-[31.25rem]">
      <p className="text-[#FDFDFD]">{description}</p>
      <LinkGreen href="/product">{ctaText}</LinkGreen>
    </div>
  );
};

const HeroSection = async ({ data }: { data: Headline }) => {
  try {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <BackgroundVideo videoData={data.image} />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Multi-step Blur Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-96 backdrop-blur-lg [mask:linear-gradient(transparent,white,white)]" />

        {/* Main Content*/}
        <div className="absolute bottom-0 left-1/2 z-10 mx-auto flex w-full max-w-7xl -translate-x-1/2 flex-col gap-4 px-6 pb-24 md:flex-row md:items-end md:justify-between lg:px-8 xl:px-0">
          <HeroTitle title={data.title} />
          <HeroDescription
            description={data.description}
            ctaText={data.ctaText}
          />
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching hero section data:", error);

    notFound();
  }
};

export default HeroSection;

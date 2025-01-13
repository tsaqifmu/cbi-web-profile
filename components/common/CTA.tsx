import { FC } from "react";
import LinkGreen from "@/components/home/LinkGreen";

interface CTASectionProps {
  backgroundImage?: string;
  content: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
}

const CTASection: FC<CTASectionProps> = ({
  backgroundImage = "CTA-tentang-kami.png",
  content,
  buttonText = "Hubungi Kami",
  buttonHref = "/career",
}) => {
  return (
    <div className="relative flex h-[25rem] w-full items-center justify-center overflow-hidden rounded-3xl bg-cover bg-bottom bg-no-repeat md:h-[22.5rem] xl:h-[25rem]">
      {/* Background image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-right-top bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-[#171717]/80" />

      {/* Content */}
      <div className="absolute z-20 xl:p-12">
        <div className="h-full items-center justify-between p-12 md:flex">
          {content}
          <div className="mt-6">
            <LinkGreen href={buttonHref} withArrow={false}>
              {buttonText}
            </LinkGreen>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

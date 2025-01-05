"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface ProductCardProps {
  bgUrl: string;
  title: string;
  title2: string;
  color: string;
  color2: string;
  url: string;
}

const ProductCard = ({
  bgUrl,
  title,
  title2,
  color,
  color2,
  url,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-[320px] w-full overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat shadow-lg transition-all duration-300 xl:h-[442px]"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHovered ? "opacity-70" : "opacity-0"
        }`}
        style={{
          background: `linear-gradient(to bottom, ${color}  0%, ${color2} 100%)`,
        }}
      />

      {/* Bottom text with blur */}
      <div className="absolute bottom-0 left-0 right-0 h-full">
        <div
          className={`absolute bottom-0 h-[50%] w-full backdrop-blur-lg [mask:linear-gradient(transparent,white,white)] group-hover:backdrop-blur-none group-hover:[mask:none]`}
        ></div>
        <div
          className={`absolute flex flex-col gap-6 px-8 py-8 text-white transition-all duration-500 ${
            isHovered
              ? "bottom-0 left-0 right-0 -translate-y-[1rem] xl:-translate-y-[2rem]"
              : "bottom-0 left-0 right-0"
          }`}
        >
          <p className="max-w-60 text-2xl font-bold text-[rgba(253,253,253,1)] lg:max-w-xs xl:text-3xl">
            {isHovered ? title2 : title}
          </p>

          {isHovered && (
            <Link
              href={url}
              className="flex w-fit items-center gap-2 px-3 py-2 backdrop-blur-md transition-colors duration-300"
              style={
                {
                  "&:hover": {
                    color: color,
                  },
                } as React.CSSProperties
              }
              onMouseEnter={(e) => (e.currentTarget.style.color = color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              Selengkapnya <ArrowRight className="h-3 w-3" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

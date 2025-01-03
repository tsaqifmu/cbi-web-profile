"use client";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

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
      className="relative h-full min-h-96 w-full overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat shadow-lg transition-all duration-300"
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
          className={`absolute bottom-0 h-[50%] w-full backdrop-blur-lg [mask:linear-gradient(transparent,white,white)] hover:backdrop-blur-none hover:[mask:none]`}
        ></div>
        <div
          className={`absolute flex flex-col gap-6 p-12 text-white transition-all duration-500 ${
            isHovered
              ? "bottom-1/2 left-0 right-0 translate-y-2/3"
              : "bottom-0 left-0 right-0"
          }`}
        >
          <p className="text-3xl font-bold">{isHovered ? title2 : title}</p>

          {isHovered && (
            <Link
              href={url}
              className={`flex w-fit items-center gap-4 duration-300 hover:text-[${color}]`}
            >
              Selengkapnya <ArrowRight className="h-6 w-6" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

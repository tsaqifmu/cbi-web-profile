import React from "react";

interface TitleResponsiveProps {
  children: React.ReactNode;
}

const TitleResponsive = ({ children }: TitleResponsiveProps) => {
  return (
    <h1 className="text-[32px] font-bold lg:text-4xl xl:text-5xl">
      {children}
    </h1>
  );
};

export default TitleResponsive;

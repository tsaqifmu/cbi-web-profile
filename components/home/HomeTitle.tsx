import React from "react";

interface HomeTitleProps {
  children: React.ReactNode;
}

const HomeTitle = ({ children }: HomeTitleProps) => {
  return <h1 className="text-4xl font-bold lg:text-5xl">{children}</h1>;
};

export default HomeTitle;

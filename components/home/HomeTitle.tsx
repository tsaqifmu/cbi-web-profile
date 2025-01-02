import React from "react";

interface HomeTitleProps {
  children: React.ReactNode;
}

const HomeTitle = ({ children }: HomeTitleProps) => {
  return <h1 className="text-4xl font-bold">{children}</h1>;
};

export default HomeTitle;

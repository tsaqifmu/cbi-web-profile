import React from "react";

import { cn } from "@/lib/utils";

interface DescriptionResponsiveProps {
  children: React.ReactNode;
  className?: string;
}

const DescriptionResponsive = ({
  children,
  className,
}: DescriptionResponsiveProps) => {
  return (
    <p className={cn("text-sm lg:text-base xl:text-lg", className)}>
      {children}
    </p>
  );
};

export default DescriptionResponsive;

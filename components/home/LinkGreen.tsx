import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LinkGreenProps {
  children: React.ReactNode;
  href: string;
  withArrow?: boolean;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
}

const LinkGreen = ({
  children,
  href,
  withArrow = true,
  className,
  target,
}: LinkGreenProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "flex w-fit items-center gap-2 rounded-[0.5rem] bg-[#009933] px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-green-700 lg:text-base xl:text-xl",
        className,
      )}
    >
      <span>{children}</span> {withArrow && <ArrowRight size={16} />}
    </Link>
  );
};

export default LinkGreen;

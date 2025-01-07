import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LinkGreenProps {
  children: React.ReactNode;
  href: string;
  withArrow?: boolean;
  className?: string;
}

const LinkGreen = ({
  children,
  href,
  withArrow = true,
  className,
}: LinkGreenProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex w-fit items-center gap-2 rounded-[0.5rem] bg-[#009933] px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-green-700 lg:text-base xl:text-xl",
        className,
      )}
    >
      <span>{children}</span> {withArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
};

export default LinkGreen;

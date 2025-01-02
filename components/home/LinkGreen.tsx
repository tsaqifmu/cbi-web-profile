import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface LinkGreenProps {
  children: React.ReactNode;
  href: string;
}

const LinkGreen = ({ children, href }: LinkGreenProps) => {
  return (
    <Link
      href={href}
      className="flex w-fit items-center gap-4 rounded-lg bg-[#009933] px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-green-700"
    >
      <span>{children}</span> <ArrowRight className="h-4 w-4" />
    </Link>
  );
};

export default LinkGreen;

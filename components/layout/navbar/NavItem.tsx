import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  isMobile?: boolean;
}

const NavItem: FC<NavItemProps> = ({ href, label, isMobile }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="list-none">
      <Link
        href={href}
        className={cn(
          "text-base font-normal transition-all duration-200",
          isMobile && "mb-4",
          isActive && "font-bold underline underline-offset-4",
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;

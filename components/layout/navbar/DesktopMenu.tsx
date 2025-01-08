import { FC } from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";

import { navLinks } from "@/constants";
import NavItem from "@/components/layout/navbar/NavItem";

const LanguageSelector: FC = () => (
  <button className="flex items-center gap-x-1 transition-transform hover:scale-105">
    <Image
      src="/Indonesia.svg"
      alt="Indonesian language"
      width={24}
      height={24}
    />
    <ChevronDown className="h-4 w-4" />
  </button>
);

const ButtonSearchNavbar: FC = () => (
  <button aria-label="Search" className="transition-transform hover:scale-105">
    <Search className="h-6 w-6" />
  </button>
);

const DesktopMenu: FC = () => {
  return (
    <div className="hidden w-full items-center justify-between transition-all lg:flex">
      <nav className="mx-4 flex-1">
        <ul className="flex w-full justify-center gap-x-5">
          {navLinks.map((nav) => (
            <NavItem key={nav.id} href={nav.route} label={nav.title} />
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-x-11">
        <LanguageSelector />
        <ButtonSearchNavbar />
      </div>
    </div>
  );
};

export default DesktopMenu;

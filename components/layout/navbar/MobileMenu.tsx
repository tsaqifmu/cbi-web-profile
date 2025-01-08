import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { CircleX, Menu } from "lucide-react";
import React, { FC } from "react";
import NavItem from "./NavItem";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="lg:hidden">
      <Button
        onClick={onToggle}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        className="transition-transform hover:scale-105"
      >
        {isOpen ? <CircleX /> : <Menu />}
      </Button>

      <nav className={cn("mobileMenu sidebar", isOpen ? "flex" : "hidden")}>
        <ul className="flex list-none flex-col items-center space-y-4">
          {navLinks.map((nav) => (
            <NavItem key={nav.id} href={nav.route} label={nav.title} isMobile />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;

"use client";

import { FC } from "react";
import { Menu } from "lucide-react";

import { navLinks } from "@/constants";
import { Button } from "@/components/ui/button";
import NavItem from "@/components/layout/navbar/NavItem";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  const pathname = usePathname();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={onToggle}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className="transition-transform hover:scale-105 lg:hidden"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="p-8 text-sm font-normal text-[#FDFDFD]">
            <ul className="flex w-full flex-col justify-center gap-y-6">
              <li className="list-none">
                <Link
                  href="/"
                  className={cn(
                    "text-base font-normal transition-all duration-200",
                    pathname === "/" &&
                      "font-bold underline underline-offset-4",
                  )}
                >
                  Dashboard
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/about-us"
                  className={cn(
                    "text-base font-normal transition-all duration-200",
                    pathname === "/about-us" &&
                      "font-bold underline underline-offset-4",
                  )}
                >
                  Tentang Kami
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/product"
                  className={cn(
                    "text-base font-normal transition-all duration-200",
                    pathname === "/product" &&
                      "font-bold underline underline-offset-4",
                  )}
                >
                  Produk & Layanan
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/news"
                  className={cn(
                    "text-base font-normal transition-all duration-200",
                    pathname === "/news" &&
                      "font-bold underline underline-offset-4",
                  )}
                >
                  Media & Informasi
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/contact"
                  className={cn(
                    "text-base font-normal transition-all duration-200",
                    pathname === "/contact" &&
                      "font-bold underline underline-offset-4",
                  )}
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;

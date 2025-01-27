import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { MEDIA_LINKS, PRODUCT_LINKS } from "@/constants";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationLink } from "@/components/layout/navbar/NavigationLink";
import { AccordionMenu } from "@/components/layout/navbar/mobile/AccordionMenu";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  const pathname = usePathname();
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);

  const toggleProduct = () => setIsProductOpen((prev) => !prev);
  const toggleMedia = () => setIsMediaOpen((prev) => !prev);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          onClick={onToggle}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className="transition-transform hover:scale-105 lg:hidden"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
        </SheetHeader>
        <div className="p-8 text-sm font-normal text-[#FDFDFD]">
          <ul className="flex w-full flex-col justify-center gap-y-6">
            <li className="list-none">
              <NavigationLink href="/" isActive={pathname === "/"}>
                Beranda
              </NavigationLink>
            </li>

            <li className="list-none">
              <NavigationLink
                href="/about-us"
                isActive={pathname === "/about-us"}
              >
                Tentang Kami
              </NavigationLink>
            </li>

            <AccordionMenu
              title="Produk & Layanan"
              isOpen={isProductOpen}
              onToggle={toggleProduct}
              links={PRODUCT_LINKS}
              currentPath={pathname}
              href="/product"
            />

            <AccordionMenu
              title="Media & Informasi"
              isOpen={isMediaOpen}
              onToggle={toggleMedia}
              links={MEDIA_LINKS}
              currentPath={pathname}
            />

            <li className="list-none">
              <NavigationLink
                href="/contact"
                isActive={pathname === "/contact"}
              >
                Kontak
              </NavigationLink>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

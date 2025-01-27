import { FC, useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MEDIA_LINKS, PRODUCT_LINKS } from "@/constants";

import { SearchButton } from "@/components/layout/navbar/desktop/SearchButton";
import { DropdownMenu } from "@/components/layout/navbar/desktop/DropdownMenu";
import { NavigationLink } from "@/components/layout/navbar/NavigationLink";
import { LanguageSelector } from "@/components/layout/navbar/desktop/LanguageSelector";

const NavigationMenu: FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
  return (
    <nav className="mx-4 flex-1">
      <ul className="flex w-full justify-center gap-x-5">
        <li className="flex items-center gap-x-1">
          <NavigationLink href="/" isActive={pathname === "/"}>
            Beranda
          </NavigationLink>
        </li>

        <li className="flex items-center gap-x-1">
          <NavigationLink href="/about-us" isActive={pathname === "/about-us"}>
            Tentang Kami
          </NavigationLink>
        </li>

        <li className="relative flex items-center gap-x-1">
          <NavigationLink href="/product" isActive={pathname === "/product"}>
            Produk & Layanan
          </NavigationLink>
          <Button
            variant="link"
            onClick={() => toggleDropdown("products")}
            className={cn(
              "transform p-0 transition-transform duration-500 ease-in-out",
              activeDropdown === "products" && "rotate-180",
            )}
          >
            <ChevronDown className="h-5 w-5 text-white" />
          </Button>
          <DropdownMenu
            isOpen={activeDropdown === "products"}
            links={PRODUCT_LINKS}
          />
        </li>

        <li className="relative flex items-center gap-x-1">
          <Button
            variant="link"
            onClick={() => toggleDropdown("media")}
            className={cn(
              "p-0 text-base font-normal text-[#FDFDFD] underline-offset-4 hover:underline",
              pathname === "/media" && "font-bold underline underline-offset-4",
            )}
          >
            Media & Informasi
            <ChevronDown
              className={cn(
                "h-5 w-5 text-white transition-transform duration-500",
                activeDropdown === "media" && "rotate-180",
              )}
            />
          </Button>
          <DropdownMenu
            isOpen={activeDropdown === "media"}
            links={MEDIA_LINKS}
          />
        </li>

        <li className="flex items-center gap-x-1">
          <NavigationLink href="/contact" isActive={pathname === "/contact"}>
            Kontak
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
};

const DesktopMenu: FC = () => {
  return (
    <div className="hidden w-full items-center justify-between transition-all lg:flex">
      <NavigationMenu />

      <div className="flex items-center gap-x-11">
        <LanguageSelector />
        <SearchButton />
      </div>
    </div>
  );
};

export default DesktopMenu;

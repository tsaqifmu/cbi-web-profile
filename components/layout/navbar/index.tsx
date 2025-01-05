"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => (
  <Link href="/" className={className}>
    <Image
      src="/logo CBI navbar.png"
      width={166.5}
      height={36}
      alt="CBI Logo"
      priority
    />
  </Link>
);

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="absolute top-9 z-50 flex w-full items-center justify-center px-9">
      <header className="flex h-20 w-full max-w-7xl items-center justify-between rounded-[32px] bg-[#FDFDFD33] px-6 py-4 text-[#FDFDFD] backdrop-blur-md">
        <Logo />
        <MobileMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
        <DesktopMenu />
      </header>
    </div>
  );
};

export default Navbar;

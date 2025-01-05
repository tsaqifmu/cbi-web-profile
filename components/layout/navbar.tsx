"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { ChevronDown, CircleX, Menu, Search } from "lucide-react";

import { navLinks } from "@/constants";

interface navItem {
  href: string;
  label: string;
  isMobile: boolean;
}

interface MobileMenuProps {
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}

const NavItem = ({ href, label, isMobile }: navItem) => (
  <li className={`${isMobile ? "mb-4" : "text-base font-bold"}`}>
    <Link href={`/${href}`}>{label}</Link>
  </li>
);

const Logo = () => (
  <Link href="/" className="lg:hidden">
    <Image
      src={"/logo CBI navbar.png"}
      width={166.5}
      height={36}
      alt="logo cbi"
    />
  </Link>
);

const MobileMenu = ({ toggleMenu, setToggleMenu }: MobileMenuProps) => (
  <div className="lg:hidden">
    <button onClick={() => setToggleMenu((prev) => !prev)}>
      {toggleMenu ? <CircleX /> : <Menu />}
    </button>

    <nav className={`${toggleMenu ? `flex` : `hidden`} mobileMenu sidebar`}>
      <ul className="list-none flex-col text-center">
        {navLinks.map((nav) => (
          <NavItem
            href={nav.id}
            label={nav.title}
            key={nav.id}
            isMobile={true}
          />
        ))}
      </ul>
      <div className="transition-all hover:-translate-y-1"></div>
    </nav>
  </div>
);

const DesktopMenu = () => (
  <div className="hidden w-full transition-all lg:flex lg:items-center lg:justify-between">
    <Link href="/">
      <Image
        src={"/logo CBI navbar.png"}
        width={166.5}
        height={36}
        alt="logo cbi"
      />
    </Link>
    <nav>
      <ul className={`flex w-full justify-end gap-x-7`}>
        {navLinks.map((nav) => (
          <NavItem
            href={nav.id}
            label={nav.title}
            key={nav.id}
            isMobile={false}
          />
        ))}
      </ul>
    </nav>
    <div className="flex space-x-11">
      <div className="flex space-x-1">
        <Image src={"/Indonesia.svg"} alt="indonesia" width={24} height={24} />
        <ChevronDown />
      </div>
      <Search />
    </div>
  </div>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    // <ContainerPage className=''>
    <div className="absolute top-9 z-50 flex w-full items-center justify-center px-9 font-jakartaSans">
      <header className="flex h-[80px] w-full items-center justify-between rounded-[32px] bg-[#FDFDFD33] px-6 py-4 text-white shadow-xl backdrop-blur-md xl:max-w-7xl">
        <Logo />
        {/* FOR MOBILE LAYOUT*/}
        <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

        {/* FOR DESKTOP LAYOUT*/}
        <DesktopMenu />
      </header>
    </div>
    // </ContainerPage>
  );
};

export default NavBar;

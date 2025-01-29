export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/" },
  { label: "Terms of Service", href: "/" },
  { label: "Cookies Settings", href: "/" },
];

export const SOCIAL_LINKS = [
  { icon: "/Facebook.svg", href: "/", alt: "facebook" },
  { icon: "/Instagram.svg", href: "/", alt: "instagram" },
  { icon: "/LinkedIn.svg", href: "/", alt: "linkedin" },
  { icon: "/Youtube.svg", href: "/", alt: "youtube" },
];

export interface NavigationLink {
  label: string;
  href: string;
}

export const COMPANY_LINKS: NavigationLink[] = [
  { label: "Tentang Kami", href: "/about-us" },
  { label: "Media & Informasi", href: "/news" },
  { label: "Karir", href: "/career" },
  { label: "Hubungi Kami", href: "/contact" },
];

export const PRODUCT_LINKS: NavigationLink[] = [
  { label: "Pertanian", href: "/product/agriculture" },
  { label: "Peternakan", href: "/product/livestock" },
  { label: "Perikanan", href: "/product/fishery" },
  { label: "Dokter Tani", href: "/" },
];

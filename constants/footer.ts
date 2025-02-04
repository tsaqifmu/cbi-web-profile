export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/" },
  { label: "Terms of Service", href: "/" },
  { label: "Cookies Settings", href: "/" },
];

export const SOCIAL_LINKS = [
  {
    icon: "/Facebook.svg",
    href: "https://www.facebook.com/profile.php?id=61552413907665",
    alt: "facebook",
  },
  {
    icon: "/Instagram.svg",
    href: "https://www.instagram.com/centrabiotechindonesia/?utm_source=ig_web_button_share_sheet",
    alt: "instagram",
  },
  {
    icon: "/LinkedIn.svg",
    href: "https://www.linkedin.com/company/pt-centra-biotech-indonesia/",
    alt: "linkedin",
  },
  {
    icon: "/Youtube.svg",
    href: "https://www.youtube.com/@centrabiotechindonesia",
    alt: "youtube",
  },
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

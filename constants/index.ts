export const navLinks = [
  {
    id: "dashboard",
    title: "Beranda",
    route: "/",
  },
  {
    id: "about-us",
    title: "Tentang Kami",
    route: "/about-us",
  },
  {
    id: "store",
    title: "Produk & Layanan",
    route: "/product",
  },
  {
    id: "laporan",
    title: "Media & Informasi",
    route: "/news",
  },

  {
    id: "artikel",
    title: "Kontak",
    route: "/contact",
  },
];

export type Platform = "facebook" | "twitter" | "linkedin" | "whatsapp";

interface ShareIcon {
  id: number;
  name: Platform; // Changed from string to Platform
  url: string;
}

export const listIcon: ShareIcon[] = [
  {
    id: 1,
    name: "linkedin",
    url: "/share-icon/linkedin.svg",
  },
  {
    id: 2,
    name: "twitter",
    url: "/share-icon/x.svg",
  },
  {
    id: 3,
    name: "facebook",
    url: "/share-icon/facebook.svg",
  },
  {
    id: 4,
    name: "whatsapp",
    url: "/share-icon/whatsapp.svg",
  },
];

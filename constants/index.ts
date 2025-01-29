// types.ts
interface NavigationLink {
  title: string;
  href: string;
}

// constants/navigation.ts
export const PRODUCT_LINKS: NavigationLink[] = [
  { title: "Pertanian", href: "/product/agriculture" },
  { title: "Peternakan", href: "/product/livestock" },
  { title: "Perikanan", href: "/product/fishery" },
];

export const MEDIA_LINKS: NavigationLink[] = [
  { title: "Berita", href: "/news" },
  { title: "Blog", href: "/blog" },
  { title: "Brosur & Dokumen", href: "/documents" },
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

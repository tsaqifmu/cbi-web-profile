import { BannerCTA } from "@/types/responseTypes/bannerCTA";
import { Headline } from "@/types/responseTypes/headline";
import { WhySection } from "@/types/responseTypes/dashboard/whySection";

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    medium?: ImageFormat;
    small?: ImageFormat;
    large?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Product {
  id: number;
  documentId: string;
  title: string;
  description: string;
  url: string;
  color1: string;
  color2: string;
  image: Image;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductsSection {
  id: number;
  title: string;
  description: string | null;
  ctaText: string | null;
  products: Product[];
}

interface Service {
  id: number;
  documentId: string;
  title: string;
  image: Image;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ServicesSection {
  id: number;
  title: string;
  description: string;
  services: Service[];
}

export interface ProductAndServiceData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  headline: Headline;
  whySection: WhySection;
  productsSection: ProductsSection;
  servicesSection: ServicesSection;
  bannerCTA: BannerCTA;
}

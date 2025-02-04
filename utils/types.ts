import { BannerContactSection } from "@/types/responseTypes/dashboard/bannerContact";
import { Headline } from "@/types/responseTypes/dashboard/headline";
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
  bannerContactSection: BannerContactSection;
}

export interface ProductAndServiceResponse {
  data: ProductAndServiceData;
  meta: Record<string, never>;
}

// AGRICULTURE
export interface AgricultureWhySection {
  id: number;
  why1: AgricultureWhyItem;
  why2: AgricultureWhyItem;
  why3: AgricultureWhyItem;
}

export interface AgricultureWhyItem {
  id: number;
  title: string;
  description: string;
  image: Image;
}

export interface AboutSection {
  id: number;
  title: string;
  description: string;
}

export interface ProductItem {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

export interface ProductCategory {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  product_items: ProductItem[];
}

export interface AgricultureData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  headline: Headline;
  aboutSection: AboutSection;
  whySection: AgricultureWhySection;
  productCategoriesSection: ProductCategory[];
  bannerContactSection: BannerContactSection;
}

export interface ProductAgricultureResponse {
  data: AgricultureData;
  meta: Record<string, never>;
}

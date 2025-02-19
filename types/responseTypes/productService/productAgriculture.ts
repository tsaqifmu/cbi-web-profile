import { Image } from "../image";
import { Headline } from "../headline";
import { BannerCTA } from "../bannerCTA";

export interface AgricultureWhyItem {
  id: number;
  title: string;
  description: string;
  image: Image;
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

export interface AboutSection {
  id: number;
  title: string;
  description: string;
}

// AGRICULTURE
export interface AgricultureWhySection {
  id: number;
  why1: AgricultureWhyItem;
  why2: AgricultureWhyItem;
  why3: AgricultureWhyItem;
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
  bannerCTA: BannerCTA;
}

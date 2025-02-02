import { BannerContactSection } from "@/types/responseTypes/dashboard/bannerContact";
import { Headline } from "@/types/responseTypes/dashboard/headline";
import { WhySection } from "@/types/responseTypes/dashboard/whySection";

// export interface ProductService {
//   id: number;
//   title: string;
//   description: string;
//   ctaText: string;
//   products: Product[];
// }

// export interface OurImpact {
//   id: number;
//   title: string;
//   description: string;
//   product1image: Image;
//   product1bgimage: Image;
//   product2image: Image;
//   product2bgimage: Image;
// }

// export interface BannerContact {
//   id: number;
//   title: string;
//   ctaText: string;
//   image: Image;
// }

// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   image: Image;
//   url: string;
//   color1: string;
//   color2: string;
//   documentId: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
// }

// export interface Data {
//   id: number;
//   documentId: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;

//   headline: Headline;
//   whySection: WhySection;
//   productService: ProductService;
//   ourImpact: OurImpact;
//   latestNews: LatestNews;
//   bannerContact: BannerContact;
// }
// interface ContentChild {
//   type: string;
//   text: string;
//   bold?: boolean;
// }
// interface ImageType {
//   name: string;
//   alternativeText: string;
//   url: string;
//   caption: string | null;
//   width: number;
//   height: number;
//   formats: {
//     thumbnail: ImageFormat;
//   };
//   hash: string;
//   ext: string;
//   mime: string;
//   size: number;
//   previewUrl: string | null;
//   provider: string;
//   provider_metadata: any;
//   createdAt: string;
//   updatedAt: string;
// }
// interface ContentBlock {
//   type: string;
//   children: ContentChild[];
//   level?: number;
//   image?: ImageType;
// }
// export interface Article {
//   id: number;
//   documentId: string;
//   title: string;
//   shortDescription: string;
//   content: ContentBlock[];
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   slug: string;
//   type?: string; // Opsional karena hanya ada di beberapa artikel
// }
// export interface LatestNews {
//   id: number;
//   blogs: Article[];
//   news: Article[];
// }

// export interface DashboardResponse {
//   data: Data;
//   meta: Record<string, never>;
// }

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

// export interface WhySection {
//   id: number;
//   title: string;
//   description: string;
//   image: Image;
// }

interface Product {
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

interface ProductsSection {
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

interface ServicesSection {
  id: number;
  title: string;
  description: string;
  services: Service[];
}

// export interface BannerContactSection {
//   id: number;
//   title: string;
//   ctaText: string;
//   image: Image;
// }

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

// export interface BannerContactSection {
//   id: number;
//   title: string;
//   ctaText: string;
//   image: Image;
// }

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

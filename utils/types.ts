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

export interface Headline {
  id: number;
  title: string;
  description: string;
  ctaText: string;
}

export interface WhySection {
  id: number;
  title: string;
  description: string;
  image: Image;
}

export interface ProductService {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  agricultureImage: Image;
  livestockImage: Image;
  fisheryImage: Image;
}

export interface OurImpact {
  id: number;
  title: string;
  description: string;
  product1image: Image;
  product1bgimage: Image;
  product2image: Image;
  product2bgimage: Image;
}

export interface BannerContact {
  id: number;
  title: string;
  ctaText: string;
  image: Image;
}

export interface Data {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  headline: Headline;
  whySection: WhySection;
  productService: ProductService;
  ourImpact: OurImpact;
  bannerContact: BannerContact;
}

export interface DashboardResponse {
  data: Data;
  meta: Record<string, never>;
}

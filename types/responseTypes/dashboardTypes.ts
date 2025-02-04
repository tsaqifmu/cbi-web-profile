import { Headline } from "./dashboard/headline";
import { OurImpact } from "./dashboard/ourImpact";
import { LatestNews } from "./dashboard/latestNews";
import { WhySection } from "./dashboard/whySection";
import { ProductService } from "./dashboard/productService";
import { BannerContactSection } from "./dashboard/bannerContact";

export interface Data {
  // Strapi default data
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  // Section type
  headline: Headline;
  whySection: WhySection;
  productService: ProductService;
  ourImpact: OurImpact;
  latestNews: LatestNews;
  bannerContact: BannerContactSection;
}

import { Headline } from "../headline";
import { OurImpact } from "./ourImpact";
import { LatestNews } from "./latestNews";
import { WhySection } from "./whySection";
import { ProductService } from "./productService";
import { BannerContactSection } from "../bannerContact";

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

import { BannerContactSection } from "./bannerContact";
import { ArticleItem } from "./dashboard/latestNews";
import { Headline } from "./headline";

export interface BlogData {
  // Strapi default data
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  // Section type
  headline: Headline;
  headlineBlog: ArticleItem;
  blog1: ArticleItem[];
  blog2: ArticleItem[];
  bannerContactSection: BannerContactSection;
}

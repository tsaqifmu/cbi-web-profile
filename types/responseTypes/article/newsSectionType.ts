import { Headline } from "../headline";
import { BannerContactSection } from "../bannerContact";
import { ArticleItem } from "./articleItem";

export interface NewsData {
  // Strapi default data
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  // Section type
  headline: Headline;
  headlineNews: ArticleItem;
  news1: ArticleItem[];
  news2: ArticleItem[];
  bannerContactSection: BannerContactSection;
}

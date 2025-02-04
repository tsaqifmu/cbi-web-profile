import { ArticleItem } from "./dashboard/latestNews";

export interface NewsData {
  // Strapi default data
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  // Section type
  headlineNews: ArticleItem;
  news1: ArticleItem[];
  news2: ArticleItem[];
}

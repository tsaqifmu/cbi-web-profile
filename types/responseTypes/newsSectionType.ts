import { NewsItem } from "./dashboard/latestNews";

export interface NewsData {
  // Strapi default data
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  // Section type
  headlineNews: NewsItem;
  news1: NewsItem[];
  news2: NewsItem[];
}

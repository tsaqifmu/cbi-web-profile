import { ArticleItem } from "./dashboard/latestNews";

export interface BlogData {
  // Strapi default data
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  // Section type
  headlineBlog: ArticleItem;
  blog1: ArticleItem[];
  blog2: ArticleItem[];
}

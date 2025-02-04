import { Image } from "../image";

export interface ArticleItem {
  id: number;
  documentId: string;
  title: string;
  shortDescription: string;
  slug: string;
  createdAt: string;
  publishedAt: string;
  type: string;
  image: Image;
}

export interface LatestNews {
  id: number;
  blogs: ArticleItem[];
  news: ArticleItem[];
}

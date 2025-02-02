import { Image } from "../image";

interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  shortDescription: string;
  slug: string;
  createdAt: string;
  publishedAt: string;
  image: Image;
}

export interface NewsItem {
  id: number;
  documentId: string;
  title: string;
  shortDescription: string;
  slug: string;
  createdAt: string;
  publishedAt: string;
  image: Image;
}

export interface LatestNews {
  id: number;
  blogs: BlogPost[];
  news: NewsItem[];
}

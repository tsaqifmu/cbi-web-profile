import { Image } from "./image";

export interface ArticleDetail {
  // Strapi default data
  id: number;
  documentId: string;

  // Section type
  title: string;
  type: string;
  publishedAt: string;
  content: any;
  image: Image;
}

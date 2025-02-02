import { Image } from "../image";

export interface Product {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  url: string;
  color1: string;
  color2: string;
  image: Image;
}

export interface ProductService {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  products: Product[];
}

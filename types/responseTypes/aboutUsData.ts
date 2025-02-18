import { Image } from "./image";

export interface HeadlineAboutUs {
  id: number;
  Title: string;
}

export interface AboutUs {
  id: number;
  Title: string;
  description: string;
  image: Image;
}

export interface VisionMission {
  id: number;
  Title: string;
  description: string;
}

export interface Management {
  id: number;
  documentId: string;
  name: string;
  position: string;
  description: string;
  createdAt: string;
  publishedAt: string;
  image: Image;
}

interface CorporateValue {
  id: number;
  Title: string;
}

interface CareerBanner {
  id: number;
  title: string;
  description: string;
  ctaText: string;
}

export interface CompanyData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  headline: HeadlineAboutUs;
  aboutUs: AboutUs;
  visionMission: VisionMission;
  corporateValue: CorporateValue;
  managements: Management[];
  careerBanner: CareerBanner;
}

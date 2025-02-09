import { Data } from "./dashboard/dashboardTypes";
import { BlogData } from "./article/blogSectionType";
import { NewsData } from "./article/newsSectionType";
import { ArticleDetail } from "./article/articleDetailTypes";
import { MediaInformationData } from "./MediaInformationData";
import { ArticleItem } from "./article/articleItem";
import { ContactPageData } from "./contactPageData";

export interface DashboardResponse {
  data: Data;
  meta: Record<string, never>;
}
export interface ArticleDetailResponse {
  data: ArticleDetail[];
  meta: Record<string, never>;
}
export interface NewsSectionResponse {
  data: NewsData;
  meta: Record<string, never>;
}
export interface BlogSectionResponse {
  data: BlogData;
  meta: Record<string, never>;
}
export interface ArticlesCollectionResponse {
  data: ArticleItem[];
  meta: Record<string, never>;
}
export interface MediaInformationResponse {
  data: MediaInformationData;
  meta: Record<string, never>;
}
export interface ContactResponse {
  data: ContactPageData;
  meta: Record<string, never>;
}

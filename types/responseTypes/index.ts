import { ArticleDetail } from "./articleDetailTypes";
import { BlogData } from "./blogSectionType";
import { ArticleItem } from "./dashboard/latestNews";
import { Data } from "./dashboardTypes";
import { NewsData } from "./newsSectionType";

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
export interface BlogCollectionResponse {
  data: ArticleItem[];
  meta: Record<string, never>;
}

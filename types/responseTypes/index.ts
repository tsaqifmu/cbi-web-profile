import { ArticleDetail } from "./articleDetailTypes";
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

import { ArticleDetail } from "./articleDetailTypes";
import { Data } from "./dashboardTypes";

export interface DashboardResponse {
  data: Data;
  meta: Record<string, never>;
}

export interface ArticleDetailResponse {
  data: ArticleDetail[];
  meta: Record<string, never>;
}

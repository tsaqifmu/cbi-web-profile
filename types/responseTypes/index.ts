import { Data } from "./dashboardTypes";

export interface DashboardResponse {
  data: Data;
  meta: Record<string, never>;
}

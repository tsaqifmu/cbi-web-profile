// types.ts
export enum ApiPath {
  // Dashboard paths
  DASHBOARD = "/dashboard",

  // Blog paths
  ARTICLES = "/articles",
}

export enum ApiMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

interface ApiRequestConfig {
  path: ApiPath;
  method?: ApiMethod;
  pathParams?: Record<string, string>; // Untuk replace parameter di path seperti :id
  queryParams?: Record<string, any>; // Untuk query string
  body?: any;
}

interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status?: number;
}

// apiClient.ts
const BASE_URL = process.env.NEXT_PUBLIC_URL_API;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN_API;

function replaceDynamicPathParams(
  path: string,
  params?: Record<string, string>,
): string {
  if (!params) return path;
  return Object.entries(params).reduce(
    (updatedPath, [key, value]) => updatedPath.replace(`:${key}`, value),
    path,
  );
}

export async function apiRequest<T = any>({
  path,
  pathParams,
  queryParams,
  method = ApiMethod.GET,
  body,
}: ApiRequestConfig): Promise<ApiResponse<T>> {
  // Replace dynamic path parameters (e.g., :id)
  const resolvedPath = replaceDynamicPathParams(path, pathParams);

  // Build query string from params
  const queryString = queryParams
    ? "?" +
      new URLSearchParams(queryParams as Record<string, string>).toString()
    : "";

  // Request options
  const requestOptions: RequestInit = {
    method,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    cache: "no-store" as RequestCache,
  };

  // Add body for non-GET requests
  if (body && method !== ApiMethod.GET) {
    requestOptions.body = JSON.stringify(body);
  }

  // Make the request
  const response = await fetch(
    `${BASE_URL}/api${resolvedPath}${queryString}`,
    requestOptions,
  );

  console.log("ini query string", queryString);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}

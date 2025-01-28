// types.ts
export enum ApiPath {
  // Dashboard paths
  DASHBOARD = "/dashboard?populate[headline][populate]=*&populate[whySection][populate]=*&populate[productService][populate]=*&populate[ourImpact][populate]=*&populate[bannerContact][populate]=*",

  // Blog paths
  ARTICLES = "/articles",
}

export enum ApiMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export interface ApiRequestConfig {
  path: ApiPath;
  method?: ApiMethod;
  pathParams?: Record<string, string>;
  queryParams?: Record<string, never>;
  body?: never;
}

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

export async function apiRequest<T>({
  path,
  pathParams,
  queryParams,
  method = ApiMethod.GET,
  body,
}: ApiRequestConfig): Promise<T> {
  try {
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

    if (!response.ok) {
      throw new ApiError(
        "API request failed",
        response.status,
        response.statusText,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error; // Re-throw API errors
    }
    // Handle network errors or other unexpected errors
    throw new ApiError(
      "Network error or unexpected error occurred",
      500,
      error instanceof Error ? error.message : "Unknown error",
    );
  }
}

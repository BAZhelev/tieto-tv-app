import type { QueryParams } from "./types";

type Args = {
  baseUrl: string;
  path: string;
  params?: QueryParams;
};

export function buildUrl({ baseUrl, path = "", params }: Args): string {
  if (!baseUrl.startsWith("http")) {
    throw new Error("URL does not use HTTP protocol");
  }

  // Normalize base to always end with a single trailing slash
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  // Normalize path to never start with a leading slash
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  const url = new URL(normalizedPath, normalizedBase);

  if (!params) {
    return url.toString();
  }

  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined) continue;

    if (Array.isArray(value)) {
      for (const item of value) {
        if (item === null || item === undefined) continue;
        url.searchParams.append(key, String(item));
      }
    } else {
      url.searchParams.set(key, String(value));
    }
  }

  return url.toString();
}

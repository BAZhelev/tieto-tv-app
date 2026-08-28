import { TV_BASE_URL } from "./constants";
import type { QueryParams } from "./utils/types";
import { buildUrl } from "./utils/utils";

type Args = {
  path: string;
  params?: QueryParams;
  revalidate?: number;
};

export async function tvBaseApi({ path, params, revalidate }: Args) {
  const url = buildUrl({ baseUrl: TV_BASE_URL, path, params });

  const response = await fetch(
    url,
    revalidate !== undefined ? { next: { revalidate } } : undefined,
  );

  return response.json();
}

import { TV_BASE_URL } from "./constants";
import type { QueryParams } from "./utils/types";
import { buildUrl } from "./utils/utils";

type Args = {
  path: string;
  params?: QueryParams;
};

export async function tvBaseApi({ path, params }: Args) {
  console.log(buildUrl({ baseUrl: TV_BASE_URL, path, params }));
  const response = await fetch(
    buildUrl({ baseUrl: TV_BASE_URL, path, params }),
  );

  return response.json();
}

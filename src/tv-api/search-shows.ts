import { tvBaseApi } from "./base-api";

export async function searchShows(show: string) {
  return tvBaseApi({ path: "search/shows", params: { q: show } });
}

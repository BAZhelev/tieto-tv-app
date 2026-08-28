import { tvBaseApi } from "./base-api";
import type { SearchResult } from "./types/search";

export async function searchShows(show: string): Promise<SearchResult[]> {
  return tvBaseApi({
    path: "search/shows",
    params: { q: show },
    revalidate: 600,
  });
}

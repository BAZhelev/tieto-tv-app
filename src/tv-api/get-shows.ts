import { tvBaseApi } from "./base-api";
import type { Show } from "./types/show";

export async function getShows(): Promise<Show[]> {
  return tvBaseApi({
    path: "shows",
    params: { page: 0 },
    revalidate: 3600,
  });
}

import { tvBaseApi } from "./base-api";
import type { Show } from "./types/show";

type Args = {
  id: string;
  includeSeasons?: boolean;
  includeCast?: boolean;
};

export async function getShow({
  id,
  includeCast = true,
  includeSeasons = true,
}: Args): Promise<Show> {
  return tvBaseApi({
    path: `shows/${id}`,
    params: { "embed[]": [includeCast && "cast", includeSeasons && "seasons"] },
  });
}

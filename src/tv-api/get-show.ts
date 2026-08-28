import { tvBaseApi } from "./base-api";
import type { Show } from "./types/show";

type Args = {
  id: string;
  includeSeasons?: boolean;
  includeCast?: boolean;
  includeEpisodes?: boolean;
};

export async function getShow({
  id,
  includeCast = true,
  includeSeasons = true,
  includeEpisodes = true,
}: Args): Promise<Show> {
  return tvBaseApi({
    path: `shows/${id}`,
    params: {
      "embed[]": [
        includeCast && "cast",
        includeSeasons && "seasons",
        includeEpisodes && "episodes",
      ],
    },
    revalidate: 600,
  });
}

import { tvBaseApi } from "./base-api";
import type { Schedule } from "./types/schedule";

type Args = {
  date?: string;
  country?: string;
  isWeb?: boolean;
};

export async function getShowsSchedule({
  date,
  country,
  isWeb = true,
}: Args = {}): Promise<Schedule[]> {
  return tvBaseApi({
    path: `/schedule${isWeb ? "/web" : ""}`,
    params: { date, country },
  });
}

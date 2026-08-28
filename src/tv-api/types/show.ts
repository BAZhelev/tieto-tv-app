import type { CastMember } from "./cast";
import type { Season } from "./season";
import type {
  Country,
  EpisodeLink,
  Externals,
  Image,
  Network,
  Rating,
  SelfLink,
  ShowSchedule,
} from "./shared";

export type ShowWebChannel = {
  id: number;
  name: string;
  country?: Country;
  officialSite?: string;
};

export type ShowLinks = {
  self: SelfLink;
  previousepisode?: EpisodeLink;
  nextepisode?: EpisodeLink;
};

export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language?: string;
  genres: string[];
  status: string;
  runtime?: number;
  averageRuntime?: number;
  premiered: string;
  ended: string | null;
  officialSite?: string;
  schedule: ShowSchedule;
  rating: Rating;
  weight: number;
  network?: Network;
  webChannel?: ShowWebChannel;
  dvdCountry: string | null;
  externals: Externals;
  image?: Image;
  summary?: string;
  updated: number;
  _links: ShowLinks;
  _embedded?: {
    cast?: CastMember[];
    seasons?: Season[];
  };
};

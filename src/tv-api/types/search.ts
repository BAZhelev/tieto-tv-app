import type {
  Country,
  EpisodeLink,
  ExternalsRequired,
  Image,
  Rating,
  SelfLink,
  ShowSchedule,
} from "./shared";
import type { Show } from "./show";

export type SearchNetwork = {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
};

export type SearchLinks = {
  self: SelfLink;
  previousepisode: EpisodeLink;
};

export type Search = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: ShowSchedule;
  rating: Rating;
  weight: number;
  network: SearchNetwork;
  webChannel: null | string;
  dvdCountry: null | string;
  externals: ExternalsRequired;
  image: Image;
  summary: string;
  updated: number;
  _links: SearchLinks;
};

export type SearchResult = {
  score: number;
  show: Show;
};

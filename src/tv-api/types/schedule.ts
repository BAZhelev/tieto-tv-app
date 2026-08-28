import type { Image, Rating, SelfLink } from "./shared";
import type { Show } from "./show";

export type ScheduleLinks = {
  self: SelfLink;
  show: ShowLink;
};

export type ShowLink = {
  href: string;
  name: string;
};

export type ScheduleEmbedded = {
  show: Show;
};

export type Schedule = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime?: number;
  rating: Rating;
  image?: Image;
  summary?: string;
  _links: ScheduleLinks;
  _embedded: ScheduleEmbedded;
};

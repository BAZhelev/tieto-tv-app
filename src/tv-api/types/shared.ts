export type Rating = {
  average?: number;
};

export type Image = {
  medium: string;
  original: string;
};

export type Country = {
  name: string;
  code: string;
  timezone: string;
};

export type ShowSchedule = {
  time: string;
  days: string[];
};

export type Externals = {
  tvrage?: number;
  thetvdb?: number;
  imdb?: string;
};

export type ExternalsRequired = {
  tvrage: number;
  thetvdb: number;
  imdb: string;
};

export type SelfLink = {
  href: string;
};

export type EpisodeLink = {
  href: string;
  name: string;
};

export type Network = {
  id: number;
  name: string;
  country: Country;
  officialSite?: string;
};

import type { Country, Image, SelfLink } from "./shared";

export type CastMember = {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
};

export type Character = {
  id: number;
  url: string;
  name: string;
  image?: Image | null;
  _links: {
    self: SelfLink;
  };
};

export type Person = {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday?: string;
  deathday: string | null;
  gender: string;
  image: Image | null;
  updated: number;
  _links: {
    self: SelfLink;
  };
};

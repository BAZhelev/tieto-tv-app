"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container, Heading, Typography } from "@/components/atoms";
import { Tabs } from "@/components/molecules";
import { stripHtml } from "@/lib/html";
import type { CastMember } from "@/tv-api/types/cast";
import type { Episode } from "@/tv-api/types/episodes";
import type { Season } from "@/tv-api/types/season";

type Props = {
  cast: CastMember[];
  seasons: Season[];
  episodes: Episode[];
};

export function ShowTabs({ cast, seasons, episodes }: Props) {
  const [active, setActive] = useState("cast");

  return (
    <Tabs
      tabListClassName="border-b border-zinc-200 dark:border-zinc-800"
      tabClassName="cursor-pointer px-4 py-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
      activeTabClassName="border-b-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
      value={active}
      onValueChange={setActive}
      items={[
        { id: "cast", label: "Cast", content: <CastList cast={cast} /> },
        {
          id: "seasons",
          label: "Seasons",
          content: <SeasonList seasons={seasons} />,
        },
        {
          id: "episodes",
          label: "Episodes",
          content: <EpisodeList episodes={episodes} />,
        },
      ]}
    />
  );
}

function CastList({ cast }: { cast: CastMember[] }) {
  return (
    <Container direction="column" gap={2}>
      {cast.map((member) => (
        <Link
          key={member.person.id}
          href={member.person.url}
          className="block cursor-pointer rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          <Container direction="row" align="center" gap={4}>
            {member.person.image?.medium ? (
              <Image
                src={member.person.image.medium}
                alt={member.person.name}
                width={48}
                height={48}
                className="size-12 rounded-full object-cover"
              />
            ) : (
              <div className="size-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            )}
            <Typography as="span">
              {member.character.name} - {member.person.name}
            </Typography>
          </Container>
        </Link>
      ))}
    </Container>
  );
}

function SeasonList({ seasons }: { seasons: Season[] }) {
  return (
    <Container direction="column" gap={4}>
      {seasons.map((season) => (
        <Link
          key={season.id}
          href={season.url}
          className="block cursor-pointer rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          <Container direction="row" gap={4}>
            {season.image?.medium ? (
              <Image
                src={season.image.medium}
                alt={season.name}
                width={128}
                height={128}
                className="size-32 shrink-0 rounded-lg object-cover"
              />
            ) : (
              <div className="size-32 shrink-0 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            )}
            <Container direction="column" gap={2}>
              <Heading as="h3" className="text-lg font-semibold">
                {season.name || `Season ${season.number}`}
              </Heading>
              {season.summary ? (
                <Typography
                  as="div"
                  className="text-sm text-zinc-600 leading-relaxed line-clamp-3 dark:text-zinc-400"
                >
                  {stripHtml(season.summary)}
                </Typography>
              ) : (
                <Typography
                  as="div"
                  className="text-sm text-zinc-600 dark:text-zinc-400"
                >
                  No Description
                </Typography>
              )}
            </Container>
          </Container>
        </Link>
      ))}
    </Container>
  );
}

function EpisodeList({ episodes }: { episodes: Episode[] }) {
  return (
    <Container direction="column" gap={4}>
      {episodes.map((episode) => (
        <Link
          key={episode.id}
          href={episode.url}
          className="block cursor-pointer rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          <Container direction="row" gap={4}>
            {episode.image?.medium ? (
              <Image
                src={episode.image.medium}
                alt={episode.name}
                width={128}
                height={128}
                className="size-32 shrink-0 rounded-lg object-cover"
              />
            ) : (
              <div className="size-32 shrink-0 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            )}
            <Container direction="column" gap={2}>
              <Heading as="h3" className="text-lg font-semibold">
                {episode.name || `Episode ${episode.number}`}
              </Heading>
              {episode.summary ? (
                <Typography
                  as="div"
                  className="text-sm text-zinc-600 leading-relaxed line-clamp-3 dark:text-zinc-400"
                >
                  {stripHtml(episode.summary)}
                </Typography>
              ) : (
                <Typography
                  as="div"
                  className="text-sm text-zinc-600 dark:text-zinc-400"
                >
                  No Description
                </Typography>
              )}
            </Container>
          </Container>
        </Link>
      ))}
    </Container>
  );
}

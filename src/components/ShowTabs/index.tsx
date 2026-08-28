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
      tabListClassName="pb-6"
      tabClassName={`px-6 cursor-pointer hover:underline data-[active=true]:underline`}
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
        <Link key={member.person.id} href={member.person.url}>
          <Container direction="row" align="center" gap={4}>
            {member.person.image?.medium ? (
              <Image
                src={member.person.image.medium}
                alt={member.person.name}
                width={48}
                height={48}
                className="size-12 object-cover"
              />
            ) : (
              <div className="size-12" />
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
        <Link key={season.id} href={season.url}>
          <Container direction="row" gap={4}>
            {season.image?.medium ? (
              <Image
                src={season.image.medium}
                alt={season.name}
                width={120}
                height={120}
                className="size-32 object-cover"
              />
            ) : (
              <div className="size-32" />
            )}
            <Container direction="column" gap={2}>
              <Heading as="h3">
                {season.name || `Season ${season.number}`}
              </Heading>
              {season.summary ? (
                <Typography as="div">{stripHtml(season.summary)}</Typography>
              ) : (
                <Typography as="div">No Description</Typography>
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
        <Link key={episode.id} href={episode.url}>
          <Container direction="row" gap={4}>
            {episode.image?.medium ? (
              <Image
                src={episode.image.medium}
                alt={episode.name}
                width={160}
                height={90}
                className="size-36 object-cover"
              />
            ) : (
              <div className="size-36" />
            )}
            <Container direction="column" gap={2}>
              <Heading as="h3">
                {episode.name || `Episode ${episode.number}`}
              </Heading>
              {episode.summary ? (
                <Typography as="div">{stripHtml(episode.summary)}</Typography>
              ) : (
                <Typography as="div">No Description</Typography>
              )}
            </Container>
          </Container>
        </Link>
      ))}
    </Container>
  );
}

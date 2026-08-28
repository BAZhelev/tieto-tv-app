import Image from "next/image";
import Link from "next/link";
import { Container, Heading } from "@/components/atoms";
import SearchMenu from "@/components/SearchMenu";
import { getShows } from "@/tv-api/get-shows";

export default async function Page() {
  const shows = await getShows();

  const topShows = [...shows]
    .sort(
      (a, b) =>
        b.weight - a.weight ||
        (b.rating.average ?? 0) - (a.rating.average ?? 0),
    )
    .slice(0, 9);

  return (
    <Container
      className="flex-1 p-8 bg-zinc-50 font-sans dark:bg-black"
      direction="column"
      gap={8}
    >
      <SearchMenu />

      <Heading as="h2">What are people watching</Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-0 xl:px-52">
        {topShows.map((show) => (
          <Link
            key={show.id}
            href={`/shows/${show.id}`}
            className="flex flex-col gap-2"
          >
            {show.image?.medium ? (
              <Image
                src={show.image.medium}
                alt={show.name}
                width={210}
                height={295}
                className="w-full h-auto"
              />
            ) : (
              <div className="aspect-[2/3]" />
            )}
            <span>{show.name}</span>
          </Link>
        ))}
      </div>
    </Container>
  );
}

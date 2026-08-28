import Image from "next/image";
import Link from "next/link";
import { Container, Heading } from "@/components/atoms";
import SearchMenu from "@/components/SearchMenu";
import { getShows } from "@/tv-api/get-shows";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

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
    <Container className="flex-1 p-8 font-sans" direction="column" gap={8}>
      <SearchMenu />

      <Heading
        as="h2"
        className="text-center text-3xl font-bold tracking-tight"
      >
        What are people watching
      </Heading>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {topShows.map((show) => (
          <Link
            key={show.id}
            href={`/shows/${show.id}`}
            className="group flex flex-col gap-3"
          >
            {show.image?.medium ? (
              <Image
                src={show.image.medium}
                alt={show.name}
                width={210}
                height={295}
                className="aspect-2/3 w-full rounded-xl object-cover shadow-sm transition-transform group-hover:scale-[1.02] group-hover:shadow-lg"
              />
            ) : (
              <div className="aspect-2/3 w-full rounded-xl bg-zinc-200 dark:bg-zinc-800" />
            )}
            <span className="text-sm font-medium text-zinc-900 line-clamp-1 transition-colors group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400">
              {show.name}
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}

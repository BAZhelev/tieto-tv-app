"use client";

import { SearchIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import type { SubmitEvent } from "react";
import { useState } from "react";
import { Input } from "@/components/molecules";
import { searchShows } from "@/tv-api/search-shows";
import type { SearchResult } from "@/tv-api/types/search";

export default function SearchMenu() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(undefined);

    try {
      const searchResults = await searchShows(query);
      setResults(
        searchResults.sort((showA, showB) => showB.score - showA.score),
      );
    } catch {
      setError("Something went wrong. Please try again.");
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex w-full flex-col">
      <form onSubmit={handleSubmit}>
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="size-full border border-blue"
          wrapperClassName="w-full border-white border-1 h-16"
          groupClassName="size-full flex flex-row"
          buttonClassName="aspect-square flex justify-center items-center"
          button={<HugeiconsIcon icon={SearchIcon} />}
        />
      </form>

      {isLoading && <p>Loading…</p>}

      {error && <p role="alert">{error}</p>}

      {!isLoading && results.length > 0 && (
        <div className="flex flex-col">
          {results.map(({ show }) => (
            <Link
              key={show.id}
              href={`/shows/${show.id}`}
              className="flex items-center gap-2"
            >
              {show.image?.medium ? (
                <Image
                  src={show.image.medium}
                  alt={show.name}
                  width={48}
                  height={48}
                  className="shrink-0 object-cover"
                />
              ) : (
                <div className="size-12 shrink-0" />
              )}
              <span>
                {show.name} - {show.premiered} - {show.ended ?? "ongoing"}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

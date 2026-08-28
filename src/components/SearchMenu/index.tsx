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
          className="px-4 py-3"
          wrapperClassName="w-full"
          groupClassName="flex items-stretch overflow-hidden rounded-full border border-zinc-300 bg-white focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/30 dark:border-zinc-700 dark:bg-zinc-900"
          buttonClassName="cursor-pointer border-zinc-200 px-5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          button={<HugeiconsIcon icon={SearchIcon} />}
        />
      </form>

      {isLoading && <p className="text-sm text-zinc-500">Loading…</p>}

      {error && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      {!isLoading && results.length > 0 && (
        <div className="mt-2 flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
          {results.map(({ show }) => (
            <Link
              key={show.id}
              href={`/shows/${show.id}`}
              className="flex cursor-pointer items-center gap-3 px-3 py-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {show.image?.medium ? (
                <Image
                  src={show.image.medium}
                  alt={show.name}
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-lg object-cover"
                />
              ) : (
                <div className="size-12 shrink-0 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
              )}
              <span className="text-sm text-zinc-900 dark:text-zinc-100">
                {show.name} - {show.premiered} - {show.ended ?? "ongoing"}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

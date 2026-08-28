import { getShowsSchedule } from "@/tv-api/get-schedule";

export default async function Page() {
  const someShows = await getShowsSchedule();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>This will be the main page from which we can search for shows!</h1>
        <code>{JSON.stringify(someShows, null, 2)}</code>
      </main>
    </div>
  );
}

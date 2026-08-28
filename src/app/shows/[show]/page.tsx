type Props = {
  params: Promise<{ show: string }>;
};

export default async function Page({ params }: Props) {
  const { show } = await params;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>This will be the page that shows you shows {show}</h1>
      </main>
    </div>
  );
}

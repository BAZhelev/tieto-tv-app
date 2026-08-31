import Image from "next/image";
import { Container, Heading, Typography } from "@/components/atoms";
import { ShowTabs } from "@/components/ShowTabs";
import { stripHtml } from "@/lib/html";
import { getShow } from "@/tv-api/get-show";

type Props = {
  params: Promise<{ show: string }>;
};

export default async function Page({ params }: Props) {
  const { show } = await params;
  const showInstance = await getShow({ id: show });

  return (
    <Container className="flex-1 p-8 gap-8" direction="column">
      <Container
        direction="column"
        className="xl:flex-row"
        align="start"
        gap={8}
      >
        {showInstance.image?.medium ? (
          <Image
            src={showInstance.image.medium}
            alt={showInstance.name}
            width={280}
            height={420}
            className="shrink-0 rounded-xl shadow-lg"
          />
        ) : (
          <div className="aspect-2/3 w-70 shrink-0 rounded-xl bg-zinc-800" />
        )}
        <Container direction="column" gap={4}>
          <Heading as="h1" className="text-4xl font-bold tracking-tight">
            {showInstance.name}
          </Heading>
          {showInstance.summary ? (
            <Typography as="div" className="leading-relaxed text-zinc-400">
              {stripHtml(showInstance.summary)}
            </Typography>
          ) : (
            <Typography as="div" className="text-zinc-400">
              No Description
            </Typography>
          )}
        </Container>
      </Container>

      <ShowTabs
        cast={showInstance._embedded?.cast ?? []}
        seasons={showInstance._embedded?.seasons ?? []}
        episodes={showInstance._embedded?.episodes ?? []}
      />
    </Container>
  );
}

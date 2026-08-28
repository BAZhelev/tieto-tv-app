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
      <Container direction="row" align="start" gap={8}>
        {showInstance.image?.medium ? (
          <Image
            src={showInstance.image.medium}
            alt={showInstance.name}
            width={210}
            height={295}
            className="shrink-0"
          />
        ) : (
          <div className="aspect-2/3 shrink-0" />
        )}
        <Container direction="column" gap={4}>
          <Heading as="h1">{showInstance.name}</Heading>
          {showInstance.summary ? (
            <Typography as="div">{stripHtml(showInstance.summary)}</Typography>
          ) : (
            <Typography as="div">No Description</Typography>
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

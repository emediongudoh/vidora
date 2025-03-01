import { HydrateClient, trpc } from "@/trpc/server";

// Local imports
import { HomeView } from "@/components/view/home-view";

export const dynamic = "force-dynamic";

interface HomePageProps {
  searchParams: Promise<{
    categoryId?: string;
  }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const { categoryId } = await searchParams;

  void trpc.categories.getMany.prefetch();

  return (
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
}

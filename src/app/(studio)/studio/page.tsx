import { HydrateClient, trpc } from "@/trpc/server";

// Local imports
import { StudioView } from "@/components/view/studio-view";
import { DEFAULT_LIMIT } from "@/constants";

export default async function StudioPage() {
  void trpc.studio.getMany.prefetchInfinite({ limit: DEFAULT_LIMIT });

  return (
    <HydrateClient>
      <StudioView />
    </HydrateClient>
  );
}

"use client";

import { trpc } from "@/trpc/client";

// Local imports
import { DEFAULT_LIMIT } from "@/constants";

export const VideosSection = () => {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    { limit: DEFAULT_LIMIT },
    {
      getNextPageParam: lastPage => lastPage.nextCursor,
    }
  );

  return <div>{JSON.stringify(data)}</div>;
};

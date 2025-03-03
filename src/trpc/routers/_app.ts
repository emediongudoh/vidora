import { createTRPCRouter } from "../init";

// Local imports
import { categoriesRouter } from "@/trpc-routers/categories";
import { studioRouter } from "@/trpc-routers/studio";
import { videosRouter } from "@/trpc-routers/videos";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  videos: videosRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;

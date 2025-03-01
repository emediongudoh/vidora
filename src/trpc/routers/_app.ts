import { createTRPCRouter } from "../init";

// Local imports
import { categoriesRouter } from "@/trpc-routers/categories";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;

import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

// Local imports
import { db } from "@/db";
import { videos } from "@/db/schema";

export const videosRouter = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const { id: userId } = ctx.user;

    const [video] = await db
      .insert(videos)
      .values({
        userId,
        title: "Untitled",
      })
      .returning();

    return {
      video: video,
    };
  }),
});

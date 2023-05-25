import { createTRPCRouter } from "~/server/api/trpc.ts";
import {
  ownersRouter,
} from "~/server/api/routers/owners.ts";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  owners: ownersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

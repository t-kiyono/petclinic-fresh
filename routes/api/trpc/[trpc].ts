import { HandlerContext } from "$fresh/server.ts";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "~/server/api/root.ts";
import { createTRPCContext } from "~/server/api/trpc.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext
): Promise<Response> => {
  const trpcRes = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext
  });

  return new Response(trpcRes.body, {
    headers: trpcRes.headers,
    status: trpcRes.status
  });
};

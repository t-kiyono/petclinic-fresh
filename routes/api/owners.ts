import { HandlerContext } from "$fresh/server.ts";
import { PrismaClient } from "../../generated/client/deno/edge.ts";

const prisma = new PrismaClient();

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  const owners = await prisma.owners.findMany();
  return new Response(JSON.stringify(owners), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

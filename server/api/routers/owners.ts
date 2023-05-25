import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc.ts";

export const ownersRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({
      lastName: z.string(),
    }))
    .query(async ({ input, ctx }) => {
      if (input.lastName.length > 0) {
        const owners = await ctx.prisma.owners.findMany({
          include: { pets: true },
          where: {
            last_name: {
              contains: input.lastName
            }
          },
          orderBy: {
            id: "asc"
          }
        });
        return owners;
      } else {
        const owners = await ctx.prisma.owners.findMany({
          include: { pets: true },
          orderBy: {
            id: "asc"
          }
        })
        return owners;
      }
    })
})
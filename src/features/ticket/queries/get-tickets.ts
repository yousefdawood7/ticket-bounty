import { prisma } from "@/lib/prisma";
import { tryCatch } from "@/lib/utils";

export async function getTickets() {
  const { data } = await tryCatch(
    () => prisma.tickets.findMany({ orderBy: { createdAt: "desc" } }),
    true,
  );

  return data;
}

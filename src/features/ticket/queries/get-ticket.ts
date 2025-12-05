import { prisma } from "@/lib/prisma";
import { tryCatch } from "@/lib/utils";

export async function getTicket(id: string) {
  const { data } = await tryCatch(
    () => prisma.tickets.findUnique({ where: { id } }),
    true,
  );
  return data;
}

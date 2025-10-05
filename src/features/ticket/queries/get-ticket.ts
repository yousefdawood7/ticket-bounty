import { prisma } from "@/lib/prisma";

export async function getTicket(id: string) {
  return prisma.tickets.findUnique({ where: { id } });
}

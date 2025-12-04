import { prisma } from "@/lib/prisma";

export async function getTickets() {
  try {
    return prisma.tickets.findMany({ orderBy: { createdAt: "desc" } });
  } catch (error) {
    console.log("Error fetching tickets:", error);
    throw error;
  }
}

"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function deleteTicket(id: string) {
  await prisma.tickets.delete({ where: { id } });
  return redirect("/tickets");
}

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function deleteTicket(id: string) {
  await prisma.tickets.delete({ where: { id } });

  revalidatePath("/tickets");
  return redirect("/tickets");
}

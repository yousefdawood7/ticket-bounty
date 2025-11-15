"use server";

import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function upsertTicket(id: string, data: FormData) {
  const { title, content } = Object.fromEntries(data) as {
    title: string;
    content: string;
  };

  try {
    await prisma.tickets.upsert({
      where: { id },
      update: { title, content },
      create: { title, content },
    });
    updateTag("tickets");
  } catch (error) {
    console.log(error);
  } finally {
    // prettier-ignore
    if (id)
      return redirect(`/tickets/${id}`);
  }
}

export async function deleteTicket(id: string) {
  try {
    await prisma.tickets.delete({ where: { id } });
    updateTag("tickets");
  } catch (error) {
    console.log(error);
  } finally {
    return redirect("/tickets");
  }
}

"use server";

import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function createTicket(data: FormData) {
  const { title, content } = Object.fromEntries(data) as {
    title: string;
    content: string;
  };

  try {
    await prisma.tickets.create({ data: { title, content } });
    updateTag("tickets");
  } catch (error) {
    console.log(error);
  }
}

export async function editTicket(id: string, data: FormData) {
  const { title, content } = Object.fromEntries(data) as {
    title: string;
    content: string;
  };

  try {
    await prisma.tickets.update({
      where: { id },
      data: { title, content },
    });
    updateTag("tickets");
  } catch (error) {
    console.log(error);
  } finally {
    return redirect("/tickets");
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

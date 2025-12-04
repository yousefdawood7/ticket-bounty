"use server";

import { updateTag } from "next/cache";
import { redirect, unstable_rethrow as rethrow } from "next/navigation";
import z, { ZodError } from "zod";
import { ticketFormSchema } from "@/features/ticket/schemas";
import { prisma } from "@/lib/prisma";
import { ActionReturnType } from "@/lib/types";

export async function upsertTicket(
  id: string,
  _prevState: ActionReturnType,
  data: FormData,
): Promise<ActionReturnType> {
  try {
    const ticket = ticketFormSchema.parse(Object.fromEntries(data));
    const isEditied = !!id;

    await prisma.tickets.upsert({
      where: { id },
      update: ticket,
      create: ticket,
    });
    updateTag("tickets");

    // prettier-ignore
    if (isEditied)
      redirect(`/tickets/${id}`);

    return {
      message: `Ticket ${isEditied ? "Edited" : "Created"} Successfully`,
    };
  } catch (error) {
    rethrow(error);
    if (error instanceof ZodError)
      return { message: "", fieldErrors: z.flattenError(error).fieldErrors };
    return { message: "Something went wrong. please try again" };
  }
}

export async function deleteTicket(id: string) {
  try {
    await prisma.tickets.delete({ where: { id } });
    updateTag("tickets");
  } catch (error) {
    if (error instanceof ZodError) console.log(error.issues);
  } finally {
    return redirect("/tickets");
  }
}

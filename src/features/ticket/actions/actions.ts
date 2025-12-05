"use server";

import { updateTag } from "next/cache";
import { redirect, unstable_rethrow as rethrow } from "next/navigation";
import z, { ZodError } from "zod";
import { ticketFormSchema } from "@/features/ticket/schemas";
import { prisma } from "@/lib/prisma";
import { type ActionReturnType } from "@/lib/types";
import { tryCatch } from "@/lib/utils";

export async function upsertTicket(
  id: string,
  _prevState: ActionReturnType,
  data: FormData,
): Promise<ActionReturnType> {
  const { data: upsertedData, error } = await tryCatch(async () => {
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
  });

  // prettier-ignore
  if (!error)
    return upsertedData;
  rethrow(error);

  if (error instanceof ZodError)
    return {
      error: true,
      message: "",
      fieldErrors: z.flattenError(error).fieldErrors,
    };
  return { message: "Something went wrong. please try again", error: true };
}

export async function deleteTicket(id: string): Promise<ActionReturnType> {
  const { error } = await tryCatch(async () => {
    await prisma.tickets.delete({ where: { id } });
    updateTag("tickets");
  });

  if (!error)
    try {
      return redirect("/tickets");
    } catch (error) {
      return {
        message: "Ticket deleted successfully",
        error: false,
        redirectError: error,
      };
    }

  throw "Failed to delete the ticket. Please try again.";
}

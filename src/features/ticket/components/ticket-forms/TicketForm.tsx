"use client";
import { useSpinDelay } from "spin-delay";
import { useActionState, useId } from "react";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { upsertTicket } from "@/features/ticket/actions/actions";
import { type Ticket } from "@/features/ticket/types";
import { type ActionReturnType } from "@/lib/types";
import TicketFormField from "@/features/ticket/components/ticket-forms/TicketFormField";

type TicketFormProps = {
  ticket?: Ticket;
};

export const initialTicketStateAction: ActionReturnType = {
  message: "",
  fieldErrors: {},
};

export default function TicketForm({ ticket }: TicketFormProps) {
  const [ticketState, formAction, isPendingActionState] = useActionState(
    upsertTicket.bind(null, ticket?.id || ""),
    initialTicketStateAction,
  );

  const isPending = useSpinDelay(isPendingActionState, {
    delay: 200,
    minDuration: 250,
  });

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <p className="flex flex-col gap-2">
        <TicketFormField
          name="title"
          label="Title"
          error={ticketState.fieldErrors}
          FieldComponent={Input}
          defaultValue={ticket?.title}
        />
      </p>

      <p className="flex flex-col gap-2">
        <TicketFormField
          name="content"
          label="Content"
          error={ticketState.fieldErrors}
          FieldComponent={Textarea}
          defaultValue={ticket?.content}
        />
      </p>
      <SubmitButton
        label={ticket ? "Edit Ticket" : "Create Ticket"}
        isPending={isPending}
      />
    </form>
  );
}

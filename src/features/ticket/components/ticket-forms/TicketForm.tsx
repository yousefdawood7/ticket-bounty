import { useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { upsertTicket } from "@/features/ticket/actions/actions";
import { type Ticket } from "@/features/ticket/types";

type TicketFormProps = {
  formID: string;
  ticket?: Ticket;
};

export default function TicketForm({ formID, ticket }: TicketFormProps) {
  const titleID = useId();
  const contentID = useId();

  return (
    <form
      id={formID}
      action={upsertTicket.bind(null, ticket?.id || "")}
      className="flex flex-col gap-5"
    >
      <p className="flex flex-col gap-2">
        <Label htmlFor={titleID} className="text-xl">
          Title
        </Label>
        <Input
          name="title"
          type="text"
          id={titleID}
          defaultValue={ticket?.title || ""}
        />
      </p>

      <p className="flex flex-col gap-2">
        <Label htmlFor={contentID} className="text-xl">
          Content
        </Label>
        <Textarea
          name="content"
          id={contentID}
          defaultValue={ticket?.content || ""}
        />
      </p>
    </form>
  );
}

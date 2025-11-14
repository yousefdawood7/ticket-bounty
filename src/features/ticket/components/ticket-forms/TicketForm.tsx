import { useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TicketFormProps = {
  formID: string;
  ticketAction: (data: FormData) => void;

  defaultTitle?: string;
  defaultContent?: string;
};

export default function TicketForm({
  formID,
  ticketAction,
  defaultTitle,
  defaultContent,
}: TicketFormProps) {
  const titleID = useId();
  const contentID = useId();

  return (
    <form id={formID} action={ticketAction} className="flex flex-col gap-5">
      <p className="flex flex-col gap-2">
        <Label htmlFor={titleID} className="text-xl">
          Title
        </Label>
        <Input
          name="title"
          type="text"
          id={titleID}
          defaultValue={defaultTitle || ""}
        />
      </p>

      <p className="flex flex-col gap-2">
        <Label htmlFor={contentID} className="text-xl">
          Content
        </Label>
        <Textarea
          name="content"
          id={contentID}
          defaultValue={defaultContent || ""}
        />
      </p>
    </form>
  );
}

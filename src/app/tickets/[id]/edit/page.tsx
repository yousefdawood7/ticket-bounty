import notFound from "@/app/tickets/[id]/not-found";
import { Button } from "@/components/ui/button";
import CardForm from "@/features/ticket/components/ticket-forms/CardForm";
import TicketForm from "@/features/ticket/components/ticket-forms/TicketForm";
import { getTicket } from "@/features/ticket/queries/get-ticket";

export default async function Page({
  params,
}: PageProps<"/tickets/[id]/edit">) {
  const { id } = await params;
  const ticket = await getTicket(id);

  // prettier-ignore
  if (!ticket)
    return notFound();

  return (
    <CardForm
      title="Edit Ticket"
      description="Edit an existing ticket"
      className="bg-background/95 mx-auto my-auto w-full max-w-lg"
      content={<TicketForm formID={"edit-form"} ticket={ticket} />}
      footer={
        <Button
          form="edit-form"
          className="text-background w-full text-lg font-semibold tracking-tight"
        >
          Edit Ticket
        </Button>
      }
    />
  );
}

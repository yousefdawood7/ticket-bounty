import { cacheLife, cacheTag } from "next/cache";
import Placeholder from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { createTicket } from "@/features/ticket/actions/actions";
import CardForm from "@/features/ticket/components/ticket-forms/CardForm";
import TicketForm from "@/features/ticket/components/ticket-forms/TicketForm";
import TicketItem from "@/features/ticket/components/TicketItem";
import { getTickets } from "@/features/ticket/queries/get-tickets";

export default async function TicketList() {
  "use cache";
  cacheLife("default");
  cacheTag("tickets");

  const tickets = await getTickets();

  if (!tickets.length)
    return <Placeholder message="There is no tickets available" />;

  return (
    <section className="mx-auto flex w-full max-w-md flex-col gap-5">
      <CardForm
        title="Create Ticket"
        description="A new ticket will be created"
        className="bg-background/95 w-full"
        content={
          <TicketForm formID="create-form" ticketAction={createTicket} />
        }
        footer={
          <Button
            form="create-form"
            className="text-background w-full text-lg font-semibold tracking-tight"
          >
            Create Ticket
          </Button>
        }
      />
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </section>
  );
}

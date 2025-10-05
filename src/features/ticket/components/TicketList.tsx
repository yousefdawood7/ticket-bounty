import Placeholder from "@/components/Placeholder";
import TicketItem from "@/features/ticket/components/TicketItem";
import { getTickets } from "@/features/ticket/queries/get-tickets";

export default async function TicketList() {
  const tickets = await getTickets();

  if (!tickets.length)
    return <Placeholder message="There is no tickets available" />;

  return (
    <section className="mx-auto flex w-full max-w-md flex-col gap-5">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </section>
  );
}

import { tickets } from "@/data";
import TicketItem from "@/features/ticket/components/TicketItem";

export default function TicketList() {
  return (
    <section className="mx-auto flex w-full max-w-md flex-col gap-5">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </section>
  );
}

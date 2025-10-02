import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { tickets } from "@/data";
import TicketItem from "@/features/ticket/components/TicketItem";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: PageProps) {
  const { id } = await params;
  const activeTicket = tickets.find((ticket) => ticket.id === id);

  if (!activeTicket)
    return (
      <Placeholder
        message="Ticket not found"
        button={
          <Button variant={"outline"}>
            <Link href="/tickets" className="font-semibold">
              Go to Tickets
            </Link>
          </Button>
        }
      />
    );

  return (
    <section className="mx-auto w-full max-w-xl">
      <TicketItem ticket={activeTicket} isDetailed />
    </section>
  );
}

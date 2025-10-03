import Link from "next/link";
import { notFound } from "next/navigation";
import Placeholder from "@/components/Placeholder";
import { tickets } from "@/data";
import TicketItem from "@/features/ticket/components/TicketItem";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: PageProps) {
  const { id } = await params;
  const activeTicket = tickets.find((ticket) => ticket.id === id);

  // prettier-ignore
  if (!activeTicket)
    notFound()

  return (
    <section className="mx-auto w-full max-w-xl">
      <TicketItem ticket={activeTicket} isDetailed />
    </section>
  );
}

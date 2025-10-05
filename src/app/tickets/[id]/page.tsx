import { notFound } from "next/navigation";
import TicketItem from "@/features/ticket/components/TicketItem";
import { getTicket } from "@/features/ticket/queries/get-ticket";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: PageProps) {
  const { id } = await params;
  const activeTicket = await getTicket(id);

  // prettier-ignore
  if (!activeTicket)
    notFound()

  return (
    <section className="mx-auto w-full max-w-xl">
      <TicketItem ticket={activeTicket} isDetailed />
    </section>
  );
}

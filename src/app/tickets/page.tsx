import { Suspense } from "react";
import PageHeading from "@/app/_components/PageHeading";
import Spinner from "@/components/Spinner";
import CardForm from "@/features/ticket/components/ticket-forms/CardForm";
import TicketForm from "@/features/ticket/components/ticket-forms/TicketForm";
import TicketList from "@/features/ticket/components/TicketList";

export default function Page() {
  return (
    <>
      <PageHeading
        title="Tickets"
        description="All your tickets at one place"
      />
      <CardForm
        title="Create Ticket"
        description="A new ticket will be created"
        className="bg-background/95 mx-auto w-full max-w-md"
        content={<TicketForm />}
      />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </>
  );
}

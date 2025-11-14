import { Suspense } from "react";
import PageHeading from "@/app/_components/PageHeading";
import Spinner from "@/components/Spinner";
import TicketList from "@/features/ticket/components/TicketList";

export default function page() {
  return (
    <>
      <PageHeading
        title="Tickets"
        description="All your tickets at one place"
      />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </>
  );
}

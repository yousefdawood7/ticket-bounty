import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { Button } from "@/components/ui/button";

export default function notFound() {
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
}

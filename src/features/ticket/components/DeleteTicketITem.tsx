"use client";

import { Button } from "@/components/ui/button";
import { deleteTicket } from "@/features/ticket/actions/actions";
import { LucideTrash2 } from "lucide-react";
import { unstable_rethrow as rethrow, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteTicketITem({ id }: { id: string }) {
  const router = useRouter();

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={async () => {
        toast.promise(() => deleteTicket(id), {
          loading: "Deleting Ticket...",
          success: (data) => {
            router.replace("/tickets");
            return data.message;
          },
          error: (data) => data.message,
        });
      }}
    >
      <LucideTrash2 />
    </Button>
  );
}

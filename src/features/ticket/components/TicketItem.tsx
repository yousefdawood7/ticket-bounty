import { cloneElement } from "react";
import Link from "next/link";
import {
  LucidePencil,
  LucideSquareArrowOutUpRight,
  LucideTrash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteTicket } from "@/features/ticket/actions/actions";
import { TICKET_ICONS } from "@/features/ticket/constants";
import { Ticket } from "@/features/ticket/types";
import { cn } from "@/lib/utils";

export default function TicketItem({
  ticket: { id, title, content, status },
  isDetailed,
}: {
  ticket: Ticket;
  isDetailed?: boolean;
}) {
  const detailedButton = (
    <Button variant={"outline"} size={"icon"} asChild>
      <Link href={`/tickets/${id}`} prefetch={true}>
        <LucideSquareArrowOutUpRight />
      </Link>
    </Button>
  );

  const editButton = (
    <Button variant={"outline"} size={"icon"} asChild>
      <Link href={`/tickets/${id}/edit`} prefetch={true}>
        <LucidePencil />
      </Link>
    </Button>
  );

  const deleteButton = (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={deleteTicket.bind(null, id)}
    >
      <LucideTrash2 />
    </Button>
  );

  return (
    <div className="flex gap-x-2.5">
      <Card className="bg-background/95 w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2.5 overflow-hidden">
            {cloneElement(TICKET_ICONS[status], { className: "shrink-0" })}
            <p
              className={cn(
                "text-3xl tracking-tight",
                !isDetailed && "truncate",
              )}
            >
              {title}
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={cn("text-xl", !isDetailed && "line-clamp-3")}>
            {content}
          </p>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-1">
        {editButton}
        {isDetailed ? deleteButton : detailedButton}
      </div>
    </div>
  );
}

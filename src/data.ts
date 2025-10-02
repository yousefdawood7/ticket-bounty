import { type Ticket } from "@/features/ticket/types";

export const tickets: Ticket[] = [
  {
    id: "T1",
    title: "Ticket 1",
    content: "Ticket Content",
    status: "OPEN",
  },

  {
    id: "T2",
    title: "Ticket 2",
    content: "Ticket2 Content",
    status: "DONE",
  },

  {
    id: "T3",
    title: "Ticket 3",
    content: "Ticket Content",
    status: "IN_PROGRESS",
  },
];

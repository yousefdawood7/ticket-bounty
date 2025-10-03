import { PrismaClient, TicketStatus } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export const tickets = [
  {
    title: "Ticket 1",
    content: "Ticket Content",
    status: TicketStatus.OPEN,
  },

  {
    title: "Ticket 2",
    content: "Ticket2 Content",
    status: TicketStatus.DONE,
  },

  {
    title: "Ticket 3",
    content: "Ticket Content",
    status: TicketStatus.IN_PROGRESS,
  },
];

const seed = async function () {
  await prisma.tickets.deleteMany();
  await prisma.tickets.createMany({ data: tickets });
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

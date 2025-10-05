import { PrismaClient, TicketStatus } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export const tickets = [
  {
    title: "Ticket 1",
    content: "Ticket 1 Content DB",
    status: TicketStatus.OPEN,
  },

  {
    title: "Ticket 2",
    content: "Ticket 2 Content DB",
    status: TicketStatus.DONE,
  },

  {
    title: "Ticket 3",
    content: "Ticket 3 Content DB",
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

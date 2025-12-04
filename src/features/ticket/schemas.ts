import z from "zod";

export const ticketFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required." })
    .max(191, { message: "Title must be 191 characters or fewer." }),
  content: z
    .string()
    .min(1, { message: "Content is required." })
    .max(1024, { message: "Content must be 1024 characters or fewer." }),
});

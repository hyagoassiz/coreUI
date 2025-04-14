import { z } from "zod";

export const personalInfoSchema = z.object({
  nome: z
    .string()
    .nonempty()
    .transform((value) => value.trim().replace(/\s+/g, " ")),
});

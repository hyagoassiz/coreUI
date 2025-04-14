import { z } from "zod";
import { createAccountSchema } from "../schema/createAccountSchema";

export type ICadastro = z.infer<typeof createAccountSchema>;

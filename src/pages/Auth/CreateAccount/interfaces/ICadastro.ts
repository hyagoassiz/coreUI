import { z } from "zod";
import { cadastroSchema } from "../schema/cadastroSchema";

export type ICadastro = z.infer<typeof cadastroSchema>;

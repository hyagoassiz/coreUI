import { z } from "zod";
import { registrarNomeSchema } from "../schema/registrarNomeSchema";

export type INome = z.infer<typeof registrarNomeSchema>;

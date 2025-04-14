import { z } from "zod";
import { personalInfoSchema } from "../schema/personalInfoSchema";

export type INome = z.infer<typeof personalInfoSchema>;

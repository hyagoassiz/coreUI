import { z } from "zod";

export const createAccountSchema = z
  .object({
    email: z
      .string({
        required_error: "Obrigatório",
      })
      .nonempty("Obrigatório")
      .email("Formato de e-mail inválido")
      .toLowerCase(),

    password: z
      .string({
        required_error: "Obrigatório",
      })
      .nonempty("Obrigatório")
      .min(6, "A senha precisa de no mínimo 6 caracteres"),

    confirmPassword: z
      .string({
        required_error: "Obrigatório",
      })
      .nonempty("Obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

import { useForm, UseFormReturn } from "react-hook-form";
import { ICadastro } from "../interfaces";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";
import { useState } from "react";
import { createAccountWithEmailAndPassword } from "../../../../api/Auth/createAccountWithEmailAndPassword";
import { auth } from "../../../../firebaseConfig";
import { useNotification } from "../../../../hooks/useNotification";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAccountSchema } from "../schema/createAccountSchema";

interface IUseCreateAccount {
  createAccountForm: UseFormReturn<ICadastro>;
  isLoading: boolean;
  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void;
  navigateToLogin: () => void;
  submitCreateAccountForm(): void;
}

export const useCreateAccount = (): IUseCreateAccount => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createAccountForm = useForm<ICadastro>({
    resolver: zodResolver(createAccountSchema),
  });

  const { handleShowSnackBar } = useNotification();

  const navigate = useNavigate();

  function submitCreateAccountForm(): void {
    createAccountForm.handleSubmit(async (data) => {
      try {
        setIsLoading(true);
        const payload: ILoginApi = {
          auth: auth,
          email: data.email,
          password: data.password,
        };

        await createAccountWithEmailAndPassword(payload);

        navigate(PATHS.AUTH.INFO);
      } catch (error) {
        console.error(error);
        handleShowSnackBar(String(error), "error");
      } finally {
        setIsLoading(false);
      }
    })();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (isLoading) return;

    if (event.key === "Enter") {
      submitCreateAccountForm();
    }
  }

  function navigateToLogin(): void {
    navigate(PATHS.AUTH.LOGIN);
  }

  return {
    createAccountForm,
    isLoading,
    handleKeyDown,
    navigateToLogin,
    submitCreateAccountForm,
  };
};

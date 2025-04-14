import { useNavigate } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";
import { useForm, UseFormReturn } from "react-hook-form";
import { INome } from "../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "../schema/personalInfoSchema";
import { updateUserDisplayName } from "../../../../api/Auth/updateUserDisplayName";
import { useState } from "react";

interface IUsePersonalInfo {
  personalInfoForm: UseFormReturn<INome>;
  isLoading: boolean;
  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void;
  handleNavigate(): void;
  submitPersonalInfoForm(): void;
}

export const usePersonalInfo = (): IUsePersonalInfo => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const personalInfoForm = useForm<INome>({
    resolver: zodResolver(personalInfoSchema),
  });

  const navigate = useNavigate();

  function submitPersonalInfoForm(): void {
    personalInfoForm.handleSubmit(async (data) => {
      try {
        setIsLoading(true);
        await updateUserDisplayName(data.nome);

        navigate(PATHS.DASHBOARD.LIST);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (event.key === "Enter") {
      submitPersonalInfoForm();
    }
  }

  function handleNavigate(): void {
    navigate(PATHS.AUTH.LOGIN);
  }

  return {
    personalInfoForm,
    isLoading,
    handleKeyDown,
    handleNavigate,
    submitPersonalInfoForm,
  };
};

import { useNavigate } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";
import { useForm, UseFormReturn } from "react-hook-form";
import { INome } from "../interfaces";

interface IUseRegistrarNome {
  registrarNomeForm: UseFormReturn<INome>;
  isPending: boolean;
  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void;
  handleNavigate(): void;
  onSubmit(): void;
}

export const useRegistrarNome = (): IUseRegistrarNome => {
  const registrarNomeForm = useForm<INome>();

  const navigate = useNavigate();

  const isPending = false;

  const onSubmit = (): void => {
    registrarNomeForm.handleSubmit(async (data) => {
      console.log(data);
    })();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      registrarNomeForm.handleSubmit(onSubmit)();
    }
  };

  const handleNavigate = (): void => {
    navigate(PATHS.AUTH.LOGIN);
  };

  return {
    registrarNomeForm,
    isPending,
    handleKeyDown,
    handleNavigate,
    onSubmit,
  };
};

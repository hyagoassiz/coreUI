import { useForm, UseFormReturn } from "react-hook-form";
import { ICadastro } from "../interfaces";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";

interface IUseCadastro {
  cadastroForm: UseFormReturn<ICadastro>;
  isPending: boolean;
  handleNavigate: () => void;
  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void;
  onSubmit(): void;
}

export const useCadastro = (): IUseCadastro => {
  const cadastroForm = useForm<ICadastro>();

  const navigate = useNavigate();

  const isPending = true;

  const onSubmit = (): void => {
    cadastroForm.handleSubmit(async (data) => {
      console.log(data);
    })();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      cadastroForm.handleSubmit(onSubmit)();
    }
  };

  const handleNavigate = () => {
    navigate(PATHS.AUTH.LOGIN);
  };

  return {
    cadastroForm,
    handleNavigate,
    handleKeyDown,
    onSubmit,
    isPending,
  };
};

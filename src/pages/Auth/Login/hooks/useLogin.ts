import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";

interface IUseLogin {
  loginForm: UseFormReturn<any>;
  isPending: boolean;
  onSubmit(): void;
  handleNavigate(): void;
  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void;
}

export const useLogin = (): IUseLogin => {
  const loginForm = useForm<any>();

  const navigate = useNavigate();

  const isPending = true;

  const onSubmit = (): void => {
    loginForm.handleSubmit((data) => {
      console.log(data);
    })();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      loginForm.handleSubmit(onSubmit)();
    }
  };

  const handleNavigate = (): void => {
    navigate(PATHS.AUTH.CREATE);
  };

  return {
    loginForm,
    isPending,
    onSubmit,
    handleNavigate,
    handleKeyDown,
  };
};

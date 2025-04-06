import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";
import { loginWithEmailAndPassword } from "../../../../api/Auth/loginWithEmailAndPassword";
import { auth } from "../../../../firebaseConfig";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showSnackBar } from "../../../../redux/snackBarSlice";

interface IUseLogin {
  isLoading: boolean;
  loginForm: UseFormReturn<ILoginApi>;
  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void;
  onCreateAccount(): void;
  submitLoginForm(): void;
}

export const useLogin = (): IUseLogin => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginForm = useForm<ILoginApi>();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (isLoading) {
      return;
    }

    if (event.key === "Enter") {
      submitLoginForm();
    }
  }

  function onCreateAccount(): void {
    navigate(PATHS.AUTH.CREATE);
  }

  function submitLoginForm(): void {
    loginForm.handleSubmit(async (data) => {
      try {
        setIsLoading(true);
        const payload: ILoginApi = {
          auth: auth,
          email: data.email,
          password: data.password,
        };

        await loginWithEmailAndPassword(payload);
      } catch (error) {
        console.error(error);
        dispatch(showSnackBar({ message: String(error), type: "error" }));
      } finally {
        setIsLoading(false);
      }
    })();
  }

  return {
    isLoading,
    loginForm,
    handleKeyDown,
    onCreateAccount,
    submitLoginForm,
  };
};

import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";
import { loginWithEmailAndPassword } from "../../../../api/Auth/loginWithEmailAndPassword";
import { auth } from "../../../../firebaseConfig";
import { useEffect, useState } from "react";
import { useNotification } from "../../../../hooks/useNotification";
import { logoutUsuario } from "../../../../api/Auth/logoutUser";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../redux/store";

interface IUseLogin {
  isLoading: boolean;
  loginForm: UseFormReturn<ILoginApi>;
  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void;
  onCreateAccount(): void;
  submitLoginForm(): void;
}

export const useLogin = (): IUseLogin => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { uid } = useSelector((state: IRootState) => state.user);

  const loginForm = useForm<ILoginApi>();

  const navigate = useNavigate();

  const { handleShowSnackBar } = useNotification();

  useEffect(() => {
    if (uid) {
      logoutUsuario();
    }
  }, [uid]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (isLoading) return;

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

        navigate(PATHS.DASHBOARD.LIST);
      } catch (error) {
        console.error(error);
        handleShowSnackBar(String(error), "error");
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

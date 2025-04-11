import { useNavigate } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";

interface IUseVerificacao {
  email: string | null;
  handleNavigate(): void;
}

export const useVerificacao = (): IUseVerificacao => {
  const { email } = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();

  const handleNavigate = (): void => {
    navigate(PATHS.AUTH.LOGIN);
  };

  return {
    email,
    handleNavigate,
  };
};

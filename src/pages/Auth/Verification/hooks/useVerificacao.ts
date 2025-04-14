import { useNavigate } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";
import { IRootState } from "../../../../redux/store";
import { useSelector } from "react-redux";

interface IUseVerificacao {
  email: string | null;
  handleNavigate(): void;
}

export const useVerificacao = (): IUseVerificacao => {
  const { email } = useSelector((state: IRootState) => state.user);

  const navigate = useNavigate();

  const handleNavigate = (): void => {
    navigate(PATHS.AUTH.LOGIN);
  };

  return {
    email,
    handleNavigate,
  };
};

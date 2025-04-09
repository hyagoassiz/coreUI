import { useNavigate } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";

interface IUseVerificacao {
  handleNavigate(): void;
}

export const useVerificacao = (): IUseVerificacao => {
  const navigate = useNavigate();

  const handleNavigate = (): void => {
    navigate(PATHS.AUTH.LOGIN);
  };

  return {
    handleNavigate,
  };
};

import { IUseListReturn } from "../interfaces";
import * as PATHS from "../../../../routes/paths";
import { useNavigate } from "react-router-dom";

export const useList = (): IUseListReturn => {
  const navigate = useNavigate();

  function handleAddSale(): void {
    navigate(PATHS.SALES.REGISTER);
  }

  return {
    handleAddSale,
  };
};

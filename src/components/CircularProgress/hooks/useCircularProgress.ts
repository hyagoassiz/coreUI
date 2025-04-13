import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/store";

interface IUseCircularProgress {
  loading: boolean;
}

export const useCircularProgress = (): IUseCircularProgress => {
  const { loading } = useSelector((state: IRootState) => state.loading);

  return { loading };
};

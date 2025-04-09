import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface IUseCircularProgress {
  loading: boolean;
}

export const useCircularProgress = (): IUseCircularProgress => {
  const { loading } = useSelector((state: RootState) => state.loading);

  return { loading };
};

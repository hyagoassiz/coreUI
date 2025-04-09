import { useDispatch } from "react-redux";
import { setLoading } from "../redux/loadingSlice";

interface IUseLoading {
  handleSetLoading(isLoading: boolean): void;
}

export const useLoading = (): IUseLoading => {
  const dispatch = useDispatch();

  function handleSetLoading(isLoading: boolean): void {
    dispatch(setLoading(isLoading));
  }

  return { handleSetLoading };
};

import { useDispatch } from "react-redux";
import { showSnackBar as showSnackBarRedux } from "../redux/snackBarSlice";
import { ISnackBar } from "../interfaces";

interface IUseNotification {
  showSnackBar(message: string, type: ISnackBar["type"]): void;
}

export const useNotification = (): IUseNotification => {
  const dispatch = useDispatch();

  function showSnackBar(message: string, type: ISnackBar["type"]): void {
    dispatch(showSnackBarRedux({ message, type }));
  }

  return { showSnackBar };
};

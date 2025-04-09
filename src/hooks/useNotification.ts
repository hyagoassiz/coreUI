import { useDispatch } from "react-redux";
import { closeSnackBar, showSnackBar } from "../redux/snackBarSlice";
import { ISnackBar } from "../interfaces";

interface IUseNotification {
  handleCloseSnackbar(): void;
  handleShowSnackBar(message: string, type: ISnackBar["type"]): void;
}

export const useNotification = (): IUseNotification => {
  const dispatch = useDispatch();

  function handleCloseSnackbar(): void {
    dispatch(closeSnackBar());
  }

  function handleShowSnackBar(message: string, type: ISnackBar["type"]): void {
    dispatch(showSnackBar({ message, type }));
  }

  return { handleCloseSnackbar, handleShowSnackBar };
};

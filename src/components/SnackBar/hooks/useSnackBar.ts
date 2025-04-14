import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IRootState } from "../../../redux/store";
import { ISnackBar } from "../../../interfaces";
import { closeSnackBar } from "../../../redux/snackBarSlice";

interface IUseSnackbar {
  snackBar: ISnackBar;
  handleCloseSnackBar: () => void;
}

const useSnackBar = (): IUseSnackbar => {
  const dispatch = useDispatch();
  const snackBar = useSelector((state: IRootState) => state.snackBar);

  useEffect(() => {
    if (snackBar.open) {
      setTimeout(() => {
        handleCloseSnackBar();
      }, 3000);

      return () => handleCloseSnackBar();
    }
  });

  const handleCloseSnackBar = () => {
    dispatch(closeSnackBar());
  };

  return { handleCloseSnackBar, snackBar };
};

export default useSnackBar;

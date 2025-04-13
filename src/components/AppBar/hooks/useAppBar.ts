import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/store";
import { IDrawerProps } from "../../../interfaces";

interface IUseAppBar {
  drawer: IDrawerProps;
}

const useAppBar = (): IUseAppBar => {
  const drawer = useSelector((state: IRootState) => state.drawer);

  return { drawer };
};

export default useAppBar;

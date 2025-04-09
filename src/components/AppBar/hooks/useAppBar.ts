import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IDrawerProps } from "../../../interfaces";

interface IUseAppBar {
  drawer: IDrawerProps;
}

const useAppBar = (): IUseAppBar => {
  const drawer = useSelector((state: RootState) => state.drawer);

  return { drawer };
};

export default useAppBar;

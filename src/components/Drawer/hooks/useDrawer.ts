import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IDrawerProps } from "../../../interfaces";

interface IUseDrawer {
  drawer: IDrawerProps;
}

const useDrawer = (): IUseDrawer => {
  const drawer = useSelector((state: RootState) => state.drawer);

  return { drawer };
};

export default useDrawer;

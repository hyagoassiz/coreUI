import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/store";
import { IDrawerProps } from "../../../interfaces";

interface IUseDrawer {
  drawer: IDrawerProps;
}

const useDrawer = (): IUseDrawer => {
  const drawer = useSelector((state: IRootState) => state.drawer);

  return { drawer };
};

export default useDrawer;

import { ReactElement } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

interface IOptions {
  icon: ReactElement;
  name: string;
  route: string;
  function?: () => Promise<void>;
}

export const options: IOptions[] = [
  {
    icon: <LogoutIcon />,
    name: "Sair",
    route: "#",
    function: async () => {
      console.log("clicou");
    },
  },
];

import * as PATHS from "../../../routes/paths";
import { IRotas } from "../interfaces";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Settings } from "@mui/icons-material";

export const rotas: IRotas[] = [
  {
    categoria: "",
    rotas: [
      {
        name: "Dashboard",
        route: PATHS.DASHBOARD.LIST,
        icon: <SpaceDashboardIcon />,
      },
    ],
  },
  {
    categoria: "",
    rotas: [
      {
        name: "Produtos",
        route: PATHS.PRODUCTS.LIST,
        icon: <InventoryIcon />,
      },
    ],
  },
  {
    categoria: "",
    rotas: [
      { name: "Sobre", route: PATHS.ABOUT.LIST, icon: <DescriptionIcon /> },
    ],
  },
  {
    categoria: "",
    rotas: [
      { name: "Configurações", route: PATHS.SETTINGS.LIST, icon: <Settings /> },
    ],
  },
];

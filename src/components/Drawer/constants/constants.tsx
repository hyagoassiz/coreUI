import * as PATHS from "../../../routes/paths";
import { IRotas } from "../interfaces";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LayersIcon from "@mui/icons-material/Layers";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import RequestPageIcon from "@mui/icons-material/RequestPage";

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
    categoria: "News",
    rotas: [
      { name: "Route 1", route: PATHS.NEWS.LIST, icon: <AutoStoriesIcon /> },
      { name: "Route 2", route: PATHS.NEWS.LIST_2, icon: <RequestPageIcon /> },
    ],
  },
  {
    categoria: "Categoria",
    rotas: [
      { name: "Página 1", route: PATHS.PAGE_1.LIST, icon: <LayersIcon /> },
    ],
  },
];

import { ReactElement } from "react";

export interface IRotas {
  categoria: "Categoria 1" | "Categoria 2" | "Categoria 3" | "News" | "";
  rotas: {
    name: string;
    route: string;
    function?: () => Promise<void>;
    icon?: ReactElement;
  }[];
}

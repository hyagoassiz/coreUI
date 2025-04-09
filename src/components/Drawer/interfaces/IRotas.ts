import { ReactElement } from "react";

export interface IRotas {
  categoria: "Categoria" | "News" | "";
  rotas: {
    name: string;
    route: string;
    function?: () => Promise<void>;
    icon?: ReactElement;
  }[];
}

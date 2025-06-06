import { IDataTableColumns } from "../../../../interfaces";

export const salesColumns: IDataTableColumns[] = [
  { key: "data", label: "Data da Venda" },
  { key: "createdAt", label: "Criado em" },
  { key: "valorTotal", label: "Total" },
  { key: "status", label: "Situação" },
  { key: "options", label: "", style: { width: "10px" } },
];

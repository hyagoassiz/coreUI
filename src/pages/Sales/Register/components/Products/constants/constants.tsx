import { IDataTableColumns } from "../../../../../../interfaces";

export const productColumns: IDataTableColumns[] = [
  { key: "nome", label: "Nome" },
  { key: "quantidade", label: "Quantidade" },
  { key: "valorUnitario", label: "Valor Unitário" },
  { key: "valorTotal", label: "Valor Total" },
  { key: "options", label: "", style: { width: "10px" } },
];

import { IDataTableColumns } from "../../../../interfaces";

export const productColumns: IDataTableColumns[] = [
  { key: "nome", label: "Nome" },
  { key: "codigo", label: "Código/SKU" },
  { key: "valor", label: "Preço" },
  { key: "options", label: "", style: { width: "10px" } },
];

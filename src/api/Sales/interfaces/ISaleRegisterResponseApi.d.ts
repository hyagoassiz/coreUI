interface ISaleRegisterResponseApi {
  id?: string;
  data: string;
  desconto: number;
  valorTotal: number;
  produtos: {
    id: string;
    produto: Pick<IProductResponseApi, "id" | "nome" | "codigo">;
    quantidade: number;
    valorUnitario: number;
    valorTotal: number;
  }[];
  observacao: string;
  status: IStatusSaleApi;
  createdAt?: string;
  updatedAt?: string;
}

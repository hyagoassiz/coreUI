interface ISaleRegisterApi {
  id?: string;
  data: string;
  desconto: number;
  valorTotal: number;
  produtos: {
    id: string;
    produto: { id: string };
    quantidade: number;
    valorUnitario: number;
    valorTotal: number;
  }[];
  observacao: string;
  status: IStatusSaleApi;
  createdAt?: string;
  updatedAt?: string;
}

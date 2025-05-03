interface ISaleResponseApi {
  id: string;
  dataVenda: string;
  produtoId: IProductResponseApi;
  valor: number;
  observacao: string;
  pago: boolean;
  createdAt: string;
  updatedAt: string;
}

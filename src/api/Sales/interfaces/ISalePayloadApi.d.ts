interface ISalePayloadApi {
  id?: string;
  dataVenda: string;
  produtoId: string;
  valorProduto: number;
  valorVenda: number;
  observacao: string;
  pago: boolean;
  createdAt?: string;
  updatedAt?: string;
}

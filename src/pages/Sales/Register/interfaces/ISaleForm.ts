export interface ISaleForm {
  id?: string;
  data: string;
  desconto: number;
  valorVenda: number;
  produtos: IProductForm[];
  observacao: string;
}

interface IProductForm {
  id: string;
  produto: IProductResponseApi;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
}

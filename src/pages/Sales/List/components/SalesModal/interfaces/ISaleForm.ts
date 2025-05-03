export interface ISaleForm {
  data: string;
  produto: IProductResponseApi;
  quantidade: number;
  valorUnitario: number;
  valorVenda: number;
  observacao: string;
  pago: boolean;
}

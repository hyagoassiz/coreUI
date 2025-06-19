interface ISaleResponseApi {
  id: string;
  data: string;
  valorTotal: number;
  status: IStatusSaleApi;
  createdAt?: string;
  updatedAt?: string;
}

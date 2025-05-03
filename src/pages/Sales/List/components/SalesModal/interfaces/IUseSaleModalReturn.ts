import { UseFormReturn } from "react-hook-form";
import { ISaleForm } from "./ISaleForm";

export interface IUseSaleModalReturn {
  produtos: IProductResponseApi[] | undefined;
  saleForm: UseFormReturn<ISaleForm>;
  calculateAndSetTotalSale(quantidade?: number, valorUnitario?: number): void;
  calculateAndSetUnitPrice(totalVenda: number): void;
  submitSaleForm(): void;
}

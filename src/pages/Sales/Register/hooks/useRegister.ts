import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";
import { ISaleForm } from "../interfaces";
import dayjs from "dayjs";

interface IUseRegisterReturn {
  saleForm: UseFormReturn<ISaleForm>;
  calculateTotalSale(
    products: ISaleForm["produtos"],
    discount?: number
  ): number;
  handleCancelSaleRegistration(): void;
}
export const useRegister = (): IUseRegisterReturn => {
  const saleForm = useForm<ISaleForm>({
    defaultValues: {
      data: dayjs().format("YYYY-MM-DD"),
      valorVenda: 0,
      desconto: 0,
    },
  });

  const navigate = useNavigate();

  function calculateTotalSale(
    products: ISaleForm["produtos"],
    discount?: number
  ): number {
    const _discount = discount ?? 0;

    const total = products.reduce((acc, product) => {
      const valorTotal = product.valorTotal ?? 0;
      return acc + valorTotal;
    }, 0);

    return total - _discount;
  }

  function handleCancelSaleRegistration(): void {
    navigate(PATHS.SALES.LIST);
  }

  return {
    saleForm,
    calculateTotalSale,
    handleCancelSaleRegistration,
  };
};

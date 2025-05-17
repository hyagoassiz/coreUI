import { Dispatch, SetStateAction, useState } from "react";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { ISaleForm } from "../../../interfaces";

interface IUseProductsReturn {
  productModalState: {
    open: boolean;
    product: ISaleForm["produtos"][0] | null;
  };
  saleForm: UseFormReturn<ISaleForm>;
  selectedProducts: ISaleForm["produtos"];
  handleAddProduct(): void;
  handleCloseProductModal(): void;
  handleEditProduct(product: ISaleForm["produtos"][0]): void;
  deleteSelectedProducts(): void;
  setSelectedProducts: Dispatch<SetStateAction<ISaleForm["produtos"]>>;
}

export const useProducts = (): IUseProductsReturn => {
  const [productModalState, setProductModalState] = useState<{
    open: boolean;
    product: ISaleForm["produtos"][0] | null;
  }>({ open: false, product: null });
  const [selectedProducts, setSelectedProducts] = useState<
    ISaleForm["produtos"]
  >([]);

  const saleForm = useFormContext<ISaleForm>();

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

  function handleAddProduct(): void {
    setProductModalState({ open: true, product: null });
  }

  function handleCloseProductModal(): void {
    setProductModalState({ open: false, product: null });
  }

  function handleEditProduct(product: ISaleForm["produtos"][0]): void {
    setProductModalState({ open: true, product: product });
  }

  function deleteSelectedProducts(): void {
    const products = saleForm.getValues("produtos") ?? [];

    const updatedProducts = products.filter(
      (product) =>
        !selectedProducts.some((selected) => selected.id === product.id)
    );

    const valorVenda = calculateTotalSale(
      updatedProducts,
      saleForm.getValues("desconto")
    );

    saleForm.reset((prevState) => ({
      ...prevState,
      produtos: updatedProducts,
      valorVenda: valorVenda,
    }));

    setSelectedProducts([]);
  }

  return {
    productModalState,
    saleForm,
    selectedProducts,
    handleAddProduct,
    handleCloseProductModal,
    handleEditProduct,
    deleteSelectedProducts,
    setSelectedProducts,
  };
};

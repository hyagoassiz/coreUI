import { Dispatch, SetStateAction, useState } from "react";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { useNotification } from "../../../../../../hooks/useNotification";

interface IUseProductsReturn {
  productModalState: {
    open: boolean;
    product: ISaleApi["produtos"][0] | null;
  };
  saleForm: UseFormReturn<ISaleApi>;
  selectedProducts: ISaleApi["produtos"];
  handleAddProduct(): void;
  handleCloseProductModal(): void;
  handleEditProduct(product: ISaleApi["produtos"][0]): void;
  deleteSelectedProducts(): void;
  setSelectedProducts: Dispatch<SetStateAction<ISaleApi["produtos"]>>;
}

export const useProducts = (): IUseProductsReturn => {
  const [productModalState, setProductModalState] = useState<{
    open: boolean;
    product: ISaleApi["produtos"][0] | null;
  }>({ open: false, product: null });
  const [selectedProducts, setSelectedProducts] = useState<
    ISaleApi["produtos"]
  >([]);

  const saleForm = useFormContext<ISaleApi>();

  const { showSnackBar } = useNotification();

  function calculateTotalSale(
    products: ISaleApi["produtos"],
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

  function handleEditProduct(product: ISaleApi["produtos"][0]): void {
    setProductModalState({ open: true, product: product });
  }

  function deleteSelectedProducts(): void {
    const products = saleForm.getValues("produtos") ?? [];

    const updatedProducts = products.filter(
      (product) =>
        !selectedProducts.some((selected) => selected.id === product.id)
    );

    const valorTotal = calculateTotalSale(
      updatedProducts,
      saleForm.getValues("desconto")
    );

    saleForm.reset((prevState) => ({
      ...prevState,
      produtos: updatedProducts,
      valorTotal,
    }));

    const teste = selectedProducts.length > 0;

    console.log(selectedProducts.length);

    showSnackBar(
      `Produto${teste ? "" : "s"} removido${teste ? "" : "s"} com sucesso!`,
      "success"
    );

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

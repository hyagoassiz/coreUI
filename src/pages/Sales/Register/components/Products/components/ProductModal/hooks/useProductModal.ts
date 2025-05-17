import { useQuery } from "@tanstack/react-query";
import { useForm, useFormContext, UseFormReturn } from "react-hook-form";
import { useQueryGetProducts } from "../../../../../../../../api/Products/hooks/useQueryGetProducts";
import { ISaleForm } from "../../../../../interfaces";
import { useEffect, useId } from "react";

interface IUseProductModalProps {
  onClose(): void;
  product: ISaleForm["produtos"][0] | null;
}

interface IUseProductModalReturn {
  produtos: IProductResponseApi[] | undefined;
  productForm: UseFormReturn<ISaleForm["produtos"][0]>;
  calculateAndSetTotal(quantidade?: number, valorUnitario?: number): void;
  calculateAndSetUnitPrice(totalVenda: number): void;
  onSubmitProductForm(): void;
}

export const useProductModal = ({
  onClose,
  product,
}: IUseProductModalProps): IUseProductModalReturn => {
  const saleForm = useFormContext<ISaleForm>();

  const generatedId = useId();

  const productForm = useForm<ISaleForm["produtos"][0]>({
    defaultValues: {
      quantidade: 1,
      valorUnitario: 0,
      valorTotal: 0,
    },
  });

  const { data: produtos } = useQuery({
    ...useQueryGetProducts({ ativo: true }),
  });

  useEffect(() => {
    if (product) {
      productForm.reset({ ...product });
    }
  }, [product]);

  function calculateAndSetTotal(
    quantidade?: number,
    valorUnitario?: number
  ): void {
    const _quantidade = quantidade ?? productForm.getValues("quantidade") ?? 0;
    const _valorUnitario =
      valorUnitario ?? productForm.getValues("valorUnitario") ?? 0;

    const valorTotal = _quantidade * _valorUnitario;

    productForm.setValue("valorTotal", valorTotal);
  }

  function calculateAndSetUnitPrice(totalVenda: number): void {
    const quantidade = productForm.getValues("quantidade") ?? 0;

    const valorUnitario = totalVenda / quantidade;

    productForm.setValue("valorUnitario", valorUnitario);
  }

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

  function onSubmitProductForm(): void {
    productForm.handleSubmit((data) => {
      const products = saleForm.getValues("produtos") ?? [];

      const newProduct: ISaleForm["produtos"][0] = {
        ...data,
        id: data.id ?? generatedId,
      };

      const productIndex = products.findIndex((p) => p.id === newProduct.id);

      const updatedProducts =
        productIndex !== -1
          ? [
              ...products.slice(0, productIndex),
              newProduct,
              ...products.slice(productIndex + 1),
            ]
          : [...products, newProduct];

      const valorVenda = calculateTotalSale(updatedProducts);

      saleForm.reset((prevState) => ({
        ...prevState,
        produtos: updatedProducts,
        valorVenda,
      }));

      onClose();
    })();
  }

  return {
    produtos,
    productForm,
    calculateAndSetTotal,
    calculateAndSetUnitPrice,
    onSubmitProductForm,
  };
};

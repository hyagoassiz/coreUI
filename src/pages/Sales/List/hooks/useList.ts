import { useEffect, useMemo, useState } from "react";
import useSearchBar from "../../../../hooks/useSearchBar";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  KEY_GET_PRODUCTS,
  useQueryGetProducts,
} from "../../../../api/Products/hooks/useQueryGetProducts";
import { useLoading } from "../../../../hooks/useLoading";
import { useNotification } from "../../../../hooks/useNotification";
import { updateProductStatus } from "../../../../api/Products/updateProductStatus";
import { IUseListReturn } from "../interfaces";

export const useList = (): IUseListReturn => {
  const queryClient = useQueryClient();

  const { showSnackBar } = useNotification();

  const [modalDeactivateProductState, setModalDeactivateProductState] =
    useState<{
      open: boolean;
      product: IProductResponseApi | null;
    }>({
      open: false,
      product: null,
    });
  const [salesModalState, setSalesModalState] = useState<{
    open: boolean;
    product: IProductResponseApi | null;
  }>({
    open: false,
    product: null,
  });

  const { searchBar, textoBusca } = useSearchBar({
    placeHolder: "Pesquisar produto",
    debounceTime: 300,
  });

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const [productListPayload, setProductListPayload] =
    useState<IProductListPayloadApi>({ ativo: true });

  const queryGetProducts = useQuery({
    ...useQueryGetProducts(productListPayload),
  });

  const { setLoading } = useLoading();

  const products = useMemo(() => {
    const list = queryGetProducts.data ?? [];

    if (!textoBusca) return list;

    return list.filter((produto) =>
      produto.nome.toLowerCase().includes(textoBusca.toLowerCase())
    );
  }, [queryGetProducts.data, textoBusca]);

  const filterCount: number = productListPayload.ativo === true ? 0 : 1;

  useEffect(() => {
    setLoading(queryGetProducts.isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryGetProducts.isLoading]);

  async function handleActivateProduct(
    product: IProductResponseApi
  ): Promise<void> {
    try {
      setLoading(true);

      await updateProductStatus({ id: product?.id, ativo: true });

      queryClient.invalidateQueries({ queryKey: [KEY_GET_PRODUCTS] });

      showSnackBar("Produto ativado com sucesso!", "success");
    } catch (error) {
      console.error(error);
      showSnackBar(String(error), "error");
    } finally {
      setLoading(false);
    }
  }

  function handleDeactivateProduct(product: IProductResponseApi): void {
    setModalDeactivateProductState({ open: true, product });
  }

  function handleEditProduct(product: IProductResponseApi): void {
    setSalesModalState({ open: true, product });
  }

  function toggleSalesModal(): void {
    setSalesModalState((prevState) => ({
      open: !prevState.open,
      product: null,
    }));
  }

  function toggleDeactivateProductModal(): void {
    setModalDeactivateProductState((prevState) => ({
      open: !prevState.open,
      product: null,
    }));
  }

  function toggleFilter(): void {
    setIsFilterOpen((prevState) => !prevState);
  }

  return {
    filterCount,
    isFilterOpen,
    modalDeactivateProductState,
    productListPayload,
    products,
    salesModalState,
    searchBar,
    handleActivateProduct,
    handleDeactivateProduct,
    handleEditProduct,
    setProductListPayload,
    toggleSalesModal,
    toggleDeactivateProductModal,
    toggleFilter,
  };
};

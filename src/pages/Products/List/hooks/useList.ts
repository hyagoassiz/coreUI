import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import useSearchBar from "../../../../hooks/useSearchBar";
import { ISeachBar } from "../../../../interfaces/ISearchBar";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  KEY_GET_PRODUCTS,
  useQueryGetProducts,
} from "../../../../api/Products/hooks/useQueryGetProducts";
import { useLoading } from "../../../../hooks/useLoading";
import { useNotification } from "../../../../hooks/useNotification";
import { updateProductStatus } from "../../../../api/Products/updateProductStatus";

interface IUseList {
  filterCount: number;
  isFilterOpen: boolean;
  modalDeactivateProductState: {
    open: boolean;
    product: IProductResponseApi | null;
  };
  modalProductState: { open: boolean; product: IProductResponseApi | null };
  productListPayload: IProductListPayloadApi;
  products: IProductResponseApi[] | undefined;
  searchBar: ISeachBar;
  handleActivateProduct(product: IProductResponseApi): void;
  handleDeactivateProduct(product: IProductResponseApi): void;
  handleEditProduct(product: IProductResponseApi): void;
  setProductListPayload: Dispatch<SetStateAction<IProductListPayloadApi>>;
  toggleCreateProductModal(): void;
  toggleDeactivateProductModal(): void;
  toggleFilter(): void;
}

export const useList = (): IUseList => {
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
  const [modalProductState, setModalProductState] = useState<{
    open: boolean;
    product: IProductResponseApi | null;
  }>({
    open: false,
    product: null,
  });

  const { searchBar } = useSearchBar({
    placeHolder: "Pesquisar produto",
  });

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const [productListPayload, setProductListPayload] =
    useState<IProductListPayloadApi>({ ativo: true });

  const queryGetProducts = useQuery({
    ...useQueryGetProducts(productListPayload),
  });

  const { setLoading } = useLoading();

  const products = useMemo(() => {
    return queryGetProducts.data;
  }, [queryGetProducts.data]);

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
    setModalProductState({ open: true, product });
  }

  function toggleCreateProductModal(): void {
    setModalProductState((prevState) => ({
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
    modalProductState,
    productListPayload,
    products,
    searchBar,
    handleActivateProduct,
    handleDeactivateProduct,
    handleEditProduct,
    setProductListPayload,
    toggleCreateProductModal,
    toggleDeactivateProductModal,
    toggleFilter,
  };
};

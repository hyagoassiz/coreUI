import { Dispatch, SetStateAction } from "react";
import { ISeachBar } from "../../../../interfaces/ISearchBar";

export interface IUseListReturn {
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

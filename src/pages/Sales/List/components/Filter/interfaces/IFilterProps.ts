import { Dispatch, SetStateAction } from "react";

export interface IFilterProps {
  open: boolean;
  productListPayload: IProductListPayloadApi;
  onClose(): void;
  setProductListPayload: Dispatch<SetStateAction<IProductListPayloadApi>>;
}

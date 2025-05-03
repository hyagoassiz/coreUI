import { IFilterProps } from "./IFilterProps";

export type IUseFilterProps = Pick<
  IFilterProps,
  "productListPayload" | "onClose" | "setProductListPayload"
>;

import { UseFormReturn } from "react-hook-form";
import { IProductPayloadApi } from "./IProductPayloadApi";

export interface IUseProductModalReturn {
  productForm: UseFormReturn<IProductPayloadApi>;
  submitProductForm(): void;
}

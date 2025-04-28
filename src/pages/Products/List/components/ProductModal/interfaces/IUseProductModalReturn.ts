import { UseFormReturn } from "react-hook-form";
import { IProductForm } from "./IProductForm";

export interface IUseProductModalReturn {
  productForm: UseFormReturn<IProductForm>;
  submitProductForm(): void;
}

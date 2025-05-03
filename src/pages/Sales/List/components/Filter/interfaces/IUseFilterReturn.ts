import { UseFormReturn } from "react-hook-form";
import { IFilterForm } from "./IFilterForm";

export interface IUseFilterReturn {
  filterForm: UseFormReturn<IFilterForm>;
  handleSubmitFilterForm(): void;
}

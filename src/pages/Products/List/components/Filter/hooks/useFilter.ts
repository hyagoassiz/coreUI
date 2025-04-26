import { useForm, UseFormReturn } from "react-hook-form";
import { IFilter } from "../Filter";
import { IFilterForm } from "../interfaces";

type IUseFilterProps = Pick<
  IFilter,
  "productListPayload" | "onClose" | "setProductListPayload"
>;

interface IUseFilter {
  filterForm: UseFormReturn<IFilterForm>;
  handleSubmitFilterForm(): void;
}

export const useFilter = ({
  productListPayload,
  onClose,
  setProductListPayload,
}: IUseFilterProps): IUseFilter => {
  const filterForm = useForm<IFilterForm>({
    defaultValues: { ativo: !productListPayload.ativo },
  });

  function handleSubmitFilterForm(): void {
    filterForm.handleSubmit(() => {
      setProductListPayload((prevState) => ({ ativo: !prevState.ativo }));

      onClose();
    })();
  }

  return {
    filterForm,
    handleSubmitFilterForm,
  };
};

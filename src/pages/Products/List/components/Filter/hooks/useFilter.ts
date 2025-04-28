import { useForm } from "react-hook-form";
import { IFilterForm, IUseFilterProps, IUseFilterReturn } from "../interfaces";

export const useFilter = ({
  productListPayload,
  onClose,
  setProductListPayload,
}: IUseFilterProps): IUseFilterReturn => {
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

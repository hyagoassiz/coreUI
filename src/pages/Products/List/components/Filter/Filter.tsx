import { Controller } from "react-hook-form";
import { FilterDrawer } from "../../../../../components/FilterDrawer";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useFilter } from "./hooks/useFilter";
import { Dispatch, SetStateAction } from "react";

export interface IFilter {
  open: boolean;
  productListPayload: IProductListPayloadApi;
  onClose(): void;
  setProductListPayload: Dispatch<SetStateAction<IProductListPayloadApi>>;
}

export const Filter: React.FC<IFilter> = ({
  open,
  productListPayload,
  onClose,
  setProductListPayload,
}) => {
  const { filterForm, handleSubmitFilterForm } = useFilter({
    productListPayload,
    onClose,
    setProductListPayload,
  });

  return (
    <FilterDrawer
      open={open}
      closeFilter={onClose}
      applyFilter={handleSubmitFilterForm}
    >
      <Controller
        name="ativo"
        control={filterForm.control}
        defaultValue={false}
        render={({ field }) => (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="info"
                  checked={field.value}
                  onChange={field.onChange}
                />
              }
              label="Exibir somente inativos"
            />
          </FormGroup>
        )}
      />
    </FilterDrawer>
  );
};

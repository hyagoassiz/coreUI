import { Controller } from "react-hook-form";
import {
  Box,
  TextField,
  Button,
  Autocomplete,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useProductModal } from "./hooks/useProductModal";
import { NumericFormat } from "react-number-format";
import { Modal } from "../../../../../../../components/Modal";
import { ISaleForm } from "../../../../interfaces";

export interface IProductModalProps {
  open: boolean;
  product: ISaleForm["produtos"][0] | null;
  onClose(): void;
}

export const ProductModal: React.FC<IProductModalProps> = ({
  open,
  product,
  onClose,
}) => {
  const {
    produtos,
    productForm,
    calculateAndSetTotal,
    calculateAndSetUnitPrice,
    onSubmitProductForm,
  } = useProductModal({ product, onClose });

  return (
    <Modal
      open={open}
      style={{ width: "auto", height: "auto", minWidth: 480 }}
      title={`${product?.id ? "Editar" : "Adicionar"} produto`}
      buttons={
        <>
          <Button variant="text" onClick={onClose}>
            Fechar
          </Button>
          <Button variant="contained" onClick={onSubmitProductForm}>
            Salvar
          </Button>
        </>
      }
    >
      <Box display="flex" flexDirection="column" gap={2} mt={2}>
        <Controller
          name="produto"
          control={productForm.control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <Autocomplete
              disablePortal
              id="produto"
              options={produtos ?? []}
              getOptionLabel={(option) => option.nome || ""}
              onChange={(_, newValue) => {
                field.onChange(newValue);
                const valor = newValue?.valor ?? 0;
                productForm.setValue("valorUnitario", valor);
                calculateAndSetTotal(undefined, valor);
              }}
              value={field.value ?? null}
              noOptionsText="Nenhum resultado encontrado."
              renderOption={(props, option) => (
                <ListItem {...props} key={option.id}>
                  <ListItemText
                    primary={option.nome}
                    secondary={`Código/SKU: ${option.codigo} - Saldo: ${option.quantidade}`}
                    secondaryTypographyProps={{ fontSize: "12px" }}
                  />
                </ListItem>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  color="info"
                  label="Produto"
                  required
                  error={!!fieldState.error}
                />
              )}
              fullWidth
            />
          )}
        />

        <Box display="flex" gap={2}>
          <Controller
            name="quantidade"
            control={productForm.control}
            rules={{ required: true, validate: (value) => value > 0 }}
            render={({ field, formState }) => (
              <NumericFormat
                value={field.value}
                onValueChange={({ floatValue }, { event }) => {
                  if (event?.isTrusted) {
                    field.onChange(floatValue ?? "");
                    calculateAndSetTotal(floatValue);
                  }
                }}
                customInput={TextField}
                label="Quantidade"
                fullWidth
                allowNegative={false}
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={0}
                variant="standard"
                valueIsNumericString
                inputMode="numeric"
                required
                onFocus={(e) => e.target.select()}
                error={!!formState.errors.quantidade}
              />
            )}
          />

          <Controller
            name="valorUnitario"
            control={productForm.control}
            rules={{
              required: true,
              validate: (value) => value > 0,
            }}
            render={({ field, fieldState }) => (
              <NumericFormat
                label="Valor Unitário"
                variant="standard"
                customInput={TextField}
                prefix={"R$ "}
                fullWidth
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                decimalScale={2}
                fixedDecimalScale
                value={field.value ?? null}
                onValueChange={({ floatValue }, { event }) => {
                  if (event?.isTrusted) {
                    const valor = floatValue ?? 0;
                    field.onChange(valor);
                    calculateAndSetTotal(undefined, valor);
                  }
                }}
                decimalSeparator=","
                thousandSeparator="."
                required
                color="info"
                onFocus={(e) => e.target.select()}
                error={!!fieldState.error}
              />
            )}
          />

          <Controller
            name="valorTotal"
            control={productForm.control}
            rules={{
              required: true,
              validate: (value) => value > 0,
            }}
            render={({ field, fieldState }) => (
              <NumericFormat
                label="Total"
                variant="standard"
                customInput={TextField}
                prefix={"R$ "}
                fullWidth
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                decimalScale={2}
                fixedDecimalScale
                value={field.value ?? null}
                onValueChange={({ floatValue }, { event }) => {
                  if (event?.isTrusted) {
                    const valor = floatValue ?? 0;
                    field.onChange(valor);
                    calculateAndSetUnitPrice(valor);
                  }
                }}
                decimalSeparator=","
                thousandSeparator="."
                required
                color="info"
                onFocus={(e) => e.target.select()}
                error={!!fieldState.error}
              />
            )}
          />
        </Box>
      </Box>
    </Modal>
  );
};

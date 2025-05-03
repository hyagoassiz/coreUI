import { Controller } from "react-hook-form";
import {
  Box,
  TextField,
  FormControlLabel,
  Switch,
  Button,
  Autocomplete,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Modal } from "../../../../../components/Modal";
import { ISaleModalProps } from "./interfaces";
import { useSalesModal } from "./hooks/useSalesModal";
import { NumericFormat } from "react-number-format";

export const SalesModal: React.FC<ISaleModalProps> = ({
  open,
  sale,
  onClose,
}) => {
  const {
    produtos,
    saleForm,
    calculateAndSetTotalSale,
    calculateAndSetUnitPrice,
    submitSaleForm,
  } = useSalesModal({
    onClose,
    sale,
  });

  return (
    <Modal
      open={open}
      style={{ width: "auto", height: "auto", minWidth: 480 }}
      title={`${sale?.id ? "Editar" : "Nova"} venda`}
      buttons={
        <>
          <Button variant="text" onClick={onClose}>
            Fechar
          </Button>
          <Button variant="contained" onClick={submitSaleForm}>
            Salvar
          </Button>
        </>
      }
    >
      <Box display="flex" flexDirection="column" gap={2} mt={2}>
        <Controller
          name="data"
          control={saleForm.control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              label="Data"
              type="date"
              variant="standard"
              color="info"
              onChange={field.onChange}
              value={field.value ?? ""}
              inputProps={{
                maxLength: 30,
              }}
              required
              error={!!fieldState.error}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />

        <Controller
          name="produto"
          control={saleForm.control}
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
                saleForm.setValue("valorUnitario", valor);
                calculateAndSetTotalSale(undefined, valor);
              }}
              value={field.value ?? null}
              noOptionsText="Nenhum resultado encontrado."
              renderOption={(props, option) => (
                <ListItem {...props} key={option.id}>
                  <ListItemText
                    primary={option.nome}
                    secondary={`Código/SKU: ${option.codigo}`}
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
            control={saleForm.control}
            rules={{ required: true, validate: (value) => value > 0 }}
            render={({ field, formState }) => (
              <NumericFormat
                value={field.value}
                onValueChange={({ floatValue }) => {
                  field.onChange(floatValue ?? "");
                  calculateAndSetTotalSale(floatValue);
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
            control={saleForm.control}
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
                onValueChange={({ floatValue }) => {
                  const valor = floatValue ?? 0;
                  field.onChange(valor);
                  calculateAndSetTotalSale(undefined, valor);
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
            name="valorVenda"
            control={saleForm.control}
            rules={{
              required: true,
              validate: (value) => value > 0,
            }}
            render={({ field, fieldState }) => (
              <NumericFormat
                label="Total Venda"
                variant="standard"
                customInput={TextField}
                prefix={"R$ "}
                fullWidth
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                decimalScale={2}
                fixedDecimalScale
                value={field.value ?? null}
                onValueChange={({ floatValue }) => {
                  const valor = floatValue ?? 0;
                  field.onChange(valor);
                  calculateAndSetUnitPrice(valor);
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

        <Controller
          name="observacao"
          control={saleForm.control}
          rules={{ required: false }}
          render={({ field, fieldState }) => (
            <TextField
              label="Observação"
              name="observacao"
              type="text"
              variant="standard"
              color="info"
              onChange={field.onChange}
              value={field.value ?? ""}
              inputProps={{
                maxLength: 30,
              }}
              error={!!fieldState.error}
              fullWidth
            />
          )}
        />

        <Controller
          name="pago"
          control={saleForm.control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Switch
                  size="medium"
                  checked={field.value ?? true}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              }
              label={field.value ? "Pago" : "Não Pago"}
            />
          )}
        />
      </Box>
    </Modal>
  );
};

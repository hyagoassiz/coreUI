import { Controller, FormProvider } from "react-hook-form";
import { Box, TextField, Grid, Button, Autocomplete } from "@mui/material";
import { Products } from "./components/Products";
import { NumericFormat } from "react-number-format";
import { useRegister } from "./hooks/useRegister";
import { Frame } from "../../../components/Frame";
import { Header } from "../../../components/Header";

export const Register: React.FC = () => {
  const {
    idEditMode,
    saleForm,
    statusOptions,
    calculateTotalSale,
    handleCancelSaleRegistration,
    submitSaleForm,
  } = useRegister();

  return (
    <FormProvider {...saleForm}>
      <Header
        backButton={handleCancelSaleRegistration}
        title={`Vendas / ${saleForm.getValues("id") ? "Editar" : "Nova"} venda`}
        buttons={
          <>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!idEditMode}
              onClick={submitSaleForm}
            >
              Salvar
            </Button>
          </>
        }
      />
      <Frame padding="32px 16px 16px 16px">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Controller
              name="data"
              control={saleForm.control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  label="Data da Venda"
                  type="date"
                  color="info"
                  fullWidth
                  onChange={field.onChange}
                  value={field.value ?? ""}
                  required
                  error={!!fieldState.error}
                  disabled={!idEditMode}
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <Controller
              name="desconto"
              control={saleForm.control}
              rules={{ required: false }}
              render={({ field, formState }) => (
                <NumericFormat
                  value={field.value}
                  onValueChange={({ floatValue }) => {
                    field.onChange(floatValue ?? "");
                    const totalSale = calculateTotalSale(
                      saleForm.getValues("produtos"),
                      floatValue
                    );
                    saleForm.setValue("valorTotal", totalSale);
                  }}
                  customInput={TextField}
                  label="Desconto"
                  fullWidth
                  allowNegative={false}
                  thousandSeparator="."
                  decimalSeparator=","
                  decimalScale={2}
                  fixedDecimalScale
                  prefix="R$ "
                  valueIsNumericString
                  type="tel"
                  inputMode="numeric"
                  disabled={!idEditMode}
                  error={!!formState.errors.desconto}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <Controller
              name="valorTotal"
              control={saleForm.control}
              rules={{ required: true }}
              render={({ field, formState }) => (
                <NumericFormat
                  value={field.value}
                  onValueChange={({ floatValue }) => {
                    field.onChange(floatValue ?? "");
                  }}
                  customInput={TextField}
                  label="Valor Total"
                  fullWidth
                  allowNegative={true}
                  thousandSeparator="."
                  decimalSeparator=","
                  decimalScale={2}
                  fixedDecimalScale
                  prefix="R$ "
                  valueIsNumericString
                  type="tel"
                  inputMode="numeric"
                  required
                  error={!!formState.errors.valorTotal}
                  disabled={!idEditMode}
                  InputProps={{ readOnly: true }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <Controller
              name="status"
              control={saleForm.control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <Autocomplete
                  disablePortal
                  id="status"
                  options={statusOptions ?? []}
                  getOptionLabel={(option) => option.nome || ""}
                  onChange={(_, newValue) => {
                    field.onChange(newValue);
                  }}
                  value={field.value ?? null}
                  noOptionsText="Nenhum resultado encontrado."
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="info"
                      label="Situação"
                      required
                      error={!!fieldState.error}
                    />
                  )}
                  disabled={!idEditMode}
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>

        <Box mt={4}>
          <Products idEditMode={idEditMode} />
        </Box>

        <Grid spacing={3} mt={1}>
          <Grid item xs={12}>
            <Controller
              name="observacao"
              control={saleForm.control}
              render={({ field, fieldState }) => (
                <TextField
                  label="Observação"
                  color="info"
                  fullWidth
                  onChange={field.onChange}
                  value={field.value ?? ""}
                  disabled={!idEditMode}
                  error={!!fieldState.error}
                />
              )}
            />
          </Grid>
        </Grid>
      </Frame>
    </FormProvider>
  );
};

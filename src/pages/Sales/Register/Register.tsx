import { Controller, FormProvider } from "react-hook-form";
import { PageTitle } from "../../../components/PageTitle";
import { Box, TextField, Grid, Paper, Button } from "@mui/material";
import { Products } from "./components/Products";
import { NumericFormat } from "react-number-format";
import { useRegister } from "./hooks/useRegister";

export const Register: React.FC = () => {
  const { saleForm, calculateTotalSale, handleCancelSaleRegistration } =
    useRegister();

  return (
    <FormProvider {...saleForm}>
      <PageTitle
        title={`${saleForm.getValues("id") ? "Editar" : "Nova"} venda`}
      />

      <Paper sx={{ p: { xs: 2, sm: 4 }, mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Controller
              name="data"
              control={saleForm.control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  label="Data da Venda"
                  type="date"
                  variant="standard"
                  color="info"
                  fullWidth
                  onChange={field.onChange}
                  value={field.value ?? ""}
                  required
                  error={!!fieldState.error}
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Controller
              name="desconto"
              control={saleForm.control}
              rules={{ required: true }}
              render={({ field, formState }) => (
                <NumericFormat
                  value={field.value}
                  onValueChange={({ floatValue }) => {
                    field.onChange(floatValue ?? "");
                    const totalSale = calculateTotalSale(
                      saleForm.getValues("produtos"),
                      floatValue
                    );
                    saleForm.setValue("valorVenda", totalSale);
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
                  variant="standard"
                  valueIsNumericString
                  type="tel"
                  inputMode="numeric"
                  required
                  error={!!formState.errors.desconto}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Controller
              name="valorVenda"
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
                  variant="standard"
                  valueIsNumericString
                  type="tel"
                  inputMode="numeric"
                  required
                  error={!!formState.errors.valorVenda}
                  InputProps={{ readOnly: true }}
                />
              )}
            />
          </Grid>
        </Grid>

        <Box mt={4}>
          <Products />
        </Box>

        <Grid container spacing={3} mt={1}>
          <Grid item xs={12}>
            <Controller
              name="observacao"
              control={saleForm.control}
              render={({ field, fieldState }) => (
                <TextField
                  label="Observação"
                  variant="outlined"
                  color="info"
                  fullWidth
                  onChange={field.onChange}
                  value={field.value ?? ""}
                  error={!!fieldState.error}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="flex-end"
              gap={2}
            >
              <Button
                variant="text"
                color="inherit"
                onClick={handleCancelSaleRegistration}
              >
                Cancelar
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Salvar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </FormProvider>
  );
};

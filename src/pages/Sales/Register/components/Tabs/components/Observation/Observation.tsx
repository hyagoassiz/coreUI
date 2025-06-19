import { Grid, TextField } from "@mui/material";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { ISaleForm } from "../../../../interfaces";

interface IObservationProps {
  isEditMode: boolean;
  saleForm: UseFormReturn<ISaleForm>;
}

export const Observation: React.FC<IObservationProps> = ({
  isEditMode,
  saleForm,
}) => {
  return (
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
              multiline
              rows={4}
              onChange={field.onChange}
              value={field.value ?? ""}
              disabled={!isEditMode}
              error={!!fieldState.error}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

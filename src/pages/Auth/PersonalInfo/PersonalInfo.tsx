import { Button, Grid } from "@mui/material";
import { Controller } from "react-hook-form";
import { StyledDivider, StyledLink, StyledTextField } from "../styles";
import { AuthLayout } from "../../../layouts/AuthLayout";
import { useRegistrarNome } from "./hooks/useRegistrarNome";

export const PersonalInfo: React.FC = () => {
  const {
    registrarNomeForm,
    isPending,
    handleKeyDown,
    handleNavigate,
    onSubmit,
  } = useRegistrarNome();

  return (
    <AuthLayout titleRoute="Digite o seu nome" onKeyDown={handleKeyDown}>
      <Grid item xs={12}>
        <Controller
          name="nome"
          control={registrarNomeForm.control}
          rules={{
            required: true,
          }}
          render={({ field, fieldState }) => (
            <StyledTextField
              label="Nome"
              type="text"
              variant="outlined"
              color="secondary"
              onChange={field.onChange}
              value={field.value ?? ""}
              inputProps={{
                maxLength: 50,
              }}
              sx={{
                "& .MuiFormHelperText-root": {
                  textAlign: "right",
                },
              }}
              required
              disabled={isPending}
              fullWidth
              error={!!fieldState.error}
              helperText={(field.value ?? "")?.length + "/50"}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Button loading={isPending} variant="contained" onClick={onSubmit}>
          SALVAR
        </Button>
      </Grid>
      <Grid item xs={12}>
        <StyledDivider />
      </Grid>
      <Grid item>
        <Grid item xs>
          <StyledLink
            onClick={handleNavigate}
            variant="body2"
            sx={{ cursor: "pointer" }}
          >
            Fazer login
          </StyledLink>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

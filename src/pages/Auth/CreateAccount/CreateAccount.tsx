import { Grid } from "@mui/material";
import { Controller } from "react-hook-form";
import { useCadastro } from "./hooks/useCadastro";
import { StyledDivider, StyledLink, StyledTextField } from "../styles";
import { AuthLayout } from "../../../layouts/AuthLayout";
import { Button } from "../../../components/Button";

export const CreateAccount: React.FC = () => {
  const { cadastroForm, handleNavigate, onSubmit, handleKeyDown, isPending } =
    useCadastro();

  return (
    <AuthLayout titleRoute="Criar Conta" onKeyDown={handleKeyDown}>
      <Grid item xs={12}>
        <Controller
          name="email"
          control={cadastroForm.control}
          rules={{
            required: true,
          }}
          render={({ field, fieldState }) => (
            <StyledTextField
              label="Email"
              type="email"
              variant="outlined"
              color="secondary"
              onChange={field.onChange}
              value={field.value ?? ""}
              inputProps={{
                maxLength: 50,
              }}
              required
              disabled={isPending}
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="password"
          control={cadastroForm.control}
          rules={{ required: true, minLength: 6 }}
          render={({ field, fieldState }) => (
            <StyledTextField
              label="Senha"
              type="password"
              variant="outlined"
              color="secondary"
              onChange={(e) => {
                const cleanedValue = e.target.value.replace(/\s+/g, "");
                field.onChange({
                  target: { name: field.name, value: cleanedValue },
                });
              }}
              value={field.value ?? ""}
              inputProps={{
                maxLength: 30,
              }}
              required
              disabled={isPending}
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="confirmPassword"
          control={cadastroForm.control}
          rules={{ required: true, minLength: 6 }}
          render={({ field, fieldState }) => (
            <StyledTextField
              label="Confirmar senha"
              type="password"
              variant="outlined"
              color="secondary"
              onChange={(e) => {
                const cleanedValue = e.target.value.replace(/\s+/g, "");
                field.onChange({
                  target: { name: field.name, value: cleanedValue },
                });
              }}
              value={field.value ?? ""}
              inputProps={{
                maxLength: 30,
              }}
              required
              disabled={isPending}
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={cadastroForm.handleSubmit(onSubmit)}
          loading={isPending}
        >
          CRIAR CONTA
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
            Já possui conta? Clique aqui
          </StyledLink>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

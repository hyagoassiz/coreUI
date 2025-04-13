import { Button, Grid } from "@mui/material";
import { Controller } from "react-hook-form";
import { useCreateAccount } from "./hooks/useCreateAccount";
import { StyledDivider, StyledLink, StyledTextField } from "../styles";
import { AuthLayout } from "../../../layouts/AuthLayout";

export const CreateAccount: React.FC = () => {
  const {
    createAccountForm,
    isLoading,
    handleKeyDown,
    navigateToLogin,
    submitCreateAccountForm,
  } = useCreateAccount();

  return (
    <AuthLayout titleRoute="Criar Conta" onKeyDown={handleKeyDown}>
      <Grid item xs={12}>
        <Controller
          name="email"
          control={createAccountForm.control}
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
              disabled={isLoading}
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
          control={createAccountForm.control}
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
              disabled={isLoading}
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
          control={createAccountForm.control}
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
              disabled={isLoading}
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          loading={isLoading}
          variant="contained"
          size="large"
          sx={{ width: "100%" }}
          onClick={submitCreateAccountForm}
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
            onClick={navigateToLogin}
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

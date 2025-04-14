import { Checkbox, Grid } from "@mui/material";
import { Controller } from "react-hook-form";
import { useLogin } from "./hooks/useLogin";
import {
  StyledDivider,
  StyledFormControlLabel,
  StyledLink,
  StyledTextField,
} from "../styles";
import { AuthLayout } from "../../../layouts/AuthLayout";
import { LoadingButton } from "@mui/lab";

export const Login: React.FC = () => {
  const {
    isLoading,
    loginForm,
    handleKeyDown,
    onCreateAccount,
    submitLoginForm,
  } = useLogin();

  return (
    <AuthLayout titleRoute="Login" onKeyDown={handleKeyDown}>
      <Grid item xs={12}>
        <Controller
          name="email"
          control={loginForm.control}
          rules={{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
              fullWidth
              disabled={isLoading}
              error={!!fieldState.error}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="password"
          control={loginForm.control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <StyledTextField
              label="Senha"
              type="password"
              variant="outlined"
              color="secondary"
              onChange={field.onChange}
              value={field.value ?? ""}
              inputProps={{
                maxLength: 30,
              }}
              required
              error={!!fieldState.error}
              fullWidth
              disabled={isLoading}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <StyledFormControlLabel
          control={<Checkbox value="remember" color="secondary" />}
          label="Lembrar de mim"
          disabled={isLoading}
        />
      </Grid>

      <Grid item xs={12}>
        <LoadingButton
          loading={isLoading}
          size="large"
          variant="contained"
          onClick={submitLoginForm}
          sx={{ width: "100%" }}
        >
          Entrar
        </LoadingButton>
      </Grid>
      <Grid item xs={12}>
        <StyledDivider />
      </Grid>
      <Grid item>
        <Grid item xs>
          <StyledLink
            onClick={onCreateAccount}
            variant="body2"
            sx={{ cursor: "pointer" }}
          >
            Não possui conta? Clique aqui
          </StyledLink>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

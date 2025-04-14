import { Grid } from "@mui/material";
import { Controller } from "react-hook-form";
import { StyledDivider, StyledLink, StyledTextField } from "../styles";
import { AuthLayout } from "../../../layouts/AuthLayout";
import { usePersonalInfo } from "./hooks/usePersonalInfo";
import { LoadingButton } from "@mui/lab";

export const PersonalInfo: React.FC = () => {
  const {
    personalInfoForm,
    isLoading,
    handleKeyDown,
    handleNavigate,
    submitPersonalInfoForm,
  } = usePersonalInfo();

  return (
    <AuthLayout titleRoute="Digite o seu nome" onKeyDown={handleKeyDown}>
      <Grid item xs={12}>
        <Controller
          name="nome"
          control={personalInfoForm.control}
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
              disabled={isLoading}
              fullWidth
              error={!!fieldState.error}
              helperText={(field.value ?? "")?.length + "/50"}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <LoadingButton
          loading={isLoading}
          variant="contained"
          size="large"
          onClick={submitPersonalInfoForm}
          sx={{ width: "100%" }}
        >
          Confirmar
        </LoadingButton>
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
            Voltar para a tela de login
          </StyledLink>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

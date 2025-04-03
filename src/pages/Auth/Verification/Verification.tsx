import { Box, Grid } from "@mui/material";
import { useVerificacao } from "./hooks/useVerificacao";
import EmailIcon from "@mui/icons-material/Email";
import { StyledDivider, StyledLink, StyledTypography } from "../styles";
import { AuthLayout } from "../../../layouts/AuthLayout";

export const Verification: React.FC = () => {
  const { handleNavigate } = useVerificacao();

  return (
    <AuthLayout titleRoute="E-mail de verificação enviado">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            backgroundColor: "blue",
            borderRadius: "50%",
          }}
        >
          <EmailIcon color="action" sx={{ fontSize: "50px", color: "white" }} />
        </Box>
      </Box>
      <Grid item xs={12}>
        <Box textAlign="justify">
          <StyledTypography>
            {`Foi enviado um email para ${"testedddddddddddddd@teste.com"} fazer a verificação do seu usuário. Se não encontrar na caixa de entrada, procure também na sua caixa de Spam.`}
          </StyledTypography>
        </Box>
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

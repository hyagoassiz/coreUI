import { Box, Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/system";

export const BoxMain = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}));

export const BoxContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  height: "auto",
  minHeight: "400px",
  width: "350px",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)",
  padding: theme.spacing(4),
}));

export const TitleStyled = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 600,
}));

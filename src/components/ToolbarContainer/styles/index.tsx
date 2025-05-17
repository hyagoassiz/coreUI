import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledContainer = styled(Box)(() => ({
  height: "auto",
  padding: 0,
}));

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: theme.spacing(4),
  justifyContent: "space-between",
  marginBottom: theme.spacing(1),
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: theme.spacing(1),
  gap: theme.spacing(2),
}));

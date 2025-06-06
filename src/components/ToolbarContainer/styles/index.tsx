import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledContainer = styled(Box)(() => ({
  height: "auto",
  padding: "0px",
}));

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: theme.spacing(4),
  padding: "0px 16px",
  justifyContent: "space-between",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

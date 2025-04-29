import { Box, styled, Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: theme.spacing(4),
  p: 4,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.primary.contrastText,
}));

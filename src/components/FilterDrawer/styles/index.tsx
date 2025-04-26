import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

export const HeaderBox = styled(Box)(({ theme }) => ({
  height: theme.spacing(7.5),
  backgroundColor: theme.palette.primary.dark,
  display: "flex",
  alignItems: "center",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  width: theme.spacing(45),
  height: "100%",
  backgroundColor: theme.palette.primary.contratext,
}));

export const BoxButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

export const Icon = styled(CloseIcon)(() => ({
  color: "white",
}));

export const BoxChildren = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
}));

export const BoxApply = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
}));
export const StyledTypography = styled(Typography)(() => ({
  color: "white",
}));

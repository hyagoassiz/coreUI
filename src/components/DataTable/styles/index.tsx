import { Box, Stack, styled, TableCell, TableHead } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  height: theme.spacing(5),
}));

export const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  borderBottom: `none`,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

export const StyledTableCellBody = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Footer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  alignItems: "center",
  padding: theme.spacing(1),
}));

export const Icon = styled(InfoIcon)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
}));

import { Box, Chip, Typography } from "@mui/material";
import { JSX, ReactElement } from "react";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ClearIcon from "@mui/icons-material/Clear";

const statusMap: Record<
  IStatusSaleApi["id"],
  { icon: ReactElement; color: string; iconColor: string }
> = {
  CANCELADO: {
    icon: <ClearIcon sx={{ color: "white" }} />,
    color: "#f44336",
    iconColor: "#fff",
  },
  ORCAMENTO: {
    icon: <TextSnippetIcon sx={{ color: "white !important" }} />,
    color: "#ff9800",
    iconColor: "#000",
  },
  VENDA: {
    icon: <DoneAllIcon sx={{ color: "white !important" }} />,
    color: "#4caf50",
    iconColor: "#fff",
  },
};

export function getStatusChip(status: IStatusSaleApi): JSX.Element {
  const { icon, color } = statusMap[status.id];

  return (
    <Chip
      label={
        <Box
          sx={{
            width: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography noWrap fontSize="12px">
            {status.nome}
          </Typography>
          <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
            {icon}
          </Box>
        </Box>
      }
      sx={{
        backgroundColor: color,
        color: "#fff",
        borderRadius: "4px",
        "& .MuiChip-label": {
          width: "100%",
          paddingLeft: "8px",
          paddingRight: "8px",
        },
      }}
    />
  );
}

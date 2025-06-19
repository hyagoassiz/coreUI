import { Box, Chip, Typography } from "@mui/material";
import { JSX, ReactElement } from "react";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ClearIcon from "@mui/icons-material/Clear";

const statusMap: Record<
  IStatusSaleApi["id"],
  { icon: ReactElement; color: string }
> = {
  CANCELADO: {
    icon: <ClearIcon />,
    color: "#9e9e9e",
  },
  ORCAMENTO: {
    icon: <TextSnippetIcon />,
    color: "#ff9800",
  },
  VENDA: {
    icon: <DoneAllIcon />,
    color: "#4caf50",
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
          <Typography noWrap fontSize="14px" sx={{ color }}>
            {status.nome}
          </Typography>
          <Box
            component="span"
            sx={{ display: "flex", alignItems: "center", color }}
          >
            {icon}
          </Box>
        </Box>
      }
      sx={{
        backgroundColor: `${color}22`,
        border: "none",
        borderRadius: "4px",
        boxShadow: "none",
        "& .MuiChip-label": {
          width: "100%",
          paddingLeft: "8px",
          paddingRight: "8px",
          color: color,
        },
      }}
    />
  );
}

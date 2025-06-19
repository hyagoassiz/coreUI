import { ListItemText, MenuItem, Typography } from "@mui/material";
import dayjs from "dayjs";
import { NumericFormat } from "react-number-format";
import { MoreOptions } from "../../../../components/MoreOptions";
import { getStatusChip } from "../../../../utils/getStatusIcon";
interface IMountData {
  sales: ISaleResponseApi[] | undefined;
  handleCancelSale(sale: ISaleResponseApi): void;
  handleEditSale(id: string): void;
}

export function mountData({
  sales,
  handleCancelSale,
  handleEditSale,
}: IMountData): any[] {
  if (sales?.length) {
    return sales.map((sale) => ({
      ...sale,
      data: dayjs(sale.data).format("DD/MM/YYYY"),
      createdAt: (
        <ListItemText
          primary={dayjs(sale.createdAt).format("DD/MM/YYYY")}
          secondary={dayjs(sale.createdAt).format("HH:mm")}
          primaryTypographyProps={{ fontSize: "14px" }}
          secondaryTypographyProps={{ fontSize: "12px" }}
        />
      ),
      valorTotal: (
        <Typography variant="body2">
          <NumericFormat
            value={sale.valorTotal}
            prefix={"R$ "}
            decimalScale={2}
            fixedDecimalScale={true}
            decimalSeparator=","
            thousandSeparator="."
            displayType="text"
          />
        </Typography>
      ),
      status: getStatusChip(sale.status),
      options: (
        <MoreOptions>
          {sale.status.id === "ORCAMENTO" && (
            <MenuItem
              onClick={() => {
                handleEditSale(sale.id);
              }}
            >
              Editar
            </MenuItem>
          )}

          {(sale.status.id === "ORCAMENTO" || sale.status.id === "VENDA") && (
            <MenuItem
              onClick={() => {
                handleCancelSale(sale);
              }}
            >
              Cancelar
            </MenuItem>
          )}

          {(sale.status.id === "VENDA" || sale.status.id === "CANCELADO") && (
            <MenuItem
              onClick={() => {
                handleEditSale(sale.id);
              }}
            >
              Visualizar
            </MenuItem>
          )}
        </MoreOptions>
      ),
    }));
  }
  return [];
}

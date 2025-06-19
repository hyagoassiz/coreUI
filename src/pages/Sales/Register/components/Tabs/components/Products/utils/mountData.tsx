import { MenuItem, Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { MoreOptions } from "../../../../../../../../components/MoreOptions";

interface IMountData {
  products: ISaleRegisterApi["produtos"] | undefined;
  isEditMode: boolean;
  handleEditProduct(product: ISaleRegisterApi["produtos"][0]): void;
}

export function mountData({
  products,
  isEditMode,
  handleEditProduct,
}: IMountData): any[] {
  if (products?.length) {
    return products.map((product) => ({
      ...product,
      nome: product.produto.nome,
      valorUnitario: (
        <Typography variant="body2">
          <NumericFormat
            value={product.valorUnitario}
            prefix={"R$ "}
            decimalScale={2}
            fixedDecimalScale={true}
            decimalSeparator=","
            thousandSeparator={"."}
            displayType="text"
          />
        </Typography>
      ),
      valorTotal: (
        <Typography variant="body2">
          <NumericFormat
            value={product.valorTotal}
            prefix={"R$ "}
            decimalScale={2}
            fixedDecimalScale={true}
            decimalSeparator=","
            thousandSeparator={"."}
            displayType="text"
          />
        </Typography>
      ),
      options: (
        <>
          <MoreOptions disabled={!isEditMode}>
            <MenuItem
              onClick={() => {
                handleEditProduct(product);
              }}
            >
              Editar
            </MenuItem>
          </MoreOptions>
        </>
      ),
    }));
  }
  return [];
}

import { Typography } from "@mui/material";
import { ISaleForm } from "../../../interfaces";
import { NumericFormat } from "react-number-format";
import { MoreOptions } from "../../../../../../components/MoreOptions";

interface IMountData {
  products: ISaleForm["produtos"] | undefined;
  handleEditProduct(product: ISaleForm["produtos"][0]): void;
}

export function mountData({ products, handleEditProduct }: IMountData): any[] {
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
          <MoreOptions
            options={[
              {
                label: "Editar",
                action: () => handleEditProduct(product),
              },
            ]}
          />
        </>
      ),
    }));
  }
  return [];
}

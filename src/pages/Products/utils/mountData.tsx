import { MoreOptions } from "../../../components/MoreOptions";

interface IMountData {
  products: any[];
}

export function mountData({ products }: IMountData): any[] {
  if (products?.length) {
    return products.map((product) => ({
      ...product,
      nome: product.nome,
      options: (
        <>
          <MoreOptions
            options={[
              {
                label: "Clicar",
                action: () => alert("Clicou"),
              },
            ]}
          />
        </>
      ),
    }));
  }
  return [];
}

import { UseQueryOptions } from "@tanstack/react-query";
import { getProducts } from "../getProducts";

export const KEY_GET_PRODUCTS = "key-get-products" as const;

export function useQueryGetProducts(
  payload?: IProductListPayloadApi
): UseQueryOptions<IProductResponseApi[]> {
  const validPayload = payload;

  const products: UseQueryOptions<IProductResponseApi[]> = {
    queryKey: [KEY_GET_PRODUCTS, validPayload],
    queryFn: () => getProducts(payload),
  };

  return products;
}

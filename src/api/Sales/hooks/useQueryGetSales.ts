import { UseQueryOptions } from "@tanstack/react-query";
import { getSales } from "../getSales";

export const KEY_GET_SALES = "key-get-sales" as const;

export function useQueryGetSales(
  payload?: IProductListPayloadApi
): UseQueryOptions<ISaleResponseApi[]> {
  const validPayload = payload;

  const sales: UseQueryOptions<ISaleResponseApi[]> = {
    queryKey: [KEY_GET_SALES, validPayload],
    queryFn: () => getSales(payload),
  };

  return sales;
}

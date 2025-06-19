import { UseQueryOptions } from "@tanstack/react-query";
import { getSaleById } from "../getSaleById";

export const KEY_GET_SALE_BY_ID = "key-get-sale-by-id" as const;

export function useQueryGetSaleById(
  idSale: string
): UseQueryOptions<ISaleRegisterApi> {
  const validPayload = idSale;

  const sale: UseQueryOptions<ISaleRegisterApi> = {
    queryKey: [KEY_GET_SALE_BY_ID, validPayload],
    queryFn: () => getSaleById(idSale),
  };

  return sale;
}

import * as PATHS from "../../../../routes/paths";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useQueryGetSales } from "../../../../api/Sales/hooks/useQueryGetSales";
import { useEffect, useMemo, useState } from "react";
import { useLoading } from "../../../../hooks/useLoading";
import { ICancelSaleStateModal } from "../interfaces";

interface IUseListReturn {
  sales: ISaleResponseApi[] | undefined;
  cancelSaleStateModal: ICancelSaleStateModal;
  handleAddSale(): void;
  handleCancelSale(sale: ISaleResponseApi): void;
  closeCancelSaleModal(): void;
  handleEditSale(id: string): void;
}

export const useList = (): IUseListReturn => {
  const [cancelSaleStateModal, setCancelSaleStateModal] =
    useState<ICancelSaleStateModal>({ open: false, sale: null });

  const navigate = useNavigate();

  const { setLoading } = useLoading();

  const queryGetSales = useQuery({
    ...useQueryGetSales(),
  });

  const sales = useMemo(() => {
    return queryGetSales.data;
  }, [queryGetSales.data]);

  useEffect(() => {
    setLoading(queryGetSales.isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryGetSales.isLoading]);

  function handleAddSale(): void {
    navigate(PATHS.SALES.REGISTER);
  }

  function handleCancelSale(sale: ISaleResponseApi): void {
    setCancelSaleStateModal({ open: true, sale: sale });
  }

  function closeCancelSaleModal(): void {
    setCancelSaleStateModal({ open: false, sale: null });
  }

  function handleEditSale(id: string): void {
    const path = PATHS.SALES.EDIT.replace(":id", id);
    navigate(path);
  }

  return {
    sales,
    cancelSaleStateModal,
    handleAddSale,
    handleCancelSale,
    closeCancelSaleModal,
    handleEditSale,
  };
};

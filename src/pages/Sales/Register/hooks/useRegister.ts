import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as PATHS from "../../../../routes/paths";
import dayjs from "dayjs";
import { postSale } from "../../../../api/Sales/postSale";
import { useLoading } from "../../../../hooks/useLoading";
import { useNotification } from "../../../../hooks/useNotification";
import { useQueryGetSaleById } from "../../../../api/Sales/hooks/useQueryGetSaleById";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { ISaleForm } from "../interfaces";

interface IUseRegisterReturn {
  isEditMode: boolean;
  saleForm: UseFormReturn<ISaleForm>;
  statusOptions: ISaleRegisterApi["status"][];
  calculateTotalSale(
    products: ISaleRegisterApi["produtos"],
    discount?: number
  ): number;
  handleCancelSaleRegistration(): void;
  submitSaleForm(): void;
}
export const useRegister = (): IUseRegisterReturn => {
  const saleForm = useForm<ISaleForm>({
    defaultValues: {
      data: dayjs().format("YYYY-MM-DD"),
      desconto: 0,
      valorTotal: 0,
    },
  });

  const navigate = useNavigate();

  const { setLoading } = useLoading();

  const { showSnackBar } = useNotification();

  const { id } = useParams<{ id: string }>();

  const queryGetSaleById = useQuery({
    ...useQueryGetSaleById(id as string),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const statusOptions: ISaleRegisterApi["status"][] = [
    {
      id: "ORCAMENTO",
      nome: "Orçamento",
    },
    {
      id: "VENDA",
      nome: "Venda",
    },
  ];

  const isEditMode: boolean = useMemo(() => {
    if (!id) {
      return true;
    }

    return queryGetSaleById.data?.status.id === "ORCAMENTO";
  }, [id, queryGetSaleById.data]);

  useEffect(() => {
    saleForm.reset({ ...queryGetSaleById.data });
  }, [queryGetSaleById.data]);

  useEffect(() => {
    setLoading(queryGetSaleById.isFetching);
  }, [queryGetSaleById.isFetching]);

  function calculateTotalSale(
    products: ISaleRegisterApi["produtos"],
    discount?: number
  ): number {
    const _discount = discount ?? 0;

    const total = products.reduce((acc, product) => {
      const valorTotal = product.valorTotal ?? 0;
      return acc + valorTotal;
    }, 0);

    return total - _discount;
  }

  function handleCancelSaleRegistration(): void {
    navigate(PATHS.SALES.LIST);
  }

  function submitSaleForm(): void {
    saleForm.handleSubmit(
      async (data) => {
        try {
          setLoading(true);

          const now = dayjs().toISOString();

          const payload: ISaleRegisterApi = {
            ...data,
            id: data.id ?? undefined,
            desconto: data.desconto ?? 0,
            observacao: data.observacao ?? "",
            createdAt: data.createdAt ?? now,
            updatedAt: data.id ? now : "",
          };

          await postSale(payload);

          showSnackBar(
            `Venda ${payload.id ? "editada" : "adicionada"} com sucesso!`,
            "success"
          );

          handleCancelSaleRegistration();
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
      () => {
        showSnackBar("Existem campos obrigatórios não preenchidos!", "error");
      }
    )();
  }

  return {
    isEditMode,
    saleForm,
    statusOptions,
    calculateTotalSale,
    handleCancelSaleRegistration,
    submitSaleForm,
  };
};

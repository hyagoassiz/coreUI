import { useForm } from "react-hook-form";
import {
  ISaleForm,
  IUseSaleModalProps,
  IUseSaleModalReturn,
} from "../interfaces";
import { useNotification } from "../../../../../../hooks/useNotification";
import { useLoading } from "../../../../../../hooks/useLoading";
import dayjs from "dayjs";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  KEY_GET_PRODUCTS,
  useQueryGetProducts,
} from "../../../../../../api/Products/hooks/useQueryGetProducts";
import { postSale } from "../../../../../../api/Sales/postSale";

export const useSalesModal = ({
  sale,
  onClose,
}: IUseSaleModalProps): IUseSaleModalReturn => {
  const saleForm = useForm<ISaleForm>({
    defaultValues: {
      quantidade: 1,
      valorUnitario: 0,
      valorVenda: 0,
      pago: true,
    },
  });

  const { showSnackBar } = useNotification();

  const { setLoading } = useLoading();

  const queryClient = useQueryClient();

  const { data: produtos } = useQuery({
    ...useQueryGetProducts({ ativo: true }),
  });

  function calculateAndSetTotalSale(
    quantidade?: number,
    valorUnitario?: number
  ): void {
    const _quantidade = quantidade ?? saleForm.getValues("quantidade") ?? 0;
    const _valorUnitario =
      valorUnitario ?? saleForm.getValues("valorUnitario") ?? 0;

    const valorVenda = _quantidade * _valorUnitario;

    saleForm.reset((prevState) => ({ ...prevState, valorVenda }));
  }

  function calculateAndSetUnitPrice(totalVenda: number): void {
    const quantidade = saleForm.getValues("quantidade") ?? 0;

    const valorUnitario = totalVenda / quantidade;

    saleForm.reset((prevState) => ({ ...prevState, valorUnitario }));
  }

  function submitSaleForm(): void {
    saleForm.handleSubmit(
      async (data) => {
        try {
          setLoading(true);

          const now = dayjs().toISOString();

          const payload: ISalePayloadApi = {
            id: data.id ?? undefined,
            nome: data.nome,
            codigo: data.codigo,
            valor: data.valor,
            ativo: data.ativo,
            quantidade: data.quantidade,
            createdAt: data.createdAt ?? now,
            updatedAt: now,
          };

          await postSale(payload);

          showSnackBar(
            `Venda ${payload.id ? "editada" : "adicionada"} com sucesso!`,
            "success"
          );

          onClose();

          queryClient.invalidateQueries({ queryKey: [KEY_GET_PRODUCTS] });
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
    produtos,
    saleForm,
    calculateAndSetTotalSale,
    calculateAndSetUnitPrice,
    submitSaleForm,
  };
};

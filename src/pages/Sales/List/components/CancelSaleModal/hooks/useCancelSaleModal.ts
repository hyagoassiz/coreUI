import { useQueryClient } from "@tanstack/react-query";
import { useLoading } from "../../../../../../hooks/useLoading";
import { useNotification } from "../../../../../../hooks/useNotification";
import { cancelSale } from "../../../../../../api/Sales/cancelSale";
import { KEY_GET_SALES } from "../../../../../../api/Sales/hooks/useQueryGetSales";

interface ICancelSaleModalProps {
  sale: ISaleResponseApi | null;
  onClose(): void;
}

interface ICancelSaleModalReturn {
  isVenda: boolean;
  submit(): void;
}

export const useCancelSaleModal = ({
  sale,
  onClose,
}: ICancelSaleModalProps): ICancelSaleModalReturn => {
  const { showSnackBar } = useNotification();

  const { setLoading } = useLoading();

  const queryClient = useQueryClient();

  const isVenda = sale?.status.id === "VENDA";

  async function submit(): Promise<void> {
    try {
      setLoading(true);

      await cancelSale(sale?.id as string);

      onClose();

      queryClient.invalidateQueries({ queryKey: [KEY_GET_SALES] });

      showSnackBar(
        `${isVenda ? "Venda" : "Orçamento"} cancelad${
          isVenda ? "a" : "o"
        } com sucesso!`,
        "success"
      );
    } catch (error) {
      console.error(error);
      showSnackBar(String(error), "error");
    } finally {
      setLoading(false);
    }
  }

  return {
    isVenda,
    submit,
  };
};

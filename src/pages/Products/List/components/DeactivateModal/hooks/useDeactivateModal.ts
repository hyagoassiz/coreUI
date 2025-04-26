import { useNotification } from "../../../../../../hooks/useNotification";
import { useLoading } from "../../../../../../hooks/useLoading";
import { useQueryClient } from "@tanstack/react-query";
import { updateProductStatus } from "../../../../../../api/Products/updateProductStatus";
import { KEY_GET_PRODUCTS } from "../../../../../../api/Products/hooks/useQueryGetProducts";

interface IUseDeactivateModalProps {
  product: IProductResponseApi;
  onClose(): void;
}

interface IUseDeactivateModal {
  submit(): Promise<void>;
}

export const useDeactivateModal = ({
  product,
  onClose,
}: IUseDeactivateModalProps): IUseDeactivateModal => {
  const { showSnackBar } = useNotification();

  const { setLoading } = useLoading();

  const queryClient = useQueryClient();

  async function submit(): Promise<void> {
    try {
      setLoading(true);

      await updateProductStatus({ id: product?.id, ativo: false });

      onClose();

      queryClient.invalidateQueries({ queryKey: [KEY_GET_PRODUCTS] });

      showSnackBar("Produto inativado com sucesso", "success");
    } catch (error) {
      console.error(error);
      showSnackBar(String(error), "error");
    } finally {
      setLoading(false);
    }
  }

  return {
    submit,
  };
};

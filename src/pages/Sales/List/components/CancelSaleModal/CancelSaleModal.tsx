import { Button, Typography } from "@mui/material";
import { Modal } from "../../../../../components/Modal";
import { useCancelSaleModal } from "./hooks/useCancelSaleModal";

interface ICancelSaleModalProps {
  open: boolean;
  sale: ISaleResponseApi | null;
  onClose(): void;
}

export const CancelSaleModal: React.FC<ICancelSaleModalProps> = ({
  open,
  sale,
  onClose,
}) => {
  const { isVenda, submit } = useCancelSaleModal({ sale, onClose });

  return (
    <Modal
      open={open}
      style={{ width: "300px", height: "auto", minWidth: 480 }}
      title={`Deseja cancelar est${isVenda ? "a" : "e"} ${
        isVenda ? "venda" : "orçamento"
      }?`}
      buttons={
        <>
          <Button variant="text" onClick={onClose}>
            Fechar
          </Button>
          <Button variant="contained" onClick={submit}>
            Sim, Cancelar
          </Button>
        </>
      }
    >
      <Typography color="textPrimary" align="justify">
        Essa ação não poderá ser desfeita.
      </Typography>
    </Modal>
  );
};
